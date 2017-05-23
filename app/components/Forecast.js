var React = require('react');
var Loading = require('./Loading');
var DayItem = require('./DayItem');
var queryString = require('query-string');
var api = require('../utils/api');
var helpers = require('../utils/helpers');

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      forecast: [],
      city: ''
    }

    this.makeRequest = this.makeRequest.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.city = queryString.parse(this.props.location.search).city;
    this.makeRequest(this.city);
  }
  componentWillReceiveProps(nextProps) {
    this.city = queryString.parse(nextProps.location.search).city;
    this.makeRequest(this.city);
  }
  makeRequest(city) {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getForecast(city)
      .then(function (res) {
        this.setState(function () {
          return {
            loading: false,
            forecastData: res,
          }
        })
      }.bind(this))
  }
  makeRequest(city) {
    api.getForecast(city).then(function (forecast) {
      if (forecast === null) {
        return this.setState(function () {
          return {
            error: 'Looks like there was an error. Check that the city exists.',
            loading: false,
          }
        });
      }

      this.setState(function () {
        return {
          error: null,
          forecast: forecast,
          loading: false,
          city: city
        }
      });
    }.bind(this));
  }
  handleClick(forecastDay) {
    forecastDay.city = this.city;
    this.props.history.push({
      pathname: '/details/' + this.city,
      state: forecastDay,
    })
  }
  render() {
    var error = this.state.error;
    var loading = this.state.loading;
    var forecast = this.state.forecast;

    if (error) {
      return (
        <div>
          <p>{error}</p>
          <p>Search Again</p>
        </div>
      )
    }
    return (
      this.state.loading === true ? <Loading />
      : <div>
          <h1 className='forecast-header'>{this.city}</h1>
          <div className='forecast-container'>
            {this.state.forecast.map(function (listItem) {
              return <DayItem key={listItem.dt} onClick={this.handleClick.bind(this, listItem)} day={listItem} />
            }, this)}
          </div>
        </div>
    )
  }
}

module.exports = Forecast;