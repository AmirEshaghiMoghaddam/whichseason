import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {

  // it is possible to define state without constructor() as well
  state = { lat: null, errorMessage: '' }

  // best place for fetching
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <div>Loading ...</div>
  }
}

export default App;
