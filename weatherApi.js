const got = require("got");

class WeatherApi {
  constructor() {
    this.apiKey = require("./apiKey");
  }

  fetchWeatherData(city, callback) {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`;

    got(requestUrl)
      .then((response) => JSON.parse(response.body))
      .then(callback);
  }
}

module.exports = WeatherApi;
