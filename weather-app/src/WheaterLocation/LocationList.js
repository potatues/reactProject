import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WheaterLocation';

const LocationList = ({cities, onSavedLocation})=>{
    const weatherLocationSelected = city =>{
        console.log("weatherLocationSelected");
        onSavedLocation(city);
    }
    const strToComponent = (cities)=>{
        return cities.map((a) =>
         <WeatherLocation key = {a} city={a}
         weatherLocationClick={()=>
         weatherLocationSelected(a)}/>);
    }

    return  (<div>
                  {strToComponent(cities)}
              </div>);
}

LocationList.propTypes = {
    cities : PropTypes.array.isRequired,
}
export default LocationList;