import React, { Component } from 'react';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

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

  // better to empty render()
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Loading message='Please allow location access' />
  }

  render() {
    return (<div>
      {this.renderContent()}
    </div>)
  }
}

export default App;
