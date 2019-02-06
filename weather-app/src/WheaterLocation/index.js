
//Importamos React from 'react', nos permitirá trabajar con React
import React , {Component} from 'react';
import Location from './Location';
import WheaterData from './WheaterData';
import './styles.css';
import { SUNNY, RAINY } from '../constans/weather';

const data = {
    temperature :5,
    weatherState : RAINY,
    humidity : 10,
    wind : 2000
}
const data2 = {
    temperature : 8,
    weatherState : SUNNY,
    humidity : 10,
    wind : 2000
}

class WheaterLocation extends Component{
    constructor(){
        super();
        this.state = {
             city : 'Bogotá' ,
             data : data,  
        };
    }

   handleUpdate = ()=>{
       this.setState({
            city: 'Berlín',
            data: data2,
       });
   }
    render(){
        const {city, data} = this.state;
        return  (
           <div>
               <div className="weatherDataContainer">
                    <Location city={city}></Location>
                    <WheaterData data={data}></WheaterData>      
                    <div>
                             <button onClick={this.handleUpdate} className="btn btn-danger">Actualizar</button>
                     </div>
                </div>
                
           </div>        
        );
    }
   
}
    //Trabaja Babel con React JSX
  

//La aplicación podra invocar esto desde cualquier punto
//Con export 
export default WheaterLocation;