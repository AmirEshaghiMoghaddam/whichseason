import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { lat: null }
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    )
    return (<div>Latitude: {this.state.lat}</div>);
  }
}

export default App;
