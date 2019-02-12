import React, { Component } from 'react';
import LocationList from './WheaterLocation/LocationList';
import './App.css';

const cities = ['Bogota, CO', 'Paris, FR', 'Madrid, ES', 'Tura, RU'];

const showLocationSaved = city =>{
  return console.log("showLocationSaved: "+ city);
}
class App extends Component {

  render() {
    return (
          <div className="App">
            <LocationList cities= {cities} onSavedLocation={showLocationSaved}></LocationList>
          </div>
          );
       }  
    }
export default App;
