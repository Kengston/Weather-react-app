import React from 'react';
import './App.css';

class App extends React.Component {

  //state
  state = {
    coords:{
      latitude: 59,
      longitude: 90
    }
  }

  componentDidMount() {
    //get device location
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = {
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }

        this.setState({coords:newCoords});

      })
    } else {
      console.log("Pizdec")
    }
  }

  render() {
    return (
        <div className="App">

        </div>
    );
  }
}


export default App;
