import React from 'react';
import PropTypes from 'prop-types';
import WheaterTemperature from './WheaterTemperature';
import WheaterExtraInfo from './WheaterExtraInfo';
import {
    CLOUDY,
    SUNNY, 
    RAINY , 
    SNOWY , 
    WINDY,
} from '../../constans/weather';
import './styles.css';


const WheaterData = ({ data : { temperature, weatherState, humidity, wind} }) => (
  
//   const { temperature, weatherState, humidity, wind} = data;
 <div className="weatherInfoContainer">   
            <WheaterTemperature temperature = {temperature} weatherState={weatherState}></WheaterTemperature>
            <WheaterExtraInfo humidity = {humidity} wind= {wind}></WheaterExtraInfo>
        </div>
);
WheaterData.propTypes = {
        data : PropTypes.shape({
            temperature : PropTypes.number.isRequired,
            weatherState : PropTypes.string.isRequired,
            humidity : PropTypes.number.isRequired,
            wind : PropTypes.number.isRequired,
        })
}
export default WheaterData;