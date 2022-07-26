import React, { Component } from 'react';

class App extends Component {

  // the first function which is called 
  constructor(props) {
    super(props)

    this.state = { lat: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>{this.state.lat}</div>
    }
    return <div>Loading ...</div>
  }
}

export default App;
