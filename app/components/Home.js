var React = require('react');
var CityInput = require('./CityInput');

function Home (props) {
  return (
    <div className="home-container" style={{ backgroundImage : "url('app/images/pattern.svg')"}}>
      <h1 className="header">Enter a City and State</h1>
      <CityInput 
        flexDirection='column' 
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

module.exports = Home;