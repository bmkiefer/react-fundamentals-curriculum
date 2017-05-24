var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

var yahooIconMap = {
  "0":"11d",
  "1":"11d",
  "2":"11d",
  "3":"11d",
  "4":"11d",
  "5":"50n",
  "6":"50n",
  "7":"50n",
  "8":"09n",
  "9":"09n",
  "10":"09d",
  "11":"09d",
  "12":"09d",
  "13":"50n",
  "14":"50n",
  "15":"50n",
  "16":"50n",
  "17":"50n",
  "18":"50n",
  "19":"01d",
  "20":"50d",
  "21":"50n",
  "22":"50d",
  "23":"50d",
  "24":"50d",
  "25":"50n",
  "26":"03d",
  "27":"03n",
  "28":"03d",
  "29":"02n",
  "30":"02d",
  "31":"01n",
  "32":"01d",
  "33":"01n",
  "34":"01d",
  "35":"09d",
  "36":"01d",
  "37":"10d",
  "38":"10d",
  "39":"10d",
  "40":"10d",
  "41":"50n",
  "42":"50n",
  "43":"50n",
  "44":"02d",
  "45":"11d",
  "46":"50n",
  "47":"11d",
  "3200": "01d"
};

function convertYahooCodeToIcon (yahooCode) {
  return yahooIconMap[yahooCode]
}

function convertTemp (kelvin) {
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10)
}

//Input Date: 23 May 2017
function getDate (inputDate) {
  var date = new Date(Date.parse(inputDate));
  var day = daysMap[date.getDay()]
  var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day + ', ' + month;
}

module.exports = {
  convertYahooCodeToIcon: convertYahooCodeToIcon,
  convertTemp: convertTemp,
  getDate: getDate
}