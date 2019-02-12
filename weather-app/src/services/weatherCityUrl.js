import {api_key, url_base_weather} from '../constans/api_url';


const weatherCityUrl = city =>{
    return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export default weatherCityUrl;