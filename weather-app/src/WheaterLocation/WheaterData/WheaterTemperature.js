import React from 'react';
import WeatherIcon from 'react-weathericons';
import PropTypes from 'prop-types';
const icons = {
    sunny : 'day-sunny',
    cloudy : 'day-cloudy-gusts',
    rainy : 'day-rain-mix',
    snowy : 'snow',
    windy : 'windy',
    thunder : 'day-thunderstore',
    drizzle : 'day-showers',
};
 
const getWeatherIcon = (weatherState)=>{
    const icon = icons[weatherState];
    const sizeIncon = '3x'; 
    if(icon){
        return <WeatherIcon   className="wicon" name={icon} size={sizeIncon}></WeatherIcon>
    }else{
        return <WeatherIcon   className="wicon" name={'day-sunny'} size={sizeIncon}></WeatherIcon>
    }
}

const WheaterTemperature = ({temperature, weatherState}) =>(
  
  <div className="weatherTemperature">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{` ${temperature} `}</span>
        <span className="temperatureType">{` C° `}</span>
    </div>
);
WheaterTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WheaterTemperature;