var React = require('react');
var CityInput = require('./CityInput');

function Nav () {
  return (
    <div className="home-container" style={{ backgroundImage : "url('app/images/pattern.svg')"}}>
      <h1 className="header">Enter a City and State</h1>
      <CityInput flexDirection='column'/>
    </div>
  )
}

module.exports = Nav;