from datetime import timedelta, datetime
import logging
import aiohttp
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .const import UPDATE_INTERVAL, CONF_API_KEY, CONF_LAT, CONF_LON

_LOGGER = logging.getLogger(__name__)

class OpenWeatherCoordinator(DataUpdateCoordinator):
    def __init__(self, hass, api_key, lat, lon):
        self.api_key = api_key
        self.lat = lat
        self.lon = lon
        self.session = aiohttp.ClientSession()

        super().__init__(
            hass,
            _LOGGER,
            name="OpenWeather Forecasts",
            update_interval=timedelta(seconds=UPDATE_INTERVAL)
        )

    async def _async_update_data(self):
        url = (
            f"https://api.openweathermap.org/data/3.0/onecall?"
            f"lat={self.lat}&lon={self.lon}&exclude=current,minutely,daily,alerts"
            f"&appid={self.api_key}&units=imperial"
        )

        try:
            async with self.session.get(url) as response:
                if response.status != 200:
                    raise UpdateFailed(f"Error fetching data: {response.status}")

                raw = await response.json()
                hourly = raw.get("hourly", [])

                if not hourly:
                    raise UpdateFailed("No hourly forecast returned")

                # ----- Normalize Data -----
                # Slice the next 36 hours of data
                forecast_data = []
                for entry in hourly[:36]:
                    forecast_data.append({
                        "datetime": entry.get("dt"), # Unix seconds
                        "temperature": entry.get("temp"),
                        "feels_like": entry.get("feels_like"),
                        "humidity": entry.get("humidity")
                        #"wind_speed": entry.get("wind_speed"),
                        #"rain": entry.get("rain", {}).get("1h", 0),
                        #"snow": entry.get("snow", {}).get("1h", 0),
                        #"probability_precip": entry.get("pop", 0) * 100 # OWM pop is 0-1
                    })
        
                # Current hour forecast (next hour)
                now = hourly[0]
                current_temperature = now.get("temp")
                current_feels_like = now.get("feels_like")
                current_humidity = now.get("humidity")

                # Overnight high/low example (from next 12 hours)
                next_12 = hourly[:12]
                overnight_low = min(h.get("temp") for h in next_12)
                overnight_high = max(h.get("temp") for h in next_12)

                return {
                    "temperature": current_temperature,
                    "feels_like": current_feels_like,
                    "humidity": current_humidity,
                    "overnight_low": overnight_low,
                    "overnight_high": overnight_high,
                    #"forecast": forecast_data,  # This is the list for ApexCharts
                    "last_updated": datetime.utcnow().isoformat()
                }                

        except Exception as err:
            raise UpdateFailed(f"Error fetching OpenWeather data: {err}")
