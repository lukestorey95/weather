class Weather {
  constructor(api) {
    this.weatherAPI = api;
  }

  fetch(city) {
    this.weatherAPI.fetchWeatherData(
      city,
      (result) => (this.weatherData = result)
    );
  }

  getWeatherData() {
    return this.weatherData;
  }

  displayWeather() {
    return `City: ${this.weatherData.name}\nWeather: ${this.weatherData.weather[0].main}\nTemperature: ${this.weatherData.main.temp}\nFeels like: ${this.weatherData.main.feels_like}\nHumidity: ${this.weatherData.main.humidity}`;
  }
}

module.exports = Weather;
