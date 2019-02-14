import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WheaterLocation';
import {Col, Row, Grid} from 'react-flexbox-grid';

const LocationList = ({cities, onSavedLocation})=>{

    const weatherLocationSelected = city =>{
        console.log("weatherLocationSelected");
        onSavedLocation(city);
    }
    
    const strToComponent = (cities)=>{
        const citiesC = (cities.map((a) =>      
            <WeatherLocation key = {a} city={a}
            weatherLocationClick={()=>
            weatherLocationSelected(a)}/>         
         ));

         return  citiesC;
    }
    return  (<div>
                  {strToComponent(cities)}     
              </div>);
}

LocationList.propTypes = {
    cities : PropTypes.array,
}
export default LocationList;