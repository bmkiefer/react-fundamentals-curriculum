var React = require('react');
var PropTypes = require('prop-types');

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flexDirection: props.flexDirection,
      onSubmitCity: props.onSubmitCity,
      city: '',
    }

    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }
  handleSubmitCity () {
    this.props.onSubmitCity(this.state.city)

    this.setState(function () {
      return {
        city: ''
      }
    })
  }
  handleUpdateCity (e) {
    var city = e.target.value;
    this.setState(function () {
      return {
        city: city
      }
    });
  }
  render() {
    return (
      <div className="zipcode-container" style={{ flexDirection : this.state.flexDirection }}>
        <input 
          type="text" 
          className="form-control" 
          onChange={this.handleUpdateCity} 
          placeholder="St. George, Utah" 
          value={this.state.city}>
        </input>
        <button 
          type="button" 
          className="btn btn-success" 
          style={{ margin: '10px'}}
          onClick={this.handleSubmitCity}>
          Get Weather
        </button>
      </div>
    )
  }
}

CityInput.propTypes = {
  flexDirection: PropTypes.string.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
}

CityInput.defaultProps = {
  flexDirection: 'row' 
};

module.exports = CityInput;