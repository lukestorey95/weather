// const WeatherApi = require("./weatherApi");
const Weather = require("./weather");

describe("Weather", () => {
  it("returns the weather of a given city", () => {
    const mockAPI = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: "Bristol",
          weather: "40 degrees",
        });
      },
    };

    weather = new Weather(mockAPI);
    weather.fetch("Bristol");

    expect(weather.getWeatherData()).toEqual({
      name: "Bristol",
      weather: "40 degrees",
    });
  });

  it("formats the weather in a pretty breakdown", () => {
    const mockAPI = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: "London",
          weather: [{ main: "Clouds" }],
          main: { temp: "18.4", feels_like: "16.0", humidity: "64%" },
        });
      },
    };

    weather = new Weather(mockAPI);
    weather.fetch("London");

    expect(weather.displayWeather()).toEqual(
      "City: London\nWeather: Clouds\nTemperature: 18.4\nFeels like: 16.0\nHumidity: 64%"
    );
  });
});
