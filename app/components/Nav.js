var React = require('react');
var CityInput = require('./CityInput');

function Nav (props) {
  return (
    <div className="navbar">
      <h1>Clever Title</h1>
      <CityInput 
        flexDirection='row' 
        onSubmitCity={function (city) {
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city=' + city
                    })
                  }}
      />
    </div>
  )
}

module.exports = Nav;