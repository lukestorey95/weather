 class Weather {

  constructor(api) {
    this.weatherAPI = api;
  }

  fetch(city) {
    this.weatherAPI.fetchWeatherData(
    city, 
    result => this.weatherData = result
    )
  }

  getWeatherData() {
    return this.weatherData;
  } 
 }

 module.exports = Weather