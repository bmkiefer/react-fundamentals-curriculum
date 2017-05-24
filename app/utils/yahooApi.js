var axios = require('axios');

var _baseURL = 'https://query.yahooapis.com/v1/public/yql';

function prepRouteParams (queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&')
}

function prepUrl (type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + city + '")',
    format: 'json',
    diagnostics: 'true'
  }
}

function getCurrentWeather (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData)

  return axios.get(url)
    .then(function (currentWeatherData) {
      return currentWeatherData.data
    })
}

function getForecast (city) {
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('', queryStringData)

  return axios.get(url)
    .then(function (forecastData) {
      return forecastData.data.query.results.channel.item.forecast
    })
}

module.exports = {
  getCurrentWeather: getCurrentWeather,
  getForecast: getForecast
}