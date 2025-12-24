from datetime import datetime
from homeassistant.core import HomeAssistant
from homeassistant.config_entries import ConfigEntry
from homeassistant.components.sensor import SensorEntity
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, SENSOR_TYPES, LOCATION
import logging

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
):
    """Set up sensors from a config entry."""
    _LOGGER.debug("[sensor] async_setup_entry called")

    location = entry.data.get(LOCATION, "")
    coordinator = hass.data[DOMAIN][entry.entry_id]
    sensors = []

    for sensor_type, sensor_info in SENSOR_TYPES.items():
        name = sensor_info["name"]
        unit = sensor_info.get("unit")

        _LOGGER.debug("Creating sensor: %s (%s)", name, sensor_type)

        sensors.append(
            OpenWeatherForecastSensor(
                coordinator=coordinator,
                entry_id=entry.entry_id,
                sensor_type=sensor_type,
                location=location,
                name=name,
                unit=unit,
            )
        )

    async_add_entities(sensors)
    _LOGGER.debug("[sensor] Added %s sensors", len(sensors))


class OpenWeatherForecastSensor(CoordinatorEntity, SensorEntity):
    """Sensor for OpenWeather normalized forecast data."""

    def __init__(self, coordinator, entry_id, sensor_type, location, name, unit):
        super().__init__(coordinator)
        self._sensor_type = sensor_type
        #self._location = location
        #self._attr_name = name
        self._attr_name = f"{location} {name}"
        self._attr_unique_id = f"{entry_id}_{sensor_type}"
        self._attr_native_unit_of_measurement = unit

    @property
    def native_value(self):
        """Return the sensor value, handling numeric and timestamp sensors."""
        value = self.coordinator.data.get(self._sensor_type)

        if self._sensor_type == "last_update":
            # Convert string to datetime object
            if isinstance(value, str):
                try:
                    return datetime.fromisoformat(value)
                except ValueError:
                    return None
            return value

        # For all other sensors, assume numeric
        return value

    '''
    @property
    def extra_state_attributes(self):
        """Optional extra attributes."""
        return {
            "last_update": self.coordinator.data.get("last_update"),
            "source": "OpenWeather Forecasts",
        }
    '''

    @property
    def extra_state_attributes(self):
        return {
            "source": "OpenWeather Forecasts",
        }

    @property
    def available(self):
        """Entity availability."""
        return self.coordinator.last_update_success

    @property
    def entity_picture(self):
        path = f"/local/{DOMAIN}/forecast.png"
        _LOGGER.debug("Returning entity_picture path: %s", path)
        return f"/config/www/{DOMAIN}/forecast.png"