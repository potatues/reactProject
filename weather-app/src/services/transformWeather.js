
import { 
    SUNNY,
    RAINY,
    SNOWY ,
    THUNDER, 
    DRIZZLE,
    CLOUDY
 } from '../constans/weather';

const getWeatherState = (weather)=>{
    const {id} = weather;
        if(id < 300){
            return THUNDER;
        }else if(id < 400){
            return DRIZZLE;
        }else if(id < 600){
            return RAINY;
        }else if(id < 700){
            return SNOWY;
        }else if(id=== 800){
            return SUNNY;
        }else{
            return CLOUDY;
        }
}

const transformWeather = (weather_data)=>{
    const {temp, humidity} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);

    const data = {
        temperature : Math.floor(temp-273.5),
        humidity : humidity,
        wind : speed,
        weatherState: weatherState,
    }

    return data;
}

export default transformWeather;
