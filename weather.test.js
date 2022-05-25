// const WeatherApi = require("./weatherApi");
const Weather = require('./weather')

describe('Weather', () => {
  it('returns the weather of a given city', () => {
    const mockAPI = {
      fetchWeatherData: (city, callback) => {
        callback({
          name: 'Bristol',
          weather: '40 degrees'
        })
      }
    };

    weather = new Weather(mockAPI);
    weather.fetch('Bristol');

    expect(weather.getWeatherData()).toEqual({
      name: 'Bristol',
      weather: '40 degrees'
    })
  })
});
