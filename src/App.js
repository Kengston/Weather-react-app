import React from 'react';
import Axios from "axios";
import './App.css';

class App extends React.Component {

    //state
    state = {
        coords: {
            latitude: 59,
            longitude: 90
        }
    }

    componentDidMount() {
        //get device location
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition((position) => {
                let newCoords = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }

                this.setState({coords: newCoords});

                //Api call
                Axios.get(`http://api.weatherstack.com/current?access_key=cc23925749e752253199ee5e54e95751&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
                    console.log(res)
                })

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
