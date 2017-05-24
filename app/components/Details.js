var React = require('react');
var PropTypes = require('prop-types');
var DayItem = require('./DayItem');
var convertTemp = require('../utils/helpers').convertTemp;

class Details extends React.Component {
  render() {
    var props = this.props.location.state;
    return (
      <div>
        <DayItem day={props} />
        <div className='description-container'>
          <p>{props.city}</p>
          <p>{props.text}</p>
          <p>min temp: {props.low} degrees</p>
          <p>max temp: {props.high} degrees</p>
        </div>
      </div>
    )
  }
}

module.exports = Details;