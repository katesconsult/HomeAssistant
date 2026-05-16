DOMAIN = "openweather_forecasts"

LOCATION = "location"
CONF_API_KEY = "api_key"
CONF_LAT = "latitude"
CONF_LON = "longitude"

DEFAULT_NAME = "OpenWeather Forecasts"
UPDATE_INTERVAL = 3600  # seconds

SENSOR_TYPES = {
    "temperature": {
        "name": "Current Temperature",
        "unit": "°F"
    },
    "feels_like": {
        "name": "Current Feels Like",
        "unit": "°F"
    },
    "humidity": {
        "name": "Current Humidity",
        "unit": "%"
    },
    "overnight_low": {
        "name": "Overnight Low",
        "unit": "°F"
    },
    "overnight_high": {
        "name": "Overnight High",
        "unit": "°F"
    },
    #"forecast": {
    #    "name": "Forecast Data"
    #},
    "last_update": {
        "name": "Last Update",
        "unit": "timestamp"
    }
}
