var ha = Object.defineProperty;
var kr = (e) => {
  throw TypeError(e);
};
var pa = (e, t, n) => t in e ? ha(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var B = (e, t, n) => pa(e, typeof t != "symbol" ? t + "" : t, n), Hn = (e, t, n) => t.has(e) || kr("Cannot " + n);
var f = (e, t, n) => (Hn(e, t, "read from private field"), n ? n.call(e) : t.get(e)), O = (e, t, n) => t.has(e) ? kr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), S = (e, t, n, i) => (Hn(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n), M = (e, t, n) => (Hn(e, t, "access private method"), n);
var Jr;
typeof window < "u" && ((Jr = window.__svelte ?? (window.__svelte = {})).v ?? (Jr.v = /* @__PURE__ */ new Set())).add("5");
const va = {
  icon: "",
  "arrow-color": "",
  "icon-rotate-degree": "",
  "header-color": "",
  "button-background": "",
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  "storage-id": "",
  "expander-card-id": "",
  "show-button-users": [],
  "start-expanded-users": [],
  "expander-card-background": "",
  "expander-card-background-expanded": "",
  "expander-card-display": "",
  gap: "",
  padding: "",
  "expanded-gap": "",
  "child-padding": "",
  "child-margin-top": "",
  "overlay-margin": "",
  "title-card-padding": "",
  style: ""
}, _a = [
  "expanded",
  "style"
], ga = { icon: {} }, ma = { text: {} }, ba = { text: { multiline: !0 } }, ya = { boolean: {} }, wa = { object: {} }, Ea = (e) => ({
  number: {
    unit_of_measurement: e
  }
}), $a = (e, t) => ({
  name: e,
  label: t,
  selector: ga
}), H = (e, t) => ({
  name: e,
  label: t,
  selector: ma
}), xa = (e, t) => ({
  name: e,
  label: t,
  selector: ba
}), Lt = (e, t) => ({
  name: e,
  label: t,
  selector: ya
}), Sa = (e, t) => ({
  name: e,
  label: t,
  selector: wa
}), Tr = (e, t, n) => ({
  name: e,
  label: t,
  selector: Ea(n)
}), ka = (e) => ({
  label: e,
  type: "constant"
}), Ta = [
  {
    type: "expandable",
    label: "Expander Card Settings",
    icon: "mdi:arrow-down-bold-box-outline",
    schema: [
      {
        ...H("title", "Title")
      },
      {
        ...$a("icon", "Icon")
      },
      {
        type: "expandable",
        label: "Expander control",
        icon: "mdi:cog-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...Lt("expanded", "Start expanded")
              },
              {
                ...Lt("animation", "Enable animation")
              },
              {
                ...Tr("min-width-expanded", "Min width expanded", "px")
              },
              {
                ...Tr("max-width-expanded", "Max width expanded", "px")
              },
              {
                ...H("storage-id", "Storage ID")
              },
              {
                ...H("expander-card-id", "Expander card ID")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Expander styling",
        icon: "mdi:palette-swatch",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...H("arrow-color", "Icon color")
              },
              {
                ...H("icon-rotate-degree", "Icon rotate degree")
              },
              {
                ...H("header-color", "Header color")
              },
              {
                ...H("button-background", "Button background color")
              },
              {
                ...H("expander-card-background", "Background")
              },
              {
                ...H("expander-card-background-expanded", "Background when expanded")
              },
              {
                ...H("expander-card-display", "Expander card display")
              },
              {
                ...Lt("clear", "Clear border and background")
              },
              {
                ...H("gap", "Gap")
              },
              {
                ...H("padding", "Padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Card styling",
        icon: "mdi:palette-swatch-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                ...H("expanded-gap", "Card gap")
              },
              {
                ...H("child-padding", "Card padding")
              },
              {
                ...H("child-margin-top", "Card margin top")
              },
              {
                ...Lt("clear-children", "Clear card border and background")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Title card",
        icon: "mdi:subtitles-outline",
        schema: [
          {
            ...ka("Use YAML to specify a title card to replace the expander title")
          },
          {
            ...Sa("title-card", "")
          },
          {
            type: "grid",
            schema: [
              {
                ...Lt("title-card-clickable", "Make title card clickable to expand/collapse")
              },
              {
                ...Lt("title-card-button-overlay", "Overlay expand button on title card")
              },
              {
                ...H("overlay-margin", "Overlay margin")
              },
              {
                ...H("title-card-padding", "Title card padding")
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "User settings",
        icon: "mdi:account-multiple-outline",
        schema: [
          {
            type: "grid",
            schema: [
              {
                name: "show-button-users",
                label: "Show button users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              },
              {
                name: "start-expanded-users",
                label: "Start expanded users",
                selector: {
                  select: {
                    multiple: !0,
                    mode: "dropdown",
                    custom: !0,
                    // to allow for unknown users
                    options: ["[[users]]"]
                    // to be populated dynamically
                  }
                }
              }
            ]
          }
        ]
      },
      {
        type: "expandable",
        label: "Advanced styling",
        icon: "mdi:brush-outline",
        schema: [
          {
            ...xa("style", "Custom CSS style")
          }
        ]
      },
      {
        type: "expandable",
        label: "Advanced templates",
        icon: "mdi:code-brackets",
        schema: [
          {
            type: "expandable",
            label: "Variables",
            icon: "mdi:variable",
            schema: [
              {
                name: "variables",
                label: "Variables",
                selector: {
                  object: {
                    label_field: "variable",
                    multiple: !0,
                    fields: {
                      variable: {
                        label: "Variable name",
                        required: !0,
                        selector: { text: {} }
                      },
                      value_template: {
                        label: "Value template",
                        required: !0,
                        selector: { text: { multiline: !0 } }
                      }
                    }
                  }
                }
              }
            ]
          },
          {
            type: "expandable",
            label: "Templates",
            icon: "mdi:code-brackets",
            schema: [
              {
                name: "templates",
                label: "Templates",
                selector: {
                  object: {
                    label_field: "template",
                    multiple: !0,
                    fields: {
                      template: {
                        label: "Config item",
                        required: !0,
                        selector: {
                          select: {
                            mode: "dropdown",
                            custom_value: !0,
                            // to allow for current templates not in dropdown
                            sort: !0,
                            options: ["[[templates]]"]
                            // to be populated dynamically
                          }
                        }
                      },
                      value_template: {
                        label: "Value template",
                        required: !0,
                        selector: { text: { multiline: !0 } }
                      }
                    }
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
], nn = window;
let mn = nn.cardHelpers;
const Ca = new Promise((e) => {
  mn && e(), nn.loadCardHelpers && nn.loadCardHelpers().then((t) => {
    mn = t, nn.cardHelpers = mn, e();
  });
});
async function Aa() {
  const e = document.querySelector("home-assistant"), t = e == null ? void 0 : e.hass;
  return t ? (await t.callWS({ type: "config/auth/list" })).filter((i) => !i.system_generated).map((i) => i.name) : void 0;
}
const Na = async () => {
  const t = await (await Ca.then(() => mn.createCardElement({ type: "vertical-stack", cards: [] }))).constructor.getConfigElement(), n = await Aa();
  return class extends t.constructor {
    constructor() {
      super(), this._computeLabelCallback = (r) => r.label ?? r.name ?? "", this._valueChanged = (r) => {
        const a = r.detail.value, o = Object.entries(va);
        for (const [s, l] of o) {
          if (typeof l == "object" && Array.isArray(l) && Array.isArray(a[s])) {
            JSON.stringify(a[s]) === JSON.stringify(l) && delete a[s];
            continue;
          }
          a[s] === l && delete a[s];
        }
        this._config = a, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
      }, this._users = n;
    }
    // override setConfig to store config only and not assert stack editor config
    // we also upgrade any old config here if needed
    setConfig(r) {
      this._config = r;
    }
    // define _schema getter to return our own schema
    get _schema() {
      const a = JSON.stringify(Ta), o = this._users.map((c) => c.replace(/\\/g, "\\\\").replace(/"/g, '\\"')).join('","');
      let s = a.replace(/\[\[users\]\]/g, o);
      return s = s.replace(
        /\[\[templates\]\]/g,
        // NOSONAR es2019
        _a.filter((c) => {
          var p;
          return !((p = this._config.templates) != null && p.some((v) => v.template === c));
        }).join('","')
      ), JSON.parse(s);
    }
    // _schema setter does nothing as we want to use our own schema
    set _schema(r) {
    }
  };
}, Oa = (async () => {
  for (; customElements.get("home-assistant") === void 0; )
    await new Promise((e) => nn.setTimeout(e, 100));
  if (!customElements.get("expander-card-editor")) {
    const e = await Na();
    customElements.define("expander-card-editor", e);
  }
}), Ra = 1, qa = 2, ja = 16, Pa = 1, La = 2, Yr = "[", Ln = "[!", cr = "]", Tt = {}, G = Symbol(), Fa = "http://www.w3.org/1999/xhtml", Yn = !1;
var Gr = Array.isArray, Ia = Array.prototype.indexOf, Fn = Array.from, Sn = Object.keys, kn = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, za = Object.getOwnPropertyDescriptors, Ma = Object.prototype, Da = Array.prototype, Kr = Object.getPrototypeOf, Cr = Object.isExtensible;
function Ba(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xr() {
  var e, t, n = new Promise((i, r) => {
    e = i, t = r;
  });
  return { promise: n, resolve: e, reject: t };
}
const J = 2, ur = 4, fr = 8, Ua = 1 << 24, Ge = 16, Ke = 32, ht = 64, In = 128, Re = 512, K = 1024, ae = 2048, De = 4096, ce = 8192, Ye = 16384, zn = 32768, Wt = 65536, Ar = 1 << 17, Zr = 1 << 18, Ot = 1 << 19, Va = 1 << 20, lt = 1 << 25, Ct = 32768, Gn = 1 << 21, dr = 1 << 22, ut = 1 << 23, bn = Symbol("$state"), Ha = Symbol("legacy props"), Wa = Symbol(""), It = new class extends Error {
  constructor() {
    super(...arguments);
    B(this, "name", "StaleReactionError");
    B(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), hr = 3, Rt = 8;
function Ja(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ya() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ga(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ka() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Xa(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Za() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Qa() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function es() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ts() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ns() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function rs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function hn(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function is() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let R = !1;
function Ne(e) {
  R = e;
}
let A;
function te(e) {
  if (e === null)
    throw hn(), Tt;
  return A = e;
}
function Jt() {
  return te(/* @__PURE__ */ qe(A));
}
function Ve(e) {
  if (R) {
    if (/* @__PURE__ */ qe(A) !== null)
      throw hn(), Tt;
    A = e;
  }
}
function as(e = 1) {
  if (R) {
    for (var t = e, n = A; t--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ qe(n);
    A = n;
  }
}
function Tn(e = !0) {
  for (var t = 0, n = A; ; ) {
    if (n.nodeType === Rt) {
      var i = (
        /** @type {Comment} */
        n.data
      );
      if (i === cr) {
        if (t === 0) return n;
        t -= 1;
      } else (i === Yr || i === Ln) && (t += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qe(n)
    );
    e && n.remove(), n = r;
  }
}
function Qr(e) {
  if (!e || e.nodeType !== Rt)
    throw hn(), Tt;
  return (
    /** @type {Comment} */
    e.data
  );
}
function ei(e) {
  return e === this.v;
}
function ss(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function ti(e) {
  return !ss(e, this.v);
}
let os = !1, ue = null;
function Yt(e) {
  ue = e;
}
function pr(e, t = !1, n) {
  ue = {
    p: ue,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function vr(e) {
  var t = (
    /** @type {ComponentContext} */
    ue
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var i of n)
      $i(i);
  }
  return e !== void 0 && (t.x = e), t.i = !0, ue = t.p, e ?? /** @type {T} */
  {};
}
function ni() {
  return !0;
}
let gt = [];
function ri() {
  var e = gt;
  gt = [], Ba(e);
}
function Mn(e) {
  if (gt.length === 0 && !rn) {
    var t = gt;
    queueMicrotask(() => {
      t === gt && ri();
    });
  }
  gt.push(e);
}
function ls() {
  for (; gt.length > 0; )
    ri();
}
function ii(e) {
  var t = j;
  if (t === null)
    return C.f |= ut, e;
  if ((t.f & zn) === 0) {
    if ((t.f & In) === 0)
      throw e;
    t.b.error(e);
  } else
    Gt(e, t);
}
function Gt(e, t) {
  for (; t !== null; ) {
    if ((t.f & In) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const _n = /* @__PURE__ */ new Set();
let P = null, U = null, me = [], Dn = null, Kn = !1, rn = !1;
var Bt, Ut, mt, bt, cn, Vt, Ht, W, Xn, en, Zn, ai, si;
const qn = class qn {
  constructor() {
    O(this, W);
    B(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    B(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    B(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    O(this, Bt, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    O(this, Ut, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    O(this, mt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    O(this, bt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    O(this, cn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    O(this, Vt, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    O(this, Ht, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    B(this, "skipped_effects", /* @__PURE__ */ new Set());
    B(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || f(this, bt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var i;
    me = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const r of t)
      M(this, W, Xn).call(this, r, n);
    this.is_fork || M(this, W, ai).call(this), this.is_deferred() ? (M(this, W, en).call(this, n.effects), M(this, W, en).call(this, n.render_effects)) : (P = null, Nr(n.render_effects), Nr(n.effects), (i = f(this, cn)) == null || i.resolve()), U = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    this.previous.has(t) || this.previous.set(t, n), (t.f & ut) === 0 && (this.current.set(t, t.v), U == null || U.set(t, t.v));
  }
  activate() {
    P = this, this.apply();
  }
  deactivate() {
    P === this && (P = null, U = null);
  }
  flush() {
    if (this.activate(), me.length > 0) {
      if (oi(), P !== null && P !== this)
        return;
    } else f(this, mt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of f(this, Ut)) t(this);
    f(this, Ut).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    S(this, mt, f(this, mt) + 1), t && S(this, bt, f(this, bt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    S(this, mt, f(this, mt) - 1), t && S(this, bt, f(this, bt) - 1), this.revive();
  }
  revive() {
    for (const t of f(this, Vt))
      f(this, Ht).delete(t), Z(t, ae), At(t);
    for (const t of f(this, Ht))
      Z(t, De), At(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    f(this, Bt).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    f(this, Ut).add(t);
  }
  settled() {
    return (f(this, cn) ?? S(this, cn, Xr())).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new qn();
      _n.add(P), rn || qn.enqueue(() => {
        P === t && t.flush();
      });
    }
    return P;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Mn(t);
  }
  apply() {
  }
};
Bt = new WeakMap(), Ut = new WeakMap(), mt = new WeakMap(), bt = new WeakMap(), cn = new WeakMap(), Vt = new WeakMap(), Ht = new WeakMap(), W = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
Xn = function(t, n) {
  var p;
  t.f ^= K;
  for (var i = t.first; i !== null; ) {
    var r = i.f, a = (r & (Ke | ht)) !== 0, o = a && (r & K) !== 0, s = o || (r & ce) !== 0 || this.skipped_effects.has(i);
    if ((i.f & In) !== 0 && ((p = i.b) != null && p.is_pending()) && (n = {
      parent: n,
      effect: i,
      effects: [],
      render_effects: []
    }), !s && i.fn !== null) {
      a ? i.f ^= K : (r & ur) !== 0 ? n.effects.push(i) : pn(i) && ((i.f & Ge) !== 0 && f(this, Vt).add(i), ln(i));
      var l = i.first;
      if (l !== null) {
        i = l;
        continue;
      }
    }
    var c = i.parent;
    for (i = i.next; i === null && c !== null; )
      c === n.effect && (M(this, W, en).call(this, n.effects), M(this, W, en).call(this, n.render_effects), n = /** @type {EffectTarget} */
      n.parent), i = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
en = function(t) {
  for (const n of t)
    (n.f & ae) !== 0 ? f(this, Vt).add(n) : (n.f & De) !== 0 && f(this, Ht).add(n), M(this, W, Zn).call(this, n.deps), Z(n, K);
}, /**
 * @param {Value[] | null} deps
 */
Zn = function(t) {
  if (t !== null)
    for (const n of t)
      (n.f & J) === 0 || (n.f & Ct) === 0 || (n.f ^= Ct, M(this, W, Zn).call(
        this,
        /** @type {Derived} */
        n.deps
      ));
}, ai = function() {
  if (f(this, bt) === 0) {
    for (const t of f(this, Bt)) t();
    f(this, Bt).clear();
  }
  f(this, mt) === 0 && M(this, W, si).call(this);
}, si = function() {
  var a;
  if (_n.size > 1) {
    this.previous.clear();
    var t = U, n = !0, i = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const o of _n) {
      if (o === this) {
        n = !1;
        continue;
      }
      const s = [];
      for (const [c, p] of this.current) {
        if (o.current.has(c))
          if (n && p !== o.current.get(c))
            o.current.set(c, p);
          else
            continue;
        s.push(c);
      }
      if (s.length === 0)
        continue;
      const l = [...o.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var r = me;
        me = [];
        const c = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map();
        for (const v of s)
          li(v, l, c, p);
        if (me.length > 0) {
          P = o, o.apply();
          for (const v of me)
            M(a = o, W, Xn).call(a, v, i);
          o.deactivate();
        }
        me = r;
      }
    }
    P = null, U = t;
  }
  this.committed = !0, _n.delete(this);
};
let ze = qn;
function ge(e) {
  var t = rn;
  rn = !0;
  try {
    for (var n; ; ) {
      if (ls(), me.length === 0 && (P == null || P.flush(), me.length === 0))
        return Dn = null, /** @type {T} */
        n;
      oi();
    }
  } finally {
    rn = t;
  }
}
function oi() {
  var e = St;
  Kn = !0;
  var t = null;
  try {
    var n = 0;
    for (An(!0); me.length > 0; ) {
      var i = ze.ensure();
      if (n++ > 1e3) {
        var r, a;
        cs();
      }
      i.process(me), ft.clear();
    }
  } finally {
    Kn = !1, An(e), Dn = null;
  }
}
function cs() {
  try {
    Za();
  } catch (e) {
    Gt(e, Dn);
  }
}
let Se = null;
function Nr(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var i = e[n++];
      if ((i.f & (Ye | ce)) === 0 && pn(i) && (Se = /* @__PURE__ */ new Set(), ln(i), i.deps === null && i.first === null && i.nodes === null && (i.teardown === null && i.ac === null ? Ci(i) : i.fn = null), (Se == null ? void 0 : Se.size) > 0)) {
        ft.clear();
        for (const r of Se) {
          if ((r.f & (Ye | ce)) !== 0) continue;
          const a = [r];
          let o = r.parent;
          for (; o !== null; )
            Se.has(o) && (Se.delete(o), a.push(o)), o = o.parent;
          for (let s = a.length - 1; s >= 0; s--) {
            const l = a[s];
            (l.f & (Ye | ce)) === 0 && ln(l);
          }
        }
        Se.clear();
      }
    }
    Se = null;
  }
}
function li(e, t, n, i) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const r of e.reactions) {
      const a = r.f;
      (a & J) !== 0 ? li(
        /** @type {Derived} */
        r,
        t,
        n,
        i
      ) : (a & (dr | Ge)) !== 0 && (a & ae) === 0 && ci(r, t, i) && (Z(r, ae), At(
        /** @type {Effect} */
        r
      ));
    }
}
function ci(e, t, n) {
  const i = n.get(e);
  if (i !== void 0) return i;
  if (e.deps !== null)
    for (const r of e.deps) {
      if (t.includes(r))
        return !0;
      if ((r.f & J) !== 0 && ci(
        /** @type {Derived} */
        r,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          r,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function At(e) {
  for (var t = Dn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Kn && t === j && (n & Ge) !== 0 && (n & Zr) === 0)
      return;
    if ((n & (ht | Ke)) !== 0) {
      if ((n & K) === 0) return;
      t.f ^= K;
    }
  }
  me.push(t);
}
function us(e) {
  let t = 0, n = Nt(0), i;
  return () => {
    sn() && (d(n), gr(() => (t === 0 && (i = Ce(() => e(() => an(n)))), t += 1, () => {
      Mn(() => {
        t -= 1, t === 0 && (i == null || i(), i = void 0, an(n));
      });
    })));
  };
}
var fs = Wt | Ot | In;
function ds(e, t, n) {
  new hs(e, t, n);
}
var pe, oe, un, Pe, yt, Le, ve, ie, Fe, We, at, wt, st, Et, ot, jn, V, ui, fi, Qn, yn, wn, er;
class hs {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, i) {
    O(this, V);
    /** @type {Boundary | null} */
    B(this, "parent");
    O(this, pe, !1);
    /** @type {TemplateNode} */
    O(this, oe);
    /** @type {TemplateNode | null} */
    O(this, un, R ? A : null);
    /** @type {BoundaryProps} */
    O(this, Pe);
    /** @type {((anchor: Node) => void)} */
    O(this, yt);
    /** @type {Effect} */
    O(this, Le);
    /** @type {Effect | null} */
    O(this, ve, null);
    /** @type {Effect | null} */
    O(this, ie, null);
    /** @type {Effect | null} */
    O(this, Fe, null);
    /** @type {DocumentFragment | null} */
    O(this, We, null);
    /** @type {TemplateNode | null} */
    O(this, at, null);
    O(this, wt, 0);
    O(this, st, 0);
    O(this, Et, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    O(this, ot, null);
    O(this, jn, us(() => (S(this, ot, Nt(f(this, wt))), () => {
      S(this, ot, null);
    })));
    S(this, oe, t), S(this, Pe, n), S(this, yt, i), this.parent = /** @type {Effect} */
    j.b, S(this, pe, !!f(this, Pe).pending), S(this, Le, mr(() => {
      if (j.b = this, R) {
        const a = f(this, un);
        Jt(), /** @type {Comment} */
        a.nodeType === Rt && /** @type {Comment} */
        a.data === Ln ? M(this, V, fi).call(this) : M(this, V, ui).call(this);
      } else {
        var r = M(this, V, Qn).call(this);
        try {
          S(this, ve, be(() => i(r)));
        } catch (a) {
          this.error(a);
        }
        f(this, st) > 0 ? M(this, V, wn).call(this) : S(this, pe, !1);
      }
      return () => {
        var a;
        (a = f(this, at)) == null || a.remove();
      };
    }, fs)), R && S(this, oe, A);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return f(this, pe) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!f(this, Pe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    M(this, V, er).call(this, t), S(this, wt, f(this, wt) + t), f(this, ot) && Kt(f(this, ot), f(this, wt));
  }
  get_effect_pending() {
    return f(this, jn).call(this), d(
      /** @type {Source<number>} */
      f(this, ot)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = f(this, Pe).onerror;
    let i = f(this, Pe).failed;
    if (f(this, Et) || !n && !i)
      throw t;
    f(this, ve) && (ne(f(this, ve)), S(this, ve, null)), f(this, ie) && (ne(f(this, ie)), S(this, ie, null)), f(this, Fe) && (ne(f(this, Fe)), S(this, Fe, null)), R && (te(
      /** @type {TemplateNode} */
      f(this, un)
    ), as(), te(Tn()));
    var r = !1, a = !1;
    const o = () => {
      if (r) {
        is();
        return;
      }
      r = !0, a && rs(), ze.ensure(), S(this, wt, 0), f(this, Fe) !== null && xt(f(this, Fe), () => {
        S(this, Fe, null);
      }), S(this, pe, this.has_pending_snippet()), S(this, ve, M(this, V, yn).call(this, () => (S(this, Et, !1), be(() => f(this, yt).call(this, f(this, oe)))))), f(this, st) > 0 ? M(this, V, wn).call(this) : S(this, pe, !1);
    };
    var s = C;
    try {
      X(null), a = !0, n == null || n(t, o), a = !1;
    } catch (l) {
      Gt(l, f(this, Le) && f(this, Le).parent);
    } finally {
      X(s);
    }
    i && Mn(() => {
      S(this, Fe, M(this, V, yn).call(this, () => {
        ze.ensure(), S(this, Et, !0);
        try {
          return be(() => {
            i(
              f(this, oe),
              () => t,
              () => o
            );
          });
        } catch (l) {
          return Gt(
            l,
            /** @type {Effect} */
            f(this, Le).parent
          ), null;
        } finally {
          S(this, Et, !1);
        }
      }));
    });
  }
}
pe = new WeakMap(), oe = new WeakMap(), un = new WeakMap(), Pe = new WeakMap(), yt = new WeakMap(), Le = new WeakMap(), ve = new WeakMap(), ie = new WeakMap(), Fe = new WeakMap(), We = new WeakMap(), at = new WeakMap(), wt = new WeakMap(), st = new WeakMap(), Et = new WeakMap(), ot = new WeakMap(), jn = new WeakMap(), V = new WeakSet(), ui = function() {
  try {
    S(this, ve, be(() => f(this, yt).call(this, f(this, oe))));
  } catch (t) {
    this.error(t);
  }
  S(this, pe, !1);
}, fi = function() {
  const t = f(this, Pe).pending;
  t && (S(this, ie, be(() => t(f(this, oe)))), ze.enqueue(() => {
    var n = M(this, V, Qn).call(this);
    S(this, ve, M(this, V, yn).call(this, () => (ze.ensure(), be(() => f(this, yt).call(this, n))))), f(this, st) > 0 ? M(this, V, wn).call(this) : (xt(
      /** @type {Effect} */
      f(this, ie),
      () => {
        S(this, ie, null);
      }
    ), S(this, pe, !1));
  }));
}, Qn = function() {
  var t = f(this, oe);
  return f(this, pe) && (S(this, at, ye()), f(this, oe).before(f(this, at)), t = f(this, at)), t;
}, /**
 * @param {() => Effect | null} fn
 */
yn = function(t) {
  var n = j, i = C, r = ue;
  we(f(this, Le)), X(f(this, Le)), Yt(f(this, Le).ctx);
  try {
    return t();
  } catch (a) {
    return ii(a), null;
  } finally {
    we(n), X(i), Yt(r);
  }
}, wn = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    f(this, Pe).pending
  );
  f(this, ve) !== null && (S(this, We, document.createDocumentFragment()), f(this, We).append(
    /** @type {TemplateNode} */
    f(this, at)
  ), Oi(f(this, ve), f(this, We))), f(this, ie) === null && S(this, ie, be(() => t(f(this, oe))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
er = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && M(n = this.parent, V, er).call(n, t);
    return;
  }
  S(this, st, f(this, st) + t), f(this, st) === 0 && (S(this, pe, !1), f(this, ie) && xt(f(this, ie), () => {
    S(this, ie, null);
  }), f(this, We) && (f(this, oe).before(f(this, We)), S(this, We, null)));
};
function ps(e, t, n, i) {
  const r = Bn;
  if (n.length === 0 && e.length === 0) {
    i(t.map(r));
    return;
  }
  var a = P, o = (
    /** @type {Effect} */
    j
  ), s = vs();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ _s(c))).then((c) => {
      s();
      try {
        i([...t.map(r), ...c]);
      } catch (p) {
        (o.f & Ye) === 0 && Gt(p, o);
      }
      a == null || a.deactivate(), Cn();
    }).catch((c) => {
      Gt(c, o);
    });
  }
  e.length > 0 ? Promise.all(e).then(() => {
    s();
    try {
      return l();
    } finally {
      a == null || a.deactivate(), Cn();
    }
  }) : l();
}
function vs() {
  var e = j, t = C, n = ue, i = P;
  return function(a = !0) {
    we(e), X(t), Yt(n), a && (i == null || i.activate());
  };
}
function Cn() {
  we(null), X(null), Yt(null);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
  var t = J | ae, n = C !== null && (C.f & J) !== 0 ? (
    /** @type {Derived} */
    C
  ) : null;
  return j !== null && (j.f |= Ot), {
    ctx: ue,
    deps: null,
    effects: null,
    equals: ei,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      G
    ),
    wv: 0,
    parent: n ?? j,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function _s(e, t) {
  let n = (
    /** @type {Effect | null} */
    j
  );
  n === null && Ya();
  var i = (
    /** @type {Boundary} */
    n.b
  ), r = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = Nt(
    /** @type {V} */
    G
  ), o = !C, s = /* @__PURE__ */ new Map();
  return Ss(() => {
    var m;
    var l = Xr();
    r = l.promise;
    try {
      Promise.resolve(e()).then(l.resolve, l.reject).then(() => {
        c === P && c.committed && c.deactivate(), Cn();
      });
    } catch (y) {
      l.reject(y), Cn();
    }
    var c = (
      /** @type {Batch} */
      P
    );
    if (o) {
      var p = !i.is_pending();
      i.update_pending_count(1), c.increment(p), (m = s.get(c)) == null || m.reject(It), s.delete(c), s.set(c, l);
    }
    const v = (y, b = void 0) => {
      if (c.activate(), b)
        b !== It && (a.f |= ut, Kt(a, b));
      else {
        (a.f & ut) !== 0 && (a.f ^= ut), Kt(a, y);
        for (const [T, u] of s) {
          if (s.delete(T), T === c) break;
          u.reject(It);
        }
      }
      o && (i.update_pending_count(-1), c.decrement(p));
    };
    l.promise.then(v, (y) => v(null, y || "unknown"));
  }), Es(() => {
    for (const l of s.values())
      l.reject(It);
  }), new Promise((l) => {
    function c(p) {
      function v() {
        p === r ? l(a) : c(r);
      }
      p.then(v, v);
    }
    c(r);
  });
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  const t = /* @__PURE__ */ Bn(e);
  return Ri(t), t;
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  const t = /* @__PURE__ */ Bn(e);
  return t.equals = ti, t;
}
function di(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ne(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ms(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & J) === 0)
      return (t.f & Ye) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function _r(e) {
  var t, n = j;
  we(ms(e));
  try {
    e.f &= ~Ct, di(e), t = Li(e);
  } finally {
    we(n);
  }
  return t;
}
function hi(e) {
  var t = _r(e);
  if (e.equals(t) || (P != null && P.is_fork || (e.v = t), e.wv = ji()), !qt)
    if (U !== null)
      (sn() || P != null && P.is_fork) && U.set(e, t);
    else {
      var n = (e.f & Re) === 0 ? De : K;
      Z(e, n);
    }
}
let tr = /* @__PURE__ */ new Set();
const ft = /* @__PURE__ */ new Map();
let pi = !1;
function Nt(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ei,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function I(e, t) {
  const n = Nt(e);
  return Ri(n), n;
}
// @__NO_SIDE_EFFECTS__
function vi(e, t = !1, n = !0) {
  const i = Nt(e);
  return t || (i.equals = ti), i;
}
function k(e, t, n = !1) {
  C !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Me || (C.f & Ar) !== 0) && ni() && (C.f & (J | Ge | dr | Ar)) !== 0 && !(re != null && re.includes(e)) && ns();
  let i = n ? ct(t) : t;
  return Kt(e, i);
}
function Kt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    qt ? ft.set(e, t) : ft.set(e, n), e.v = t;
    var i = ze.ensure();
    i.capture(e, n), (e.f & J) !== 0 && ((e.f & ae) !== 0 && _r(
      /** @type {Derived} */
      e
    ), Z(e, (e.f & Re) !== 0 ? K : De)), e.wv = ji(), _i(e, ae), j !== null && (j.f & K) !== 0 && (j.f & (Ke | ht)) === 0 && (de === null ? Ts([e]) : de.push(e)), !i.is_fork && tr.size > 0 && !pi && bs();
  }
  return t;
}
function bs() {
  pi = !1;
  var e = St;
  An(!0);
  const t = Array.from(tr);
  try {
    for (const n of t)
      (n.f & K) !== 0 && Z(n, De), pn(n) && ln(n);
  } finally {
    An(e);
  }
  tr.clear();
}
function an(e) {
  k(e, e.v + 1);
}
function _i(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, r = 0; r < i; r++) {
      var a = n[r], o = a.f, s = (o & ae) === 0;
      if (s && Z(a, t), (o & J) !== 0) {
        var l = (
          /** @type {Derived} */
          a
        );
        U == null || U.delete(l), (o & Ct) === 0 && (o & Re && (a.f |= Ct), _i(l, De));
      } else s && ((o & Ge) !== 0 && Se !== null && Se.add(
        /** @type {Effect} */
        a
      ), At(
        /** @type {Effect} */
        a
      ));
    }
}
function ct(e) {
  if (typeof e != "object" || e === null || bn in e)
    return e;
  const t = Kr(e);
  if (t !== Ma && t !== Da)
    return e;
  var n = /* @__PURE__ */ new Map(), i = Gr(e), r = /* @__PURE__ */ I(0), a = kt, o = (s) => {
    if (kt === a)
      return s();
    var l = C, c = kt;
    X(null), Pr(a);
    var p = s();
    return X(l), Pr(c), p;
  };
  return i && n.set("length", /* @__PURE__ */ I(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && es();
        var p = n.get(l);
        return p === void 0 ? p = o(() => {
          var v = /* @__PURE__ */ I(c.value);
          return n.set(l, v), v;
        }) : k(p, c.value, !0), !0;
      },
      deleteProperty(s, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in s) {
            const p = o(() => /* @__PURE__ */ I(G));
            n.set(l, p), an(r);
          }
        } else
          k(c, G), an(r);
        return !0;
      },
      get(s, l, c) {
        var y;
        if (l === bn)
          return e;
        var p = n.get(l), v = l in s;
        if (p === void 0 && (!v || (y = Mt(s, l)) != null && y.writable) && (p = o(() => {
          var b = ct(v ? s[l] : G), T = /* @__PURE__ */ I(b);
          return T;
        }), n.set(l, p)), p !== void 0) {
          var m = d(p);
          return m === G ? void 0 : m;
        }
        return Reflect.get(s, l, c);
      },
      getOwnPropertyDescriptor(s, l) {
        var c = Reflect.getOwnPropertyDescriptor(s, l);
        if (c && "value" in c) {
          var p = n.get(l);
          p && (c.value = d(p));
        } else if (c === void 0) {
          var v = n.get(l), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== G)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return c;
      },
      has(s, l) {
        var m;
        if (l === bn)
          return !0;
        var c = n.get(l), p = c !== void 0 && c.v !== G || Reflect.has(s, l);
        if (c !== void 0 || j !== null && (!p || (m = Mt(s, l)) != null && m.writable)) {
          c === void 0 && (c = o(() => {
            var y = p ? ct(s[l]) : G, b = /* @__PURE__ */ I(y);
            return b;
          }), n.set(l, c));
          var v = d(c);
          if (v === G)
            return !1;
        }
        return p;
      },
      set(s, l, c, p) {
        var _;
        var v = n.get(l), m = l in s;
        if (i && l === "length")
          for (var y = c; y < /** @type {Source<number>} */
          v.v; y += 1) {
            var b = n.get(y + "");
            b !== void 0 ? k(b, G) : y in s && (b = o(() => /* @__PURE__ */ I(G)), n.set(y + "", b));
          }
        if (v === void 0)
          (!m || (_ = Mt(s, l)) != null && _.writable) && (v = o(() => /* @__PURE__ */ I(void 0)), k(v, ct(c)), n.set(l, v));
        else {
          m = v.v !== G;
          var T = o(() => ct(c));
          k(v, T);
        }
        var u = Reflect.getOwnPropertyDescriptor(s, l);
        if (u != null && u.set && u.set.call(p, c), !m) {
          if (i && typeof l == "string") {
            var h = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= h.v && k(h, g + 1);
          }
          an(r);
        }
        return !0;
      },
      ownKeys(s) {
        d(r);
        var l = Reflect.ownKeys(s).filter((v) => {
          var m = n.get(v);
          return m === void 0 || m.v !== G;
        });
        for (var [c, p] of n)
          p.v !== G && !(c in s) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ts();
      }
    }
  );
}
var Rr, gi, mi, bi;
function nr() {
  if (Rr === void 0) {
    Rr = window, gi = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    mi = Mt(t, "firstChild").get, bi = Mt(t, "nextSibling").get, Cr(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Cr(n) && (n.__t = void 0);
  }
}
function ye(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Oe(e) {
  return (
    /** @type {TemplateNode | null} */
    mi.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return (
    /** @type {TemplateNode | null} */
    bi.call(e)
  );
}
function et(e, t) {
  if (!R)
    return /* @__PURE__ */ Oe(e);
  var n = /* @__PURE__ */ Oe(A);
  if (n === null)
    n = A.appendChild(ye());
  else if (t && n.nodeType !== hr) {
    var i = ye();
    return n == null || n.before(i), te(i), i;
  }
  return te(n), n;
}
function qr(e, t = !1) {
  if (!R) {
    var n = /* @__PURE__ */ Oe(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ qe(n) : n;
  }
  if (t && (A == null ? void 0 : A.nodeType) !== hr) {
    var i = ye();
    return A == null || A.before(i), te(i), i;
  }
  return A;
}
function vt(e, t = 1, n = !1) {
  let i = R ? A : e;
  for (var r; t--; )
    r = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ qe(i);
  if (!R)
    return i;
  if (n && (i == null ? void 0 : i.nodeType) !== hr) {
    var a = ye();
    return i === null ? r == null || r.after(a) : i.before(a), te(a), a;
  }
  return te(i), i;
}
function yi(e) {
  e.textContent = "";
}
function wi() {
  return !1;
}
function Ei(e) {
  var t = C, n = j;
  X(null), we(null);
  try {
    return e();
  } finally {
    X(t), we(n);
  }
}
function ys(e) {
  j === null && (C === null && Xa(), Ka()), qt && Ga();
}
function ws(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Be(e, t, n) {
  var i = j;
  i !== null && (i.f & ce) !== 0 && (e |= ce);
  var r = {
    ctx: ue,
    deps: null,
    nodes: null,
    f: e | ae | Re,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      ln(r), r.f |= zn;
    } catch (s) {
      throw ne(r), s;
    }
  else t !== null && At(r);
  var a = r;
  if (n && a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
  (a.f & Ot) === 0 && (a = a.first, (e & Ge) !== 0 && (e & Wt) !== 0 && a !== null && (a.f |= Wt)), a !== null && (a.parent = i, i !== null && ws(a, i), C !== null && (C.f & J) !== 0 && (e & ht) === 0)) {
    var o = (
      /** @type {Derived} */
      C
    );
    (o.effects ?? (o.effects = [])).push(a);
  }
  return r;
}
function sn() {
  return C !== null && !Me;
}
function Es(e) {
  const t = Be(fr, null, !1);
  return Z(t, K), t.teardown = e, t;
}
function Dt(e) {
  ys();
  var t = (
    /** @type {Effect} */
    j.f
  ), n = !C && (t & Ke) !== 0 && (t & zn) === 0;
  if (n) {
    var i = (
      /** @type {ComponentContext} */
      ue
    );
    (i.e ?? (i.e = [])).push(e);
  } else
    return $i(e);
}
function $i(e) {
  return Be(ur | Va, e, !1);
}
function $s(e) {
  ze.ensure();
  const t = Be(ht | Ot, e, !0);
  return () => {
    ne(t);
  };
}
function xs(e) {
  ze.ensure();
  const t = Be(ht | Ot, e, !0);
  return (n = {}) => new Promise((i) => {
    n.outro ? xt(t, () => {
      ne(t), i(void 0);
    }) : (ne(t), i(void 0));
  });
}
function xi(e) {
  return Be(ur, e, !1);
}
function Ss(e) {
  return Be(dr | Ot, e, !0);
}
function gr(e, t = 0) {
  return Be(fr | t, e, !0);
}
function He(e, t = [], n = [], i = []) {
  ps(i, t, n, (r) => {
    Be(fr, () => e(...r.map(d)), !0);
  });
}
function mr(e, t = 0) {
  var n = Be(Ge | t, e, !0);
  return n;
}
function be(e) {
  return Be(Ke | Ot, e, !0);
}
function Si(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = qt, i = C;
    jr(!0), X(null);
    try {
      t.call(null);
    } finally {
      jr(n), X(i);
    }
  }
}
function ki(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const r = n.ac;
    r !== null && Ei(() => {
      r.abort(It);
    });
    var i = n.next;
    (n.f & ht) !== 0 ? n.parent = null : ne(n, t), n = i;
  }
}
function ks(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ke) === 0 && ne(t), t = n;
  }
}
function ne(e, t = !0) {
  var n = !1;
  (t || (e.f & Zr) !== 0) && e.nodes !== null && e.nodes.end !== null && (Ti(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), ki(e, t && !n), Nn(e, 0), Z(e, Ye);
  var i = e.nodes && e.nodes.t;
  if (i !== null)
    for (const a of i)
      a.stop();
  Si(e);
  var r = e.parent;
  r !== null && r.first !== null && Ci(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Ti(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ qe(e);
    e.remove(), e = n;
  }
}
function Ci(e) {
  var t = e.parent, n = e.prev, i = e.next;
  n !== null && (n.next = i), i !== null && (i.prev = n), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = n));
}
function xt(e, t, n = !0) {
  var i = [];
  Ai(e, i, !0);
  var r = () => {
    n && ne(e), t && t();
  }, a = i.length;
  if (a > 0) {
    var o = () => --a || r();
    for (var s of i)
      s.out(o);
  } else
    r();
}
function Ai(e, t, n) {
  if ((e.f & ce) === 0) {
    e.f ^= ce;
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const s of i)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next, o = (r.f & Wt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (r.f & Ke) !== 0 && (e.f & Ge) !== 0;
      Ai(r, t, o ? n : !1), r = a;
    }
  }
}
function br(e) {
  Ni(e, !0);
}
function Ni(e, t) {
  if ((e.f & ce) !== 0) {
    e.f ^= ce, (e.f & K) === 0 && (Z(e, ae), At(e));
    for (var n = e.first; n !== null; ) {
      var i = n.next, r = (n.f & Wt) !== 0 || (n.f & Ke) !== 0;
      Ni(n, r ? t : !1), n = i;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const o of a)
        (o.is_global || t) && o.in();
  }
}
function Oi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end; n !== null; ) {
      var r = n === i ? null : /* @__PURE__ */ qe(n);
      t.append(n), n = r;
    }
}
let St = !1;
function An(e) {
  St = e;
}
let qt = !1;
function jr(e) {
  qt = e;
}
let C = null, Me = !1;
function X(e) {
  C = e;
}
let j = null;
function we(e) {
  j = e;
}
let re = null;
function Ri(e) {
  C !== null && (re === null ? re = [e] : re.push(e));
}
let ee = null, se = 0, de = null;
function Ts(e) {
  de = e;
}
let qi = 1, on = 0, kt = on;
function Pr(e) {
  kt = e;
}
function ji() {
  return ++qi;
}
function pn(e) {
  var t = e.f;
  if ((t & ae) !== 0)
    return !0;
  if (t & J && (e.f &= ~Ct), (t & De) !== 0) {
    var n = e.deps;
    if (n !== null)
      for (var i = n.length, r = 0; r < i; r++) {
        var a = n[r];
        if (pn(
          /** @type {Derived} */
          a
        ) && hi(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
      }
    (t & Re) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    U === null && Z(e, K);
  }
  return !1;
}
function Pi(e, t, n = !0) {
  var i = e.reactions;
  if (i !== null && !(re != null && re.includes(e)))
    for (var r = 0; r < i.length; r++) {
      var a = i[r];
      (a.f & J) !== 0 ? Pi(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Z(a, ae) : (a.f & K) !== 0 && Z(a, De), At(
        /** @type {Effect} */
        a
      ));
    }
}
function Li(e) {
  var b;
  var t = ee, n = se, i = de, r = C, a = re, o = ue, s = Me, l = kt, c = e.f;
  ee = /** @type {null | Value[]} */
  null, se = 0, de = null, C = (c & (Ke | ht)) === 0 ? e : null, re = null, Yt(e.ctx), Me = !1, kt = ++on, e.ac !== null && (Ei(() => {
    e.ac.abort(It);
  }), e.ac = null);
  try {
    e.f |= Gn;
    var p = (
      /** @type {Function} */
      e.fn
    ), v = p(), m = e.deps;
    if (ee !== null) {
      var y;
      if (Nn(e, se), m !== null && se > 0)
        for (m.length = se + ee.length, y = 0; y < ee.length; y++)
          m[se + y] = ee[y];
      else
        e.deps = m = ee;
      if (sn() && (e.f & Re) !== 0)
        for (y = se; y < m.length; y++)
          ((b = m[y]).reactions ?? (b.reactions = [])).push(e);
    } else m !== null && se < m.length && (Nn(e, se), m.length = se);
    if (ni() && de !== null && !Me && m !== null && (e.f & (J | De | ae)) === 0)
      for (y = 0; y < /** @type {Source[]} */
      de.length; y++)
        Pi(
          de[y],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (on++, de !== null && (i === null ? i = de : i.push(.../** @type {Source[]} */
    de))), (e.f & ut) !== 0 && (e.f ^= ut), v;
  } catch (T) {
    return ii(T);
  } finally {
    e.f ^= Gn, ee = t, se = n, de = i, C = r, re = a, Yt(o), Me = s, kt = l;
  }
}
function Cs(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var i = Ia.call(n, e);
    if (i !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[i] = n[r], n.pop());
    }
  }
  n === null && (t.f & J) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ee === null || !ee.includes(t)) && (Z(t, De), (t.f & Re) !== 0 && (t.f ^= Re, t.f &= ~Ct), di(
    /** @type {Derived} **/
    t
  ), Nn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Nn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var i = t; i < n.length; i++)
      Cs(e, n[i]);
}
function ln(e) {
  var t = e.f;
  if ((t & Ye) === 0) {
    Z(e, K);
    var n = j, i = St;
    j = e, St = !0;
    try {
      (t & (Ge | Ua)) !== 0 ? ks(e) : ki(e), Si(e);
      var r = Li(e);
      e.teardown = typeof r == "function" ? r : null, e.wv = qi;
      var a;
      Yn && os && (e.f & ae) !== 0 && e.deps;
    } finally {
      St = i, j = n;
    }
  }
}
function d(e) {
  var t = e.f, n = (t & J) !== 0;
  if (C !== null && !Me) {
    var i = j !== null && (j.f & Ye) !== 0;
    if (!i && !(re != null && re.includes(e))) {
      var r = C.deps;
      if ((C.f & Gn) !== 0)
        e.rv < on && (e.rv = on, ee === null && r !== null && r[se] === e ? se++ : ee === null ? ee = [e] : ee.includes(e) || ee.push(e));
      else {
        (C.deps ?? (C.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [C] : a.includes(C) || a.push(C);
      }
    }
  }
  if (qt) {
    if (ft.has(e))
      return ft.get(e);
    if (n) {
      var o = (
        /** @type {Derived} */
        e
      ), s = o.v;
      return ((o.f & K) === 0 && o.reactions !== null || Ii(o)) && (s = _r(o)), ft.set(o, s), s;
    }
  } else n && (!(U != null && U.has(e)) || P != null && P.is_fork && !sn()) && (o = /** @type {Derived} */
  e, pn(o) && hi(o), St && sn() && (o.f & Re) === 0 && Fi(o));
  if (U != null && U.has(e))
    return U.get(e);
  if ((e.f & ut) !== 0)
    throw e.v;
  return e.v;
}
function Fi(e) {
  if (e.deps !== null) {
    e.f ^= Re;
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & J) !== 0 && (t.f & Re) === 0 && Fi(
        /** @type {Derived} */
        t
      );
  }
}
function Ii(e) {
  if (e.v === G) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (ft.has(t) || (t.f & J) !== 0 && Ii(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Ce(e) {
  var t = Me;
  try {
    return Me = !0, e();
  } finally {
    Me = t;
  }
}
const As = -7169;
function Z(e, t) {
  e.f = e.f & As | t;
}
const zi = /* @__PURE__ */ new Set(), rr = /* @__PURE__ */ new Set();
function Ns(e) {
  for (var t = 0; t < e.length; t++)
    zi.add(e[t]);
  for (var n of rr)
    n(e);
}
let Lr = null;
function gn(e) {
  var u;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, r = ((u = e.composedPath) == null ? void 0 : u.call(e)) || [], a = (
    /** @type {null | Element} */
    r[0] || e.target
  );
  Lr = e;
  var o = 0, s = Lr === e && e.__root;
  if (s) {
    var l = r.indexOf(s);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = r.indexOf(t);
    if (c === -1)
      return;
    l <= c && (o = l);
  }
  if (a = /** @type {Element} */
  r[o] || e.target, a !== t) {
    kn(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var p = C, v = j;
    X(null), we(null);
    try {
      for (var m, y = []; a !== null; ) {
        var b = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var T = a["__" + i];
          T != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && T.call(a, e);
        } catch (h) {
          m ? y.push(h) : m = h;
        }
        if (e.cancelBubble || b === t || b === null)
          break;
        a = b;
      }
      if (m) {
        for (let h of y)
          queueMicrotask(() => {
            throw h;
          });
        throw m;
      }
    } finally {
      e.__root = t, delete e.currentTarget, X(p), we(v);
    }
  }
}
function Mi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function dt(e, t) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function Xe(e, t) {
  var n = (t & Pa) !== 0, i = (t & La) !== 0, r, a = !e.startsWith("<!>");
  return () => {
    if (R)
      return dt(A, null), A;
    r === void 0 && (r = Mi(a ? e : "<!>" + e), n || (r = /** @type {TemplateNode} */
    /* @__PURE__ */ Oe(r)));
    var o = (
      /** @type {TemplateNode} */
      i || gi ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oe(o)
      ), l = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      dt(s, l);
    } else
      dt(o, o);
    return o;
  };
}
function Fr() {
  if (R)
    return dt(A, null), A;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = ye();
  return e.append(t, n), dt(t, n), e;
}
function he(e, t) {
  if (R) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      j
    );
    ((n.f & zn) === 0 || n.nodes.end === null) && (n.nodes.end = A), Jt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
const Os = ["touchstart", "touchmove"];
function Rs(e) {
  return Os.includes(e);
}
function qs(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Di(e, t) {
  return Bi(e, t);
}
function js(e, t) {
  nr(), t.intro = t.intro ?? !1;
  const n = t.target, i = R, r = A;
  try {
    for (var a = /* @__PURE__ */ Oe(n); a && (a.nodeType !== Rt || /** @type {Comment} */
    a.data !== Yr); )
      a = /* @__PURE__ */ qe(a);
    if (!a)
      throw Tt;
    Ne(!0), te(
      /** @type {Comment} */
      a
    );
    const o = Bi(e, { ...t, anchor: a });
    return Ne(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((s) => s.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Tt && console.warn("Failed to hydrate: ", o), t.recover === !1 && Qa(), nr(), yi(n), Ne(!1), Di(e, t);
  } finally {
    Ne(i), te(r);
  }
}
const Ft = /* @__PURE__ */ new Map();
function Bi(e, { target: t, anchor: n, props: i = {}, events: r, context: a, intro: o = !0 }) {
  nr();
  var s = /* @__PURE__ */ new Set(), l = (v) => {
    for (var m = 0; m < v.length; m++) {
      var y = v[m];
      if (!s.has(y)) {
        s.add(y);
        var b = Rs(y);
        t.addEventListener(y, gn, { passive: b });
        var T = Ft.get(y);
        T === void 0 ? (document.addEventListener(y, gn, { passive: b }), Ft.set(y, 1)) : Ft.set(y, T + 1);
      }
    }
  };
  l(Fn(zi)), rr.add(l);
  var c = void 0, p = xs(() => {
    var v = n ?? t.appendChild(ye());
    return ds(
      /** @type {TemplateNode} */
      v,
      {
        pending: () => {
        }
      },
      (m) => {
        if (a) {
          pr({});
          var y = (
            /** @type {ComponentContext} */
            ue
          );
          y.c = a;
        }
        if (r && (i.$$events = r), R && dt(
          /** @type {TemplateNode} */
          m,
          null
        ), c = e(m, i) || {}, R && (j.nodes.end = A, A === null || A.nodeType !== Rt || /** @type {Comment} */
        A.data !== cr))
          throw hn(), Tt;
        a && vr();
      }
    ), () => {
      var b;
      for (var m of s) {
        t.removeEventListener(m, gn);
        var y = (
          /** @type {number} */
          Ft.get(m)
        );
        --y === 0 ? (document.removeEventListener(m, gn), Ft.delete(m)) : Ft.set(m, y);
      }
      rr.delete(l), v !== n && ((b = v.parentNode) == null || b.removeChild(v));
    };
  });
  return ir.set(c, p), c;
}
let ir = /* @__PURE__ */ new WeakMap();
function Ps(e, t) {
  const n = ir.get(e);
  return n ? (ir.delete(e), n(t)) : Promise.resolve();
}
var Te, Ie, le, $t, fn, dn, Pn;
class Ls {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    /** @type {TemplateNode} */
    B(this, "anchor");
    /** @type {Map<Batch, Key>} */
    O(this, Te, /* @__PURE__ */ new Map());
    /**
     * Map of keys to effects that are currently rendered in the DOM.
     * These effects are visible and actively part of the document tree.
     * Example:
     * ```
     * {#if condition}
     * 	foo
     * {:else}
     * 	bar
     * {/if}
     * ```
     * Can result in the entries `true->Effect` and `false->Effect`
     * @type {Map<Key, Effect>}
     */
    O(this, Ie, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    O(this, le, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    O(this, $t, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    O(this, fn, !0);
    O(this, dn, () => {
      var t = (
        /** @type {Batch} */
        P
      );
      if (f(this, Te).has(t)) {
        var n = (
          /** @type {Key} */
          f(this, Te).get(t)
        ), i = f(this, Ie).get(n);
        if (i)
          br(i), f(this, $t).delete(n);
        else {
          var r = f(this, le).get(n);
          r && (f(this, Ie).set(n, r.effect), f(this, le).delete(n), r.fragment.lastChild.remove(), this.anchor.before(r.fragment), i = r.effect);
        }
        for (const [a, o] of f(this, Te)) {
          if (f(this, Te).delete(a), a === t)
            break;
          const s = f(this, le).get(o);
          s && (ne(s.effect), f(this, le).delete(o));
        }
        for (const [a, o] of f(this, Ie)) {
          if (a === n || f(this, $t).has(a)) continue;
          const s = () => {
            if (Array.from(f(this, Te).values()).includes(a)) {
              var c = document.createDocumentFragment();
              Oi(o, c), c.append(ye()), f(this, le).set(a, { effect: o, fragment: c });
            } else
              ne(o);
            f(this, $t).delete(a), f(this, Ie).delete(a);
          };
          f(this, fn) || !i ? (f(this, $t).add(a), xt(o, s, !1)) : s();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    O(this, Pn, (t) => {
      f(this, Te).delete(t);
      const n = Array.from(f(this, Te).values());
      for (const [i, r] of f(this, le))
        n.includes(i) || (ne(r.effect), f(this, le).delete(i));
    });
    this.anchor = t, S(this, fn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var i = (
      /** @type {Batch} */
      P
    ), r = wi();
    if (n && !f(this, Ie).has(t) && !f(this, le).has(t))
      if (r) {
        var a = document.createDocumentFragment(), o = ye();
        a.append(o), f(this, le).set(t, {
          effect: be(() => n(o)),
          fragment: a
        });
      } else
        f(this, Ie).set(
          t,
          be(() => n(this.anchor))
        );
    if (f(this, Te).set(i, t), r) {
      for (const [s, l] of f(this, Ie))
        s === t ? i.skipped_effects.delete(l) : i.skipped_effects.add(l);
      for (const [s, l] of f(this, le))
        s === t ? i.skipped_effects.delete(l.effect) : i.skipped_effects.add(l.effect);
      i.oncommit(f(this, dn)), i.ondiscard(f(this, Pn));
    } else
      R && (this.anchor = A), f(this, dn).call(this);
  }
}
Te = new WeakMap(), Ie = new WeakMap(), le = new WeakMap(), $t = new WeakMap(), fn = new WeakMap(), dn = new WeakMap(), Pn = new WeakMap();
function Ui(e) {
  ue === null && Ja(), Dt(() => {
    const t = Ce(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function tt(e, t, n = !1) {
  R && Jt();
  var i = new Ls(e), r = n ? Wt : 0;
  function a(o, s) {
    if (R) {
      const c = Qr(e) === Ln;
      if (o === c) {
        var l = Tn();
        te(l), i.anchor = l, Ne(!1), i.ensure(o, s), Ne(!0);
        return;
      }
    }
    i.ensure(o, s);
  }
  mr(() => {
    var o = !1;
    t((s, l = !0) => {
      o = !0, a(l, s);
    }), o || a(!1, null);
  }, r);
}
function Fs(e, t, n) {
  for (var i = [], r = t.length, a, o = t.length, s = 0; s < r; s++) {
    let v = t[s];
    xt(
      v,
      () => {
        if (a) {
          if (a.pending.delete(v), a.done.add(v), a.pending.size === 0) {
            var m = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            ar(Fn(a.done)), m.delete(a), m.size === 0 && (e.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var l = i.length === 0 && n !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), p = (
        /** @type {Element} */
        c.parentNode
      );
      yi(p), p.append(c), e.items.clear();
    }
    ar(t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function ar(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    ne(e[n], t);
}
var Ir;
function Is(e, t, n, i, r, a = null) {
  var o = e, s = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    o = R ? te(/* @__PURE__ */ Oe(l)) : l.appendChild(ye());
  }
  R && Jt();
  var c = null, p = /* @__PURE__ */ gs(() => {
    var u = n();
    return Gr(u) ? u : u == null ? [] : Fn(u);
  }), v, m = !0;
  function y() {
    T.fallback = c, zs(T, v, o, t, i), c !== null && (v.length === 0 ? (c.f & lt) === 0 ? br(c) : (c.f ^= lt, tn(c, null, o)) : xt(c, () => {
      c = null;
    }));
  }
  var b = mr(() => {
    v = /** @type {V[]} */
    d(p);
    var u = v.length;
    let h = !1;
    if (R) {
      var g = Qr(o) === Ln;
      g !== (u === 0) && (o = Tn(), te(o), Ne(!1), h = !0);
    }
    for (var _ = /* @__PURE__ */ new Set(), $ = (
      /** @type {Batch} */
      P
    ), L = wi(), N = 0; N < u; N += 1) {
      R && A.nodeType === Rt && /** @type {Comment} */
      A.data === cr && (o = /** @type {Comment} */
      A, h = !0, Ne(!1));
      var q = v[N], z = i(q, N), F = m ? null : s.get(z);
      F ? (F.v && Kt(F.v, q), F.i && Kt(F.i, N), L && $.skipped_effects.delete(F.e)) : (F = Ms(
        s,
        m ? o : Ir ?? (Ir = ye()),
        q,
        z,
        N,
        r,
        t,
        n
      ), m || (F.e.f |= lt), s.set(z, F)), _.add(z);
    }
    if (u === 0 && a && !c && (m ? c = be(() => a(o)) : (c = be(() => a(Ir ?? (Ir = ye()))), c.f |= lt)), R && u > 0 && te(Tn()), !m)
      if (L) {
        for (const [vn, Ue] of s)
          _.has(vn) || $.skipped_effects.add(Ue.e);
        $.oncommit(y), $.ondiscard(() => {
        });
      } else
        y();
    h && Ne(!0), d(p);
  }), T = { effect: b, items: s, outrogroups: null, fallback: c };
  m = !1, R && (o = A);
}
function zs(e, t, n, i, r) {
  var z;
  var a = t.length, o = e.items, s = e.effect.first, l, c = null, p = [], v = [], m, y, b, T;
  for (T = 0; T < a; T += 1) {
    if (m = t[T], y = r(m, T), b = /** @type {EachItem} */
    o.get(y).e, e.outrogroups !== null)
      for (const F of e.outrogroups)
        F.pending.delete(b), F.done.delete(b);
    if ((b.f & lt) !== 0)
      if (b.f ^= lt, b === s)
        tn(b, null, n);
      else {
        var u = c ? c.next : s;
        b === e.effect.last && (e.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), Ze(e, c, b), Ze(e, b, u), tn(b, u, n), c = b, p = [], v = [], s = c.next;
        continue;
      }
    if ((b.f & ce) !== 0 && br(b), b !== s) {
      if (l !== void 0 && l.has(b)) {
        if (p.length < v.length) {
          var h = v[0], g;
          c = h.prev;
          var _ = p[0], $ = p[p.length - 1];
          for (g = 0; g < p.length; g += 1)
            tn(p[g], h, n);
          for (g = 0; g < v.length; g += 1)
            l.delete(v[g]);
          Ze(e, _.prev, $.next), Ze(e, c, _), Ze(e, $, h), s = h, c = $, T -= 1, p = [], v = [];
        } else
          l.delete(b), tn(b, s, n), Ze(e, b.prev, b.next), Ze(e, b, c === null ? e.effect.first : c.next), Ze(e, c, b), c = b;
        continue;
      }
      for (p = [], v = []; s !== null && s !== b; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(s), v.push(s), s = s.next;
      if (s === null)
        continue;
    }
    (b.f & lt) === 0 && p.push(b), c = b, s = b.next;
  }
  if (e.outrogroups !== null) {
    for (const F of e.outrogroups)
      F.pending.size === 0 && (ar(Fn(F.done)), (z = e.outrogroups) == null || z.delete(F));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (s !== null || l !== void 0) {
    var L = [];
    if (l !== void 0)
      for (b of l)
        (b.f & ce) === 0 && L.push(b);
    for (; s !== null; )
      (s.f & ce) === 0 && s !== e.fallback && L.push(s), s = s.next;
    var N = L.length;
    if (N > 0) {
      var q = a === 0 ? n : null;
      Fs(e, L, q);
    }
  }
}
function Ms(e, t, n, i, r, a, o, s) {
  var l = (o & Ra) !== 0 ? (o & ja) === 0 ? /* @__PURE__ */ vi(n, !1, !1) : Nt(n) : null, c = (o & qa) !== 0 ? Nt(r) : null;
  return {
    v: l,
    i: c,
    e: be(() => (a(t, l ?? n, c ?? r, s), () => {
      e.delete(i);
    }))
  };
}
function tn(e, t, n) {
  if (e.nodes)
    for (var i = e.nodes.start, r = e.nodes.end, a = t && (t.f & lt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; i !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(i)
      );
      if (a.before(i), i === r)
        return;
      i = o;
    }
}
function Ze(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Ds(e, t, n = !1, i = !1, r = !1) {
  var a = e, o = "";
  He(() => {
    var s = (
      /** @type {Effect} */
      j
    );
    if (o === (o = t() ?? "")) {
      R && Jt();
      return;
    }
    if (s.nodes !== null && (Ti(
      s.nodes.start,
      /** @type {TemplateNode} */
      s.nodes.end
    ), s.nodes = null), o !== "") {
      if (R) {
        A.data;
        for (var l = Jt(), c = l; l !== null && (l.nodeType !== Rt || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ qe(l);
        if (l === null)
          throw hn(), Tt;
        dt(A, c), a = te(l);
        return;
      }
      var p = o + "";
      n ? p = `<svg>${p}</svg>` : i && (p = `<math>${p}</math>`);
      var v = Mi(p);
      if ((n || i) && (v = /** @type {Element} */
      /* @__PURE__ */ Oe(v)), dt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Oe(v),
        /** @type {TemplateNode} */
        v.lastChild
      ), n || i)
        for (; /* @__PURE__ */ Oe(v); )
          a.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Oe(v)
          );
      else
        a.before(v);
    }
  });
}
function Vi(e, t) {
  xi(() => {
    var n = e.getRootNode(), i = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!i.querySelector("#" + t.hash)) {
      const r = document.createElement("style");
      r.id = t.hash, r.textContent = t.code, i.appendChild(r);
    }
  });
}
function Bs(e, t, n) {
  var i = e == null ? "" : "" + e;
  return t && (i = i ? i + " " + t : t), i === "" ? null : i;
}
function Us(e, t) {
  return e == null ? null : String(e);
}
function xe(e, t, n, i, r, a) {
  var o = e.__className;
  if (R || o !== n || o === void 0) {
    var s = Bs(n, i);
    (!R || s !== e.getAttribute("class")) && (s == null ? e.removeAttribute("class") : e.className = s), e.__className = n;
  }
  return a;
}
function nt(e, t, n, i) {
  var r = e.__style;
  if (R || r !== t) {
    var a = Us(t);
    (!R || a !== e.getAttribute("style")) && (a == null ? e.removeAttribute("style") : e.style.cssText = a), e.__style = t;
  }
  return i;
}
const Vs = Symbol("is custom element"), Hs = Symbol("is html");
function Hi(e, t, n, i) {
  var r = Ws(e);
  R && (r[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || r[t] !== (r[t] = n) && (t === "loading" && (e[Wa] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Wi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function zr(e, t, n) {
  var i = C, r = j;
  let a = R;
  R && Ne(!1), X(null), we(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (sr.has(e.getAttribute("is") || e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.getAttribute("is") || e.tagName.toLowerCase()) ? Wi(e).includes(t) : n && typeof n == "object") ? e[t] = n : Hi(e, t, n == null ? n : String(n));
  } finally {
    X(i), we(r), a && Ne(!0);
  }
}
function Ws(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Vs]: e.nodeName.includes("-"),
      [Hs]: e.namespaceURI === Fa
    })
  );
}
var sr = /* @__PURE__ */ new Map();
function Wi(e) {
  var t = e.getAttribute("is") || e.nodeName, n = sr.get(t);
  if (n) return n;
  sr.set(t, n = []);
  for (var i, r = e, a = Element.prototype; a !== r; ) {
    i = za(r);
    for (var o in i)
      i[o].set && n.push(o);
    r = Kr(r);
  }
  return n;
}
function Mr(e, t) {
  return e === t || (e == null ? void 0 : e[bn]) === t;
}
function rt(e = {}, t, n, i) {
  return xi(() => {
    var r, a;
    return gr(() => {
      r = a, a = [], Ce(() => {
        e !== n(...a) && (t(e, ...a), r && Mr(n(...r), e) && t(null, ...r));
      });
    }), () => {
      Mn(() => {
        a && Mr(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function ke(e, t, n, i) {
  var r = (
    /** @type {V} */
    i
  ), a = !0, o = () => (a && (a = !1, r = /** @type {V} */
  i), r), s;
  s = /** @type {V} */
  e[t], s === void 0 && i !== void 0 && (s = o());
  var l;
  l = () => {
    var m = (
      /** @type {V} */
      e[t]
    );
    return m === void 0 ? o() : (a = !0, m);
  };
  var c = !1, p = /* @__PURE__ */ Bn(() => (c = !1, l())), v = (
    /** @type {Effect} */
    j
  );
  return (
    /** @type {() => V} */
    (function(m, y) {
      if (arguments.length > 0) {
        const b = y ? d(p) : m;
        return k(p, b), c = !0, r !== void 0 && (r = b), m;
      }
      return qt && c || (v.f & Ye) !== 0 ? p.v : d(p);
    })
  );
}
function Js(e) {
  return new Ys(e);
}
var Je, _e;
class Ys {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    O(this, Je);
    /** @type {Record<string, any>} */
    O(this, _e);
    var a;
    var n = /* @__PURE__ */ new Map(), i = (o, s) => {
      var l = /* @__PURE__ */ vi(s, !1, !1);
      return n.set(o, l), l;
    };
    const r = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, s) {
          return d(n.get(s) ?? i(s, Reflect.get(o, s)));
        },
        has(o, s) {
          return s === Ha ? !0 : (d(n.get(s) ?? i(s, Reflect.get(o, s))), Reflect.has(o, s));
        },
        set(o, s, l) {
          return k(n.get(s) ?? i(s, l), l), Reflect.set(o, s, l);
        }
      }
    );
    S(this, _e, (t.hydrate ? js : Di)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: r,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((a = t == null ? void 0 : t.props) != null && a.$$host) || t.sync === !1) && ge(), S(this, Je, r.$$events);
    for (const o of Object.keys(f(this, _e)))
      o === "$set" || o === "$destroy" || o === "$on" || kn(this, o, {
        get() {
          return f(this, _e)[o];
        },
        /** @param {any} value */
        set(s) {
          f(this, _e)[o] = s;
        },
        enumerable: !0
      });
    f(this, _e).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(r, o);
    }, f(this, _e).$destroy = () => {
      Ps(f(this, _e));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    f(this, _e).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    f(this, Je)[t] = f(this, Je)[t] || [];
    const i = (...r) => n.call(this, ...r);
    return f(this, Je)[t].push(i), () => {
      f(this, Je)[t] = f(this, Je)[t].filter(
        /** @param {any} fn */
        (r) => r !== i
      );
    };
  }
  $destroy() {
    f(this, _e).$destroy();
  }
}
Je = new WeakMap(), _e = new WeakMap();
let Ji;
typeof HTMLElement == "function" && (Ji = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, i) {
    super();
    /** The Svelte component constructor */
    B(this, "$$ctor");
    /** Slots */
    B(this, "$$s");
    /** @type {any} The Svelte component instance */
    B(this, "$$c");
    /** Whether or not the custom element is connected */
    B(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    B(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    B(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    B(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    B(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    B(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    B(this, "$$me");
    this.$$ctor = t, this.$$s = n, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, i) {
    if (super.removeEventListener(t, n, i), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(r) {
        return (a) => {
          const o = document.createElement("slot");
          r !== "default" && (o.name = r), he(a, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, i = Gs(this);
      for (const r of this.$$s)
        r in i && (r === "default" && !this.$$d.children ? (this.$$d.children = t(r), n.default = !0) : n[r] = t(r));
      for (const r of this.attributes) {
        const a = this.$$g_p(r.name);
        a in this.$$d || (this.$$d[a] = En(a, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = Js({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = $s(() => {
        gr(() => {
          var r;
          this.$$r = !0;
          for (const a of Sn(this.$$c)) {
            if (!((r = this.$$p_d[a]) != null && r.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = En(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const a of this.$$l[r]) {
          const o = this.$$c.$on(r, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, i) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = En(t, i, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return Sn(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function En(e, t, n, i) {
  var a;
  const r = (a = n[e]) == null ? void 0 : a.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !n[e])
    return t;
  if (i === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Gs(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function Yi(e, t, n, i, r, a) {
  let o = class extends Ji {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Sn(t).map(
        (s) => (t[s].attribute || s).toLowerCase()
      );
    }
  };
  return Sn(t).forEach((s) => {
    kn(o.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(l) {
        var v;
        l = En(s, l, t), this.$$d[s] = l;
        var c = this.$$c;
        if (c) {
          var p = (v = Mt(c, s)) == null ? void 0 : v.get;
          p ? c[s] = l : c.$set({ [s]: l });
        }
      }
    });
  }), i.forEach((s) => {
    kn(o.prototype, s, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[s];
      }
    });
  }), a && (o = a(o)), e.element = /** @type {any} */
  o, o;
}
class yr extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(t, ...n) {
    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, yr), this.name = "TimeoutError", this.timeout = t, this.message = `Timed out in ${t} ms.`;
  }
}
const Ks = (e, t) => {
  const n = new Promise((i, r) => {
    setTimeout(() => {
      r(new yr(e));
    }, e);
  });
  return Promise.race([t, n]);
}, Gi = (e) => {
  if (typeof e.getCardSize == "function")
    try {
      return Ks(500, e.getCardSize()).catch(
        () => 1
      );
    } catch {
      return 1;
    }
  return customElements.get(e.localName) ? 1 : customElements.whenDefined(e.localName).then(() => Gi(e));
};
var Xs = /* @__PURE__ */ Xe('<span class="loading svelte-lv9s7p">Loading...</span>'), Zs = /* @__PURE__ */ Xe("<div><!></div>");
const Qs = {
  hash: "svelte-lv9s7p",
  code: `.loading.svelte-lv9s7p {padding:1em;display:block;}.animation.svelte-lv9s7p {hui-card {display:flex;flex-direction:column;}}.outer-container.animation.svelte-lv9s7p {transition:margin-bottom 0.35s ease;}.outer-container.animation.open.svelte-lv9s7p,
  .outer-container.animation.opening.svelte-lv9s7p {margin-bottom:inherit;}.outer-container.animation.close.svelte-lv9s7p,
  .outer-container.animation.closing.svelte-lv9s7p {margin-bottom:var(--expander-animation-height, -100%);}.outer-container.animation.opening.svelte-lv9s7p {
    animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;
    -webkit-animation: svelte-lv9s7p-fadeInOpacity 0.5s forwards ease;}.outer-container.animation.closing.svelte-lv9s7p {
      animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;
      -webkit-animation: svelte-lv9s7p-fadeOutOpacity 0.5s forwards ease;}.outer-container.svelte-lv9s7p > hui-card {margin-top:var(--child-card-margin-top, 0px);}
  @keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeInOpacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
    @keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }
  @-webkit-keyframes svelte-lv9s7p-fadeOutOpacity {
      0% {
          opacity: 1;
      }
      100% {
          opacity: 0;
      }
  }`
};
function or(e, t) {
  pr(t, !0), Vi(e, Qs);
  const n = ke(t, "config"), i = ke(t, "hass"), r = ke(t, "preview"), a = ke(t, "marginTop", 7, "0px"), o = ke(t, "open"), s = ke(t, "animation", 7, !0), l = ke(t, "animationState"), c = ke(t, "clearCardCss", 7, !1);
  let p = null, v = /* @__PURE__ */ I(null), m = /* @__PURE__ */ I(!0), y = /* @__PURE__ */ I(0);
  const b = Ce(() => JSON.parse(JSON.stringify(n())));
  Dt(() => {
    d(v) && (d(v).hass = i());
  }), Dt(() => {
    d(v) && r() !== void 0 && (d(v).preview = r());
  }), Dt(() => {
    var _;
    d(v) && (b.disabled = !o(), (_ = d(v)._element) == null || _.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: o() }, bubbles: !0, composed: !1 })));
  }), Ui(async () => {
    const _ = document.createElement("hui-card");
    _.hass = i(), _.preview = r(), b.disabled = !o(), _.config = b, _.load(), p == null || p.appendChild(_), k(v, _, !0), k(m, !1), d(v).addEventListener(
      "ll-upgrade",
      ($) => {
        var L;
        $.stopPropagation(), (L = d(v)) != null && L._element && i() && (d(v)._element.hass = i());
      },
      { capture: !0 }
    ), c() && (_.style.setProperty("--ha-card-background", "transparent"), _.style.setProperty("--ha-card-box-shadow", "none"), _.style.setProperty("--ha-card-border-color", "transparent"), _.style.setProperty("--ha-card-border-width", "0px"), _.style.setProperty("--ha-card-border-radius", "0px"), _.style.setProperty("--ha-card-backdrop-filter", "none")), s() && (k(y, await Gi(_) * 56), p && k(y, d(y) + (window.getComputedStyle(p).marginTop ? parseFloat(window.getComputedStyle(p).marginTop) : 0)), new ResizeObserver((L) => {
      for (const N of L)
        if (N.contentBoxSize) {
          const q = Array.isArray(N.contentBoxSize) ? N.contentBoxSize[0] : N.contentBoxSize;
          q.blockSize && (k(y, q.blockSize, !0), d(v) && k(y, d(y) + (window.getComputedStyle(d(v)).marginTop ? parseFloat(window.getComputedStyle(d(v)).marginTop) : 0)));
        } else N.contentRect && (k(y, N.contentRect.height, !0), d(v) && k(y, d(y) + (window.getComputedStyle(d(v)).marginTop ? parseFloat(window.getComputedStyle(d(v)).marginTop) : 0)));
    }).observe(_));
  });
  var T = {
    get config() {
      return n();
    },
    set config(_) {
      n(_), ge();
    },
    get hass() {
      return i();
    },
    set hass(_) {
      i(_), ge();
    },
    get preview() {
      return r();
    },
    set preview(_) {
      r(_), ge();
    },
    get marginTop() {
      return a();
    },
    set marginTop(_ = "0px") {
      a(_), ge();
    },
    get open() {
      return o();
    },
    set open(_) {
      o(_), ge();
    },
    get animation() {
      return s();
    },
    set animation(_ = !0) {
      s(_), ge();
    },
    get animationState() {
      return l();
    },
    set animationState(_) {
      l(_), ge();
    },
    get clearCardCss() {
      return c();
    },
    set clearCardCss(_ = !1) {
      c(_), ge();
    }
  }, u = Zs(), h = et(u);
  {
    var g = (_) => {
      var $ = Xs();
      he(_, $);
    };
    tt(h, (_) => {
      d(m) && _(g);
    });
  }
  return Ve(u), rt(u, (_) => p = _, () => p), He(() => {
    xe(u, 1, `outer-container${o() ? " open" : " close"}${s() ? " animation " + l() : ""}`, "svelte-lv9s7p"), nt(u, `--child-card-margin-top: ${(o() ? a() : "0px") ?? ""};${d(y) ? ` --expander-animation-height: -${d(y)}px;` : ""}`);
  }), he(e, u), vr(T);
}
customElements.define("expander-sub-card", Yi(
  or,
  {
    config: {},
    hass: {},
    preview: {},
    marginTop: {},
    open: {},
    animation: {},
    animationState: {},
    clearCardCss: {}
  },
  [],
  [],
  !0
));
const Dr = (e, t) => {
  var n;
  (n = e.dispatchEvent) == null || n.call(
    e,
    new CustomEvent(
      "haptic",
      { detail: t, bubbles: !0, composed: !0 }
    )
  );
};
var eo = function(e, t, n) {
  var i;
  n === void 0 && (n = {});
  var r = n.retries, a = r === void 0 ? 10 : r, o = n.delay, s = o === void 0 ? 10 : o, l = n.shouldReject, c = l === void 0 || l, p = (i = n.rejectMessage) !== null && i !== void 0 ? i : "Could not get the result after {{ retries }} retries";
  return new Promise((function(v, m) {
    var y = 0, b = function() {
      var T = e();
      t(T) ? v(T) : ++y < a ? setTimeout(b, s) : c ? m(new Error(p.replace(/\{\{\s*retries\s*\}\}/g, "".concat(a)))) : v(T);
    };
    b();
  }));
}, On = function() {
  return On = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return e;
  }, On.apply(this, arguments);
};
function Wn(e, t, n) {
  if (arguments.length === 2) for (var i, r = 0, a = t.length; r < a; r++) !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Rn, zt, Ae, it, Jn = "[home-assistant-javascript-templates]", to = /^([a-z_]+)\.(\w+)$/;
(function(e) {
  e.UNKNOWN = "unknown", e.UNAVAILABLE = "unavailable";
})(Rn || (Rn = {})), (function(e) {
  e.AREA_ID = "area_id", e.NAME = "name";
})(zt || (zt = {})), (function(e) {
  e.PANEL_URL = "panel_url", e.LANG = "lang";
})(Ae || (Ae = {})), (function(e) {
  e.LOCATION_CHANGED = "location-changed", e.TRANSLATIONS_UPDATED = "translations-updated", e.POPSTATE = "popstate", e.SUBSCRIBE_EVENTS = "subscribe_events", e.STATE_CHANGE_EVENT = "state_changed";
})(it || (it = {}));
var Br = function(e) {
  return e.reduce((function(t, n) {
    var i = n[0], r = n[1];
    return t[i.replace(to, "$2")] = r, t;
  }), {});
}, Qe = function(e) {
  return e.includes(".");
}, $n = "ref", _t = "value", Ur = "toJSON", Vr = function(e) {
  return "".concat($n, ".").concat(e);
};
function no(e, t, n) {
  var i = function() {
    return Object.entries(e.hass.areas);
  }, r = function() {
    return Object.entries(e.hass.devices);
  }, a = function() {
    return Object.entries(e.hass.entities);
  }, o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), l = function(u, h) {
    n && console.warn("".concat(u, " ").concat(h, " used in a JavaScript template doesn't exist"));
  }, c = function(u) {
    return l("Entity", u);
  }, p = function(u) {
    return l("Domain", u);
  }, v = function(u) {
    var h = new SyntaxError(u);
    if (t) throw h;
    n && console.warn(h);
  }, m = function(u) {
    e.hass.states[u] ? o.add(u) : c(u);
  }, y = function(u) {
    o.add(u);
  }, b = function(u, h) {
    var g = h.with_unit, _ = g !== void 0 && g, $ = h.rounded, L = $ !== void 0 && $;
    if (u) {
      var N = u.state, q = u.attributes.unit_of_measurement, z = Number(L), F = L === !1 || isNaN(Number(N)) ? N : new Intl.NumberFormat(e.hass.language, { minimumFractionDigits: z, maximumFractionDigits: z }).format(Number(N));
      return _ && q ? "".concat(F, " ").concat(q) : F;
    }
  }, T = function(u) {
    return new Proxy(u, { get: function(h, g) {
      return g === "state_with_unit" ? b(h, { rounded: !0, with_unit: !0 }) : h[g];
    } });
  };
  return { get hass() {
    return e.hass;
  }, states: new Proxy((function(u, h) {
    if (h === void 0 && (h = {}), Qe(u)) return m(u), b(e.hass.states[u], h);
    throw SyntaxError("".concat(Jn, ": states method cannot be used with a domain, use it as an object instead."));
  }), { get: function(u, h) {
    if (Qe(h)) return m(h), T(e.hass.states[h]);
    var g = Object.entries(e.hass.states).filter((function(_) {
      return _[0].startsWith(h);
    }));
    return g.length || p(h), new Proxy(Br(g), { get: function(_, $) {
      return m("".concat(h, ".").concat($)), T(_[$]);
    } });
  } }), state_translated: function(u) {
    if (m(u), e.hass.states[u]) return e.hass.formatEntityState(e.hass.states[u]);
  }, is_state: function(u, h) {
    var g;
    return m(u), Array.isArray(h) ? h.some((function(_) {
      var $;
      return (($ = e.hass.states[u]) === null || $ === void 0 ? void 0 : $.state) === _;
    })) : ((g = e.hass.states[u]) === null || g === void 0 ? void 0 : g.state) === h;
  }, state_attr: function(u, h) {
    var g, _;
    return m(u), (_ = (g = e.hass.states[u]) === null || g === void 0 ? void 0 : g.attributes) === null || _ === void 0 ? void 0 : _[h];
  }, is_state_attr: function(u, h, g) {
    return this.state_attr(u, h) === g;
  }, has_value: function(u) {
    return this.states(u) ? !(this.is_state(u, Rn.UNKNOWN) || this.is_state(u, Rn.UNAVAILABLE)) : (c(u), !1);
  }, entities: new Proxy((function(u) {
    if (u === void 0) return e.hass.entities;
    if (Qe(u)) return m(u), e.hass.entities[u];
    var h = a().filter((function(g) {
      return g[0].startsWith(u);
    }));
    return h.length || p(u), new Proxy(Br(h), { get: function(g, _) {
      return m("".concat(u, ".").concat(_)), g[_];
    } });
  }), { get: function(u, h) {
    return u(h);
  } }), entity_prop: function(u, h) {
    var g;
    return m(u), (g = e.hass.entities[u]) === null || g === void 0 ? void 0 : g[h];
  }, is_entity_prop: function(u, h, g) {
    return this.entity_prop(u, h) === g;
  }, devices: new Proxy((function(u) {
    if (u === void 0) return e.hass.devices;
    if (Qe(u)) throw SyntaxError("".concat(Jn, ": devices method cannot be used with an entity id, you should use a device id instead."));
    return e.hass.devices[u];
  }), { get: function(u, h) {
    if (Qe(h)) throw SyntaxError("".concat(Jn, ": devices cannot be accesed using an entity id, you should use a device id instead."));
    return e.hass.devices[h];
  } }), device_attr: function(u, h) {
    var g, _, $;
    if (Qe(u)) {
      m(u);
      var L = (g = e.hass.entities[u]) === null || g === void 0 ? void 0 : g.device_id;
      return (_ = e.hass.devices[L]) === null || _ === void 0 ? void 0 : _[h];
    }
    return ($ = e.hass.devices[u]) === null || $ === void 0 ? void 0 : $[h];
  }, is_device_attr: function(u, h, g) {
    return this.device_attr(u, h) === g;
  }, device_id: function(u) {
    var h;
    if (Qe(u)) return m(u), (h = e.hass.entities[u]) === null || h === void 0 ? void 0 : h.device_id;
    var g = r().find((function(_) {
      return _[1].name === u;
    }));
    return g == null ? void 0 : g[0];
  }, device_name: function(u) {
    var h, g, _;
    if (Qe(u)) {
      m(u);
      var $ = (h = e.hass.entities[u]) === null || h === void 0 ? void 0 : h.device_id;
      return (g = e.hass.devices[$]) === null || g === void 0 ? void 0 : g.name;
    }
    return (_ = e.hass.devices[u]) === null || _ === void 0 ? void 0 : _.name;
  }, areas: function() {
    return i().map((function(u) {
      return u[1].area_id;
    }));
  }, area_id: function(u) {
    var h, g;
    if (u in e.hass.devices) return this.device_attr(u, zt.AREA_ID);
    var _ = (h = e.hass.entities[u]) === null || h === void 0 ? void 0 : h.device_id;
    if (_) return this.device_attr(_, zt.AREA_ID);
    var $ = i().find((function(L) {
      return L[1].name === u;
    }));
    return (g = $ == null ? void 0 : $[1]) === null || g === void 0 ? void 0 : g.area_id;
  }, area_name: function(u) {
    var h, g, _;
    u in e.hass.devices && (_ = this.device_attr(u, zt.AREA_ID));
    var $ = (h = e.hass.entities[u]) === null || h === void 0 ? void 0 : h.device_id;
    $ && (_ = this.device_attr($, zt.AREA_ID));
    var L = i().find((function(N) {
      var q = N[1];
      return q.area_id === u || q.area_id === _;
    }));
    return (g = L == null ? void 0 : L[1]) === null || g === void 0 ? void 0 : g.name;
  }, area_entities: function(u) {
    var h = i().find((function(g) {
      var _ = g[1];
      return _.area_id === u || _.name === u;
    }));
    return h ? a().filter((function(g) {
      return g[1].area_id === h[1].area_id;
    })).map((function(g) {
      return g[0];
    })) : [];
  }, area_devices: function(u) {
    var h = i().find((function(g) {
      var _ = g[1];
      return _.area_id === u || _.name === u;
    }));
    return h ? r().filter((function(g) {
      return g[1].area_id === h[1].area_id;
    })).map((function(g) {
      return g[1].id;
    })) : [];
  }, get user_name() {
    return e.hass.user.name;
  }, get user_is_admin() {
    return e.hass.user.is_admin;
  }, get user_is_owner() {
    return e.hass.user.is_owner;
  }, get user_agent() {
    return window.navigator.userAgent;
  }, get tracked() {
    return o;
  }, cleanTracked: function() {
    o.clear();
  }, ref: function(u, h, g) {
    var _;
    g === void 0 && (g = void 0);
    var $ = Vr(h);
    if (s.has(h)) return s.get(h);
    var L = new Proxy(((_ = {})[_t] = g, _[Ur] = function() {
      return this[_t];
    }, _), { get: function(N, q, z) {
      if (q === _t || q === Ur) return y($), Reflect.get(N, q, z);
      v("".concat(q, " is not a valid ").concat($n, " property. A ").concat($n, ' only exposes a "').concat(_t, '" property'));
    }, set: function(N, q, z) {
      if (q === _t) {
        var F = N[_t];
        return N[_t] = z, u({ event_type: it.STATE_CHANGE_EVENT, data: { entity_id: $, old_state: { state: JSON.stringify(F) }, new_state: { state: JSON.stringify(z) } } }), !0;
      }
      return v('property "'.concat(q, '" cannot be set in a ').concat($n)), !1;
    } });
    return s.set(h, L), L;
  }, unref: function(u, h) {
    var g = Vr(h);
    s.has(h) ? (s.delete(h), u(g)) : v("".concat(h, " is not a ref or it has been unrefed already"));
  }, refs: function(u, h, g) {
    g === void 0 && (g = {});
    var _ = this.ref, $ = this.unref, L = new Proxy(g, { get: function(N, q) {
      return _(u, q).value;
    }, set: function(N, q, z) {
      return _(u, q).value = z, !0;
    } });
    return Object.entries(g).forEach((function(N) {
      var q = N[0], z = N[1];
      s.has(q) && $(h, q), _(u, q, z);
    })), L;
  }, cleanRefs: function(u) {
    var h = this;
    Array.from(s.keys()).forEach((function(g) {
      h.unref(u, g);
    }));
  }, clientSideProxy: new Proxy({}, { get: function(u, h) {
    switch (Object.values(Ae).includes(h) && y(h), h) {
      case Ae.PANEL_URL:
        return location.pathname;
      case Ae.LANG:
        return e.hass.language;
    }
    n && console.warn("clientSideProxy should only be used to access these variables: ".concat(Object.values(Ae).join(", ")));
  } }) };
}
var ro = (function() {
  function e(t, n) {
    var i = n.throwErrors, r = i !== void 0 && i, a = n.throwWarnings, o = a === void 0 || a, s = n.variables, l = s === void 0 ? {} : s, c = n.refs, p = c === void 0 ? {} : c, v = n.refsVariableName, m = v === void 0 ? "refs" : v, y = n.autoReturn, b = y === void 0 || y;
    this._throwErrors = r, this._throwWarnings = o, this._variables = l, this._refsVariableName = m, this._autoReturn = b, this._subscriptions = /* @__PURE__ */ new Map(), this._clientSideEntitiesRegExp = new RegExp("(^|[ \\?(+:\\{\\[><,])(".concat(Object.values(Ae).join("|"), ")($|[ \\?)+:\\}\\]><.,])"), "gm"), this._scopped = no(t, r, o), this.refs = p, this._watchForPanelUrlChange(), this._watchForEntitiesChange(), this._watchForLanguageChange();
  }
  return e.prototype._executeRenderingFunctions = function(t) {
    var n = this;
    this._subscriptions.get(t).forEach((function(i, r) {
      i.forEach((function(a, o) {
        n.trackTemplate(r, o, a);
      }));
    }));
  }, e.prototype._watchForPanelUrlChange = function() {
    var t = this;
    window.addEventListener(it.LOCATION_CHANGED, (function() {
      t._panelUrlWatchCallback();
    })), window.addEventListener(it.POPSTATE, (function() {
      t._panelUrlWatchCallback();
    }));
  }, e.prototype._panelUrlWatchCallback = function() {
    this._subscriptions.has(Ae.PANEL_URL) && this._executeRenderingFunctions(Ae.PANEL_URL);
  }, e.prototype._watchForEntitiesChange = function() {
    var t = this;
    window.hassConnection.then((function(n) {
      n.conn.subscribeMessage((function(i) {
        return t._entityWatchCallback(i);
      }), { type: it.SUBSCRIBE_EVENTS, event_type: it.STATE_CHANGE_EVENT });
    }));
  }, e.prototype._watchForLanguageChange = function() {
    var t = this;
    window.addEventListener(it.TRANSLATIONS_UPDATED, (function() {
      t._subscriptions.has(Ae.LANG) && t._executeRenderingFunctions(Ae.LANG);
    }));
  }, e.prototype._entityWatchCallback = function(t) {
    if (this._subscriptions.size) {
      var n = t.data.entity_id;
      this._subscriptions.has(n) && this._executeRenderingFunctions(n);
    }
  }, e.prototype._storeTracked = function(t, n, i) {
    var r = this;
    this._scopped.tracked.forEach((function(a) {
      var o = [n, i];
      if (r._subscriptions.has(a)) {
        var s = r._subscriptions.get(a);
        if (s.has(t)) {
          var l = s.get(t);
          l.has(n) || l.set.apply(l, o);
        } else s.set(t, new Map([o]));
      } else r._subscriptions.set(a, /* @__PURE__ */ new Map([[t, new Map([o])]]));
    }));
  }, e.prototype._untrackTemplate = function(t, n) {
    var i = this;
    this._subscriptions.forEach((function(r, a) {
      if (r.has(t)) {
        var o = r.get(t);
        o.delete(n), o.size === 0 && (r.delete(t), r.size === 0 && i._subscriptions.delete(a));
      }
    }));
  }, e.prototype.renderTemplate = function(t, n) {
    n === void 0 && (n = {});
    try {
      var i = n.variables, r = i === void 0 ? {} : i, a = n.refs, o = a === void 0 ? {} : a, s = new Map(Object.entries(On(On({}, this._variables), r))), l = t.trim().replace(this._clientSideEntitiesRegExp, "$1clientSide.$2$3"), c = l.includes("return") || !this._autoReturn ? l : "return ".concat(l);
      return new (Function.bind.apply(Function, Wn(Wn([void 0, "hass", "states", "state_translated", "is_state", "state_attr", "is_state_attr", "has_value", "entities", "entity_prop", "is_entity_prop", "devices", "device_attr", "is_device_attr", "device_id", "device_name", "areas", "area_id", "area_name", "area_entities", "area_devices", "user_name", "user_is_admin", "user_is_owner", "user_agent", "clientSide", "ref", "unref", this._refsVariableName], Array.from(s.keys()), !1), ["".concat('"use strict";', " ").concat(c)], !1)))().apply(void 0, Wn([this._scopped.hass, this._scopped.states, this._scopped.state_translated.bind(this._scopped), this._scopped.is_state.bind(this._scopped), this._scopped.state_attr.bind(this._scopped), this._scopped.is_state_attr.bind(this._scopped), this._scopped.has_value.bind(this._scopped), this._scopped.entities, this._scopped.entity_prop, this._scopped.is_entity_prop.bind(this._scopped), this._scopped.devices, this._scopped.device_attr.bind(this._scopped), this._scopped.is_device_attr.bind(this._scopped), this._scopped.device_id.bind(this._scopped), this._scopped.device_name.bind(this._scopped), this._scopped.areas.bind(this._scopped), this._scopped.area_id.bind(this._scopped), this._scopped.area_name.bind(this._scopped), this._scopped.area_entities.bind(this._scopped), this._scopped.area_devices.bind(this._scopped), this._scopped.user_name, this._scopped.user_is_admin, this._scopped.user_is_owner, this._scopped.user_agent, this._scopped.clientSideProxy, this._scopped.ref.bind(this._scopped, this._entityWatchCallback.bind(this)), this._scopped.unref.bind(this._scopped, this.cleanTracked.bind(this)), this._scopped.refs(this._entityWatchCallback.bind(this), this.cleanTracked.bind(this), o)], Array.from(s.values()), !1));
    } catch (p) {
      if (this._throwErrors) throw p;
      return void (this._throwWarnings && console.warn(p));
    }
  }, e.prototype.trackTemplate = function(t, n, i) {
    var r = this;
    i === void 0 && (i = {}), this._scopped.cleanTracked();
    var a = this.renderTemplate(t, i);
    return this._storeTracked(t, n, i), n(a), function() {
      return r._untrackTemplate(t, n);
    };
  }, e.prototype.cleanTracked = function(t) {
    t ? this._subscriptions.has(t) && this._subscriptions.delete(t) : this._subscriptions.clear();
  }, Object.defineProperty(e.prototype, "variables", { get: function() {
    return this._variables;
  }, set: function(t) {
    this._variables = t;
  }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "refs", { get: function() {
    return this._scopped.refs(this._entityWatchCallback.bind(this), this.cleanTracked.bind(this));
  }, set: function(t) {
    this._scopped.cleanRefs(this.cleanTracked.bind(this)), this._scopped.refs(this._entityWatchCallback.bind(this), this.cleanTracked.bind(this), t);
  }, enumerable: !1, configurable: !0 }), e;
})(), io = (function() {
  function e(t, n) {
    n === void 0 && (n = {}), this._renderer = eo((function() {
      return t.hass;
    }), (function(i) {
      return !!(i && i.areas && i.devices && i.entities && i.states && i.user);
    }), { retries: 100, delay: 50, rejectMessage: "The provided element doesn't contain a proper or initialised hass object" }).then((function() {
      return new ro(t, n);
    }));
  }
  return e.prototype.getRenderer = function() {
    return this._renderer;
  }, e;
})();
function ao(e = {}, t = {}) {
  return new io(
    document.querySelector("home-assistant"),
    {
      autoReturn: !1,
      variables: e,
      refs: t,
      refsVariableName: "variables"
    }
  ).getRenderer();
}
function xn(e) {
  return !e || typeof e != "string" ? !1 : String(e).trim().startsWith("[[[") && String(e).trim().endsWith("]]]");
}
function Hr(e, t, n, i = {}) {
  if (!xn(n))
    throw new Error("Not a valid JS template");
  return n = String(n).trim().slice(3, -3), e.then((r) => r.trackTemplate(n, t, { variables: i }));
}
function Wr(e, t, n) {
  e.then((i) => {
    i.refs[t] = n;
  });
}
const lr = {
  gap: "0.0em",
  "expanded-gap": "0.6em",
  padding: "1em",
  clear: !1,
  "clear-children": !1,
  title: " ",
  "overlay-margin": "0.0em",
  "child-padding": "0.0em",
  "child-margin-top": "0.0em",
  "button-background": "transparent",
  "expander-card-background": "var(--ha-card-background,var(--card-background-color,#fff))",
  "header-color": "var(--primary-text-color,#fff)",
  "arrow-color": "var(--arrow-color,var(--primary-text-color,#fff))",
  "expander-card-display": "block",
  "title-card-clickable": !1,
  "min-width-expanded": 0,
  "max-width-expanded": 0,
  icon: "mdi:chevron-down",
  "icon-rotate-degree": "180deg",
  animation: !0
};
var so = /* @__PURE__ */ Xe("<ha-ripple></ha-ripple>", 2), oo = /* @__PURE__ */ Xe('<button aria-label="Toggle button"><ha-icon></ha-icon> <!></button>', 2), lo = /* @__PURE__ */ Xe("<ha-ripple></ha-ripple>", 2), co = /* @__PURE__ */ Xe('<div id="id1"><div id="id2"><!></div> <!> <!></div>'), uo = /* @__PURE__ */ Xe("<button><div> </div> <ha-icon></ha-icon> <ha-ripple></ha-ripple></button>", 2), fo = /* @__PURE__ */ Xe("<div><div></div></div>"), ho = /* @__PURE__ */ Xe("<ha-card><!> <!> <!></ha-card>", 2);
const po = {
  hash: "svelte-1jqiztq",
  code: `.expander-card.svelte-1jqiztq {display:var(--expander-card-display,block);gap:var(--gap);padding:var(--padding);background:var(--card-background,#fff);-webkit-tap-highlight-color:transparent;}.expander-card.animation.svelte-1jqiztq {transition:gap 0.35s ease, background-color var(--background-animation-duration, 0) ease;}.children-wrapper.svelte-1jqiztq {display:flex;flex-direction:column;}.children-wrapper.animation.opening.svelte-1jqiztq,
    .children-wrapper.animation.closing.svelte-1jqiztq {overflow:hidden;}.children-container.animation.svelte-1jqiztq {transition:padding 0.35s ease, gap 0.35s ease;}.children-container.svelte-1jqiztq {padding:var(--child-padding);display:var(--expander-card-display,block);gap:var(--gap);}.clear.svelte-1jqiztq {background:none !important;background-color:transparent !important;border-style:none !important;box-shadow:none !important;}.title-card-header.svelte-1jqiztq {display:flex;align-items:center;justify-content:space-between;flex-direction:row;position:relative;}.title-card-header.clickable.svelte-1jqiztq {cursor:pointer;border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));}.title-card-header-overlay.svelte-1jqiztq {display:block;}.title-card-container.svelte-1jqiztq {width:100%;padding:var(--title-padding);}.header.svelte-1jqiztq {display:flex;flex-direction:row;align-items:center;padding:0.85em 0.85em;background:var(--button-background);border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));width:var(--header-width,auto);color:var(--header-color,#fff);cursor:pointer;position:relative;}.header-overlay.svelte-1jqiztq {position:absolute;top:0;right:0;margin:var(--overlay-margin);height:var(--expander-card-overlay-height, auto);z-index:1;}.title-card-header-overlay.clickable.svelte-1jqiztq  > .header-overlay:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);justify-content:flex-end;}.title-card-header-overlay.clickable.svelte-1jqiztq > .title-card-container:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);}.title.svelte-1jqiztq {width:100%;text-align:left;}.ico.animation.svelte-1jqiztq {transition-property:transform;transition-duration:0.35s;}.ico.svelte-1jqiztq {color:var(--arrow-color,var(--primary-text-color,#fff));}.flipped.svelte-1jqiztq {transform:rotate(var(--icon-rotate-degree,180deg));}`
};
function vo(e, t) {
  pr(t, !0), Vi(e, po);
  const n = ke(t, "hass"), i = ke(t, "preview"), r = ke(t, "config", 7, lr);
  let a = /* @__PURE__ */ I(!1), o = /* @__PURE__ */ I(null), s = /* @__PURE__ */ I(ct(!!Ce(() => i()))), l = /* @__PURE__ */ I(ct(!!Ce(() => i()))), c = /* @__PURE__ */ I(!0), p = /* @__PURE__ */ I("idle"), v = /* @__PURE__ */ I(null), m = /* @__PURE__ */ I(0), y = /* @__PURE__ */ I(0), b = /* @__PURE__ */ I(null), T = /* @__PURE__ */ I(null), u = /* @__PURE__ */ I(null), h = /* @__PURE__ */ I(null);
  const g = {}, _ = {}, $ = /* @__PURE__ */ I(ct({})), L = /* @__PURE__ */ Or(() => d($).style !== void 0 ? `<style>${String(d($).style)}</style>` : r().style ? `<style>${r().style}</style>` : null), N = Ce(() => r()["storage-id"]), q = "expander-open-" + N;
  k(c, Ce(() => i() || (F(r()["show-button-users"]) ?? !0)), !0), Dt(() => {
    if (d($).expanded === void 0 || Ce(() => i())) return;
    const w = !!d($).expanded;
    w !== Ce(() => d(s)) && queueMicrotask(() => Ue(w));
  }), Dt(() => {
    if (!(i() === d(l) || i() === void 0))
      if (k(l, i(), !0), d(l))
        fe(!0), k(c, !0);
      else {
        if (z("expanded")) {
          const w = Ce(() => d($).expanded);
          w !== void 0 && Ue(!!w);
        } else
          vn();
        k(c, F(r()["show-button-users"]) ?? !0, !0);
      }
  });
  function z(w) {
    const E = r().templates && Array.isArray(r().templates) ? r().templates.find((x) => x.template === w) : void 0;
    if (E && xn(E.value_template))
      return E;
  }
  function F(w) {
    var E, x, D, Ee;
    if (w !== void 0)
      return ((x = (E = n()) == null ? void 0 : E.user) == null ? void 0 : x.name) !== void 0 && w.includes((Ee = (D = n()) == null ? void 0 : D.user) == null ? void 0 : Ee.name);
  }
  function vn() {
    if (!z("expanded"))
      if (F(r()["start-expanded-users"]))
        fe(!0);
      else if (N !== void 0)
        try {
          const w = localStorage.getItem(q);
          if (w === null)
            r().expanded !== void 0 ? fe(r().expanded) : fe(!1);
          else {
            const E = w ? w === "true" : d(s);
            fe(E);
          }
        } catch (w) {
          console.error(w), fe(!1);
        }
      else
        r().expanded !== void 0 ? fe(r().expanded) : fe(!1);
  }
  function Ue(w) {
    d(v) && (clearTimeout(d(v)), k(v, null));
    const E = w !== void 0 ? w : !d(s);
    r().animation ? (k(p, E ? "opening" : "closing", !0), E ? (fe(!0), k(
      v,
      setTimeout(
        () => {
          k(p, "idle"), k(v, null);
        },
        350
      ),
      !0
    )) : k(
      v,
      setTimeout(
        () => {
          fe(!1), k(p, "idle"), k(v, null);
        },
        350
      ),
      !0
    )) : fe(E);
  }
  function fe(w) {
    if (k(s, w, !0), !i() && N !== void 0)
      try {
        localStorage.setItem(q, d(s) ? "true" : "false");
      } catch (E) {
        console.error(E);
      }
    d(s) && d(m) === 0 && k(m, 0.35);
  }
  function wr(w) {
    var x, D;
    const E = (D = (x = w.detail) == null ? void 0 : x["expander-card"]) == null ? void 0 : D.data;
    E != null && E["expander-card-id"] && E["expander-card-id"] === r()["expander-card-id"] && (E.action === "open" && !d(s) ? Ue(!0) : E.action === "close" && d(s) ? Ue(!1) : E.action === "toggle" && Ue());
  }
  function Ki() {
    document.body.removeEventListener("ll-custom", wr), Object.entries(_).forEach(([w, E]) => {
      E.then((x) => {
        x(), delete _[w];
      }).catch(() => {
      });
    }), Object.entries(g).forEach(([w, E]) => {
      E.then((x) => {
        x(), delete g[w];
      }).catch(() => {
      });
    });
  }
  let Xt, Zt = !1, Er = 0, $r = 0;
  const Xi = (w) => {
    d(h) && (d(h).disabled = !0), Xt = w.target, Er = w.touches[0].clientX, $r = w.touches[0].clientY, Zt = !1;
  }, Zi = (w) => {
    const E = w.touches[0].clientX, x = w.touches[0].clientY;
    (Math.abs(E - Er) > 10 || Math.abs(x - $r) > 10) && (Zt = !0);
  }, Qi = () => {
    d(h) && (d(h).disabled = !1), Xt = void 0, Zt = !1;
  }, ea = () => {
    d(h) && (d(h).disabled = !1);
  }, ta = (w) => {
    !Zt && Xt === w.target && r()["title-card-clickable"] && (Dr(Xt, "light"), Ue(), k(a, !0), k(
      o,
      window.setTimeout(
        () => {
          k(a, !1), k(o, null);
        },
        100
      ),
      !0
    ), d(h) && (d(h).startPressAnimation(), d(h).endPressAnimation())), Xt = void 0, Zt = !1;
  }, na = (w) => {
    for (const E of Object.values(r().variables ?? {}))
      xn(E.value_template) ? g[E.variable] = Hr(
        w,
        (x) => {
          Wr(w, E.variable, x);
        },
        E.value_template,
        { config: r() }
      ) : Wr(w, E.variable, E.value_template);
  }, ra = () => {
    if (!r().templates) return;
    const w = Object.values(r().variables || {}).reduce(
      (x, D) => (x[D.variable] = void 0, x),
      {}
    ), E = ao({ config: r() }, w);
    na(E), Object.values(r().templates || {}).forEach((x) => {
      xn(x.value_template) ? _[x.template] = Hr(
        E,
        (D) => {
          d($)[x.template] = D;
        },
        x.value_template,
        { config: r() }
      ) : d($)[x.template] = x.value_template;
    });
  };
  Ui(() => {
    if (ra(), !z("expanded")) {
      const E = r()["min-width-expanded"], x = r()["max-width-expanded"], D = document.body.offsetWidth;
      E && x ? r().expanded = D >= E && D <= x : E ? r().expanded = D >= E : x && (r().expanded = D <= x);
    }
    i() ? fe(!0) : z("expanded") || vn(), document.body.addEventListener("ll-custom", wr);
    let w;
    return r()["title-card-clickable"] && !r()["title-card-button-overlay"] && d(T) ? w = d(T) : d(u) && (w = d(u)), w && (w.addEventListener("touchstart", Xi, { passive: !0, capture: !0 }), w.addEventListener("touchmove", Zi, { passive: !0, capture: !0 }), w.addEventListener("touchcancel", Qi, { passive: !0, capture: !0 }), w.addEventListener("touchend", ea, { passive: !0, capture: !0 }), w.addEventListener("touchend", ta, { passive: !1, capture: !1 })), r()["title-card-clickable"] && r()["title-card-button-overlay"] && d(T) && new ResizeObserver(() => {
      if (d(u) && d(T) && d(b)) {
        const x = d(T).getBoundingClientRect();
        k(y, x.height - parseFloat(getComputedStyle(d(u)).marginTop) - parseFloat(getComputedStyle(d(u)).marginBottom) + parseFloat(getComputedStyle(d(b)).paddingTop) + parseFloat(getComputedStyle(d(b)).paddingBottom));
      }
    }).observe(d(T)), Ki;
  });
  const Un = (w) => {
    if (d(a))
      return w.preventDefault(), w.stopImmediatePropagation(), k(a, !1), d(o) && (clearTimeout(d(o)), k(o, null)), !1;
    Dr(w.currentTarget, "light"), Ue();
  };
  var ia = {
    get hass() {
      return n();
    },
    set hass(w) {
      n(w), ge();
    },
    get preview() {
      return i();
    },
    set preview(w) {
      i(w), ge();
    },
    get config() {
      return r();
    },
    set config(w = lr) {
      r(w), ge();
    }
  }, jt = ho(), xr = et(jt);
  {
    var aa = (w) => {
      var E = co();
      E.__click = function(...Y) {
        var Q;
        (Q = r()["title-card-clickable"] && !r()["title-card-button-overlay"] ? Un : null) == null || Q.apply(this, Y);
      };
      var x = et(E), D = et(x);
      or(D, {
        get hass() {
          return n();
        },
        get preview() {
          return i();
        },
        get config() {
          return r()["title-card"];
        },
        animation: !1,
        open: !0,
        animationState: "idle",
        get clearCardCss() {
          return r()["clear-children"];
        }
      }), Ve(x);
      var Ee = vt(x, 2);
      {
        var $e = (Y) => {
          var Q = oo();
          Q.__click = function(...pt) {
            var Qt;
            (Qt = !r()["title-card-clickable"] || r()["title-card-button-overlay"] ? Un : null) == null || Qt.apply(this, pt);
          };
          var je = et(Q);
          He(() => zr(je, "icon", r().icon));
          var ua = vt(je, 2);
          {
            var fa = (pt) => {
              var Qt = so();
              rt(Qt, (da) => k(h, da), () => d(h)), he(pt, Qt);
            };
            tt(ua, (pt) => {
              (!r()["title-card-clickable"] || r()["title-card-button-overlay"]) && pt(fa);
            });
          }
          Ve(Q), rt(Q, (pt) => k(u, pt), () => d(u)), He(() => {
            nt(Q, `--overlay-margin:${r()["overlay-margin"] ?? ""}; --button-background:${r()["button-background"] ?? ""}; --header-color:${r()["header-color"] ?? ""};`), xe(Q, 1, `header ${r()["title-card-button-overlay"] ? " header-overlay" : ""}${d(s) ? " open" : " close"}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq"), nt(je, `--arrow-color:${r()["arrow-color"] ?? ""}`), xe(je, 1, `ico${d(s) && d(p) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq");
          }), he(Y, Q);
        };
        tt(Ee, (Y) => {
          d(c) && Y($e);
        });
      }
      var Pt = vt(Ee, 2);
      {
        var Vn = (Y) => {
          var Q = lo();
          rt(Q, (je) => k(h, je), () => d(h)), he(Y, Q);
        };
        tt(Pt, (Y) => {
          r()["title-card-clickable"] && !r()["title-card-button-overlay"] && Y(Vn);
        });
      }
      Ve(E), rt(E, (Y) => k(T, Y), () => d(T)), He(() => {
        xe(E, 1, `title-card-header${r()["title-card-button-overlay"] ? "-overlay" : ""}${d(s) ? " open" : " close"}${r().animation ? " animation " + d(p) : ""}${r()["title-card-clickable"] ? " clickable" : ""}`, "svelte-1jqiztq"), Hi(E, "role", r()["title-card-clickable"] && !r()["title-card-button-overlay"] ? "button" : void 0), xe(x, 1, `title-card-container${d(s) ? " open" : " close"}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq"), nt(x, `--title-padding:${(r()["title-card-padding"] ? r()["title-card-padding"] : "0px") ?? ""};`);
      }), he(w, E);
    }, sa = (w) => {
      var E = Fr(), x = qr(E);
      {
        var D = (Ee) => {
          var $e = uo();
          $e.__click = Un;
          var Pt = et($e), Vn = et(Pt, !0);
          Ve(Pt);
          var Y = vt(Pt, 2);
          He(() => zr(Y, "icon", r().icon));
          var Q = vt(Y, 2);
          rt(Q, (je) => k(h, je), () => d(h)), Ve($e), rt($e, (je) => k(u, je), () => d(u)), He(() => {
            xe($e, 1, `header${d(s) ? " open" : " close"}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq"), nt($e, `--header-width:100%; --button-background:${r()["button-background"] ?? ""};--header-color:${r()["header-color"] ?? ""};`), xe(Pt, 1, `primary title${d(s) ? " open" : " close"}`, "svelte-1jqiztq"), qs(Vn, r().title), nt(Y, `--arrow-color:${r()["arrow-color"] ?? ""}`), xe(Y, 1, `ico${d(s) && d(p) !== "closing" ? " flipped open" : " close"}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq");
          }), he(Ee, $e);
        };
        tt(x, (Ee) => {
          d(c) && Ee(D);
        });
      }
      he(w, E);
    };
    tt(xr, (w) => {
      r()["title-card"] ? w(aa) : w(sa, !1);
    });
  }
  var Sr = vt(xr, 2);
  {
    var oa = (w) => {
      var E = fo(), x = et(E);
      Is(x, 20, () => r().cards, (D) => D, (D, Ee) => {
        {
          let $e = /* @__PURE__ */ Or(() => d(s) && i());
          or(D, {
            get hass() {
              return n();
            },
            get preview() {
              return d($e);
            },
            get config() {
              return Ee;
            },
            get marginTop() {
              return r()["child-margin-top"];
            },
            get open() {
              return d(s);
            },
            get animation() {
              return r().animation;
            },
            get animationState() {
              return d(p);
            },
            get clearCardCss() {
              return r()["clear-children"];
            }
          });
        }
      }), Ve(x), Ve(E), He(() => {
        xe(E, 1, `children-wrapper ${r().animation ? "animation " + d(p) : ""}${d(s) ? " open" : " close"}`, "svelte-1jqiztq"), nt(x, `--expander-card-display:${r()["expander-card-display"] ?? ""};
                --gap:${(d(s) && d(p) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""};
                --child-padding:${(d(s) && d(p) !== "closing" ? r()["child-padding"] : "0px") ?? ""};`), xe(x, 1, `children-container${d(s) ? " open" : " close"}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq");
      }), he(w, E);
    };
    tt(Sr, (w) => {
      r().cards && w(oa);
    });
  }
  var la = vt(Sr, 2);
  {
    var ca = (w) => {
      var E = Fr(), x = qr(E);
      Ds(x, () => d(L)), he(w, E);
    };
    tt(la, (w) => {
      d(L) && w(ca);
    });
  }
  return Ve(jt), rt(jt, (w) => k(b, w), () => d(b)), He(() => {
    xe(jt, 1, `expander-card${r().clear ? " clear" : ""}${d(s) ? " open" : " close"} ${d(p)}${r().animation ? " animation " + d(p) : ""}`, "svelte-1jqiztq"), nt(jt, `--expander-card-display:${r()["expander-card-display"] ?? ""};
     --gap:${(d(s) && d(p) !== "closing" ? r()["expanded-gap"] : r().gap) ?? ""}; --padding:${r().padding ?? ""};
     --expander-state:${d(s) ?? ""};
     --icon-rotate-degree:${r()["icon-rotate-degree"] ?? ""};
     --card-background:${(d(s) && d(p) !== "closing" && r()["expander-card-background-expanded"] ? r()["expander-card-background-expanded"] : r()["expander-card-background"]) ?? ""};
     --background-animation-duration:${d(m) ?? ""}s;
     --expander-card-overlay-height:${d(y) ? `${d(y)}px` : "auto"};
    `);
  }), he(e, jt), vr(ia);
}
Ns(["click"]);
customElements.define("expander-card", Yi(vo, { hass: {}, preview: {}, config: {} }, [], [], !0, (e) => class extends e {
  constructor() {
    super(...arguments);
    // re-declare props used in customClass.
    B(this, "config");
  }
  static async getConfigElement() {
    return await Oa(), document.createElement("expander-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:expander-card",
      title: "Expander Card",
      cards: []
    };
  }
  setConfig(n = {}) {
    this.config = { ...lr, ...n };
  }
}));
const _o = "4.2.0";
console.info(
  `%c  Expander-Card 
%c Version ${_o}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
window.customCards = window.customCards || [];
window.customCards.push({
  type: "expander-card",
  name: "Expander Card",
  preview: !0,
  description: "Expander card"
});
export {
  vo as default
};
//# sourceMappingURL=expander-card.js.map
