var React = require('react');
var CityInput = require('./CityInput');

function Nav () {
  return (
    <div className="navbar">
      <h1>Clever Title</h1>
      <CityInput flexDirection='row'/>
    </div>
  )
}

module.exports = Nav;