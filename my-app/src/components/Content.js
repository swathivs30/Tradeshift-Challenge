import React from 'react';
import WeatherIcon from './elements/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faClock, faWind, faLowVision } from '@fortawesome/free-solid-svg-icons';

function Content(props) {
  const { temperature, summary, windSpeed, icon, visibility, time } = props;

  //TODO loop throught data if there is a set design pattern to be followed for allt he data destructured
  // import icon element by dynamically sending the fontawesome icon name as prop
  return (
    <>
      <WeatherIcon icon={icon}/>
      <div className="weather-app__content-wrapper">
        <span className="weather-app__info-container">{ summary }</span>
        <span className="weather-app__info-container">
          <FontAwesomeIcon icon={faClock} />
          { time }
        </span>
        <span className="weather-app__info-container">
          <FontAwesomeIcon icon={faTemperatureHigh} />
          { temperature } F
        </span>
        <span className="weather-app__info-container">
          <FontAwesomeIcon icon={faWind} />
          { windSpeed }
        </span>
        <span className="weather-app__info-container">
          <FontAwesomeIcon icon={faLowVision} />
          { visibility }
        </span>
      </div>
    </>
  );
}

export default Content;
