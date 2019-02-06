import React, { Component } from 'react';
//Importar lo que creamos de wheater
import WeatherLocation from './WheaterLocation';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
         <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
