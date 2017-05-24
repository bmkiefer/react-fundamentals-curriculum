var React = require('react');
var PropTypes = require('prop-types');
var utils = require('../utils/helpers');
var getDate = utils.getDate;
var convertYahooCodeToIcon = utils.convertYahooCodeToIcon;

function DayItem (props) {
  var date = getDate(props.day.date);
  var icon = convertYahooCodeToIcon(props.day.code);
  return (
    <div onClick={props.onClick} className='dayContainer'>
      <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='subheader'>{date}</h2>
    </div>
  )
}

DayItem.propTypes = {
  day: PropTypes.object.isRequired,
  onClick: PropTypes.func,
}

module.exports = DayItem;