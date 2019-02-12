//Importamos React from 'react', nos permitirá trabajar con React
import React , {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types';
import Location from './Location';
import weatherCityUrl from './../services/weatherCityUrl';
import WheaterData from './WheaterData';
import './styles.css';
import transformWeather from './../services/transformWeather';

class WheaterLocation extends Component{
    componentDidMount() {
        this.handleUpdate();
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    constructor(props){
        super(props);
        
        const { city } = props;

        this.state = {
            city : city,
            data : null
        };
    }
    
   handleUpdate = ()=>{
    const api_weather = weatherCityUrl(this.state.city);
    fetch(api_weather).then((resolve)=>{
        return resolve.json();
    }).then((result)=>{
        this.setState(  {   
            // city: `${result.name}, ${result.sys.country}`,
            data: transformWeather(result),
       });
    });
   }
    render(){
        const {city, data} = this.state;
        const {weatherLocationClick} = this.props;
        return  (
           <div>
               <div className="weatherDataContainer" onClick={weatherLocationClick}>
                    <Location city={city}></Location>
                    {data ? 
                    <WheaterData data={data}></WheaterData> : 
                    <CircularProgress></CircularProgress>
                   }   
                </div>           
           </div>        
        );
    } 
}
//Trabaja Babel con React JSX
//La aplicación podra invocar esto desde cualquier punto
//Con export 

WheaterLocation.propTypes = {
    city : PropTypes.string.isRequired,
}
export default WheaterLocation;