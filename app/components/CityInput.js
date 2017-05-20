var React = require('react');
var PropTypes = require('prop-types');

class CityInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      flexDirection: props.flexDirection
    }
  }
  componentDidMount() {
    // var players = queryString.parse(this.props.location.search);

    // api.battle([
    //   players.playerOneName,
    //   players.playerTwoName
    // ]).then(function (players) {
    //   if (players === null) {
    //     return this.setState(function () {
    //       return {
    //         error: 'Looks like there was an error. Check that both users exist on Github.',
    //         loading: false,
    //       }
    //     });
    //   }

    //   this.setState(function () {
    //     return {
    //       error: null,
    //       winner: players[0],
    //       loser: players[1],
    //       loading: false,
    //     }
    //   });
    // }.bind(this));
  }
  render() {
    return (
      <div className="zipcode-container" style={{ flexDirection : this.state.flexDirection }}>
        <input type="text" className="form-control" placeholder="St. George, Utah" value=""></input>
        <button type="button" className="btn btn-success" style={{ margin: '10px'}}>Get Weather</button>
      </div>
    )
  }
}

CityInput.propTypes = {
  flexDirection: PropTypes.string.isRequired,
}

CityInput.defaultProps = {
  flexDirection: 'row'
};

module.exports = CityInput;