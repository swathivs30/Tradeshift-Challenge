import React from 'react';
import './elements.css';

function WeatherButton(props) {
  const { buttonText, onClickHandler } = props;

  return (
    <button className="weather-app__button" onClick={onClickHandler}>
      {buttonText}
    </button>
  );
}

export default WeatherButton;
