var wo = Object.defineProperty;
var Qi = (t) => {
  throw TypeError(t);
};
var Eo = (t, e, n) => e in t ? wo(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var U = (t, e, n) => Eo(t, typeof e != "symbol" ? e + "" : e, n), zr = (t, e, n) => e.has(t) || Qi("Cannot " + n);
var p = (t, e, n) => (zr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), I = (t, e, n) => e.has(t) ? Qi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), x = (t, e, n, r) => (zr(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), j = (t, e, n) => (zr(t, e, "access private method"), n);
var Ms;
typeof window < "u" && ((Ms = window.__svelte ?? (window.__svelte = {})).v ?? (Ms.v = /* @__PURE__ */ new Set())).add("5");
const $o = {
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
}, Ao = [
  "expanded",
  "icon",
  "arrow-color",
  "title",
  "style"
], Oo = { icon: {} }, xo = { text: {} }, So = { text: { multiline: !0 } }, To = { boolean: {} }, No = (t) => ({
  number: {
    unit_of_measurement: t
  }
}), Co = (t, e) => ({
  name: t,
  label: e,
  selector: Oo
}), Y = (t, e) => ({
  name: t,
  label: e,
  selector: xo
}), Ro = (t, e) => ({
  name: t,
  label: e,
  selector: So
}), rn = (t, e) => ({
  name: t,
  label: e,
  selector: To
}), Xi = (t, e, n) => ({
  name: t,
  label: e,
  selector: No(n)
}), Io = [
  {
    type: "expandable",
    label: "Expander Card Settings",
    icon: "mdi:arrow-down-bold-box-outline",
    schema: [
      {
        ...Y("title", "Title")
      },
      {
        ...Co("icon", "Icon")
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
                ...rn("expanded", "Start expanded")
              },
              {
                ...rn("animation", "Enable animation")
              },
              {
                ...Xi("min-width-expanded", "Min width expanded", "px")
              },
              {
                ...Xi("max-width-expanded", "Max width expanded", "px")
              },
              {
                ...Y("storage-id", "Storage ID")
              },
              {
                ...Y("expander-card-id", "Expander card ID")
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
                ...Y("arrow-color", "Icon color")
              },
              {
                ...Y("icon-rotate-degree", "Icon rotate degree")
              },
              {
                ...Y("header-color", "Header color")
              },
              {
                ...Y("button-background", "Button background color")
              },
              {
                ...Y("expander-card-background", "Background")
              },
              {
                ...Y("expander-card-background-expanded", "Background when expanded")
              },
              {
                ...Y("expander-card-display", "Expander card display")
              },
              {
                ...rn("clear", "Clear border and background")
              },
              {
                ...Y("gap", "Gap")
              },
              {
                ...Y("padding", "Padding")
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
                ...Y("expanded-gap", "Card gap")
              },
              {
                ...Y("child-padding", "Card padding")
              },
              {
                ...Y("child-margin-top", "Card margin top")
              },
              {
                ...rn("clear-children", "Clear card border and background")
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
            // title-card selector. We will override Add and Edit to show card UI editor
            name: "title-card",
            label: "Title card",
            selector: {
              object: {
                label_field: "type",
                fields: {
                  type: {
                    label: "Card type",
                    required: !0,
                    selector: { text: {} }
                  },
                  // include a marker field so we can identify schema in show-dialog event
                  expander_card_title_card_marker: {
                    required: !1,
                    selector: { text: {} }
                  }
                }
              }
            }
          },
          {
            type: "grid",
            schema: [
              {
                ...rn("title-card-clickable", "Make title card clickable to expand/collapse")
              },
              {
                ...rn("title-card-button-overlay", "Overlay expand button on title card")
              },
              {
                ...Y("overlay-margin", "Overlay margin")
              },
              {
                ...Y("title-card-padding", "Title card padding")
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
            ...Ro("style", "Custom CSS style")
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
                        selector: { template: {} }
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
], Lo = (t, e) => new Promise((n) => {
  const r = e.cancel, i = e.submit;
  t.dispatchEvent(
    new CustomEvent(
      "show-dialog",
      {
        detail: {
          dialogTag: "expander-card-title-card-edit-form",
          dialogImport: () => customElements.whenDefined("expander-card-title-card-edit-form"),
          dialogParams: {
            ...e,
            cancel: () => {
              n(null), r && r();
            },
            submit: (s) => {
              n(s), i && i(s);
            }
          }
        },
        bubbles: !0,
        composed: !0
      }
    )
  );
}), kn = window;
let lr = kn.cardHelpers;
const ko = new Promise((t) => {
  lr && t(), kn.loadCardHelpers && kn.loadCardHelpers().then((e) => {
    lr = e, kn.cardHelpers = lr, t();
  });
});
async function Po() {
  const t = document.querySelector("home-assistant"), e = t == null ? void 0 : t.hass;
  return e ? (await e.callWS({ type: "config/auth/list" })).filter((r) => !r.system_generated).map((r) => r.name) : void 0;
}
const Do = async () => {
  const t = await ko.then(() => lr.createCardElement({ type: "vertical-stack", cards: [] })), e = await customElements.whenDefined("hui-vertical-stack-card").then(() => t.constructor.getConfigElement()), n = await Po();
  return class extends e.constructor {
    constructor() {
      super(), this.showDialogCallback = (i) => {
        var a, o, l, c;
        ((l = (o = (a = i.detail) == null ? void 0 : a.dialogParams) == null ? void 0 : o.schema) == null ? void 0 : l.find((u) => u.name === "expander_card_title_card_marker")) && (i.stopPropagation(), (c = i.detail) != null && c.dialogImport && i.detail.dialogImport().then(async () => {
          var f, _, w, y, O, d, v, g;
          const u = {
            title: "Title card",
            config: this._config["title-card"] || {},
            submit: (_ = (f = i.detail) == null ? void 0 : f.dialogParams) == null ? void 0 : _.submit,
            cancel: (y = (w = i.detail) == null ? void 0 : w.dialogParams) == null ? void 0 : y.cancel,
            submitText: (d = (O = i.detail) == null ? void 0 : O.dialogParams) == null ? void 0 : d.submitText,
            cancelText: (g = (v = i.detail) == null ? void 0 : v.dialogParams) == null ? void 0 : g.cancelText,
            lovelace: this.lovelace
          };
          await Lo(
            this,
            u
          );
        }));
      }, this._computeLabelCallback = (i) => i.label ?? i.name ?? "", this._valueChanged = (i) => {
        const s = i.detail.value, a = Object.entries($o);
        for (const [o, l] of a) {
          if (typeof l == "object" && Array.isArray(l) && Array.isArray(s[o])) {
            JSON.stringify(s[o]) === JSON.stringify(l) && delete s[o];
            continue;
          }
          s[o] === l && delete s[o];
        }
        this._config = s, this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
      }, this._users = n;
    }
    // override setConfig to store config only and not assert stack editor config
    // we also upgrade any old config here if needed
    setConfig(i) {
      this._config = i;
    }
    // define _schema getter to return our own schema
    get _schema() {
      const s = JSON.stringify(Io), a = this._users.map((c) => c.replace(/\\/g, "\\\\").replace(/"/g, '\\"')).join('","');
      let o = s.replace(/\[\[users\]\]/g, a);
      return o = o.replace(
        /\[\[templates\]\]/g,
        // NOSONAR es2019
        Ao.filter((c) => {
          var u;
          return !((u = this._config.templates) != null && u.some((f) => f.template === c));
        }).join('","')
      ), JSON.parse(o);
    }
    // _schema setter does nothing as we want to use our own schema
    set _schema(i) {
    }
    connectedCallback() {
      super.connectedCallback(), this.addEventListener("show-dialog", this.showDialogCallback.bind(this), !0);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this.removeEventListener("show-dialog", this.showDialogCallback.bind(this), !0);
    }
  };
}, Mo = (async () => {
  for (; customElements.get("home-assistant") === void 0; )
    await new Promise((t) => kn.setTimeout(t, 100));
  if (!customElements.get("expander-card-editor")) {
    const t = await Do();
    customElements.define("expander-card-editor", t);
  }
}), Ho = 1, jo = 2, Fo = 16, qo = 1, Uo = 2, js = "[", Rr = "[!", wi = "]", zt = {}, X = Symbol(), Go = "http://www.w3.org/1999/xhtml", ii = !1;
var Fs = Array.isArray, zo = Array.prototype.indexOf, Ir = Array.from, gr = Object.keys, mr = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, Bo = Object.getOwnPropertyDescriptors, Vo = Object.prototype, Wo = Array.prototype, qs = Object.getPrototypeOf, Zi = Object.isExtensible;
function Yo(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Us() {
  var t, e, n = new Promise((r, i) => {
    t = r, e = i;
  });
  return { promise: n, resolve: t, reject: e };
}
const K = 2, Ei = 4, $i = 8, Jo = 1 << 24, nt = 16, rt = 32, xt = 64, Lr = 128, De = 512, Z = 1024, le = 2048, Be = 4096, fe = 8192, tt = 16384, kr = 32768, gn = 65536, es = 1 << 17, Gs = 1 << 18, Kt = 1 << 19, Ko = 1 << 20, gt = 1 << 25, Bt = 32768, si = 1 << 21, Ai = 1 << 22, yt = 1 << 23, cr = Symbol("$state"), Qo = Symbol("legacy props"), Xo = Symbol(""), cn = new class extends Error {
  constructor() {
    super(...arguments);
    U(this, "name", "StaleReactionError");
    U(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}(), Oi = 3, Qt = 8;
function Zo(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function el() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function tl(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function nl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function rl(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function il() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function sl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function al() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ol() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function ll() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function cl() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Qn(t) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function ul() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let L = !1;
function ke(t) {
  L = t;
}
let R;
function ie(t) {
  if (t === null)
    throw Qn(), zt;
  return R = t;
}
function mn() {
  return ie(/* @__PURE__ */ Me(R));
}
function Ye(t) {
  if (L) {
    if (/* @__PURE__ */ Me(R) !== null)
      throw Qn(), zt;
    R = t;
  }
}
function dl(t = 1) {
  if (L) {
    for (var e = t, n = R; e--; )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Me(n);
    R = n;
  }
}
function yr(t = !0) {
  for (var e = 0, n = R; ; ) {
    if (n.nodeType === Qt) {
      var r = (
        /** @type {Comment} */
        n.data
      );
      if (r === wi) {
        if (e === 0) return n;
        e -= 1;
      } else (r === js || r === Rr) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Me(n)
    );
    t && n.remove(), n = i;
  }
}
function zs(t) {
  if (!t || t.nodeType !== Qt)
    throw Qn(), zt;
  return (
    /** @type {Comment} */
    t.data
  );
}
function Bs(t) {
  return t === this.v;
}
function fl(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Vs(t) {
  return !fl(t, this.v);
}
let hl = !1, he = null;
function yn(t) {
  he = t;
}
function xi(t, e = !1, n) {
  he = {
    p: he,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    l: null
  };
}
function Si(t) {
  var e = (
    /** @type {ComponentContext} */
    he
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      pa(r);
  }
  return t !== void 0 && (e.x = t), e.i = !0, he = e.p, t ?? /** @type {T} */
  {};
}
function Ws() {
  return !0;
}
let It = [];
function Ys() {
  var t = It;
  It = [], Yo(t);
}
function Pr(t) {
  if (It.length === 0 && !Pn) {
    var e = It;
    queueMicrotask(() => {
      e === It && Ys();
    });
  }
  It.push(t);
}
function pl() {
  for (; It.length > 0; )
    Ys();
}
function Js(t) {
  var e = P;
  if (e === null)
    return C.f |= yt, t;
  if ((e.f & kr) === 0) {
    if ((e.f & Lr) === 0)
      throw t;
    e.b.error(t);
  } else
    bn(t, e);
}
function bn(t, e) {
  for (; e !== null; ) {
    if ((e.f & Lr) !== 0)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t;
}
const ir = /* @__PURE__ */ new Set();
let D = null, z = null, we = [], Dr = null, ai = !1, Pn = !1;
var hn, pn, kt, Pt, Wn, vn, _n, J, oi, In, li, Ks, Qs;
const Tr = class Tr {
  constructor() {
    I(this, J);
    U(this, "committed", !1);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    U(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    U(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    I(this, hn, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    I(this, pn, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    I(this, kt, 0);
    /**
     * The number of async effects that are currently in flight, _not_ inside a pending boundary
     */
    I(this, Pt, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    I(this, Wn, null);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    I(this, vn, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    I(this, _n, /* @__PURE__ */ new Set());
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    U(this, "skipped_effects", /* @__PURE__ */ new Set());
    U(this, "is_fork", !1);
  }
  is_deferred() {
    return this.is_fork || p(this, Pt) > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var r;
    we = [], this.apply();
    var n = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const i of e)
      j(this, J, oi).call(this, i, n);
    this.is_fork || j(this, J, Ks).call(this), this.is_deferred() ? (j(this, J, In).call(this, n.effects), j(this, J, In).call(this, n.render_effects)) : (D = null, ts(n.render_effects), ts(n.effects), (r = p(this, Wn)) == null || r.resolve()), z = null;
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    this.previous.has(e) || this.previous.set(e, n), (e.f & yt) === 0 && (this.current.set(e, e.v), z == null || z.set(e, e.v));
  }
  activate() {
    D = this, this.apply();
  }
  deactivate() {
    D === this && (D = null, z = null);
  }
  flush() {
    if (this.activate(), we.length > 0) {
      if (Xs(), D !== null && D !== this)
        return;
    } else p(this, kt) === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const e of p(this, pn)) e(this);
    p(this, pn).clear();
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    x(this, kt, p(this, kt) + 1), e && x(this, Pt, p(this, Pt) + 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    x(this, kt, p(this, kt) - 1), e && x(this, Pt, p(this, Pt) - 1), this.revive();
  }
  revive() {
    for (const e of p(this, vn))
      p(this, _n).delete(e), te(e, le), Vt(e);
    for (const e of p(this, _n))
      te(e, Be), Vt(e);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(e) {
    p(this, hn).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    p(this, pn).add(e);
  }
  settled() {
    return (p(this, Wn) ?? x(this, Wn, Us())).promise;
  }
  static ensure() {
    if (D === null) {
      const e = D = new Tr();
      ir.add(D), Pn || Tr.enqueue(() => {
        D === e && e.flush();
      });
    }
    return D;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Pr(e);
  }
  apply() {
  }
};
hn = new WeakMap(), pn = new WeakMap(), kt = new WeakMap(), Pt = new WeakMap(), Wn = new WeakMap(), vn = new WeakMap(), _n = new WeakMap(), J = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {EffectTarget} target
 */
oi = function(e, n) {
  var u;
  e.f ^= Z;
  for (var r = e.first; r !== null; ) {
    var i = r.f, s = (i & (rt | xt)) !== 0, a = s && (i & Z) !== 0, o = a || (i & fe) !== 0 || this.skipped_effects.has(r);
    if ((r.f & Lr) !== 0 && ((u = r.b) != null && u.is_pending()) && (n = {
      parent: n,
      effect: r,
      effects: [],
      render_effects: []
    }), !o && r.fn !== null) {
      s ? r.f ^= Z : (i & Ei) !== 0 ? n.effects.push(r) : Xn(r) && ((r.f & nt) !== 0 && p(this, vn).add(r), Gn(r));
      var l = r.first;
      if (l !== null) {
        r = l;
        continue;
      }
    }
    var c = r.parent;
    for (r = r.next; r === null && c !== null; )
      c === n.effect && (j(this, J, In).call(this, n.effects), j(this, J, In).call(this, n.render_effects), n = /** @type {EffectTarget} */
      n.parent), r = c.next, c = c.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
In = function(e) {
  for (const n of e)
    (n.f & le) !== 0 ? p(this, vn).add(n) : (n.f & Be) !== 0 && p(this, _n).add(n), j(this, J, li).call(this, n.deps), te(n, Z);
}, /**
 * @param {Value[] | null} deps
 */
li = function(e) {
  if (e !== null)
    for (const n of e)
      (n.f & K) === 0 || (n.f & Bt) === 0 || (n.f ^= Bt, j(this, J, li).call(
        this,
        /** @type {Derived} */
        n.deps
      ));
}, Ks = function() {
  if (p(this, Pt) === 0) {
    for (const e of p(this, hn)) e();
    p(this, hn).clear();
  }
  p(this, kt) === 0 && j(this, J, Qs).call(this);
}, Qs = function() {
  var s;
  if (ir.size > 1) {
    this.previous.clear();
    var e = z, n = !0, r = {
      parent: null,
      effect: null,
      effects: [],
      render_effects: []
    };
    for (const a of ir) {
      if (a === this) {
        n = !1;
        continue;
      }
      const o = [];
      for (const [c, u] of this.current) {
        if (a.current.has(c))
          if (n && u !== a.current.get(c))
            a.current.set(c, u);
          else
            continue;
        o.push(c);
      }
      if (o.length === 0)
        continue;
      const l = [...a.current.keys()].filter((c) => !this.current.has(c));
      if (l.length > 0) {
        var i = we;
        we = [];
        const c = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
        for (const f of o)
          Zs(f, l, c, u);
        if (we.length > 0) {
          D = a, a.apply();
          for (const f of we)
            j(s = a, J, oi).call(s, f, r);
          a.deactivate();
        }
        we = i;
      }
    }
    D = null, z = e;
  }
  this.committed = !0, ir.delete(this);
};
let Ge = Tr;
function be(t) {
  var e = Pn;
  Pn = !0;
  try {
    for (var n; ; ) {
      if (pl(), we.length === 0 && (D == null || D.flush(), we.length === 0))
        return Dr = null, /** @type {T} */
        n;
      Xs();
    }
  } finally {
    Pn = e;
  }
}
function Xs() {
  var t = qt;
  ai = !0;
  var e = null;
  try {
    var n = 0;
    for (wr(!0); we.length > 0; ) {
      var r = Ge.ensure();
      if (n++ > 1e3) {
        var i, s;
        vl();
      }
      r.process(we), bt.clear();
    }
  } finally {
    ai = !1, wr(t), Dr = null;
  }
}
function vl() {
  try {
    il();
  } catch (t) {
    bn(t, Dr);
  }
}
let Te = null;
function ts(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if ((r.f & (tt | fe)) === 0 && Xn(r) && (Te = /* @__PURE__ */ new Set(), Gn(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ya(r) : r.fn = null), (Te == null ? void 0 : Te.size) > 0)) {
        bt.clear();
        for (const i of Te) {
          if ((i.f & (tt | fe)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Te.has(a) && (Te.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (tt | fe)) === 0 && Gn(l);
          }
        }
        Te.clear();
      }
    }
    Te = null;
  }
}
function Zs(t, e, n, r) {
  if (!n.has(t) && (n.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & K) !== 0 ? Zs(
        /** @type {Derived} */
        i,
        e,
        n,
        r
      ) : (s & (Ai | nt)) !== 0 && (s & le) === 0 && ea(i, e, r) && (te(i, le), Vt(
        /** @type {Effect} */
        i
      ));
    }
}
function ea(t, e, n) {
  const r = n.get(t);
  if (r !== void 0) return r;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (e.includes(i))
        return !0;
      if ((i.f & K) !== 0 && ea(
        /** @type {Derived} */
        i,
        e,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(t, !1), !1;
}
function Vt(t) {
  for (var e = Dr = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (ai && e === P && (n & nt) !== 0 && (n & Gs) === 0)
      return;
    if ((n & (xt | rt)) !== 0) {
      if ((n & Z) === 0) return;
      e.f ^= Z;
    }
  }
  we.push(e);
}
function _l(t) {
  let e = 0, n = Wt(0), r;
  return () => {
    qn() && (h(n), Ni(() => (e === 0 && (r = Re(() => t(() => Dn(n)))), e += 1, () => {
      Pr(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Dn(n));
      });
    })));
  };
}
var gl = gn | Kt | Lr;
function ml(t, e, n) {
  new yl(t, e, n);
}
var ge, ue, Yn, je, Dt, Fe, me, oe, qe, Qe, pt, Mt, vt, Ht, _t, Nr, B, ta, na, ci, ur, dr, ui;
class yl {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    I(this, B);
    /** @type {Boundary | null} */
    U(this, "parent");
    I(this, ge, !1);
    /** @type {TemplateNode} */
    I(this, ue);
    /** @type {TemplateNode | null} */
    I(this, Yn, L ? R : null);
    /** @type {BoundaryProps} */
    I(this, je);
    /** @type {((anchor: Node) => void)} */
    I(this, Dt);
    /** @type {Effect} */
    I(this, Fe);
    /** @type {Effect | null} */
    I(this, me, null);
    /** @type {Effect | null} */
    I(this, oe, null);
    /** @type {Effect | null} */
    I(this, qe, null);
    /** @type {DocumentFragment | null} */
    I(this, Qe, null);
    /** @type {TemplateNode | null} */
    I(this, pt, null);
    I(this, Mt, 0);
    I(this, vt, 0);
    I(this, Ht, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    I(this, _t, null);
    I(this, Nr, _l(() => (x(this, _t, Wt(p(this, Mt))), () => {
      x(this, _t, null);
    })));
    x(this, ue, e), x(this, je, n), x(this, Dt, r), this.parent = /** @type {Effect} */
    P.b, x(this, ge, !!p(this, je).pending), x(this, Fe, Ci(() => {
      if (P.b = this, L) {
        const s = p(this, Yn);
        mn(), /** @type {Comment} */
        s.nodeType === Qt && /** @type {Comment} */
        s.data === Rr ? j(this, B, na).call(this) : j(this, B, ta).call(this);
      } else {
        var i = j(this, B, ci).call(this);
        try {
          x(this, me, Ee(() => r(i)));
        } catch (s) {
          this.error(s);
        }
        p(this, vt) > 0 ? j(this, B, dr).call(this) : x(this, ge, !1);
      }
      return () => {
        var s;
        (s = p(this, pt)) == null || s.remove();
      };
    }, gl)), L && x(this, ue, R);
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return p(this, ge) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!p(this, je).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    j(this, B, ui).call(this, e), x(this, Mt, p(this, Mt) + e), p(this, _t) && wn(p(this, _t), p(this, Mt));
  }
  get_effect_pending() {
    return p(this, Nr).call(this), h(
      /** @type {Source<number>} */
      p(this, _t)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = p(this, je).onerror;
    let r = p(this, je).failed;
    if (p(this, Ht) || !n && !r)
      throw e;
    p(this, me) && (se(p(this, me)), x(this, me, null)), p(this, oe) && (se(p(this, oe)), x(this, oe, null)), p(this, qe) && (se(p(this, qe)), x(this, qe, null)), L && (ie(
      /** @type {TemplateNode} */
      p(this, Yn)
    ), dl(), ie(yr()));
    var i = !1, s = !1;
    const a = () => {
      if (i) {
        ul();
        return;
      }
      i = !0, s && cl(), Ge.ensure(), x(this, Mt, 0), p(this, qe) !== null && Ft(p(this, qe), () => {
        x(this, qe, null);
      }), x(this, ge, this.has_pending_snippet()), x(this, me, j(this, B, ur).call(this, () => (x(this, Ht, !1), Ee(() => p(this, Dt).call(this, p(this, ue)))))), p(this, vt) > 0 ? j(this, B, dr).call(this) : x(this, ge, !1);
    };
    var o = C;
    try {
      ee(null), s = !0, n == null || n(e, a), s = !1;
    } catch (l) {
      bn(l, p(this, Fe) && p(this, Fe).parent);
    } finally {
      ee(o);
    }
    r && Pr(() => {
      x(this, qe, j(this, B, ur).call(this, () => {
        Ge.ensure(), x(this, Ht, !0);
        try {
          return Ee(() => {
            r(
              p(this, ue),
              () => e,
              () => a
            );
          });
        } catch (l) {
          return bn(
            l,
            /** @type {Effect} */
            p(this, Fe).parent
          ), null;
        } finally {
          x(this, Ht, !1);
        }
      }));
    });
  }
}
ge = new WeakMap(), ue = new WeakMap(), Yn = new WeakMap(), je = new WeakMap(), Dt = new WeakMap(), Fe = new WeakMap(), me = new WeakMap(), oe = new WeakMap(), qe = new WeakMap(), Qe = new WeakMap(), pt = new WeakMap(), Mt = new WeakMap(), vt = new WeakMap(), Ht = new WeakMap(), _t = new WeakMap(), Nr = new WeakMap(), B = new WeakSet(), ta = function() {
  try {
    x(this, me, Ee(() => p(this, Dt).call(this, p(this, ue))));
  } catch (e) {
    this.error(e);
  }
  x(this, ge, !1);
}, na = function() {
  const e = p(this, je).pending;
  e && (x(this, oe, Ee(() => e(p(this, ue)))), Ge.enqueue(() => {
    var n = j(this, B, ci).call(this);
    x(this, me, j(this, B, ur).call(this, () => (Ge.ensure(), Ee(() => p(this, Dt).call(this, n))))), p(this, vt) > 0 ? j(this, B, dr).call(this) : (Ft(
      /** @type {Effect} */
      p(this, oe),
      () => {
        x(this, oe, null);
      }
    ), x(this, ge, !1));
  }));
}, ci = function() {
  var e = p(this, ue);
  return p(this, ge) && (x(this, pt, $e()), p(this, ue).before(p(this, pt)), e = p(this, pt)), e;
}, /**
 * @param {() => Effect | null} fn
 */
ur = function(e) {
  var n = P, r = C, i = he;
  Ae(p(this, Fe)), ee(p(this, Fe)), yn(p(this, Fe).ctx);
  try {
    return e();
  } catch (s) {
    return Js(s), null;
  } finally {
    Ae(n), ee(r), yn(i);
  }
}, dr = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    p(this, je).pending
  );
  p(this, me) !== null && (x(this, Qe, document.createDocumentFragment()), p(this, Qe).append(
    /** @type {TemplateNode} */
    p(this, pt)
  ), Ea(p(this, me), p(this, Qe))), p(this, oe) === null && x(this, oe, Ee(() => e(p(this, ue))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
ui = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && j(n = this.parent, B, ui).call(n, e);
    return;
  }
  x(this, vt, p(this, vt) + e), p(this, vt) === 0 && (x(this, ge, !1), p(this, oe) && Ft(p(this, oe), () => {
    x(this, oe, null);
  }), p(this, Qe) && (p(this, ue).before(p(this, Qe)), x(this, Qe, null)));
};
function bl(t, e, n, r) {
  const i = Mr;
  if (n.length === 0 && t.length === 0) {
    r(e.map(i));
    return;
  }
  var s = D, a = (
    /** @type {Effect} */
    P
  ), o = wl();
  function l() {
    Promise.all(n.map((c) => /* @__PURE__ */ El(c))).then((c) => {
      o();
      try {
        r([...e.map(i), ...c]);
      } catch (u) {
        (a.f & tt) === 0 && bn(u, a);
      }
      s == null || s.deactivate(), br();
    }).catch((c) => {
      bn(c, a);
    });
  }
  t.length > 0 ? Promise.all(t).then(() => {
    o();
    try {
      return l();
    } finally {
      s == null || s.deactivate(), br();
    }
  }) : l();
}
function wl() {
  var t = P, e = C, n = he, r = D;
  return function(s = !0) {
    Ae(t), ee(e), yn(n), s && (r == null || r.activate());
  };
}
function br() {
  Ae(null), ee(null), yn(null);
}
// @__NO_SIDE_EFFECTS__
function Mr(t) {
  var e = K | le, n = C !== null && (C.f & K) !== 0 ? (
    /** @type {Derived} */
    C
  ) : null;
  return P !== null && (P.f |= Kt), {
    ctx: he,
    deps: null,
    effects: null,
    equals: Bs,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      X
    ),
    wv: 0,
    parent: n ?? P,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function El(t, e) {
  let n = (
    /** @type {Effect | null} */
    P
  );
  n === null && el();
  var r = (
    /** @type {Boundary} */
    n.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = Wt(
    /** @type {V} */
    X
  ), a = !C, o = /* @__PURE__ */ new Map();
  return Rl(() => {
    var _;
    var l = Us();
    i = l.promise;
    try {
      Promise.resolve(t()).then(l.resolve, l.reject).then(() => {
        c === D && c.committed && c.deactivate(), br();
      });
    } catch (w) {
      l.reject(w), br();
    }
    var c = (
      /** @type {Batch} */
      D
    );
    if (a) {
      var u = !r.is_pending();
      r.update_pending_count(1), c.increment(u), (_ = o.get(c)) == null || _.reject(cn), o.delete(c), o.set(c, l);
    }
    const f = (w, y = void 0) => {
      if (c.activate(), y)
        y !== cn && (s.f |= yt, wn(s, y));
      else {
        (s.f & yt) !== 0 && (s.f ^= yt), wn(s, w);
        for (const [O, d] of o) {
          if (o.delete(O), O === c) break;
          d.reject(cn);
        }
      }
      a && (r.update_pending_count(-1), c.decrement(u));
    };
    l.promise.then(f, (w) => f(null, w || "unknown"));
  }), Tl(() => {
    for (const l of o.values())
      l.reject(cn);
  }), new Promise((l) => {
    function c(u) {
      function f() {
        u === i ? l(s) : c(i);
      }
      u.then(f, f);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function Nn(t) {
  const e = /* @__PURE__ */ Mr(t);
  return $a(e), e;
}
// @__NO_SIDE_EFFECTS__
function $l(t) {
  const e = /* @__PURE__ */ Mr(t);
  return e.equals = Vs, e;
}
function ra(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      se(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Al(t) {
  for (var e = t.parent; e !== null; ) {
    if ((e.f & K) === 0)
      return (e.f & tt) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function Ti(t) {
  var e, n = P;
  Ae(Al(t));
  try {
    t.f &= ~Bt, ra(t), e = Sa(t);
  } finally {
    Ae(n);
  }
  return e;
}
function ia(t) {
  var e = Ti(t);
  if (t.equals(e) || (D != null && D.is_fork || (t.v = e), t.wv = Oa()), !Xt)
    if (z !== null)
      (qn() || D != null && D.is_fork) && z.set(t, e);
    else {
      var n = (t.f & De) === 0 ? Be : Z;
      te(t, n);
    }
}
let di = /* @__PURE__ */ new Set();
const bt = /* @__PURE__ */ new Map();
let sa = !1;
function Wt(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Bs,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function M(t, e) {
  const n = Wt(t);
  return $a(n), n;
}
// @__NO_SIDE_EFFECTS__
function aa(t, e = !1, n = !0) {
  const r = Wt(t);
  return e || (r.equals = Vs), r;
}
function A(t, e, n = !1) {
  C !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!ze || (C.f & es) !== 0) && Ws() && (C.f & (K | nt | Ai | es)) !== 0 && !(ae != null && ae.includes(t)) && ll();
  let r = n ? Ze(e) : e;
  return wn(t, r);
}
function wn(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Xt ? bt.set(t, e) : bt.set(t, n), t.v = e;
    var r = Ge.ensure();
    r.capture(t, n), (t.f & K) !== 0 && ((t.f & le) !== 0 && Ti(
      /** @type {Derived} */
      t
    ), te(t, (t.f & De) !== 0 ? Z : Be)), t.wv = Oa(), oa(t, le), P !== null && (P.f & Z) !== 0 && (P.f & (rt | xt)) === 0 && (ve === null ? Ll([t]) : ve.push(t)), !r.is_fork && di.size > 0 && !sa && Ol();
  }
  return e;
}
function Ol() {
  sa = !1;
  var t = qt;
  wr(!0);
  const e = Array.from(di);
  try {
    for (const n of e)
      (n.f & Z) !== 0 && te(n, Be), Xn(n) && Gn(n);
  } finally {
    wr(t);
  }
  di.clear();
}
function Dn(t) {
  A(t, t.v + 1);
}
function oa(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = n.length, i = 0; i < r; i++) {
      var s = n[i], a = s.f, o = (a & le) === 0;
      if (o && te(s, e), (a & K) !== 0) {
        var l = (
          /** @type {Derived} */
          s
        );
        z == null || z.delete(l), (a & Bt) === 0 && (a & De && (s.f |= Bt), oa(l, Be));
      } else o && ((a & nt) !== 0 && Te !== null && Te.add(
        /** @type {Effect} */
        s
      ), Vt(
        /** @type {Effect} */
        s
      ));
    }
}
function Ze(t) {
  if (typeof t != "object" || t === null || cr in t)
    return t;
  const e = qs(t);
  if (e !== Vo && e !== Wo)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Fs(t), i = /* @__PURE__ */ M(0), s = Ut, a = (o) => {
    if (Ut === s)
      return o();
    var l = C, c = Ut;
    ee(null), ss(s);
    var u = o();
    return ee(l), ss(c), u;
  };
  return r && n.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && al();
        var u = n.get(l);
        return u === void 0 ? u = a(() => {
          var f = /* @__PURE__ */ M(c.value);
          return n.set(l, f), f;
        }) : A(u, c.value, !0), !0;
      },
      deleteProperty(o, l) {
        var c = n.get(l);
        if (c === void 0) {
          if (l in o) {
            const u = a(() => /* @__PURE__ */ M(X));
            n.set(l, u), Dn(i);
          }
        } else
          A(c, X), Dn(i);
        return !0;
      },
      get(o, l, c) {
        var w;
        if (l === cr)
          return t;
        var u = n.get(l), f = l in o;
        if (u === void 0 && (!f || (w = dn(o, l)) != null && w.writable) && (u = a(() => {
          var y = Ze(f ? o[l] : X), O = /* @__PURE__ */ M(y);
          return O;
        }), n.set(l, u)), u !== void 0) {
          var _ = h(u);
          return _ === X ? void 0 : _;
        }
        return Reflect.get(o, l, c);
      },
      getOwnPropertyDescriptor(o, l) {
        var c = Reflect.getOwnPropertyDescriptor(o, l);
        if (c && "value" in c) {
          var u = n.get(l);
          u && (c.value = h(u));
        } else if (c === void 0) {
          var f = n.get(l), _ = f == null ? void 0 : f.v;
          if (f !== void 0 && _ !== X)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return c;
      },
      has(o, l) {
        var _;
        if (l === cr)
          return !0;
        var c = n.get(l), u = c !== void 0 && c.v !== X || Reflect.has(o, l);
        if (c !== void 0 || P !== null && (!u || (_ = dn(o, l)) != null && _.writable)) {
          c === void 0 && (c = a(() => {
            var w = u ? Ze(o[l]) : X, y = /* @__PURE__ */ M(w);
            return y;
          }), n.set(l, c));
          var f = h(c);
          if (f === X)
            return !1;
        }
        return u;
      },
      set(o, l, c, u) {
        var m;
        var f = n.get(l), _ = l in o;
        if (r && l === "length")
          for (var w = c; w < /** @type {Source<number>} */
          f.v; w += 1) {
            var y = n.get(w + "");
            y !== void 0 ? A(y, X) : w in o && (y = a(() => /* @__PURE__ */ M(X)), n.set(w + "", y));
          }
        if (f === void 0)
          (!_ || (m = dn(o, l)) != null && m.writable) && (f = a(() => /* @__PURE__ */ M(void 0)), A(f, Ze(c)), n.set(l, f));
        else {
          _ = f.v !== X;
          var O = a(() => Ze(c));
          A(f, O);
        }
        var d = Reflect.getOwnPropertyDescriptor(o, l);
        if (d != null && d.set && d.set.call(u, c), !_) {
          if (r && typeof l == "string") {
            var v = (
              /** @type {Source<number>} */
              n.get("length")
            ), g = Number(l);
            Number.isInteger(g) && g >= v.v && A(v, g + 1);
          }
          Dn(i);
        }
        return !0;
      },
      ownKeys(o) {
        h(i);
        var l = Reflect.ownKeys(o).filter((f) => {
          var _ = n.get(f);
          return _ === void 0 || _.v !== X;
        });
        for (var [c, u] of n)
          u.v !== X && !(c in o) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        ol();
      }
    }
  );
}
var ns, la, ca, ua;
function fi() {
  if (ns === void 0) {
    ns = window, la = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ca = dn(e, "firstChild").get, ua = dn(e, "nextSibling").get, Zi(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Zi(n) && (n.__t = void 0);
  }
}
function $e(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Pe(t) {
  return (
    /** @type {TemplateNode | null} */
    ca.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function Me(t) {
  return (
    /** @type {TemplateNode | null} */
    ua.call(t)
  );
}
function lt(t, e) {
  if (!L)
    return /* @__PURE__ */ Pe(t);
  var n = /* @__PURE__ */ Pe(R);
  if (n === null)
    n = R.appendChild($e());
  else if (e && n.nodeType !== Oi) {
    var r = $e();
    return n == null || n.before(r), ie(r), r;
  }
  return ie(n), n;
}
function rs(t, e = !1) {
  if (!L) {
    var n = /* @__PURE__ */ Pe(t);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Me(n) : n;
  }
  if (e && (R == null ? void 0 : R.nodeType) !== Oi) {
    var r = $e();
    return R == null || R.before(r), ie(r), r;
  }
  return R;
}
function Nt(t, e = 1, n = !1) {
  let r = L ? R : t;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ Me(r);
  if (!L)
    return r;
  if (n && (r == null ? void 0 : r.nodeType) !== Oi) {
    var s = $e();
    return r === null ? i == null || i.after(s) : r.before(s), ie(s), s;
  }
  return ie(r), r;
}
function da(t) {
  t.textContent = "";
}
function fa() {
  return !1;
}
function ha(t) {
  var e = C, n = P;
  ee(null), Ae(null);
  try {
    return t();
  } finally {
    ee(e), Ae(n);
  }
}
function xl(t) {
  P === null && (C === null && rl(), nl()), Xt && tl();
}
function Sl(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Ve(t, e, n) {
  var r = P;
  r !== null && (r.f & fe) !== 0 && (t |= fe);
  var i = {
    ctx: he,
    deps: null,
    nodes: null,
    f: t | le | De,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Gn(i), i.f |= kr;
    } catch (o) {
      throw se(i), o;
    }
  else e !== null && Vt(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Kt) === 0 && (s = s.first, (t & nt) !== 0 && (t & gn) !== 0 && s !== null && (s.f |= gn)), s !== null && (s.parent = r, r !== null && Sl(s, r), C !== null && (C.f & K) !== 0 && (t & xt) === 0)) {
    var a = (
      /** @type {Derived} */
      C
    );
    (a.effects ?? (a.effects = [])).push(s);
  }
  return i;
}
function qn() {
  return C !== null && !ze;
}
function Tl(t) {
  const e = Ve($i, null, !1);
  return te(e, Z), e.teardown = t, e;
}
function fn(t) {
  xl();
  var e = (
    /** @type {Effect} */
    P.f
  ), n = !C && (e & rt) !== 0 && (e & kr) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      he
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return pa(t);
}
function pa(t) {
  return Ve(Ei | Ko, t, !1);
}
function Nl(t) {
  Ge.ensure();
  const e = Ve(xt | Kt, t, !0);
  return () => {
    se(e);
  };
}
function Cl(t) {
  Ge.ensure();
  const e = Ve(xt | Kt, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Ft(e, () => {
      se(e), r(void 0);
    }) : (se(e), r(void 0));
  });
}
function va(t) {
  return Ve(Ei, t, !1);
}
function Rl(t) {
  return Ve(Ai | Kt, t, !0);
}
function Ni(t, e = 0) {
  return Ve($i | e, t, !0);
}
function Je(t, e = [], n = [], r = []) {
  bl(r, e, n, (i) => {
    Ve($i, () => t(...i.map(h)), !0);
  });
}
function Ci(t, e = 0) {
  var n = Ve(nt | e, t, !0);
  return n;
}
function Ee(t) {
  return Ve(rt | Kt, t, !0);
}
function _a(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Xt, r = C;
    is(!0), ee(null);
    try {
      e.call(null);
    } finally {
      is(n), ee(r);
    }
  }
}
function ga(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ha(() => {
      i.abort(cn);
    });
    var r = n.next;
    (n.f & xt) !== 0 ? n.parent = null : se(n, e), n = r;
  }
}
function Il(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    (e.f & rt) === 0 && se(e), e = n;
  }
}
function se(t, e = !0) {
  var n = !1;
  (e || (t.f & Gs) !== 0) && t.nodes !== null && t.nodes.end !== null && (ma(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), n = !0), ga(t, e && !n), Er(t, 0), te(t, tt);
  var r = t.nodes && t.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  _a(t);
  var i = t.parent;
  i !== null && i.first !== null && ya(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = null;
}
function ma(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : /* @__PURE__ */ Me(t);
    t.remove(), t = n;
  }
}
function ya(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Ft(t, e, n = !0) {
  var r = [];
  ba(t, r, !0);
  var i = () => {
    n && se(t), e && e();
  }, s = r.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of r)
      o.out(a);
  } else
    i();
}
function ba(t, e, n) {
  if ((t.f & fe) === 0) {
    t.f ^= fe;
    var r = t.nodes && t.nodes.t;
    if (r !== null)
      for (const o of r)
        (o.is_global || n) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next, a = (i.f & gn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & rt) !== 0 && (t.f & nt) !== 0;
      ba(i, e, a ? n : !1), i = s;
    }
  }
}
function Ri(t) {
  wa(t, !0);
}
function wa(t, e) {
  if ((t.f & fe) !== 0) {
    t.f ^= fe, (t.f & Z) === 0 && (te(t, le), Vt(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & gn) !== 0 || (n.f & rt) !== 0;
      wa(n, i ? e : !1), n = r;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function Ea(t, e) {
  if (t.nodes)
    for (var n = t.nodes.start, r = t.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Me(n);
      e.append(n), n = i;
    }
}
let qt = !1;
function wr(t) {
  qt = t;
}
let Xt = !1;
function is(t) {
  Xt = t;
}
let C = null, ze = !1;
function ee(t) {
  C = t;
}
let P = null;
function Ae(t) {
  P = t;
}
let ae = null;
function $a(t) {
  C !== null && (ae === null ? ae = [t] : ae.push(t));
}
let re = null, ce = 0, ve = null;
function Ll(t) {
  ve = t;
}
let Aa = 1, Un = 0, Ut = Un;
function ss(t) {
  Ut = t;
}
function Oa() {
  return ++Aa;
}
function Xn(t) {
  var e = t.f;
  if ((e & le) !== 0)
    return !0;
  if (e & K && (t.f &= ~Bt), (e & Be) !== 0) {
    var n = t.deps;
    if (n !== null)
      for (var r = n.length, i = 0; i < r; i++) {
        var s = n[i];
        if (Xn(
          /** @type {Derived} */
          s
        ) && ia(
          /** @type {Derived} */
          s
        ), s.wv > t.wv)
          return !0;
      }
    (e & De) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    z === null && te(t, Z);
  }
  return !1;
}
function xa(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(ae != null && ae.includes(t)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & K) !== 0 ? xa(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (n ? te(s, le) : (s.f & Z) !== 0 && te(s, Be), Vt(
        /** @type {Effect} */
        s
      ));
    }
}
function Sa(t) {
  var y;
  var e = re, n = ce, r = ve, i = C, s = ae, a = he, o = ze, l = Ut, c = t.f;
  re = /** @type {null | Value[]} */
  null, ce = 0, ve = null, C = (c & (rt | xt)) === 0 ? t : null, ae = null, yn(t.ctx), ze = !1, Ut = ++Un, t.ac !== null && (ha(() => {
    t.ac.abort(cn);
  }), t.ac = null);
  try {
    t.f |= si;
    var u = (
      /** @type {Function} */
      t.fn
    ), f = u(), _ = t.deps;
    if (re !== null) {
      var w;
      if (Er(t, ce), _ !== null && ce > 0)
        for (_.length = ce + re.length, w = 0; w < re.length; w++)
          _[ce + w] = re[w];
      else
        t.deps = _ = re;
      if (qn() && (t.f & De) !== 0)
        for (w = ce; w < _.length; w++)
          ((y = _[w]).reactions ?? (y.reactions = [])).push(t);
    } else _ !== null && ce < _.length && (Er(t, ce), _.length = ce);
    if (Ws() && ve !== null && !ze && _ !== null && (t.f & (K | Be | le)) === 0)
      for (w = 0; w < /** @type {Source[]} */
      ve.length; w++)
        xa(
          ve[w],
          /** @type {Effect} */
          t
        );
    return i !== null && i !== t && (Un++, ve !== null && (r === null ? r = ve : r.push(.../** @type {Source[]} */
    ve))), (t.f & yt) !== 0 && (t.f ^= yt), f;
  } catch (O) {
    return Js(O);
  } finally {
    t.f ^= si, re = e, ce = n, ve = r, C = i, ae = s, yn(a), ze = o, Ut = l;
  }
}
function kl(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = zo.call(n, t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && (e.f & K) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (re === null || !re.includes(e)) && (te(e, Be), (e.f & De) !== 0 && (e.f ^= De, e.f &= ~Bt), ra(
    /** @type {Derived} **/
    e
  ), Er(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Er(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      kl(t, n[r]);
}
function Gn(t) {
  var e = t.f;
  if ((e & tt) === 0) {
    te(t, Z);
    var n = P, r = qt;
    P = t, qt = !0;
    try {
      (e & (nt | Jo)) !== 0 ? Il(t) : ga(t), _a(t);
      var i = Sa(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Aa;
      var s;
      ii && hl && (t.f & le) !== 0 && t.deps;
    } finally {
      qt = r, P = n;
    }
  }
}
function h(t) {
  var e = t.f, n = (e & K) !== 0;
  if (C !== null && !ze) {
    var r = P !== null && (P.f & tt) !== 0;
    if (!r && !(ae != null && ae.includes(t))) {
      var i = C.deps;
      if ((C.f & si) !== 0)
        t.rv < Un && (t.rv = Un, re === null && i !== null && i[ce] === t ? ce++ : re === null ? re = [t] : re.includes(t) || re.push(t));
      else {
        (C.deps ?? (C.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [C] : s.includes(C) || s.push(C);
      }
    }
  }
  if (Xt) {
    if (bt.has(t))
      return bt.get(t);
    if (n) {
      var a = (
        /** @type {Derived} */
        t
      ), o = a.v;
      return ((a.f & Z) === 0 && a.reactions !== null || Na(a)) && (o = Ti(a)), bt.set(a, o), o;
    }
  } else n && (!(z != null && z.has(t)) || D != null && D.is_fork && !qn()) && (a = /** @type {Derived} */
  t, Xn(a) && ia(a), qt && qn() && (a.f & De) === 0 && Ta(a));
  if (z != null && z.has(t))
    return z.get(t);
  if ((t.f & yt) !== 0)
    throw t.v;
  return t.v;
}
function Ta(t) {
  if (t.deps !== null) {
    t.f ^= De;
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & K) !== 0 && (e.f & De) === 0 && Ta(
        /** @type {Derived} */
        e
      );
  }
}
function Na(t) {
  if (t.v === X) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (bt.has(e) || (e.f & K) !== 0 && Na(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Re(t) {
  var e = ze;
  try {
    return ze = !0, t();
  } finally {
    ze = e;
  }
}
const Pl = -7169;
function te(t, e) {
  t.f = t.f & Pl | e;
}
const Ca = /* @__PURE__ */ new Set(), hi = /* @__PURE__ */ new Set();
function Dl(t) {
  for (var e = 0; e < t.length; e++)
    Ca.add(t[e]);
  for (var n of hi)
    n(t);
}
let as = null;
function sr(t) {
  var d;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((d = t.composedPath) == null ? void 0 : d.call(t)) || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  as = t;
  var a = 0, o = as === t && t.__root;
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    mr(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var u = C, f = P;
    ee(null), Ae(null);
    try {
      for (var _, w = []; s !== null; ) {
        var y = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var O = s["__" + r];
          O != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && O.call(s, t);
        } catch (v) {
          _ ? w.push(v) : _ = v;
        }
        if (t.cancelBubble || y === e || y === null)
          break;
        s = y;
      }
      if (_) {
        for (let v of w)
          queueMicrotask(() => {
            throw v;
          });
        throw _;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ee(u), Ae(f);
    }
  }
}
function Ra(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function wt(t, e) {
  var n = (
    /** @type {Effect} */
    P
  );
  n.nodes === null && (n.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function it(t, e) {
  var n = (e & qo) !== 0, r = (e & Uo) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    if (L)
      return wt(R, null), R;
    i === void 0 && (i = Ra(s ? t : "<!>" + t), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Pe(i)));
    var a = (
      /** @type {TemplateNode} */
      r || la ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pe(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      wt(o, l);
    } else
      wt(a, a);
    return a;
  };
}
function os() {
  if (L)
    return wt(R, null), R;
  var t = document.createDocumentFragment(), e = document.createComment(""), n = $e();
  return t.append(e, n), wt(e, n), t;
}
function _e(t, e) {
  if (L) {
    var n = (
      /** @type {Effect & { nodes: EffectNodes }} */
      P
    );
    ((n.f & kr) === 0 || n.nodes.end === null) && (n.nodes.end = R), mn();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const Ml = ["touchstart", "touchmove"];
function Hl(t) {
  return Ml.includes(t);
}
function jl(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function Ia(t, e) {
  return La(t, e);
}
function Fl(t, e) {
  fi(), e.intro = e.intro ?? !1;
  const n = e.target, r = L, i = R;
  try {
    for (var s = /* @__PURE__ */ Pe(n); s && (s.nodeType !== Qt || /** @type {Comment} */
    s.data !== js); )
      s = /* @__PURE__ */ Me(s);
    if (!s)
      throw zt;
    ke(!0), ie(
      /** @type {Comment} */
      s
    );
    const a = La(t, { ...e, anchor: s });
    return ke(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a instanceof Error && a.message.split(`
`).some((o) => o.startsWith("https://svelte.dev/e/")))
      throw a;
    return a !== zt && console.warn("Failed to hydrate: ", a), e.recover === !1 && sl(), fi(), da(n), ke(!1), Ia(t, e);
  } finally {
    ke(r), ie(i);
  }
}
const sn = /* @__PURE__ */ new Map();
function La(t, { target: e, anchor: n, props: r = {}, events: i, context: s, intro: a = !0 }) {
  fi();
  var o = /* @__PURE__ */ new Set(), l = (f) => {
    for (var _ = 0; _ < f.length; _++) {
      var w = f[_];
      if (!o.has(w)) {
        o.add(w);
        var y = Hl(w);
        e.addEventListener(w, sr, { passive: y });
        var O = sn.get(w);
        O === void 0 ? (document.addEventListener(w, sr, { passive: y }), sn.set(w, 1)) : sn.set(w, O + 1);
      }
    }
  };
  l(Ir(Ca)), hi.add(l);
  var c = void 0, u = Cl(() => {
    var f = n ?? e.appendChild($e());
    return ml(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (_) => {
        if (s) {
          xi({});
          var w = (
            /** @type {ComponentContext} */
            he
          );
          w.c = s;
        }
        if (i && (r.$$events = i), L && wt(
          /** @type {TemplateNode} */
          _,
          null
        ), c = t(_, r) || {}, L && (P.nodes.end = R, R === null || R.nodeType !== Qt || /** @type {Comment} */
        R.data !== wi))
          throw Qn(), zt;
        s && Si();
      }
    ), () => {
      var y;
      for (var _ of o) {
        e.removeEventListener(_, sr);
        var w = (
          /** @type {number} */
          sn.get(_)
        );
        --w === 0 ? (document.removeEventListener(_, sr), sn.delete(_)) : sn.set(_, w);
      }
      hi.delete(l), f !== n && ((y = f.parentNode) == null || y.removeChild(f));
    };
  });
  return pi.set(c, u), c;
}
let pi = /* @__PURE__ */ new WeakMap();
function ql(t, e) {
  const n = pi.get(t);
  return n ? (pi.delete(t), n(e)) : Promise.resolve();
}
var Ce, Ue, de, jt, Jn, Kn, Cr;
class Ul {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, n = !0) {
    /** @type {TemplateNode} */
    U(this, "anchor");
    /** @type {Map<Batch, Key>} */
    I(this, Ce, /* @__PURE__ */ new Map());
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
    I(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    I(this, de, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    I(this, jt, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    I(this, Jn, !0);
    I(this, Kn, () => {
      var e = (
        /** @type {Batch} */
        D
      );
      if (p(this, Ce).has(e)) {
        var n = (
          /** @type {Key} */
          p(this, Ce).get(e)
        ), r = p(this, Ue).get(n);
        if (r)
          Ri(r), p(this, jt).delete(n);
        else {
          var i = p(this, de).get(n);
          i && (p(this, Ue).set(n, i.effect), p(this, de).delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
        }
        for (const [s, a] of p(this, Ce)) {
          if (p(this, Ce).delete(s), s === e)
            break;
          const o = p(this, de).get(a);
          o && (se(o.effect), p(this, de).delete(a));
        }
        for (const [s, a] of p(this, Ue)) {
          if (s === n || p(this, jt).has(s)) continue;
          const o = () => {
            if (Array.from(p(this, Ce).values()).includes(s)) {
              var c = document.createDocumentFragment();
              Ea(a, c), c.append($e()), p(this, de).set(s, { effect: a, fragment: c });
            } else
              se(a);
            p(this, jt).delete(s), p(this, Ue).delete(s);
          };
          p(this, Jn) || !r ? (p(this, jt).add(s), Ft(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    I(this, Cr, (e) => {
      p(this, Ce).delete(e);
      const n = Array.from(p(this, Ce).values());
      for (const [r, i] of p(this, de))
        n.includes(r) || (se(i.effect), p(this, de).delete(r));
    });
    this.anchor = e, x(this, Jn, n);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, n) {
    var r = (
      /** @type {Batch} */
      D
    ), i = fa();
    if (n && !p(this, Ue).has(e) && !p(this, de).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = $e();
        s.append(a), p(this, de).set(e, {
          effect: Ee(() => n(a)),
          fragment: s
        });
      } else
        p(this, Ue).set(
          e,
          Ee(() => n(this.anchor))
        );
    if (p(this, Ce).set(r, e), i) {
      for (const [o, l] of p(this, Ue))
        o === e ? r.skipped_effects.delete(l) : r.skipped_effects.add(l);
      for (const [o, l] of p(this, de))
        o === e ? r.skipped_effects.delete(l.effect) : r.skipped_effects.add(l.effect);
      r.oncommit(p(this, Kn)), r.ondiscard(p(this, Cr));
    } else
      L && (this.anchor = R), p(this, Kn).call(this);
  }
}
Ce = new WeakMap(), Ue = new WeakMap(), de = new WeakMap(), jt = new WeakMap(), Jn = new WeakMap(), Kn = new WeakMap(), Cr = new WeakMap();
function ka(t) {
  he === null && Zo(), fn(() => {
    const e = Re(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function ct(t, e, n = !1) {
  L && mn();
  var r = new Ul(t), i = n ? gn : 0;
  function s(a, o) {
    if (L) {
      const c = zs(t) === Rr;
      if (a === c) {
        var l = yr();
        ie(l), r.anchor = l, ke(!1), r.ensure(a, o), ke(!0);
        return;
      }
    }
    r.ensure(a, o);
  }
  Ci(() => {
    var a = !1;
    e((o, l = !0) => {
      a = !0, s(l, o);
    }), a || s(!1, null);
  }, i);
}
function Gl(t, e, n) {
  for (var r = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let f = e[o];
    Ft(
      f,
      () => {
        if (s) {
          if (s.pending.delete(f), s.done.add(f), s.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            vi(Ir(s.done)), _.delete(s), _.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = r.length === 0 && n !== null;
    if (l) {
      var c = (
        /** @type {Element} */
        n
      ), u = (
        /** @type {Element} */
        c.parentNode
      );
      da(u), u.append(c), t.items.clear();
    }
    vi(e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function vi(t, e = !0) {
  for (var n = 0; n < t.length; n++)
    se(t[n], e);
}
var ls;
function zl(t, e, n, r, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      t
    );
    a = L ? ie(/* @__PURE__ */ Pe(l)) : l.appendChild($e());
  }
  L && mn();
  var c = null, u = /* @__PURE__ */ $l(() => {
    var d = n();
    return Fs(d) ? d : d == null ? [] : Ir(d);
  }), f, _ = !0;
  function w() {
    O.fallback = c, Bl(O, f, a, e, r), c !== null && (f.length === 0 ? (c.f & gt) === 0 ? Ri(c) : (c.f ^= gt, Ln(c, null, a)) : Ft(c, () => {
      c = null;
    }));
  }
  var y = Ci(() => {
    f = /** @type {V[]} */
    h(u);
    var d = f.length;
    let v = !1;
    if (L) {
      var g = zs(a) === Rr;
      g !== (d === 0) && (a = yr(), ie(a), ke(!1), v = !0);
    }
    for (var m = /* @__PURE__ */ new Set(), S = (
      /** @type {Batch} */
      D
    ), T = fa(), N = 0; N < d; N += 1) {
      L && R.nodeType === Qt && /** @type {Comment} */
      R.data === wi && (a = /** @type {Comment} */
      R, v = !0, ke(!1));
      var k = f[N], q = r(k, N), H = _ ? null : o.get(q);
      H ? (H.v && wn(H.v, k), H.i && wn(H.i, N), T && S.skipped_effects.delete(H.e)) : (H = Vl(
        o,
        _ ? a : ls ?? (ls = $e()),
        k,
        q,
        N,
        i,
        e,
        n
      ), _ || (H.e.f |= gt), o.set(q, H)), m.add(q);
    }
    if (d === 0 && s && !c && (_ ? c = Ee(() => s(a)) : (c = Ee(() => s(ls ?? (ls = $e()))), c.f |= gt)), L && d > 0 && ie(yr()), !_)
      if (T) {
        for (const [nr, An] of o)
          m.has(nr) || S.skipped_effects.add(An.e);
        S.oncommit(w), S.ondiscard(() => {
        });
      } else
        w();
    v && ke(!0), h(u);
  }), O = { effect: y, items: o, outrogroups: null, fallback: c };
  _ = !1, L && (a = R);
}
function Bl(t, e, n, r, i) {
  var q;
  var s = e.length, a = t.items, o = t.effect.first, l, c = null, u = [], f = [], _, w, y, O;
  for (O = 0; O < s; O += 1) {
    if (_ = e[O], w = i(_, O), y = /** @type {EachItem} */
    a.get(w).e, t.outrogroups !== null)
      for (const H of t.outrogroups)
        H.pending.delete(y), H.done.delete(y);
    if ((y.f & gt) !== 0)
      if (y.f ^= gt, y === o)
        Ln(y, null, n);
      else {
        var d = c ? c.next : o;
        y === t.effect.last && (t.effect.last = y.prev), y.prev && (y.prev.next = y.next), y.next && (y.next.prev = y.prev), at(t, c, y), at(t, y, d), Ln(y, d, n), c = y, u = [], f = [], o = c.next;
        continue;
      }
    if ((y.f & fe) !== 0 && Ri(y), y !== o) {
      if (l !== void 0 && l.has(y)) {
        if (u.length < f.length) {
          var v = f[0], g;
          c = v.prev;
          var m = u[0], S = u[u.length - 1];
          for (g = 0; g < u.length; g += 1)
            Ln(u[g], v, n);
          for (g = 0; g < f.length; g += 1)
            l.delete(f[g]);
          at(t, m.prev, S.next), at(t, c, m), at(t, S, v), o = v, c = S, O -= 1, u = [], f = [];
        } else
          l.delete(y), Ln(y, o, n), at(t, y.prev, y.next), at(t, y, c === null ? t.effect.first : c.next), at(t, c, y), c = y;
        continue;
      }
      for (u = [], f = []; o !== null && o !== y; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), f.push(o), o = o.next;
      if (o === null)
        continue;
    }
    (y.f & gt) === 0 && u.push(y), c = y, o = y.next;
  }
  if (t.outrogroups !== null) {
    for (const H of t.outrogroups)
      H.pending.size === 0 && (vi(Ir(H.done)), (q = t.outrogroups) == null || q.delete(H));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var T = [];
    if (l !== void 0)
      for (y of l)
        (y.f & fe) === 0 && T.push(y);
    for (; o !== null; )
      (o.f & fe) === 0 && o !== t.fallback && T.push(o), o = o.next;
    var N = T.length;
    if (N > 0) {
      var k = s === 0 ? n : null;
      Gl(t, T, k);
    }
  }
}
function Vl(t, e, n, r, i, s, a, o) {
  var l = (a & Ho) !== 0 ? (a & Fo) === 0 ? /* @__PURE__ */ aa(n, !1, !1) : Wt(n) : null, c = (a & jo) !== 0 ? Wt(i) : null;
  return {
    v: l,
    i: c,
    e: Ee(() => (s(e, l ?? n, c ?? i, o), () => {
      t.delete(r);
    }))
  };
}
function Ln(t, e, n) {
  if (t.nodes)
    for (var r = t.nodes.start, i = t.nodes.end, s = e && (e.f & gt) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : n; r !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Me(r)
      );
      if (s.before(r), r === i)
        return;
      r = a;
    }
}
function at(t, e, n) {
  e === null ? t.effect.first = n : e.next = n, n === null ? t.effect.last = e : n.prev = e;
}
function Wl(t, e, n = !1, r = !1, i = !1) {
  var s = t, a = "";
  Je(() => {
    var o = (
      /** @type {Effect} */
      P
    );
    if (a === (a = e() ?? "")) {
      L && mn();
      return;
    }
    if (o.nodes !== null && (ma(
      o.nodes.start,
      /** @type {TemplateNode} */
      o.nodes.end
    ), o.nodes = null), a !== "") {
      if (L) {
        R.data;
        for (var l = mn(), c = l; l !== null && (l.nodeType !== Qt || /** @type {Comment} */
        l.data !== ""); )
          c = l, l = /* @__PURE__ */ Me(l);
        if (l === null)
          throw Qn(), zt;
        wt(R, c), s = ie(l);
        return;
      }
      var u = a + "";
      n ? u = `<svg>${u}</svg>` : r && (u = `<math>${u}</math>`);
      var f = Ra(u);
      if ((n || r) && (f = /** @type {Element} */
      /* @__PURE__ */ Pe(f)), wt(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Pe(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), n || r)
        for (; /* @__PURE__ */ Pe(f); )
          s.before(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Pe(f)
          );
      else
        s.before(f);
    }
  });
}
function Pa(t, e) {
  va(() => {
    var n = t.getRootNode(), r = (
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
    if (!r.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function Yl(t, e, n) {
  var r = t == null ? "" : "" + t;
  return e && (r = r ? r + " " + e : e), r === "" ? null : r;
}
function Jl(t, e) {
  return t == null ? null : String(t);
}
function Se(t, e, n, r, i, s) {
  var a = t.__className;
  if (L || a !== n || a === void 0) {
    var o = Yl(n, r);
    (!L || o !== t.getAttribute("class")) && (o == null ? t.removeAttribute("class") : t.className = o), t.__className = n;
  }
  return s;
}
function ut(t, e, n, r) {
  var i = t.__style;
  if (L || i !== e) {
    var s = Jl(e);
    (!L || s !== t.getAttribute("style")) && (s == null ? t.removeAttribute("style") : t.style.cssText = s), t.__style = e;
  }
  return r;
}
const Kl = Symbol("is custom element"), Ql = Symbol("is html");
function Da(t, e, n, r) {
  var i = Xl(t);
  L && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = n) && (e === "loading" && (t[Xo] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ma(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function cs(t, e, n) {
  var r = C, i = P;
  let s = L;
  L && ke(!1), ee(null), Ae(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    e !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (_i.has(t.getAttribute("is") || t.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(t.getAttribute("is") || t.tagName.toLowerCase()) ? Ma(t).includes(e) : n && typeof n == "object") ? t[e] = n : Da(t, e, n == null ? n : String(n));
  } finally {
    ee(r), Ae(i), s && ke(!0);
  }
}
function Xl(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Kl]: t.nodeName.includes("-"),
      [Ql]: t.namespaceURI === Go
    })
  );
}
var _i = /* @__PURE__ */ new Map();
function Ma(t) {
  var e = t.getAttribute("is") || t.nodeName, n = _i.get(e);
  if (n) return n;
  _i.set(e, n = []);
  for (var r, i = t, s = Element.prototype; s !== i; ) {
    r = Bo(i);
    for (var a in r)
      r[a].set && n.push(a);
    i = qs(i);
  }
  return n;
}
function us(t, e) {
  return t === e || (t == null ? void 0 : t[cr]) === e;
}
function dt(t = {}, e, n, r) {
  return va(() => {
    var i, s;
    return Ni(() => {
      i = s, s = [], Re(() => {
        t !== n(...s) && (e(t, ...s), i && us(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Pr(() => {
        s && us(n(...s), t) && e(null, ...s);
      });
    };
  }), t;
}
function Ne(t, e, n, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, a = () => (s && (s = !1, i = /** @type {V} */
  r), i), o;
  o = /** @type {V} */
  t[e], o === void 0 && r !== void 0 && (o = a());
  var l;
  l = () => {
    var _ = (
      /** @type {V} */
      t[e]
    );
    return _ === void 0 ? a() : (s = !0, _);
  };
  var c = !1, u = /* @__PURE__ */ Mr(() => (c = !1, l())), f = (
    /** @type {Effect} */
    P
  );
  return (
    /** @type {() => V} */
    (function(_, w) {
      if (arguments.length > 0) {
        const y = w ? h(u) : _;
        return A(u, y), c = !0, i !== void 0 && (i = y), _;
      }
      return Xt && c || (f.f & tt) !== 0 ? u.v : h(u);
    })
  );
}
function Zl(t) {
  return new ec(t);
}
var Xe, ye;
class ec {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    I(this, Xe);
    /** @type {Record<string, any>} */
    I(this, ye);
    var s;
    var n = /* @__PURE__ */ new Map(), r = (a, o) => {
      var l = /* @__PURE__ */ aa(o, !1, !1);
      return n.set(a, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, o) {
          return h(n.get(o) ?? r(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === Qo ? !0 : (h(n.get(o) ?? r(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return A(n.get(o) ?? r(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    x(this, ye, (e.hydrate ? Fl : Ia)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((s = e == null ? void 0 : e.props) != null && s.$$host) || e.sync === !1) && be(), x(this, Xe, i.$$events);
    for (const a of Object.keys(p(this, ye)))
      a === "$set" || a === "$destroy" || a === "$on" || mr(this, a, {
        get() {
          return p(this, ye)[a];
        },
        /** @param {any} value */
        set(o) {
          p(this, ye)[a] = o;
        },
        enumerable: !0
      });
    p(this, ye).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, p(this, ye).$destroy = () => {
      ql(p(this, ye));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    p(this, ye).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, n) {
    p(this, Xe)[e] = p(this, Xe)[e] || [];
    const r = (...i) => n.call(this, ...i);
    return p(this, Xe)[e].push(r), () => {
      p(this, Xe)[e] = p(this, Xe)[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    p(this, ye).$destroy();
  }
}
Xe = new WeakMap(), ye = new WeakMap();
let Ha;
typeof HTMLElement == "function" && (Ha = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, n, r) {
    super();
    /** The Svelte component constructor */
    U(this, "$$ctor");
    /** Slots */
    U(this, "$$s");
    /** @type {any} The Svelte component instance */
    U(this, "$$c");
    /** Whether or not the custom element is connected */
    U(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    U(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    U(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    U(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    U(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    U(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    U(this, "$$me");
    this.$$ctor = e, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, n, r) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(n), this.$$c) {
      const i = this.$$c.$on(e, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(e, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, n, r) {
    if (super.removeEventListener(e, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (s) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), _e(s, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = tc(this);
      for (const i of this.$$s)
        i in r && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), n.default = !0) : n[i] = e(i));
      for (const i of this.attributes) {
        const s = this.$$g_p(i.name);
        s in this.$$d || (this.$$d[s] = fr(s, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Zl({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = Nl(() => {
        Ni(() => {
          var i;
          this.$$r = !0;
          for (const s of gr(this.$$c)) {
            if (!((i = this.$$p_d[s]) != null && i.reflect)) continue;
            this.$$d[s] = this.$$c[s];
            const a = fr(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const s of this.$$l[i]) {
          const a = this.$$c.$on(i, s);
          this.$$l_u.set(s, a);
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
  attributeChangedCallback(e, n, r) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = fr(e, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return gr(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === e || !this.$$p_d[n].attribute && n.toLowerCase() === e
    ) || e;
  }
});
function fr(t, e, n, r) {
  var s;
  const i = (s = n[t]) == null ? void 0 : s.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !n[t])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function tc(t) {
  const e = {};
  return t.childNodes.forEach((n) => {
    e[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), e;
}
function ja(t, e, n, r, i, s) {
  let a = class extends Ha {
    constructor() {
      super(t, n, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return gr(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return gr(e).forEach((o) => {
    mr(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var f;
        l = fr(o, l, e), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var u = (f = dn(c, o)) == null ? void 0 : f.get;
          u ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), r.forEach((o) => {
    mr(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), s && (a = s(a)), t.element = /** @type {any} */
  a, a;
}
class Ii extends Error {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(e, ...n) {
    super(...n), Error.captureStackTrace && Error.captureStackTrace(this, Ii), this.name = "TimeoutError", this.timeout = e, this.message = `Timed out in ${e} ms.`;
  }
}
const nc = (t, e) => {
  const n = new Promise((r, i) => {
    setTimeout(() => {
      i(new Ii(t));
    }, t);
  });
  return Promise.race([e, n]);
}, Fa = (t) => {
  if (typeof t.getCardSize == "function")
    try {
      return nc(500, t.getCardSize()).catch(
        () => 1
      );
    } catch {
      return 1;
    }
  return customElements.get(t.localName) ? 1 : customElements.whenDefined(t.localName).then(() => Fa(t));
};
var rc = /* @__PURE__ */ it('<span class="loading svelte-lv9s7p">Loading...</span>'), ic = /* @__PURE__ */ it("<div><!></div>");
const sc = {
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
function gi(t, e) {
  xi(e, !0), Pa(t, sc);
  const n = Ne(e, "config"), r = Ne(e, "hass"), i = Ne(e, "preview"), s = Ne(e, "marginTop", 7, "0px"), a = Ne(e, "open"), o = Ne(e, "animation", 7, !0), l = Ne(e, "animationState"), c = Ne(e, "clearCardCss", 7, !1);
  let u = null, f = /* @__PURE__ */ M(null), _ = /* @__PURE__ */ M(!0), w = /* @__PURE__ */ M(0);
  const y = Re(() => JSON.parse(JSON.stringify(n())));
  fn(() => {
    h(f) && (h(f).hass = r());
  }), fn(() => {
    h(f) && i() !== void 0 && (h(f).preview = i());
  }), fn(() => {
    var m;
    h(f) && (y.disabled = !a(), (m = h(f)._element) == null || m.dispatchEvent(new CustomEvent("card-visibility-changed", { detail: { value: a() }, bubbles: !0, composed: !1 })));
  }), ka(async () => {
    const m = document.createElement("hui-card");
    m.hass = r(), m.preview = i(), y.disabled = !a(), m.config = y, m.load(), u == null || u.appendChild(m), A(f, m, !0), A(_, !1), h(f).addEventListener(
      "ll-upgrade",
      (S) => {
        var T;
        S.stopPropagation(), (T = h(f)) != null && T._element && r() && (h(f)._element.hass = r());
      },
      { capture: !0 }
    ), c() && (m.style.setProperty("--ha-card-background", "transparent"), m.style.setProperty("--ha-card-box-shadow", "none"), m.style.setProperty("--ha-card-border-color", "transparent"), m.style.setProperty("--ha-card-border-width", "0px"), m.style.setProperty("--ha-card-border-radius", "0px"), m.style.setProperty("--ha-card-backdrop-filter", "none")), o() && (A(w, await Fa(m) * 56), u && A(w, h(w) + (window.getComputedStyle(u).marginTop ? parseFloat(window.getComputedStyle(u).marginTop) : 0)), new ResizeObserver((T) => {
      for (const N of T)
        if (N.contentBoxSize) {
          const k = Array.isArray(N.contentBoxSize) ? N.contentBoxSize[0] : N.contentBoxSize;
          k.blockSize && (A(w, k.blockSize, !0), h(f) && A(w, h(w) + (window.getComputedStyle(h(f)).marginTop ? parseFloat(window.getComputedStyle(h(f)).marginTop) : 0)));
        } else N.contentRect && (A(w, N.contentRect.height, !0), h(f) && A(w, h(w) + (window.getComputedStyle(h(f)).marginTop ? parseFloat(window.getComputedStyle(h(f)).marginTop) : 0)));
    }).observe(m));
  });
  var O = {
    get config() {
      return n();
    },
    set config(m) {
      n(m), be();
    },
    get hass() {
      return r();
    },
    set hass(m) {
      r(m), be();
    },
    get preview() {
      return i();
    },
    set preview(m) {
      i(m), be();
    },
    get marginTop() {
      return s();
    },
    set marginTop(m = "0px") {
      s(m), be();
    },
    get open() {
      return a();
    },
    set open(m) {
      a(m), be();
    },
    get animation() {
      return o();
    },
    set animation(m = !0) {
      o(m), be();
    },
    get animationState() {
      return l();
    },
    set animationState(m) {
      l(m), be();
    },
    get clearCardCss() {
      return c();
    },
    set clearCardCss(m = !1) {
      c(m), be();
    }
  }, d = ic(), v = lt(d);
  {
    var g = (m) => {
      var S = rc();
      _e(m, S);
    };
    ct(v, (m) => {
      h(_) && m(g);
    });
  }
  return Ye(d), dt(d, (m) => u = m, () => u), Je(() => {
    Se(d, 1, `outer-container${a() ? " open" : " close"}${o() ? " animation " + l() : ""}`, "svelte-lv9s7p"), ut(d, `--child-card-margin-top: ${(a() ? s() : "0px") ?? ""};${h(w) ? ` --expander-animation-height: -${h(w)}px;` : ""}`);
  }), _e(t, d), Si(O);
}
customElements.define("expander-sub-card", ja(
  gi,
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
const ds = (t, e) => {
  var n;
  (n = t.dispatchEvent) == null || n.call(
    t,
    new CustomEvent(
      "haptic",
      { detail: e, bubbles: !0, composed: !0 }
    )
  );
};
var Zn = function(t, e, n) {
  var r;
  n === void 0 && (n = {});
  var i = n.retries, s = i === void 0 ? 10 : i, a = n.delay, o = a === void 0 ? 10 : a, l = n.shouldReject, c = l === void 0 || l, u = (r = n.rejectMessage) !== null && r !== void 0 ? r : "Could not get the result after {{ retries }} retries";
  return new Promise((function(f, _) {
    var w = 0, y = function() {
      var O = t();
      e(O) ? f(O) : ++w < s ? setTimeout(y, o) : c ? _(new Error(u.replace(/\{\{\s*retries\s*\}\}/g, "".concat(s)))) : f(O);
    };
    y();
  }));
}, $r = function() {
  return $r = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t;
  }, $r.apply(this, arguments);
};
function Br(t, e, n) {
  if (arguments.length === 2) for (var r, i = 0, s = e.length; i < s; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
  return t.concat(r || Array.prototype.slice.call(e));
}
var Ar, un, Ie, ft, Vr = "[home-assistant-javascript-templates]", ac = /^([a-z_]+)\.(\w+)$/;
(function(t) {
  t.UNKNOWN = "unknown", t.UNAVAILABLE = "unavailable";
})(Ar || (Ar = {})), (function(t) {
  t.AREA_ID = "area_id", t.NAME = "name";
})(un || (un = {})), (function(t) {
  t.PANEL_URL = "panel_url", t.LANG = "lang";
})(Ie || (Ie = {})), (function(t) {
  t.LOCATION_CHANGED = "location-changed", t.TRANSLATIONS_UPDATED = "translations-updated", t.POPSTATE = "popstate", t.SUBSCRIBE_EVENTS = "subscribe_events", t.STATE_CHANGE_EVENT = "state_changed";
})(ft || (ft = {}));
var fs = function(t) {
  return t.reduce((function(e, n) {
    var r = n[0], i = n[1];
    return e[r.replace(ac, "$2")] = i, e;
  }), {});
}, ot = function(t) {
  return t.includes(".");
}, hr = "ref", Ct = "value", hs = "toJSON", ps = function(t) {
  return "".concat(hr, ".").concat(t);
};
function oc(t, e, n) {
  var r = function() {
    return Object.entries(t.hass.areas);
  }, i = function() {
    return Object.entries(t.hass.devices);
  }, s = function() {
    return Object.entries(t.hass.entities);
  }, a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), l = function(d, v) {
    n && console.warn("".concat(d, " ").concat(v, " used in a JavaScript template doesn't exist"));
  }, c = function(d) {
    return l("Entity", d);
  }, u = function(d) {
    return l("Domain", d);
  }, f = function(d) {
    var v = new SyntaxError(d);
    if (e) throw v;
    n && console.warn(v);
  }, _ = function(d) {
    t.hass.states[d] ? a.add(d) : c(d);
  }, w = function(d) {
    a.add(d);
  }, y = function(d, v) {
    var g = v.with_unit, m = g !== void 0 && g, S = v.rounded, T = S !== void 0 && S;
    if (d) {
      var N = d.state, k = d.attributes.unit_of_measurement, q = Number(T), H = T === !1 || isNaN(Number(N)) ? N : new Intl.NumberFormat(t.hass.language, { minimumFractionDigits: q, maximumFractionDigits: q }).format(Number(N));
      return m && k ? "".concat(H, " ").concat(k) : H;
    }
  }, O = function(d) {
    return new Proxy(d, { get: function(v, g) {
      return g === "state_with_unit" ? y(v, { rounded: !0, with_unit: !0 }) : v[g];
    } });
  };
  return { get hass() {
    return t.hass;
  }, states: new Proxy((function(d, v) {
    if (v === void 0 && (v = {}), ot(d)) return _(d), y(t.hass.states[d], v);
    throw SyntaxError("".concat(Vr, ": states method cannot be used with a domain, use it as an object instead."));
  }), { get: function(d, v) {
    if (ot(v)) return _(v), O(t.hass.states[v]);
    var g = Object.entries(t.hass.states).filter((function(m) {
      return m[0].startsWith(v);
    }));
    return g.length || u(v), new Proxy(fs(g), { get: function(m, S) {
      return _("".concat(v, ".").concat(S)), O(m[S]);
    } });
  } }), state_translated: function(d) {
    if (_(d), t.hass.states[d]) return t.hass.formatEntityState(t.hass.states[d]);
  }, is_state: function(d, v) {
    var g;
    return _(d), Array.isArray(v) ? v.some((function(m) {
      var S;
      return ((S = t.hass.states[d]) === null || S === void 0 ? void 0 : S.state) === m;
    })) : ((g = t.hass.states[d]) === null || g === void 0 ? void 0 : g.state) === v;
  }, state_attr: function(d, v) {
    var g, m;
    return _(d), (m = (g = t.hass.states[d]) === null || g === void 0 ? void 0 : g.attributes) === null || m === void 0 ? void 0 : m[v];
  }, is_state_attr: function(d, v, g) {
    return this.state_attr(d, v) === g;
  }, has_value: function(d) {
    return this.states(d) ? !(this.is_state(d, Ar.UNKNOWN) || this.is_state(d, Ar.UNAVAILABLE)) : (c(d), !1);
  }, entities: new Proxy((function(d) {
    if (d === void 0) return t.hass.entities;
    if (ot(d)) return _(d), t.hass.entities[d];
    var v = s().filter((function(g) {
      return g[0].startsWith(d);
    }));
    return v.length || u(d), new Proxy(fs(v), { get: function(g, m) {
      return _("".concat(d, ".").concat(m)), g[m];
    } });
  }), { get: function(d, v) {
    return d(v);
  } }), entity_prop: function(d, v) {
    var g;
    return _(d), (g = t.hass.entities[d]) === null || g === void 0 ? void 0 : g[v];
  }, is_entity_prop: function(d, v, g) {
    return this.entity_prop(d, v) === g;
  }, devices: new Proxy((function(d) {
    if (d === void 0) return t.hass.devices;
    if (ot(d)) throw SyntaxError("".concat(Vr, ": devices method cannot be used with an entity id, you should use a device id instead."));
    return t.hass.devices[d];
  }), { get: function(d, v) {
    if (ot(v)) throw SyntaxError("".concat(Vr, ": devices cannot be accesed using an entity id, you should use a device id instead."));
    return t.hass.devices[v];
  } }), device_attr: function(d, v) {
    var g, m, S;
    if (ot(d)) {
      _(d);
      var T = (g = t.hass.entities[d]) === null || g === void 0 ? void 0 : g.device_id;
      return (m = t.hass.devices[T]) === null || m === void 0 ? void 0 : m[v];
    }
    return (S = t.hass.devices[d]) === null || S === void 0 ? void 0 : S[v];
  }, is_device_attr: function(d, v, g) {
    return this.device_attr(d, v) === g;
  }, device_id: function(d) {
    var v;
    if (ot(d)) return _(d), (v = t.hass.entities[d]) === null || v === void 0 ? void 0 : v.device_id;
    var g = i().find((function(m) {
      return m[1].name === d;
    }));
    return g == null ? void 0 : g[0];
  }, device_name: function(d) {
    var v, g, m;
    if (ot(d)) {
      _(d);
      var S = (v = t.hass.entities[d]) === null || v === void 0 ? void 0 : v.device_id;
      return (g = t.hass.devices[S]) === null || g === void 0 ? void 0 : g.name;
    }
    return (m = t.hass.devices[d]) === null || m === void 0 ? void 0 : m.name;
  }, areas: function() {
    return r().map((function(d) {
      return d[1].area_id;
    }));
  }, area_id: function(d) {
    var v, g;
    if (d in t.hass.devices) return this.device_attr(d, un.AREA_ID);
    var m = (v = t.hass.entities[d]) === null || v === void 0 ? void 0 : v.device_id;
    if (m) return this.device_attr(m, un.AREA_ID);
    var S = r().find((function(T) {
      return T[1].name === d;
    }));
    return (g = S == null ? void 0 : S[1]) === null || g === void 0 ? void 0 : g.area_id;
  }, area_name: function(d) {
    var v, g, m;
    d in t.hass.devices && (m = this.device_attr(d, un.AREA_ID));
    var S = (v = t.hass.entities[d]) === null || v === void 0 ? void 0 : v.device_id;
    S && (m = this.device_attr(S, un.AREA_ID));
    var T = r().find((function(N) {
      var k = N[1];
      return k.area_id === d || k.area_id === m;
    }));
    return (g = T == null ? void 0 : T[1]) === null || g === void 0 ? void 0 : g.name;
  }, area_entities: function(d) {
    var v = r().find((function(g) {
      var m = g[1];
      return m.area_id === d || m.name === d;
    }));
    return v ? s().filter((function(g) {
      return g[1].area_id === v[1].area_id;
    })).map((function(g) {
      return g[0];
    })) : [];
  }, area_devices: function(d) {
    var v = r().find((function(g) {
      var m = g[1];
      return m.area_id === d || m.name === d;
    }));
    return v ? i().filter((function(g) {
      return g[1].area_id === v[1].area_id;
    })).map((function(g) {
      return g[1].id;
    })) : [];
  }, get user_name() {
    return t.hass.user.name;
  }, get user_is_admin() {
    return t.hass.user.is_admin;
  }, get user_is_owner() {
    return t.hass.user.is_owner;
  }, get user_agent() {
    return window.navigator.userAgent;
  }, get tracked() {
    return a;
  }, cleanTracked: function() {
    a.clear();
  }, ref: function(d, v, g) {
    var m;
    g === void 0 && (g = void 0);
    var S = ps(v);
    if (o.has(v)) return o.get(v);
    var T = new Proxy(((m = {})[Ct] = g, m[hs] = function() {
      return this[Ct];
    }, m), { get: function(N, k, q) {
      if (k === Ct || k === hs) return w(S), Reflect.get(N, k, q);
      f("".concat(k, " is not a valid ").concat(hr, " property. A ").concat(hr, ' only exposes a "').concat(Ct, '" property'));
    }, set: function(N, k, q) {
      if (k === Ct) {
        var H = N[Ct];
        return N[Ct] = q, d({ event_type: ft.STATE_CHANGE_EVENT, data: { entity_id: S, old_state: { state: JSON.stringify(H) }, new_state: { state: JSON.stringify(q) } } }), !0;
      }
      return f('property "'.concat(k, '" cannot be set in a ').concat(hr)), !1;
    } });
    return o.set(v, T), T;
  }, unref: function(d, v) {
    var g = ps(v);
    o.has(v) ? (o.delete(v), d(g)) : f("".concat(v, " is not a ref or it has been unrefed already"));
  }, refs: function(d, v, g) {
    g === void 0 && (g = {});
    var m = this.ref, S = this.unref, T = new Proxy(g, { get: function(N, k) {
      return m(d, k).value;
    }, set: function(N, k, q) {
      return m(d, k).value = q, !0;
    } });
    return Object.entries(g).forEach((function(N) {
      var k = N[0], q = N[1];
      o.has(k) && S(v, k), m(d, k, q);
    })), T;
  }, cleanRefs: function(d) {
    var v = this;
    Array.from(o.keys()).forEach((function(g) {
      v.unref(d, g);
    }));
  }, clientSideProxy: new Proxy({}, { get: function(d, v) {
    switch (Object.values(Ie).includes(v) && w(v), v) {
      case Ie.PANEL_URL:
        return location.pathname;
      case Ie.LANG:
        return t.hass.language;
    }
    n && console.warn("clientSideProxy should only be used to access these variables: ".concat(Object.values(Ie).join(", ")));
  } }) };
}
var lc = (function() {
  function t(e, n) {
    var r = n.throwErrors, i = r !== void 0 && r, s = n.throwWarnings, a = s === void 0 || s, o = n.variables, l = o === void 0 ? {} : o, c = n.refs, u = c === void 0 ? {} : c, f = n.refsVariableName, _ = f === void 0 ? "refs" : f, w = n.autoReturn, y = w === void 0 || w;
    this._throwErrors = i, this._throwWarnings = a, this._variables = l, this._refsVariableName = _, this._autoReturn = y, this._subscriptions = /* @__PURE__ */ new Map(), this._clientSideEntitiesRegExp = new RegExp("(^|[ \\?(+:\\{\\[><,])(".concat(Object.values(Ie).join("|"), ")($|[ \\?)+:\\}\\]><.,])"), "gm"), this._scopped = oc(e, i, a), this.refs = u, this._watchForPanelUrlChange(), this._watchForEntitiesChange(), this._watchForLanguageChange();
  }
  return t.prototype._executeRenderingFunctions = function(e) {
    var n = this;
    this._subscriptions.get(e).forEach((function(r, i) {
      r.forEach((function(s, a) {
        n.trackTemplate(i, a, s);
      }));
    }));
  }, t.prototype._watchForPanelUrlChange = function() {
    var e = this;
    window.addEventListener(ft.LOCATION_CHANGED, (function() {
      e._panelUrlWatchCallback();
    })), window.addEventListener(ft.POPSTATE, (function() {
      e._panelUrlWatchCallback();
    }));
  }, t.prototype._panelUrlWatchCallback = function() {
    this._subscriptions.has(Ie.PANEL_URL) && this._executeRenderingFunctions(Ie.PANEL_URL);
  }, t.prototype._watchForEntitiesChange = function() {
    var e = this;
    window.hassConnection.then((function(n) {
      n.conn.subscribeMessage((function(r) {
        return e._entityWatchCallback(r);
      }), { type: ft.SUBSCRIBE_EVENTS, event_type: ft.STATE_CHANGE_EVENT });
    }));
  }, t.prototype._watchForLanguageChange = function() {
    var e = this;
    window.addEventListener(ft.TRANSLATIONS_UPDATED, (function() {
      e._subscriptions.has(Ie.LANG) && e._executeRenderingFunctions(Ie.LANG);
    }));
  }, t.prototype._entityWatchCallback = function(e) {
    if (this._subscriptions.size) {
      var n = e.data.entity_id;
      this._subscriptions.has(n) && this._executeRenderingFunctions(n);
    }
  }, t.prototype._storeTracked = function(e, n, r) {
    var i = this;
    this._scopped.tracked.forEach((function(s) {
      var a = [n, r];
      if (i._subscriptions.has(s)) {
        var o = i._subscriptions.get(s);
        if (o.has(e)) {
          var l = o.get(e);
          l.has(n) || l.set.apply(l, a);
        } else o.set(e, new Map([a]));
      } else i._subscriptions.set(s, /* @__PURE__ */ new Map([[e, new Map([a])]]));
    }));
  }, t.prototype._untrackTemplate = function(e, n) {
    var r = this;
    this._subscriptions.forEach((function(i, s) {
      if (i.has(e)) {
        var a = i.get(e);
        a.delete(n), a.size === 0 && (i.delete(e), i.size === 0 && r._subscriptions.delete(s));
      }
    }));
  }, t.prototype.renderTemplate = function(e, n) {
    n === void 0 && (n = {});
    try {
      var r = n.variables, i = r === void 0 ? {} : r, s = n.refs, a = s === void 0 ? {} : s, o = new Map(Object.entries($r($r({}, this._variables), i))), l = e.trim().replace(this._clientSideEntitiesRegExp, "$1clientSide.$2$3"), c = l.includes("return") || !this._autoReturn ? l : "return ".concat(l);
      return new (Function.bind.apply(Function, Br(Br([void 0, "hass", "states", "state_translated", "is_state", "state_attr", "is_state_attr", "has_value", "entities", "entity_prop", "is_entity_prop", "devices", "device_attr", "is_device_attr", "device_id", "device_name", "areas", "area_id", "area_name", "area_entities", "area_devices", "user_name", "user_is_admin", "user_is_owner", "user_agent", "clientSide", "ref", "unref", this._refsVariableName], Array.from(o.keys()), !1), ["".concat('"use strict";', " ").concat(c)], !1)))().apply(void 0, Br([this._scopped.hass, this._scopped.states, this._scopped.state_translated.bind(this._scopped), this._scopped.is_state.bind(this._scopped), this._scopped.state_attr.bind(this._scopped), this._scopped.is_state_attr.bind(this._scopped), this._scopped.has_value.bind(this._scopped), this._scopped.entities, this._scopped.entity_prop, this._scopped.is_entity_prop.bind(this._scopped), this._scopped.devices, this._scopped.device_attr.bind(this._scopped), this._scopped.is_device_attr.bind(this._scopped), this._scopped.device_id.bind(this._scopped), this._scopped.device_name.bind(this._scopped), this._scopped.areas.bind(this._scopped), this._scopped.area_id.bind(this._scopped), this._scopped.area_name.bind(this._scopped), this._scopped.area_entities.bind(this._scopped), this._scopped.area_devices.bind(this._scopped), this._scopped.user_name, this._scopped.user_is_admin, this._scopped.user_is_owner, this._scopped.user_agent, this._scopped.clientSideProxy, this._scopped.ref.bind(this._scopped, this._entityWatchCallback.bind(this)), this._scopped.unref.bind(this._scopped, this.cleanTracked.bind(this)), this._scopped.refs(this._entityWatchCallback.bind(this), this.cleanTracked.bind(this), a)], Array.from(o.values()), !1));
    } catch (u) {
      if (this._throwErrors) throw u;
      return void (this._throwWarnings && console.warn(u));
    }
  }, t.prototype.trackTemplate = function(e, n, r) {
    var i = this;
    r === void 0 && (r = {}), this._scopped.cleanTracked();
    var s = this.renderTemplate(e, r);
    return this._storeTracked(e, n, r), n(s), function() {
      return i._untrackTemplate(e, n);
    };
  }, t.prototype.cleanTracked = function(e) {
    e ? this._subscriptions.has(e) && this._subscriptions.delete(e) : this._subscriptions.clear();
  }, Object.defineProperty(t.prototype, "variables", { get: function() {
    return this._variables;
  }, set: function(e) {
    this._variables = e;
  }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "refs", { get: function() {
    return this._scopped.refs(this._entityWatchCallback.bind(this), this.cleanTracked.bind(this));
  }, set: function(e) {
    this._scopped.cleanRefs(this.cleanTracked.bind(this)), this._scopped.refs(this._entityWatchCallback.bind(this), this.cleanTracked.bind(this), e);
  }, enumerable: !1, configurable: !0 }), t;
})(), cc = (function() {
  function t(e, n) {
    n === void 0 && (n = {}), this._renderer = Zn((function() {
      return e.hass;
    }), (function(r) {
      return !!(r && r.areas && r.devices && r.entities && r.states && r.user);
    }), { retries: 100, delay: 50, rejectMessage: "The provided element doesn't contain a proper or initialised hass object" }).then((function() {
      return new lc(e, n);
    }));
  }
  return t.prototype.getRenderer = function() {
    return this._renderer;
  }, t;
})();
function uc(t = {}, e = {}) {
  return new cc(
    document.querySelector("home-assistant"),
    {
      autoReturn: !1,
      variables: t,
      refs: e,
      refsVariableName: "variables"
    }
  ).getRenderer();
}
function pr(t) {
  return !t || typeof t != "string" ? !1 : String(t).trim().startsWith("[[[") && String(t).trim().endsWith("]]]");
}
function vs(t, e, n, r = {}) {
  if (!pr(n))
    throw new Error("Not a valid JS template");
  return n = String(n).trim().slice(3, -3), t.then((i) => i.trackTemplate(n, e, { variables: r }));
}
function _s(t, e, n) {
  t.then((r) => {
    r.refs[e] = n;
  });
}
function dc(t, e) {
  t.then((n) => {
    const r = e.detail;
    Object.keys(r).forEach((i) => {
      const s = r[i].property, a = r[i].value, o = `${i}_${s}`;
      n.refs[o] = a;
    });
  });
}
function fc(t, e) {
  const n = dc.bind(null, t);
  return document.addEventListener(e, n), () => {
    document.removeEventListener(e, n);
  };
}
var Or = function() {
  return Or = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t;
  }, Or.apply(this, arguments);
};
function Zt(t, e, n, r) {
  return new (n || (n = Promise))((function(i, s) {
    function a(c) {
      try {
        l(r.next(c));
      } catch (u) {
        s(u);
      }
    }
    function o(c) {
      try {
        l(r.throw(c));
      } catch (u) {
        s(u);
      }
    }
    function l(c) {
      var u;
      c.done ? i(c.value) : (u = c.value, u instanceof n ? u : new n((function(f) {
        f(u);
      }))).then(a, o);
    }
    l((r = r.apply(t, [])).next());
  }));
}
function en(t, e) {
  var n, r, i, s = { label: 0, sent: function() {
    if (1 & i[0]) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = o(0), a.throw = o(1), a.return = o(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(l) {
    return function(c) {
      return (function(u) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; a && (a = 0, u[0] && (s = 0)), s; ) try {
          if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
          switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
            case 0:
            case 1:
              i = u;
              break;
            case 4:
              return s.label++, { value: u[1], done: !1 };
            case 5:
              s.label++, r = u[1], u = [0];
              continue;
            case 7:
              u = s.ops.pop(), s.trys.pop();
              continue;
            default:
              if (i = s.trys, !((i = i.length > 0 && i[i.length - 1]) || u[0] !== 6 && u[0] !== 2)) {
                s = 0;
                continue;
              }
              if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
                s.label = u[1];
                break;
              }
              if (u[0] === 6 && s.label < i[1]) {
                s.label = i[1], i = u;
                break;
              }
              if (i && s.label < i[2]) {
                s.label = i[2], s.ops.push(u);
                break;
              }
              i[2] && s.ops.pop(), s.trys.pop();
              continue;
          }
          u = e.call(t, s);
        } catch (f) {
          u = [6, f], r = 0;
        } finally {
          n = i = 0;
        }
        if (5 & u[0]) throw u[1];
        return { value: u[0] ? u[1] : void 0, done: !0 };
      })([l, c]);
    };
  }
}
var Yt = "$", qa = ":host", Li = "invalid selector", At = 10, Ot = 10, ki = function(t) {
  var e, n = t[0], r = t[1];
  return (e = n) && (e instanceof Document || e instanceof Element || e instanceof ShadowRoot) && typeof r == "string";
};
function Pi(t, e) {
  return (function(n) {
    return n.split(",").map((function(r) {
      return r.trim();
    }));
  })(t).map((function(n) {
    var r = (function(i) {
      return i.split(Yt).map((function(s) {
        return s.trim();
      }));
    })(n);
    return e(r);
  }));
}
function Ua(t, e) {
  var n = e ? " If you want to select a shadowRoot, use ".concat(e, " instead.") : "";
  return "".concat(t, " cannot be used with a selector ending in a shadowRoot (").concat(Yt, ").").concat(n);
}
function an(t) {
  return t instanceof Promise ? t : Promise.resolve(t);
}
function Ga() {
  return "You can not select a shadowRoot (".concat(Yt, ") of the document.");
}
function za() {
  return "You can not select a shadowRoot (".concat(Yt, ") of a shadowRoot.");
}
function Di(t, e) {
  for (var n, r, i = null, s = t.length, a = 0; a < s; a++) {
    if (a === 0) if (t[a].length) i = e.querySelector(t[a]);
    else {
      if (e instanceof Document) throw new SyntaxError(Ga());
      if (e instanceof ShadowRoot) throw new SyntaxError(za());
      i = ((n = e.shadowRoot) === null || n === void 0 ? void 0 : n.querySelector(t[++a])) || null;
    }
    else i = ((r = i.shadowRoot) === null || r === void 0 ? void 0 : r.querySelector("".concat(qa, " ").concat(t[a]))) || null;
    if (i === null) return null;
  }
  return i;
}
function hc(t, e) {
  var n, r = (function(a, o, l) {
    for (var c, u = 0, f = o.length; u < f; u++) !c && u in o || (c || (c = Array.prototype.slice.call(o, 0, u)), c[u] = o[u]);
    return a.concat(c || Array.prototype.slice.call(o));
  })([], t), i = r.pop();
  if (!r.length) return e.querySelectorAll(i);
  var s = Di(r, e);
  return ((n = s == null ? void 0 : s.shadowRoot) === null || n === void 0 ? void 0 : n.querySelectorAll("".concat(qa, " ").concat(i))) || null;
}
function pc(t, e) {
  if (t.length === 1 && !t[0].length) {
    if (e instanceof Document) throw new SyntaxError(Ga());
    if (e instanceof ShadowRoot) throw new SyntaxError(za());
    return e.shadowRoot;
  }
  var n = Di(t, e);
  return (n == null ? void 0 : n.shadowRoot) || null;
}
function vc(t, e, n, r) {
  for (var i = Pi(t, (function(l) {
    if (!l[l.length - 1].length) throw new SyntaxError(Ua(n, r));
    return l;
  })), s = i.length, a = 0; a < s; a++) {
    var o = Di(i[a], e);
    if (o) return o;
  }
  return null;
}
function _c(t, e, n) {
  for (var r = Pi(t, (function(o) {
    if (!o[o.length - 1].length) throw new SyntaxError(Ua(n));
    return o;
  })), i = r.length, s = 0; s < i; s++) {
    var a = hc(r[s], e);
    if (a != null && a.length) return a;
  }
  return document.querySelectorAll(Li);
}
function gc(t, e, n, r) {
  for (var i = Pi(t, (function(l) {
    if (l.pop().length) throw new SyntaxError((function(c, u) {
      return "".concat(c, " must be used with a selector ending in a shadowRoot (").concat(Yt, "). If you don't want to select a shadowRoot, use ").concat(u, " instead.");
    })(n, r));
    return l;
  })), s = i.length, a = 0; a < s; a++) {
    var o = pc(i[a], e);
    if (o) return o;
  }
  return null;
}
function gs(t, e, n, r) {
  return Zt(this, void 0, void 0, (function() {
    return en(this, (function(i) {
      return [2, Zn((function() {
        return vc(t, e, "asyncQuerySelector", "asyncShadowRootQuerySelector");
      }), (function(s) {
        return !!s;
      }), { retries: n, delay: r, shouldReject: !1 })];
    }));
  }));
}
function ms(t, e, n, r) {
  return Zt(this, void 0, void 0, (function() {
    return en(this, (function(i) {
      return [2, Zn((function() {
        return _c(t, e, "asyncQuerySelectorAll");
      }), (function(s) {
        return !!s.length;
      }), { retries: n, delay: r, shouldReject: !1 })];
    }));
  }));
}
function ys(t, e, n, r) {
  return Zt(this, void 0, void 0, (function() {
    return en(this, (function(i) {
      return [2, Zn((function() {
        return gc(t, e, "asyncShadowRootQuerySelector", "asyncQuerySelector");
      }), (function(s) {
        return !!s;
      }), { retries: n, delay: r, shouldReject: !1 })];
    }));
  }));
}
var mi = function(t, e) {
  var n = t.querySelectorAll(e);
  if (n.length) return n;
  if (t instanceof Element && t.shadowRoot) {
    var r = mi(t.shadowRoot, e);
    if (r.length) return r;
  }
  for (var i = 0, s = Array.from(t.querySelectorAll("*")); i < s.length; i++) {
    var a = s[i], o = mi(a, e);
    if (o.length) return o;
  }
  return document.querySelectorAll(Li);
}, bs = function(t, e, n, r) {
  return Zn((function() {
    return mi(t, e);
  }), (function(i) {
    return !!i.length;
  }), { retries: n, delay: r, shouldReject: !1 });
};
function ws() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Zt(this, void 0, void 0, (function() {
    var n, r, i, s, a;
    return en(this, (function(o) {
      switch (o.label) {
        case 0:
          return ki(t) ? (n = t[0], r = t[1], i = t[2], [4, gs(r, n, (i == null ? void 0 : i.retries) || At, (i == null ? void 0 : i.delay) || Ot)]) : [3, 2];
        case 1:
        case 3:
          return [2, o.sent()];
        case 2:
          return s = t[0], a = t[1], [4, gs(s, document, (a == null ? void 0 : a.retries) || At, (a == null ? void 0 : a.delay) || Ot)];
      }
    }));
  }));
}
function Es() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Zt(this, void 0, void 0, (function() {
    var n, r, i, s, a;
    return en(this, (function(o) {
      switch (o.label) {
        case 0:
          return ki(t) ? (n = t[0], r = t[1], i = t[2], [4, ms(r, n, (i == null ? void 0 : i.retries) || At, (i == null ? void 0 : i.delay) || Ot)]) : [3, 2];
        case 1:
          return [2, o.sent()];
        case 2:
          return s = t[0], a = t[1], [2, ms(s, document, (a == null ? void 0 : a.retries) || At, (a == null ? void 0 : a.delay) || Ot)];
      }
    }));
  }));
}
function $s() {
  for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
  return Zt(this, void 0, void 0, (function() {
    var n, r, i, s, a;
    return en(this, (function(o) {
      switch (o.label) {
        case 0:
          return ki(t) ? (n = t[0], r = t[1], i = t[2], [4, ys(r, n, (i == null ? void 0 : i.retries) || At, (i == null ? void 0 : i.delay) || Ot)]) : [3, 2];
        case 1:
          return [2, o.sent()];
        case 2:
          return s = t[0], a = t[1], [2, ys(s, document, (a == null ? void 0 : a.retries) || At, (a == null ? void 0 : a.delay) || Ot)];
      }
    }));
  }));
}
var mc = (function() {
  function t(e, n) {
    e instanceof Node || e instanceof Promise ? (this._element = e, this._asyncParams = Or({ retries: At, delay: Ot }, n || {})) : (this._element = document, this._asyncParams = Or({ retries: At, delay: Ot }, e || {}));
  }
  return Object.defineProperty(t.prototype, "element", { get: function() {
    return an(this._element).then((function(e) {
      return e instanceof NodeList ? e[0] || null : e;
    }));
  }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "$", { get: function() {
    var e = this;
    return new t(an(this._element).then((function(n) {
      return n instanceof Document || n instanceof ShadowRoot || n === null || n instanceof NodeList && n.length === 0 ? null : n instanceof NodeList ? $s(n[0], Yt, e._asyncParams) : $s(n, Yt, e._asyncParams);
    })), this._asyncParams);
  }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "all", { get: function() {
    return an(this._element).then((function(e) {
      return e instanceof NodeList ? e : document.querySelectorAll(Li);
    }));
  }, enumerable: !1, configurable: !0 }), Object.defineProperty(t.prototype, "asyncParams", { get: function() {
    return this._asyncParams;
  }, enumerable: !1, configurable: !0 }), t.prototype.eq = function(e) {
    return Zt(this, void 0, void 0, (function() {
      return en(this, (function(n) {
        return [2, an(this._element).then((function(r) {
          return r instanceof NodeList && r[e] || null;
        }))];
      }));
    }));
  }, t.prototype.query = function(e) {
    var n = this;
    return new t(an(this._element).then((function(r) {
      return r === null || r instanceof NodeList && r.length === 0 ? null : r instanceof NodeList ? Es(r[0], e, n._asyncParams) : Es(r, e, n._asyncParams);
    })), this._asyncParams);
  }, t.prototype.deepQuery = function(e) {
    var n = this;
    return new t(an(this._element).then((function(r) {
      return r === null || r instanceof NodeList && r.length === 0 ? null : r instanceof NodeList ? Promise.race(Array.from(r).map((function(i) {
        return bs(i, e, n._asyncParams.retries, n._asyncParams.delay);
      }))) : bs(r, e, n._asyncParams.retries, n._asyncParams.delay);
    })), this._asyncParams);
  }, t;
})(), yi = function(t, e) {
  return yi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, yi(t, e);
}, et = function() {
  return et = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    return t;
  }, et.apply(this, arguments);
};
var Le, mt, V, Ke, As, Wr, Yr, ar, Os, Jr, or, Kr, Qr, Xr, Cn, F, Et = "$", yc = { retries: 100, delay: 50, eventThreshold: 450 };
(function(t) {
  t.HOME_ASSISTANT = "HOME_ASSISTANT", t.HOME_ASSISTANT_MAIN = "HOME_ASSISTANT_MAIN", t.HA_DRAWER = "HA_DRAWER", t.HA_SIDEBAR = "HA_SIDEBAR", t.PARTIAL_PANEL_RESOLVER = "PARTIAL_PANEL_RESOLVER";
})(Le || (Le = {})), (function(t) {
  t.HA_PANEL_LOVELACE = "HA_PANEL_LOVELACE", t.HUI_ROOT = "HUI_ROOT", t.HEADER = "HEADER", t.HUI_VIEW = "HUI_VIEW";
})(mt || (mt = {})), (function(t) {
  t.HA_MORE_INFO_DIALOG = "HA_MORE_INFO_DIALOG", t.HA_DIALOG = "HA_DIALOG", t.HA_DIALOG_CONTENT = "HA_DIALOG_CONTENT", t.HA_MORE_INFO_DIALOG_INFO = "HA_MORE_INFO_DIALOG_INFO", t.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK = "HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK", t.HA_DIALOG_MORE_INFO_SETTINGS = "HA_DIALOG_MORE_INFO_SETTINGS";
})(V || (V = {})), (function(t) {
  t.ON_LISTEN = "onListen", t.ON_PANEL_LOAD = "onPanelLoad", t.ON_LOVELACE_PANEL_LOAD = "onLovelacePanelLoad", t.ON_MORE_INFO_DIALOG_OPEN = "onMoreInfoDialogOpen", t.ON_HISTORY_AND_LOGBOOK_DIALOG_OPEN = "onHistoryAndLogBookDialogOpen", t.ON_SETTINGS_DIALOG_OPEN = "onSettingsDialogOpen";
})(Ke || (Ke = {})), (function(t) {
  t.HOME_ASSISTANT = "home-assistant", t.HOME_ASSISTANT_MAIN = "home-assistant-main", t.HA_DRAWER = "ha-drawer", t.HA_SIDEBAR = "ha-sidebar", t.PARTIAL_PANEL_RESOLVER = "partial-panel-resolver", t.HA_PANEL_LOVELACE = "ha-panel-lovelace", t.HUI_ROOT = "hui-root", t.HEADER = ".header", t.HUI_VIEW = "hui-view", t.HA_MORE_INFO_DIALOG = "ha-more-info-dialog", t.HA_DIALOG = "ha-dialog", t.HA_DIALOG_CONTENT = ".content", t.HA_MORE_INFO_DIALOG_INFO = "ha-more-info-info", t.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK = "ha-more-info-history-and-logbook", t.HA_DIALOG_MORE_INFO_SETTINGS = "ha-more-info-settings";
})(F || (F = {}));
var bc = ((As = {})[Le.HOME_ASSISTANT] = { selector: F.HOME_ASSISTANT, children: { shadowRoot: { selector: Et, children: (Wr = {}, Wr[Le.HOME_ASSISTANT_MAIN] = { selector: F.HOME_ASSISTANT_MAIN, children: { shadowRoot: { selector: Et, children: (Yr = {}, Yr[Le.HA_DRAWER] = { selector: F.HA_DRAWER, children: (ar = {}, ar[Le.HA_SIDEBAR] = { selector: F.HA_SIDEBAR, children: { shadowRoot: { selector: Et } } }, ar[Le.PARTIAL_PANEL_RESOLVER] = { selector: F.PARTIAL_PANEL_RESOLVER }, ar) }, Yr) } } }, Wr) } } }, As), wc = ((Os = {})[mt.HA_PANEL_LOVELACE] = { selector: F.HA_PANEL_LOVELACE, children: { shadowRoot: { selector: Et, children: (Jr = {}, Jr[mt.HUI_ROOT] = { selector: F.HUI_ROOT, children: { shadowRoot: { selector: Et, children: (or = {}, or[mt.HEADER] = { selector: F.HEADER }, or[mt.HUI_VIEW] = { selector: F.HUI_VIEW }, or) } } }, Jr) } } }, Os), Ec = { shadowRoot: { selector: Et, children: (Kr = {}, Kr[V.HA_MORE_INFO_DIALOG] = { selector: F.HA_MORE_INFO_DIALOG, children: { shadowRoot: { selector: Et, children: (Qr = {}, Qr[V.HA_DIALOG] = { selector: F.HA_DIALOG, children: (Xr = {}, Xr[V.HA_DIALOG_CONTENT] = { selector: F.HA_DIALOG_CONTENT, children: (Cn = {}, Cn[V.HA_MORE_INFO_DIALOG_INFO] = { selector: F.HA_MORE_INFO_DIALOG_INFO }, Cn[V.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK] = { selector: F.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK }, Cn[V.HA_DIALOG_MORE_INFO_SETTINGS] = { selector: F.HA_DIALOG_MORE_INFO_SETTINGS }, Cn) }, Xr) }, Qr) } } }, Kr) } }, Mn = function(t, e, n, r) {
  return n === void 0 && (n = null), r === void 0 && (r = !1), Object.entries(e || {}).reduce((function(i, s) {
    var a = s[0], o = s[1];
    if (o.selector === Et && n) return o.children ? et(et({}, i), Mn(t, o.children, n, !0)) : i;
    var l = n ? n.then((function(c) {
      return c ? ws(c, (u = o.selector, r ? "$ " + u : u), t) : null;
      var u;
    })) : ws(o.selector, t);
    return i[a] = { element: l, children: Mn(t, o.children, l), selector: new mc(l, t) }, i;
  }), {});
}, Ba = function(t, e) {
  for (var n = 0, r = Object.entries(e); n < r.length; n++) {
    var i = r[n];
    if (i[0] === t) return i[1];
    var s = Ba(t, i[1].children);
    if (s) return s;
  }
}, Zr = function(t, e) {
  return Object.keys(t).reduce((function(n, r) {
    var i = Ba(r, e);
    i.children;
    var s = (function(a, o) {
      var l = {};
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && o.indexOf(c) < 0 && (l[c] = a[c]);
      if (a != null && typeof Object.getOwnPropertySymbols == "function") {
        var u = 0;
        for (c = Object.getOwnPropertySymbols(a); u < c.length; u++) o.indexOf(c[u]) < 0 && Object.prototype.propertyIsEnumerable.call(a, c[u]) && (l[c[u]] = a[c[u]]);
      }
      return l;
    })(i, ["children"]);
    return n[r] = et({}, s), n;
  }), {});
}, $c = (function() {
  function t() {
    this.delegate = document.createDocumentFragment();
  }
  return t.prototype.addEventListener = function() {
    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    (e = this.delegate).addEventListener.apply(e, n);
  }, t.prototype.dispatchEvent = function() {
    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    return (e = this.delegate).dispatchEvent.apply(e, n);
  }, t.prototype.removeEventListener = function() {
    for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
    return (e = this.delegate).removeEventListener.apply(e, n);
  }, t;
})(), Ac = (function(t) {
  function e(n) {
    n === void 0 && (n = {});
    var r = t.call(this) || this;
    return r._config = et(et({}, yc), n), r._timestaps = {}, r;
  }
  return (function(n, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    function i() {
      this.constructor = n;
    }
    yi(n, r), n.prototype = r === null ? Object.create(r) : (i.prototype = r.prototype, new i());
  })(e, t), e.prototype._dispatchEvent = function(n, r) {
    var i = Date.now();
    i - this._timestaps[n] < this._config.eventThreshold || (this._timestaps[n] = i, this.dispatchEvent(new CustomEvent(n, { detail: r })));
  }, e.prototype._updateDialogElements = function(n) {
    var r, i = this;
    n === void 0 && (n = V.HA_MORE_INFO_DIALOG_INFO), this._dialogTree = Mn(this._config, Ec, this._haRootElements.HOME_ASSISTANT.element);
    var s = Zr(V, this._dialogTree);
    s.HA_DIALOG_CONTENT.element.then((function(o) {
      i._dialogsContentObserver.disconnect(), i._dialogsContentObserver.observe(o, { childList: !0 });
    })), this._haDialogElements = (function(o, l) {
      return [V.HA_MORE_INFO_DIALOG, V.HA_DIALOG, V.HA_DIALOG_CONTENT, l].reduce((function(c, u) {
        return c[u] = o[u], c;
      }), {});
    })(s, n);
    var a = ((r = {})[V.HA_MORE_INFO_DIALOG_INFO] = Ke.ON_MORE_INFO_DIALOG_OPEN, r[V.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK] = Ke.ON_HISTORY_AND_LOGBOOK_DIALOG_OPEN, r[V.HA_DIALOG_MORE_INFO_SETTINGS] = Ke.ON_SETTINGS_DIALOG_OPEN, r);
    this._dispatchEvent(a[n], this._haDialogElements);
  }, e.prototype._updateRootElements = function() {
    var n = this;
    this._homeAssistantRootTree = Mn(this._config, bc), this._haRootElements = Zr(Le, this._homeAssistantRootTree), this._haRootElements[Le.HOME_ASSISTANT].selector.$.element.then((function(r) {
      n._dialogsObserver.disconnect(), n._dialogsObserver.observe(r, { childList: !0 });
    })), this._haRootElements[Le.PARTIAL_PANEL_RESOLVER].element.then((function(r) {
      n._panelResolverObserver.disconnect(), r && n._panelResolverObserver.observe(r, { subtree: !0, childList: !0 });
    })), this._dispatchEvent(Ke.ON_LISTEN, this._haRootElements), this._dispatchEvent(Ke.ON_PANEL_LOAD, this._haRootElements);
  }, e.prototype._updateLovelaceElements = function() {
    var n = this;
    this._homeAssistantResolverTree = Mn(this._config, wc, this._haRootElements[Le.HA_DRAWER].element), this._haResolverElements = Zr(mt, this._homeAssistantResolverTree), this._haResolverElements[mt.HA_PANEL_LOVELACE].element.then((function(r) {
      n._lovelaceObserver.disconnect(), r && (n._lovelaceObserver.observe(r.shadowRoot, { childList: !0 }), n._dispatchEvent(Ke.ON_LOVELACE_PANEL_LOAD, et(et({}, n._haRootElements), n._haResolverElements)));
    }));
  }, e.prototype._watchDialogs = function(n) {
    var r = this;
    n.forEach((function(i) {
      i.addedNodes.forEach((function(s) {
        s.localName === F.HA_MORE_INFO_DIALOG && r._updateDialogElements();
      }));
    }));
  }, e.prototype._watchDialogsContent = function(n) {
    var r = this;
    n.forEach((function(i) {
      i.addedNodes.forEach((function(s) {
        var a, o = ((a = {})[F.HA_MORE_INFO_DIALOG_INFO] = V.HA_MORE_INFO_DIALOG_INFO, a[F.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK] = V.HA_DIALOG_MORE_INFO_HISTORY_AND_LOGBOOK, a[F.HA_DIALOG_MORE_INFO_SETTINGS] = V.HA_DIALOG_MORE_INFO_SETTINGS, a);
        if (s.localName && s.localName in o) {
          var l = s.localName;
          r._updateDialogElements(o[l]);
        }
      }));
    }));
  }, e.prototype._watchDashboards = function(n) {
    var r = this;
    n.forEach((function(i) {
      i.addedNodes.forEach((function(s) {
        r._dispatchEvent(Ke.ON_PANEL_LOAD, r._haRootElements), s.localName === F.HA_PANEL_LOVELACE && r._updateLovelaceElements();
      }));
    }));
  }, e.prototype._watchLovelace = function(n) {
    var r = this;
    n.forEach((function(i) {
      i.addedNodes.forEach((function(s) {
        s.localName === F.HUI_ROOT && r._updateLovelaceElements();
      }));
    }));
  }, e.prototype.listen = function() {
    this._watchDialogsBinded = this._watchDialogs.bind(this), this._watchDialogsContentBinded = this._watchDialogsContent.bind(this), this._watchDashboardsBinded = this._watchDashboards.bind(this), this._watchLovelaceBinded = this._watchLovelace.bind(this), this._dialogsObserver = new MutationObserver(this._watchDialogsBinded), this._dialogsContentObserver = new MutationObserver(this._watchDialogsContentBinded), this._panelResolverObserver = new MutationObserver(this._watchDashboardsBinded), this._lovelaceObserver = new MutationObserver(this._watchLovelaceBinded), this._updateRootElements(), this._updateLovelaceElements();
  }, e.prototype.addEventListener = function(n, r, i) {
    t.prototype.addEventListener.call(this, n, r, i);
  }, e;
})($c);
const Va = new Ac();
let vr = {};
Va.addEventListener("onLovelacePanelLoad", ({ detail: t }) => {
  t.HUI_ROOT.element.then((e) => {
    const n = e == null ? void 0 : e.lovelace;
    n != null && n.config && (vr = n.config["expander-card"] || {});
  }).catch(() => {
    vr = {};
  }).finally(() => {
    document.body.dispatchEvent(new CustomEvent("expander-card-raw-config-updated", {
      detail: { rawConfig: vr },
      bubbles: !0,
      composed: !0
    }));
  });
});
Va.listen();
const Oc = () => vr, bi = {
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
var xc = /* @__PURE__ */ it("<ha-ripple></ha-ripple>", 2), Sc = /* @__PURE__ */ it('<button aria-label="Toggle button"><ha-icon></ha-icon> <!></button>', 2), Tc = /* @__PURE__ */ it("<ha-ripple></ha-ripple>", 2), Nc = /* @__PURE__ */ it('<div id="id1"><div id="id2"><!></div> <!> <!></div>'), Cc = /* @__PURE__ */ it("<button><div> </div> <ha-icon></ha-icon> <ha-ripple></ha-ripple></button>", 2), Rc = /* @__PURE__ */ it("<div><div></div></div>"), Ic = /* @__PURE__ */ it("<ha-card><!> <!> <!></ha-card>", 2);
const Lc = {
  hash: "svelte-1jqiztq",
  code: `.expander-card.svelte-1jqiztq {display:var(--expander-card-display,block);gap:var(--gap);padding:var(--padding);background:var(--card-background,#fff);-webkit-tap-highlight-color:transparent;}.expander-card.animation.svelte-1jqiztq {transition:gap 0.35s ease, background-color var(--background-animation-duration, 0) ease;}.children-wrapper.svelte-1jqiztq {display:flex;flex-direction:column;}.children-wrapper.animation.opening.svelte-1jqiztq,
    .children-wrapper.animation.closing.svelte-1jqiztq {overflow:hidden;}.children-container.animation.svelte-1jqiztq {transition:padding 0.35s ease, gap 0.35s ease;}.children-container.svelte-1jqiztq {padding:var(--child-padding);display:var(--expander-card-display,block);gap:var(--gap);}.clear.svelte-1jqiztq {background:none !important;background-color:transparent !important;border-style:none !important;box-shadow:none !important;}.title-card-header.svelte-1jqiztq {display:flex;align-items:center;justify-content:space-between;flex-direction:row;position:relative;}.title-card-header.clickable.svelte-1jqiztq {cursor:pointer;border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));}.title-card-header-overlay.svelte-1jqiztq {display:block;}.title-card-container.svelte-1jqiztq {width:100%;padding:var(--title-padding);}.header.svelte-1jqiztq {display:flex;flex-direction:row;align-items:center;padding:0.85em 0.85em;background:var(--button-background);border-style:none;border-radius:var(--ha-card-border-radius, var(--ha-border-radius-lg));width:var(--header-width,auto);color:var(--header-color,#fff);cursor:pointer;position:relative;}.header-overlay.svelte-1jqiztq {position:absolute;top:0;right:0;margin:var(--overlay-margin);height:var(--expander-card-overlay-height, auto);z-index:1;}.title-card-header-overlay.clickable.svelte-1jqiztq  > .header-overlay:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);justify-content:flex-end;}.title-card-header-overlay.clickable.svelte-1jqiztq > .title-card-container:where(.svelte-1jqiztq) {width:calc(100% - var(--overlay-margin) * 2);}.title.svelte-1jqiztq {width:100%;text-align:left;}.ico.animation.svelte-1jqiztq {transition-property:transform;transition-duration:0.35s;}.ico.svelte-1jqiztq {color:var(--arrow-color,var(--primary-text-color,#fff));}.flipped.svelte-1jqiztq {transform:rotate(var(--icon-rotate-degree,180deg));}`
};
function kc(t, e) {
  xi(e, !0), Pa(t, Lc);
  const n = Ne(e, "hass"), r = Ne(e, "preview"), i = Ne(e, "config", 7, bi);
  let s = /* @__PURE__ */ M(!1), a = /* @__PURE__ */ M(null), o = /* @__PURE__ */ M(Ze(!!Re(() => r()))), l = /* @__PURE__ */ M(Ze(!!Re(() => r()))), c = /* @__PURE__ */ M(!0), u = /* @__PURE__ */ M("idle"), f = /* @__PURE__ */ M(null), _ = /* @__PURE__ */ M(0), w = /* @__PURE__ */ M(0), y = /* @__PURE__ */ M(null), O = /* @__PURE__ */ M(null), d = /* @__PURE__ */ M(null), v = /* @__PURE__ */ M(null);
  const g = {}, m = {}, S = {}, T = /* @__PURE__ */ M(Ze({}));
  let N = /* @__PURE__ */ M(Ze(Oc()));
  const k = /* @__PURE__ */ Nn(() => h(T).style !== void 0 ? `<style>${String(h(T).style)}</style>` : i().style ? `<style>${i().style}</style>` : null), q = /* @__PURE__ */ Nn(() => h(T).icon !== void 0 ? String(h(T).icon) : i().icon), H = /* @__PURE__ */ Nn(() => h(T).title !== void 0 ? String(h(T).title) : i().title), nr = /* @__PURE__ */ Nn(() => h(T)["arrow-color"] !== void 0 ? String(h(T)["arrow-color"]) : i()["arrow-color"]), An = Re(() => i()["storage-id"]), Ui = "expander-open-" + An;
  A(c, Re(() => r() || (qr(i()["show-button-users"]) ?? !0)), !0), fn(() => {
    if (h(T).expanded === void 0 || Re(() => r() && h(N)["preview-expanded"] !== !1))
      return;
    const b = !!h(T).expanded;
    queueMicrotask(() => {
      b !== h(o) && St(b);
    });
  }), fn(() => {
    if (!(r() === h(l) || r() === void 0)) {
      if (A(l, r(), !0), h(l) && h(N)["preview-expanded"] !== !1) {
        On(!0), A(c, !0);
        return;
      }
      if (A(c, qr(i()["show-button-users"]) ?? !0, !0), rr("expanded")) {
        const b = Re(() => h(T).expanded);
        b !== void 0 && St(!!b);
        return;
      }
      Gi();
    }
  });
  function rr(b) {
    const E = i().templates && Array.isArray(i().templates) ? i().templates.find(($) => $.template === b) : void 0;
    if (E && pr(E.value_template))
      return E;
  }
  function Fr(b) {
    if (!i()["expander-card-id"])
      return;
    const E = {};
    E[i()["expander-card-id"]] = { property: "open", value: b }, document.dispatchEvent(new CustomEvent("expander-card", { detail: E, bubbles: !0, composed: !0 }));
  }
  function qr(b) {
    var E, $, W, Oe;
    if (b !== void 0)
      return (($ = (E = n()) == null ? void 0 : E.user) == null ? void 0 : $.name) !== void 0 && b.includes((Oe = (W = n()) == null ? void 0 : W.user) == null ? void 0 : Oe.name);
  }
  function Gi() {
    if (!rr("expanded")) {
      if (qr(i()["start-expanded-users"])) {
        st(!0);
        return;
      }
      if (An === void 0) {
        zi();
        return;
      }
      try {
        const b = localStorage.getItem(Ui);
        if (b === null) {
          zi();
          return;
        }
        const E = b ? b === "true" : h(o);
        st(E);
      } catch (b) {
        console.error(b), st(!1);
      }
    }
  }
  function zi() {
    if (i().expanded !== void 0) {
      st(i().expanded);
      return;
    }
    st(!1);
  }
  function St(b) {
    h(f) && (clearTimeout(h(f)), A(f, null));
    const E = b !== void 0 ? b : !h(o);
    if (!i().animation) {
      st(E);
      return;
    }
    if (Fr(E), A(u, E ? "opening" : "closing", !0), E) {
      On(!0), A(
        f,
        setTimeout(
          () => {
            A(u, "idle"), A(f, null);
          },
          350
        ),
        !0
      );
      return;
    }
    A(
      f,
      setTimeout(
        () => {
          On(!1), A(u, "idle"), A(f, null);
        },
        350
      ),
      !0
    );
  }
  function st(b) {
    On(b), Fr(b);
  }
  function On(b) {
    if (A(o, b, !0), !r() && An !== void 0)
      try {
        localStorage.setItem(Ui, h(o) ? "true" : "false");
      } catch (E) {
        console.error(E);
      }
    h(o) && h(_) === 0 && A(_, 0.35);
  }
  function Bi(b) {
    var $;
    const E = ($ = b.detail) == null ? void 0 : $.rawConfig;
    E && JSON.stringify(E) !== JSON.stringify(h(N)) && A(N, E, !0);
  }
  function Vi(b) {
    var $, W;
    const E = (W = ($ = b.detail) == null ? void 0 : $["expander-card"]) == null ? void 0 : W.data;
    if (E != null && E["expander-card-id"] && E["expander-card-id"] === i()["expander-card-id"]) {
      if (E.action === "open" && !h(o)) {
        St(!0);
        return;
      }
      if (E.action === "close" && h(o)) {
        St(!1);
        return;
      }
      E.action === "toggle" && St();
    }
  }
  function Za() {
    document.body.removeEventListener("ll-custom", Vi), document.body.removeEventListener("expander-card-raw-config-updated", Bi), Object.entries(S).forEach(([b, E]) => {
      E.then(($) => {
        $(), delete S[b];
      }).catch(() => {
      });
    }), Object.entries(m).forEach(([b, E]) => {
      E.then(($) => {
        $(), delete m[b];
      }).catch(() => {
      });
    }), Object.entries(g).forEach(([b, E]) => {
      E(), delete g[b];
    });
  }
  let xn, Sn = !1, Wi = 0, Yi = 0;
  const eo = (b) => {
    h(v) && (h(v).disabled = !0), xn = b.target, Wi = b.touches[0].clientX, Yi = b.touches[0].clientY, Sn = !1;
  }, to = (b) => {
    const E = b.touches[0].clientX, $ = b.touches[0].clientY;
    Sn = Math.abs(E - Wi) > 10 || Math.abs($ - Yi) > 10;
  }, no = () => {
    h(v) && (h(v).disabled = !1), xn = void 0, Sn = !1;
  }, ro = () => {
    h(v) && (h(v).disabled = !1);
  }, io = (b) => {
    !Sn && xn === b.target && i()["title-card-clickable"] && (ds(xn, "light"), St(), A(s, !0), A(
      a,
      window.setTimeout(
        () => {
          A(s, !1), A(a, null);
        },
        100
      ),
      !0
    ), h(v) && (h(v).startPressAnimation(), h(v).endPressAnimation())), xn = void 0, Sn = !1;
  }, so = (b) => {
    for (const E of Object.values(i().variables ?? {}))
      pr(E.value_template) ? m[E.variable] = vs(
        b,
        ($) => {
          _s(b, E.variable, $);
        },
        E.value_template,
        { config: i() }
      ) : _s(b, E.variable, E.value_template);
  }, ao = (b) => {
    g["expander-card"] = fc(b, "expander-card");
  }, oo = () => {
    if (!i().templates) return;
    const b = Object.values(i().variables || {}).reduce(
      ($, W) => ($[W.variable] = void 0, $),
      {}
    ), E = uc({ config: i(), expanderCard: {} }, b);
    so(E), ao(E), Object.values(i().templates || {}).forEach(($) => {
      pr($.value_template) ? S[$.template] = vs(
        E,
        (W) => {
          h(T)[$.template] = W;
        },
        $.value_template,
        { config: i() }
      ) : h(T)[$.template] = $.value_template;
    });
  };
  function lo() {
    if (rr("expanded"))
      return;
    const b = i()["min-width-expanded"], E = i()["max-width-expanded"], $ = document.body.offsetWidth;
    if (b && E) {
      i().expanded = $ >= b && $ <= E;
      return;
    }
    if (b) {
      i().expanded = $ >= b;
      return;
    }
    E && (i().expanded = $ <= E);
  }
  function co() {
    if (r() && h(N)["preview-expanded"] !== !1) {
      On(!0);
      return;
    }
    if (rr("expanded")) {
      const b = Re(() => h(T).expanded);
      st(b !== void 0 ? !!b : !1);
    } else
      Gi();
  }
  function uo() {
    if (i()["title-card-clickable"] && !i()["title-card-button-overlay"] && h(O))
      return h(O);
    if (h(d))
      return h(d);
  }
  ka(() => {
    oo(), Fr(!1), lo(), co(), document.body.addEventListener("ll-custom", Vi), document.body.addEventListener("expander-card-raw-config-updated", Bi);
    const b = uo();
    return b && (b.addEventListener("touchstart", eo, { passive: !0, capture: !0 }), b.addEventListener("touchmove", to, { passive: !0, capture: !0 }), b.addEventListener("touchcancel", no, { passive: !0, capture: !0 }), b.addEventListener("touchend", ro, { passive: !0, capture: !0 }), b.addEventListener("touchend", io, { passive: !1, capture: !1 })), i()["title-card-clickable"] && i()["title-card-button-overlay"] && h(O) && new ResizeObserver(() => {
      if (h(d) && h(O) && h(y)) {
        const $ = h(O).getBoundingClientRect();
        A(w, $.height - parseFloat(getComputedStyle(h(d)).marginTop) - parseFloat(getComputedStyle(h(d)).marginBottom) + parseFloat(getComputedStyle(h(y)).paddingTop) + parseFloat(getComputedStyle(h(y)).paddingBottom));
      }
    }).observe(h(O)), Za;
  });
  const Ur = (b) => {
    if (!h(s)) {
      ds(b.currentTarget, "light"), St();
      return;
    }
    return b.preventDefault(), b.stopImmediatePropagation(), A(s, !1), h(a) && (clearTimeout(h(a)), A(a, null)), !1;
  };
  var fo = {
    get hass() {
      return n();
    },
    set hass(b) {
      n(b), be();
    },
    get preview() {
      return r();
    },
    set preview(b) {
      r(b), be();
    },
    get config() {
      return i();
    },
    set config(b = bi) {
      i(b), be();
    }
  }, tn = Ic(), Ji = lt(tn);
  {
    var ho = (b) => {
      var E = Nc();
      E.__click = function(...Q) {
        var ne;
        (ne = i()["title-card-clickable"] && !i()["title-card-button-overlay"] ? Ur : null) == null || ne.apply(this, Q);
      };
      var $ = lt(E), W = lt($);
      gi(W, {
        get hass() {
          return n();
        },
        get preview() {
          return r();
        },
        get config() {
          return i()["title-card"];
        },
        animation: !1,
        open: !0,
        animationState: "idle",
        get clearCardCss() {
          return i()["clear-children"];
        }
      }), Ye($);
      var Oe = Nt($, 2);
      {
        var xe = (Q) => {
          var ne = Sc();
          ne.__click = function(...Tt) {
            var Tn;
            (Tn = !i()["title-card-clickable"] || i()["title-card-button-overlay"] ? Ur : null) == null || Tn.apply(this, Tt);
          };
          var He = lt(ne);
          Je(() => cs(He, "icon", h(q)));
          var mo = Nt(He, 2);
          {
            var yo = (Tt) => {
              var Tn = xc();
              dt(Tn, (bo) => A(v, bo), () => h(v)), _e(Tt, Tn);
            };
            ct(mo, (Tt) => {
              (!i()["title-card-clickable"] || i()["title-card-button-overlay"]) && Tt(yo);
            });
          }
          Ye(ne), dt(ne, (Tt) => A(d, Tt), () => h(d)), Je(() => {
            ut(ne, `--overlay-margin:${i()["overlay-margin"] ?? ""}; --button-background:${i()["button-background"] ?? ""}; --header-color:${i()["header-color"] ?? ""};`), Se(ne, 1, `header ${i()["title-card-button-overlay"] ? " header-overlay" : ""}${h(o) ? " open" : " close"}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq"), ut(He, `--arrow-color:${h(nr) ?? ""}`), Se(He, 1, `ico${h(o) && h(u) !== "closing" ? " flipped open" : " close"}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq");
          }), _e(Q, ne);
        };
        ct(Oe, (Q) => {
          h(c) && Q(xe);
        });
      }
      var nn = Nt(Oe, 2);
      {
        var Gr = (Q) => {
          var ne = Tc();
          dt(ne, (He) => A(v, He), () => h(v)), _e(Q, ne);
        };
        ct(nn, (Q) => {
          i()["title-card-clickable"] && !i()["title-card-button-overlay"] && Q(Gr);
        });
      }
      Ye(E), dt(E, (Q) => A(O, Q), () => h(O)), Je(() => {
        Se(E, 1, `title-card-header${i()["title-card-button-overlay"] ? "-overlay" : ""}${h(o) ? " open" : " close"}${i().animation ? " animation " + h(u) : ""}${i()["title-card-clickable"] ? " clickable" : ""}`, "svelte-1jqiztq"), Da(E, "role", i()["title-card-clickable"] && !i()["title-card-button-overlay"] ? "button" : void 0), Se($, 1, `title-card-container${h(o) ? " open" : " close"}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq"), ut($, `--title-padding:${(i()["title-card-padding"] ? i()["title-card-padding"] : "0px") ?? ""};`);
      }), _e(b, E);
    }, po = (b) => {
      var E = os(), $ = rs(E);
      {
        var W = (Oe) => {
          var xe = Cc();
          xe.__click = Ur;
          var nn = lt(xe), Gr = lt(nn, !0);
          Ye(nn);
          var Q = Nt(nn, 2);
          Je(() => cs(Q, "icon", h(q)));
          var ne = Nt(Q, 2);
          dt(ne, (He) => A(v, He), () => h(v)), Ye(xe), dt(xe, (He) => A(d, He), () => h(d)), Je(() => {
            Se(xe, 1, `header${h(o) ? " open" : " close"}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq"), ut(xe, `--header-width:100%; --button-background:${i()["button-background"] ?? ""};--header-color:${i()["header-color"] ?? ""};`), Se(nn, 1, `primary title${h(o) ? " open" : " close"}`, "svelte-1jqiztq"), jl(Gr, h(H)), ut(Q, `--arrow-color:${h(nr) ?? ""}`), Se(Q, 1, `ico${h(o) && h(u) !== "closing" ? " flipped open" : " close"}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq");
          }), _e(Oe, xe);
        };
        ct($, (Oe) => {
          h(c) && Oe(W);
        });
      }
      _e(b, E);
    };
    ct(Ji, (b) => {
      i()["title-card"] ? b(ho) : b(po, !1);
    });
  }
  var Ki = Nt(Ji, 2);
  {
    var vo = (b) => {
      var E = Rc(), $ = lt(E);
      zl($, 20, () => i().cards, (W) => W, (W, Oe) => {
        {
          let xe = /* @__PURE__ */ Nn(() => h(o) && r());
          gi(W, {
            get hass() {
              return n();
            },
            get preview() {
              return h(xe);
            },
            get config() {
              return Oe;
            },
            get marginTop() {
              return i()["child-margin-top"];
            },
            get open() {
              return h(o);
            },
            get animation() {
              return i().animation;
            },
            get animationState() {
              return h(u);
            },
            get clearCardCss() {
              return i()["clear-children"];
            }
          });
        }
      }), Ye($), Ye(E), Je(() => {
        Se(E, 1, `children-wrapper ${i().animation ? "animation " + h(u) : ""}${h(o) ? " open" : " close"}`, "svelte-1jqiztq"), ut($, `--expander-card-display:${i()["expander-card-display"] ?? ""};
                --gap:${(h(o) && h(u) !== "closing" ? i()["expanded-gap"] : i().gap) ?? ""};
                --child-padding:${(h(o) && h(u) !== "closing" ? i()["child-padding"] : "0px") ?? ""};`), Se($, 1, `children-container${h(o) ? " open" : " close"}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq");
      }), _e(b, E);
    };
    ct(Ki, (b) => {
      i().cards && b(vo);
    });
  }
  var _o = Nt(Ki, 2);
  {
    var go = (b) => {
      var E = os(), $ = rs(E);
      Wl($, () => h(k)), _e(b, E);
    };
    ct(_o, (b) => {
      h(k) && b(go);
    });
  }
  return Ye(tn), dt(tn, (b) => A(y, b), () => h(y)), Je(() => {
    Se(tn, 1, `expander-card${i().clear ? " clear" : ""}${h(o) ? " open" : " close"} ${h(u)}${i().animation ? " animation " + h(u) : ""}`, "svelte-1jqiztq"), ut(tn, `--expander-card-display:${i()["expander-card-display"] ?? ""};
     --gap:${(h(o) && h(u) !== "closing" ? i()["expanded-gap"] : i().gap) ?? ""}; --padding:${i().padding ?? ""};
     --expander-state:${h(o) ?? ""};
     --icon-rotate-degree:${i()["icon-rotate-degree"] ?? ""};
     --card-background:${(h(o) && h(u) !== "closing" && i()["expander-card-background-expanded"] ? i()["expander-card-background-expanded"] : i()["expander-card-background"]) ?? ""};
     --background-animation-duration:${h(_) ?? ""}s;
     --expander-card-overlay-height:${h(w) ? `${h(w)}px` : "auto"};
    `);
  }), _e(t, tn), Si(fo);
}
Dl(["click"]);
customElements.define("expander-card", ja(kc, { hass: {}, preview: {}, config: {} }, [], [], !0, (t) => class extends t {
  constructor() {
    super(...arguments);
    // re-declare props used in customClass.
    U(this, "config");
  }
  static async getConfigElement() {
    return await Mo(), document.createElement("expander-card-editor");
  }
  static getStubConfig() {
    return {
      type: "custom:expander-card",
      title: "Expander Card",
      cards: []
    };
  }
  setConfig(n = {}) {
    this.config = { ...bi, ...n };
  }
}));
const Pc = "4.5.0";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _r = globalThis, Mi = _r.ShadowRoot && (_r.ShadyCSS === void 0 || _r.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Hi = Symbol(), xs = /* @__PURE__ */ new WeakMap();
let Wa = class {
  constructor(e, n, r) {
    if (this._$cssResult$ = !0, r !== Hi) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = n;
  }
  get styleSheet() {
    let e = this.o;
    const n = this.t;
    if (Mi && e === void 0) {
      const r = n !== void 0 && n.length === 1;
      r && (e = xs.get(n)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && xs.set(n, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Dc = (t) => new Wa(typeof t == "string" ? t : t + "", void 0, Hi), ji = (t, ...e) => {
  const n = t.length === 1 ? t[0] : e.reduce((r, i, s) => r + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + t[s + 1], t[0]);
  return new Wa(n, t, Hi);
}, Mc = (t, e) => {
  if (Mi) t.adoptedStyleSheets = e.map((n) => n instanceof CSSStyleSheet ? n : n.styleSheet);
  else for (const n of e) {
    const r = document.createElement("style"), i = _r.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = n.cssText, t.appendChild(r);
  }
}, Ss = Mi ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let n = "";
  for (const r of e.cssRules) n += r.cssText;
  return Dc(n);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Hc, defineProperty: jc, getOwnPropertyDescriptor: Fc, getOwnPropertyNames: qc, getOwnPropertySymbols: Uc, getPrototypeOf: Gc } = Object, $t = globalThis, Ts = $t.trustedTypes, zc = Ts ? Ts.emptyScript : "", ei = $t.reactiveElementPolyfillSupport, Hn = (t, e) => t, xr = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? zc : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let n = t;
  switch (e) {
    case Boolean:
      n = t !== null;
      break;
    case Number:
      n = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        n = JSON.parse(t);
      } catch {
        n = null;
      }
  }
  return n;
} }, Fi = (t, e) => !Hc(t, e), Ns = { attribute: !0, type: String, converter: xr, reflect: !1, useDefault: !1, hasChanged: Fi };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), $t.litPropertyMetadata ?? ($t.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let ln = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, n = Ns) {
    if (n.state && (n.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((n = Object.create(n)).wrapped = !0), this.elementProperties.set(e, n), !n.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(e, r, n);
      i !== void 0 && jc(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, n, r) {
    const { get: i, set: s } = Fc(this.prototype, e) ?? { get() {
      return this[n];
    }, set(a) {
      this[n] = a;
    } };
    return { get: i, set(a) {
      const o = i == null ? void 0 : i.call(this);
      s == null || s.call(this, a), this.requestUpdate(e, o, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ns;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Hn("elementProperties"))) return;
    const e = Gc(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Hn("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Hn("properties"))) {
      const n = this.properties, r = [...qc(n), ...Uc(n)];
      for (const i of r) this.createProperty(i, n[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const n = litPropertyMetadata.get(e);
      if (n !== void 0) for (const [r, i] of n) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [n, r] of this.elementProperties) {
      const i = this._$Eu(n, r);
      i !== void 0 && this._$Eh.set(i, n);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const n = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r) n.unshift(Ss(i));
    } else e !== void 0 && n.push(Ss(e));
    return n;
  }
  static _$Eu(e, n) {
    const r = n.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((n) => this.enableUpdating = n), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((n) => n(this));
  }
  addController(e) {
    var n;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((n = e.hostConnected) == null || n.call(e));
  }
  removeController(e) {
    var n;
    (n = this._$EO) == null || n.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), n = this.constructor.elementProperties;
    for (const r of n.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Mc(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((n) => {
      var r;
      return (r = n.hostConnected) == null ? void 0 : r.call(n);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var r;
      return (r = n.hostDisconnected) == null ? void 0 : r.call(n);
    });
  }
  attributeChangedCallback(e, n, r) {
    this._$AK(e, r);
  }
  _$ET(e, n) {
    var s;
    const r = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, r);
    if (i !== void 0 && r.reflect === !0) {
      const a = (((s = r.converter) == null ? void 0 : s.toAttribute) !== void 0 ? r.converter : xr).toAttribute(n, r.type);
      this._$Em = e, a == null ? this.removeAttribute(i) : this.setAttribute(i, a), this._$Em = null;
    }
  }
  _$AK(e, n) {
    var s, a;
    const r = this.constructor, i = r._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const o = r.getPropertyOptions(i), l = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((s = o.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? o.converter : xr;
      this._$Em = i;
      const c = l.fromAttribute(n, o.type);
      this[i] = c ?? ((a = this._$Ej) == null ? void 0 : a.get(i)) ?? c, this._$Em = null;
    }
  }
  requestUpdate(e, n, r, i = !1, s) {
    var a;
    if (e !== void 0) {
      const o = this.constructor;
      if (i === !1 && (s = this[e]), r ?? (r = o.getPropertyOptions(e)), !((r.hasChanged ?? Fi)(s, n) || r.useDefault && r.reflect && s === ((a = this._$Ej) == null ? void 0 : a.get(e)) && !this.hasAttribute(o._$Eu(e, r)))) return;
      this.C(e, n, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, n, { useDefault: r, reflect: i, wrapped: s }, a) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? n ?? this[e]), s !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (n = void 0), this._$AL.set(e, n)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (n) {
      Promise.reject(n);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [s, a] of this._$Ep) this[s] = a;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [s, a] of i) {
        const { wrapped: o } = a, l = this[s];
        o !== !0 || this._$AL.has(s) || l === void 0 || this.C(s, void 0, a, l);
      }
    }
    let e = !1;
    const n = this._$AL;
    try {
      e = this.shouldUpdate(n), e ? (this.willUpdate(n), (r = this._$EO) == null || r.forEach((i) => {
        var s;
        return (s = i.hostUpdate) == null ? void 0 : s.call(i);
      }), this.update(n)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(n);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var n;
    (n = this._$EO) == null || n.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((n) => this._$ET(n, this[n]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
ln.elementStyles = [], ln.shadowRootOptions = { mode: "open" }, ln[Hn("elementProperties")] = /* @__PURE__ */ new Map(), ln[Hn("finalized")] = /* @__PURE__ */ new Map(), ei == null || ei({ ReactiveElement: ln }), ($t.reactiveElementVersions ?? ($t.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jn = globalThis, Cs = (t) => t, Sr = jn.trustedTypes, Rs = Sr ? Sr.createPolicy("lit-html", { createHTML: (t) => t }) : void 0, Ya = "$lit$", ht = `lit$${Math.random().toFixed(9).slice(2)}$`, Ja = "?" + ht, Bc = `<${Ja}>`, Jt = document, zn = () => Jt.createComment(""), Bn = (t) => t === null || typeof t != "object" && typeof t != "function", qi = Array.isArray, Vc = (t) => qi(t) || typeof (t == null ? void 0 : t[Symbol.iterator]) == "function", ti = `[ 	
\f\r]`, Rn = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Is = /-->/g, Ls = />/g, Rt = RegExp(`>|${ti}(?:([^\\s"'>=/]+)(${ti}*=${ti}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ks = /'/g, Ps = /"/g, Ka = /^(?:script|style|textarea|title)$/i, Wc = (t) => (e, ...n) => ({ _$litType$: t, strings: e, values: n }), on = Wc(1), En = Symbol.for("lit-noChange"), G = Symbol.for("lit-nothing"), Ds = /* @__PURE__ */ new WeakMap(), Lt = Jt.createTreeWalker(Jt, 129);
function Qa(t, e) {
  if (!qi(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Rs !== void 0 ? Rs.createHTML(e) : e;
}
const Yc = (t, e) => {
  const n = t.length - 1, r = [];
  let i, s = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = Rn;
  for (let o = 0; o < n; o++) {
    const l = t[o];
    let c, u, f = -1, _ = 0;
    for (; _ < l.length && (a.lastIndex = _, u = a.exec(l), u !== null); ) _ = a.lastIndex, a === Rn ? u[1] === "!--" ? a = Is : u[1] !== void 0 ? a = Ls : u[2] !== void 0 ? (Ka.test(u[2]) && (i = RegExp("</" + u[2], "g")), a = Rt) : u[3] !== void 0 && (a = Rt) : a === Rt ? u[0] === ">" ? (a = i ?? Rn, f = -1) : u[1] === void 0 ? f = -2 : (f = a.lastIndex - u[2].length, c = u[1], a = u[3] === void 0 ? Rt : u[3] === '"' ? Ps : ks) : a === Ps || a === ks ? a = Rt : a === Is || a === Ls ? a = Rn : (a = Rt, i = void 0);
    const w = a === Rt && t[o + 1].startsWith("/>") ? " " : "";
    s += a === Rn ? l + Bc : f >= 0 ? (r.push(c), l.slice(0, f) + Ya + l.slice(f) + ht + w) : l + ht + (f === -2 ? o : w);
  }
  return [Qa(t, s + (t[n] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class Vn {
  constructor({ strings: e, _$litType$: n }, r) {
    let i;
    this.parts = [];
    let s = 0, a = 0;
    const o = e.length - 1, l = this.parts, [c, u] = Yc(e, n);
    if (this.el = Vn.createElement(c, r), Lt.currentNode = this.el.content, n === 2 || n === 3) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (i = Lt.nextNode()) !== null && l.length < o; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const f of i.getAttributeNames()) if (f.endsWith(Ya)) {
          const _ = u[a++], w = i.getAttribute(f).split(ht), y = /([.?@])?(.*)/.exec(_);
          l.push({ type: 1, index: s, name: y[2], strings: w, ctor: y[1] === "." ? Kc : y[1] === "?" ? Qc : y[1] === "@" ? Xc : Hr }), i.removeAttribute(f);
        } else f.startsWith(ht) && (l.push({ type: 6, index: s }), i.removeAttribute(f));
        if (Ka.test(i.tagName)) {
          const f = i.textContent.split(ht), _ = f.length - 1;
          if (_ > 0) {
            i.textContent = Sr ? Sr.emptyScript : "";
            for (let w = 0; w < _; w++) i.append(f[w], zn()), Lt.nextNode(), l.push({ type: 2, index: ++s });
            i.append(f[_], zn());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Ja) l.push({ type: 2, index: s });
      else {
        let f = -1;
        for (; (f = i.data.indexOf(ht, f + 1)) !== -1; ) l.push({ type: 7, index: s }), f += ht.length - 1;
      }
      s++;
    }
  }
  static createElement(e, n) {
    const r = Jt.createElement("template");
    return r.innerHTML = e, r;
  }
}
function $n(t, e, n = t, r) {
  var a, o;
  if (e === En) return e;
  let i = r !== void 0 ? (a = n._$Co) == null ? void 0 : a[r] : n._$Cl;
  const s = Bn(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== s && ((o = i == null ? void 0 : i._$AO) == null || o.call(i, !1), s === void 0 ? i = void 0 : (i = new s(t), i._$AT(t, n, r)), r !== void 0 ? (n._$Co ?? (n._$Co = []))[r] = i : n._$Cl = i), i !== void 0 && (e = $n(t, i._$AS(t, e.values), i, r)), e;
}
class Jc {
  constructor(e, n) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = n;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: n }, parts: r } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? Jt).importNode(n, !0);
    Lt.currentNode = i;
    let s = Lt.nextNode(), a = 0, o = 0, l = r[0];
    for (; l !== void 0; ) {
      if (a === l.index) {
        let c;
        l.type === 2 ? c = new er(s, s.nextSibling, this, e) : l.type === 1 ? c = new l.ctor(s, l.name, l.strings, this, e) : l.type === 6 && (c = new Zc(s, this, e)), this._$AV.push(c), l = r[++o];
      }
      a !== (l == null ? void 0 : l.index) && (s = Lt.nextNode(), a++);
    }
    return Lt.currentNode = Jt, i;
  }
  p(e) {
    let n = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, n), n += r.strings.length - 2) : r._$AI(e[n])), n++;
  }
}
class er {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, n, r, i) {
    this.type = 2, this._$AH = G, this._$AN = void 0, this._$AA = e, this._$AB = n, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const n = this._$AM;
    return n !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = n.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, n = this) {
    e = $n(this, e, n), Bn(e) ? e === G || e == null || e === "" ? (this._$AH !== G && this._$AR(), this._$AH = G) : e !== this._$AH && e !== En && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Vc(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== G && Bn(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Jt.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var s;
    const { values: n, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = Vn.createElement(Qa(r.h, r.h[0]), this.options)), r);
    if (((s = this._$AH) == null ? void 0 : s._$AD) === i) this._$AH.p(n);
    else {
      const a = new Jc(i, this), o = a.u(this.options);
      a.p(n), this.T(o), this._$AH = a;
    }
  }
  _$AC(e) {
    let n = Ds.get(e.strings);
    return n === void 0 && Ds.set(e.strings, n = new Vn(e)), n;
  }
  k(e) {
    qi(this._$AH) || (this._$AH = [], this._$AR());
    const n = this._$AH;
    let r, i = 0;
    for (const s of e) i === n.length ? n.push(r = new er(this.O(zn()), this.O(zn()), this, this.options)) : r = n[i], r._$AI(s), i++;
    i < n.length && (this._$AR(r && r._$AB.nextSibling, i), n.length = i);
  }
  _$AR(e = this._$AA.nextSibling, n) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, n); e !== this._$AB; ) {
      const i = Cs(e).nextSibling;
      Cs(e).remove(), e = i;
    }
  }
  setConnected(e) {
    var n;
    this._$AM === void 0 && (this._$Cv = e, (n = this._$AP) == null || n.call(this, e));
  }
}
class Hr {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, n, r, i, s) {
    this.type = 1, this._$AH = G, this._$AN = void 0, this.element = e, this.name = n, this._$AM = i, this.options = s, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = G;
  }
  _$AI(e, n = this, r, i) {
    const s = this.strings;
    let a = !1;
    if (s === void 0) e = $n(this, e, n, 0), a = !Bn(e) || e !== this._$AH && e !== En, a && (this._$AH = e);
    else {
      const o = e;
      let l, c;
      for (e = s[0], l = 0; l < s.length - 1; l++) c = $n(this, o[r + l], n, l), c === En && (c = this._$AH[l]), a || (a = !Bn(c) || c !== this._$AH[l]), c === G ? e = G : e !== G && (e += (c ?? "") + s[l + 1]), this._$AH[l] = c;
    }
    a && !i && this.j(e);
  }
  j(e) {
    e === G ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Kc extends Hr {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === G ? void 0 : e;
  }
}
class Qc extends Hr {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== G);
  }
}
class Xc extends Hr {
  constructor(e, n, r, i, s) {
    super(e, n, r, i, s), this.type = 5;
  }
  _$AI(e, n = this) {
    if ((e = $n(this, e, n, 0) ?? G) === En) return;
    const r = this._$AH, i = e === G && r !== G || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, s = e !== G && (r === G || i);
    i && this.element.removeEventListener(this.name, this, r), s && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var n;
    typeof this._$AH == "function" ? this._$AH.call(((n = this.options) == null ? void 0 : n.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Zc {
  constructor(e, n, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = n, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    $n(this, e);
  }
}
const ni = jn.litHtmlPolyfillSupport;
ni == null || ni(Vn, er), (jn.litHtmlVersions ?? (jn.litHtmlVersions = [])).push("3.3.2");
const eu = (t, e, n) => {
  const r = (n == null ? void 0 : n.renderBefore) ?? e;
  let i = r._$litPart$;
  if (i === void 0) {
    const s = (n == null ? void 0 : n.renderBefore) ?? null;
    r._$litPart$ = i = new er(e.insertBefore(zn(), s), s, void 0, n ?? {});
  }
  return i._$AI(t), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Gt = globalThis;
class Fn extends ln {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var n;
    const e = super.createRenderRoot();
    return (n = this.renderOptions).renderBefore ?? (n.renderBefore = e.firstChild), e;
  }
  update(e) {
    const n = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = eu(n, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return En;
  }
}
var Hs;
Fn._$litElement$ = !0, Fn.finalized = !0, (Hs = Gt.litElementHydrateSupport) == null || Hs.call(Gt, { LitElement: Fn });
const ri = Gt.litElementPolyfillSupport;
ri == null || ri({ LitElement: Fn });
(Gt.litElementVersions ?? (Gt.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tu = (t) => (e, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nu = { attribute: !0, type: String, converter: xr, reflect: !1, hasChanged: Fi }, ru = (t = nu, e, n) => {
  const { kind: r, metadata: i } = n;
  let s = globalThis.litPropertyMetadata.get(i);
  if (s === void 0 && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), r === "setter" && ((t = Object.create(t)).wrapped = !0), s.set(n.name, t), r === "accessor") {
    const { name: a } = n;
    return { set(o) {
      const l = e.get.call(this);
      e.set.call(this, o), this.requestUpdate(a, l, t, !0, o);
    }, init(o) {
      return o !== void 0 && this.C(a, void 0, t, o), o;
    } };
  }
  if (r === "setter") {
    const { name: a } = n;
    return function(o) {
      const l = this[a];
      e.call(this, o), this.requestUpdate(a, l, t, !0, o);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function jr(t) {
  return (e, n) => typeof n == "object" ? ru(t, e, n) : ((r, i, s) => {
    const a = i.hasOwnProperty(s);
    return i.constructor.createProperty(s, r), a ? Object.getOwnPropertyDescriptor(i, s) : void 0;
  })(t, e, n);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function tr(t) {
  return jr({ ...t, state: !0, attribute: !1 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const iu = (t, e, n) => (n.configurable = !0, n.enumerable = !0, Reflect.decorate && typeof e != "object" && Object.defineProperty(t, e, n), n);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function su(t, e) {
  return (n, r, i) => {
    const s = (a) => {
      var o;
      return ((o = a.renderRoot) == null ? void 0 : o.querySelector(t)) ?? null;
    };
    return iu(n, r, { get() {
      return s(this);
    } });
  };
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const au = (t) => t ?? G, ou = ji`
  /* mwc-dialog (ha-dialog) styles */
  ha-dialog {
    --mdc-dialog-min-width: 400px;
    --mdc-dialog-max-width: 600px;
    --mdc-dialog-max-width: min(600px, 95vw);
    --justify-action-buttons: space-between;
    --dialog-container-padding: var(--safe-area-inset-top, 0)
      var(--safe-area-inset-right, 0) var(--safe-area-inset-bottom, 0)
      var(--safe-area-inset-left, 0);
    --dialog-surface-padding: 0px;
  }

  ha-dialog .form {
    color: var(--primary-text-color);
  }

  a {
    color: var(--primary-color);
  }

  /* make dialog fullscreen on small screens */
  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      --mdc-dialog-min-width: 100vw;
      --mdc-dialog-max-width: 100vw;
      --mdc-dialog-min-height: 100vh;
      --mdc-dialog-min-height: 100svh;
      --mdc-dialog-max-height: 100vh;
      --mdc-dialog-max-height: 100svh;
      --dialog-container-padding: 0px;
      --dialog-surface-padding: var(--safe-area-inset-top, 0)
        var(--safe-area-inset-right, 0) var(--safe-area-inset-bottom, 0)
        var(--safe-area-inset-left, 0);
      --vertical-align-dialog: flex-end;
      --ha-dialog-border-radius: var(--ha-border-radius-square);
    }
  }
  .error {
    color: var(--error-color);
  }
`, lu = ji`
  ha-dialog {
    /* Pin dialog to top so it doesn't jump when content changes size */
    --vertical-align-dialog: flex-start;
    --dialog-surface-margin-top: var(--ha-space-10);
    --mdc-dialog-max-height: calc(
      100vh - var(--dialog-surface-margin-top) - var(--ha-space-2) - var(
          --safe-area-inset-y,
          0px
        )
    );
    --mdc-dialog-max-height: calc(
      100svh - var(--dialog-surface-margin-top) - var(--ha-space-2) - var(
          --safe-area-inset-y,
          0px
        )
    );
  }

  @media all and (max-width: 450px), all and (max-height: 500px) {
    ha-dialog {
      /* When in fullscreen, dialog should be attached to top */
      --dialog-surface-margin-top: 0px;
      --mdc-dialog-min-height: 100vh;
      --mdc-dialog-min-height: 100svh;
      --mdc-dialog-max-height: 100vh;
      --mdc-dialog-max-height: 100svh;
    }
  }
`;
var cu = Object.defineProperty, uu = Object.getOwnPropertyDescriptor, We = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? uu(e, n) : e, s = t.length - 1, a; s >= 0; s--)
    (a = t[s]) && (i = (r ? a(e, n, i) : a(i)) || i);
  return r && i && cu(e, n, i), i;
};
const Xa = "custom:", du = (t) => t.startsWith(Xa), fu = (t) => {
  var e;
  return (e = window.customCards) == null ? void 0 : e.find((n) => n.type === t);
}, hu = (t) => t.replace(Xa, "");
let pe = class extends Fn {
  constructor() {
    super(...arguments), this.large = !1, this._config = {}, this._cardGUIMode = !0, this._cardGUIModeAvailable = !0, this._error = !1;
  }
  // NOSONAR Lit @query decorator updates
  async showDialog(t) {
    this._params = t, this._config = t.config ?? {}, this.lovelace = t.lovelace, this.large = !1;
  }
  closeDialog() {
    return this._params = void 0, this._config = {}, this.dispatchEvent(new CustomEvent("dialog-closed", { detail: { dialog: this.localName } })), !0;
  }
  _submit() {
    var t, e;
    (e = (t = this._params) == null ? void 0 : t.submit) == null || e.call(t, this._config), this.closeDialog();
  }
  _cancel() {
    var t, e;
    (e = (t = this._params) == null ? void 0 : t.cancel) == null || e.call(t), this.closeDialog();
  }
  _enlarge() {
    this.large = !this.large;
  }
  _ignoreKeydown(t) {
    t.stopPropagation();
  }
  render() {
    var n;
    if (!this._params || !this.hass)
      return G;
    const t = !this._config.type || this._error || void 0;
    let e = this._params.title ?? "";
    if (this._config.type) {
      let r;
      du(this._config.type) ? (r = (n = fu(
        hu(this._config.type)
      )) == null ? void 0 : n.name, r != null && r.toLowerCase().endsWith(" card") && (r = r.substring(0, r.length - 5))) : r = this.hass.localize(
        `ui.panel.lovelace.editor.card.${this._config.type}.name`
      ), e = `${e} - ${this.hass.localize(
        "ui.panel.lovelace.editor.edit_card.typed_header",
        { type: r }
      )}`;
    }
    return on`
        <ha-dialog
            open
            scrimClickAction
            escapeKeyAction
            @keydown=${this._ignoreKeydown.bind(this)}
            @closed=${this._cancel.bind(this)}
            .heading=${e}
        >
            <ha-dialog-header slot="heading">
                <ha-icon-button
                    slot="navigationIcon"
                    dialogAction="cancel"
                    .label=${this.hass.localize("ui.common.close")}
                >
                    <ha-icon .icon=${"mdi:close"}></ha-icon>
                </ha-icon-button>
                <span slot="title" @click=${this._enlarge.bind(this)}>${e}</span>
            </ha-dialog-header>
            ${this._renderCardEditor()}
            <div slot="primaryAction" @click=${this._submit.bind(this)}>
                <ha-button
                    appearance="plain"
                    size="small"
                    @click=${this._cancel.bind(this)}
                    dialogInitialFocus
                >
                    ${this._params.cancelText || this.hass.localize("ui.common.cancel")}
                </ha-button>
                <ha-button
                    size="small"
                    @click=${this._submit.bind(this)} 
                    disabled=${au(t)}
                >
                    ${this._params.submitText || this.hass.localize("ui.common.save")}
                </ha-button>
            </div>
        </ha-dialog>
        `;
  }
  _toggleCardMode() {
    var t;
    (t = this._cardEditorEl) == null || t.toggleMode();
  }
  _deleteCard() {
    this._config = {};
  }
  _cardConfigChanged(t) {
    t.stopPropagation(), this._config = { ...t.detail.config }, this._error = t.detail.error, this._cardGUIModeAvailable = t.detail.guiModeAvailable;
  }
  _cardGUIModeChanged(t) {
    t.stopPropagation(), this._cardGUIMode = t.detail.guiMode, this._cardGUIModeAvailable = t.detail.guiModeAvailable;
  }
  _renderCardEditorActions() {
    if (!this._config.type)
      return G;
    const t = this.hass.localize(
      !this._cardEditorEl || this._cardGUIMode ? "ui.panel.lovelace.editor.edit_card.show_code_editor" : "ui.panel.lovelace.editor.edit_card.show_visual_editor"
    );
    return on`
            <div slot="secondaryAction">
                <ha-button
                appearance="plain"
                size="small"
                @click=${this._toggleCardMode.bind(this)}
                .disabled=${!this._cardGUIModeAvailable}
                >
                    ${t}
                </ha-button>
                <ha-button
                appearance="plain"
                size="small"
                @click=${this._deleteCard.bind(this)}
                >
                    Change card
                </ha-button>
            </div>
        `;
  }
  _renderCardEditor() {
    const t = this._error ? "blur" : "", e = this._error ? on` <ha-spinner aria-label="Can't update card"></ha-spinner> ` : "";
    return on`
        ${this._config.type ? on`
            <div class="content">
                <div class="element-editor">
                    <hui-card-element-editor
                        .hass=${this.hass}
                        .lovelace=${this.lovelace}
                        .value=${this._config}
                        @config-changed=${this._cardConfigChanged.bind(this)}
                        @GUImode-changed=${this._cardGUIModeChanged.bind(this)}
                    ></hui-card-element-editor>
                </div>
                <div class="element-preview">
                    <hui-card
                        .hass=${this.hass}
                        .config=${this._config}
                        preview
                        class=${t}
                    ></hui-card>
                    ${e}
                </div>
            </div>
            ${this._renderCardEditorActions()}
            ` : on`
            <hui-card-picker
                .hass=${this.hass}
                .lovelace=${this.lovelace}
                @config-changed=${this._cardConfigChanged.bind(this)}
            ></hui-card-picker>
            `}
        `;
  }
};
pe.styles = [
  ou,
  lu,
  ji`
            :host {
                --code-mirror-max-height: calc(100vh - 176px);
            }
            ha-dialog {
                --mdc-dialog-max-width: 100px;
                --dialog-z-index: 6;
                --mdc-dialog-max-width: 90vw;
                --dialog-content-padding: 24px 12px;
            }
            .content {
                width: calc(90vw - 48px);
                max-width: 1000px;
            }
            @media all and (max-width: 450px), all and (max-height: 500px) {
                /* overrule the ha-style-dialog max-height on small screens */
                ha-dialog {
                    height: 100%;
                    --mdc-dialog-max-height: 100%;
                    --dialog-surface-top: 0px;
                    --mdc-dialog-max-width: 100vw;
                }
                .content {
                    width: 100%;
                    max-width: 100%;
                }
            }
            @media all and (min-width: 451px) and (min-height: 501px) {
                :host([large]) .content {
                    max-width: none;
                }
            }
            .content {
                display: flex;
                flex-direction: column;
                gap: 24px;
            }
            .content hui-card {
                display: block;
                padding: 4px;
                margin: 0 auto;
                max-width: 390px;
            }
            .content .element-editor {
                margin: 0 10px;
            }
            .content .element-preview {
                margin: 0 10px;
            }

            @media (min-width: 1000px) {
                .content {
                    flex-direction: row;
                }
                .content > * {
                    flex-basis: 0;
                    flex-grow: 1;
                    flex-shrink: 1;
                    min-width: 0;
                }
                .content hui-card {
                    padding: 8px 10px;
                    margin: auto 0px;
                    max-width: 500px;
                }
                .content .element-preview {
                    margin: unset;
                }
            }
            .hidden {
                display: none;
            }
            .element-editor {
                margin-bottom: 8px;
            }
            .blur {
                filter: blur(2px) grayscale(100%);
            }
            .element-preview {
                position: relative;
                height: max-content;
                background: var(--primary-background-color);
                padding: 4px;
                border-radius: var(--ha-border-radius-sm);
                position: sticky;
                top: 0;
            }
            .element-preview ha-spinner {
                top: calc(50% - 24px);
                left: calc(50% - 24px);
                position: absolute;
                z-index: 10;
            }
            hui-card {
                padding-top: 8px;
                margin-bottom: 4px;
                display: block;
                width: 100%;
                box-sizing: border-box;
            }

            [slot="primaryAction"] {
                gap: var(--ha-space-2);
                display: flex;
            }
            [slot="secondaryAction"] {
                gap: var(--ha-space-2);
                display: flex;
                margin-left: 0px;
            }
            [slot="navigationIcon"] {
                --ha-icon-display: block;
            }
        `
];
We([
  jr({ attribute: !1 })
], pe.prototype, "hass", 2);
We([
  jr({ type: Boolean, reflect: !0 })
], pe.prototype, "large", 2);
We([
  jr({ attribute: !1 })
], pe.prototype, "lovelace", 2);
We([
  tr()
], pe.prototype, "_params", 2);
We([
  tr()
], pe.prototype, "_config", 2);
We([
  tr()
], pe.prototype, "_cardGUIMode", 2);
We([
  tr()
], pe.prototype, "_cardGUIModeAvailable", 2);
We([
  tr()
], pe.prototype, "_error", 2);
We([
  su("hui-card-element-editor")
], pe.prototype, "_cardEditorEl", 2);
pe = We([
  tu("expander-card-title-card-edit-form")
], pe);
console.info(
  `%c  Expander-Card 
%c Version ${Pc}`,
  "color: orange; font-weight: bold; background: black",
  "color: white; font-weight: bold; background: dimgray"
);
window.customCards = window.customCards || [];
window.customCards.push(
  // NOSONAR es2019
  {
    type: "expander-card",
    name: "Expander Card",
    preview: !0,
    description: "Expander card"
  }
);
customElements.get("expander-card-title-card-edit-form") || customElements.define("expander-card-title-card-edit-form", pe);
export {
  kc as default
};
//# sourceMappingURL=expander-card.js.map
