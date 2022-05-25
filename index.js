const got = require("got");
const apiKey = require("./apiKey");
const city = "Melbourne";
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData.main.humidity);
});

console.log("Requesting weather data");
 