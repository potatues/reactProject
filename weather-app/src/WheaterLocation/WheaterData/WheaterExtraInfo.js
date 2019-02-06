import React from 'react';
import PropTypes from 'prop-types';
const WheaterExtraInfo = ({humidity, wind})=> {
    console.log({wind});
    return (
    <div className="weatherExtraInfo">
        <span className="extraInfoText1">{`Humedad : ${humidity} %`}</span>
        <span className="extraInfoText2">{`Vientos : ${wind} m/s`}</span>
    </div>);
};

WheaterExtraInfo.propTypes ={
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.number.isRequired,
}
export default WheaterExtraInfo;