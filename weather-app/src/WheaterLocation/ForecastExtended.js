import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ForecastExtended extends Component {

    render(){
        const {city} = this.props;

        return (<div>Pronostico extendido para {city ? city : 'Bogota, CO'}</div>); 
    }
}

ForecastExtended.propTypes = {
    city : PropTypes.string,
}

export default ForecastExtended;