import React from 'react';
import { ICON_MAP } from '../../util/constants';
import './elements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';

function WeatherIcon(props) {
  // TODO dynamically generate icon to import
  const { icon } = props;
  const iconName= ICON_MAP[icon];

  return (
    <span className="weather-app__icon">
      <FontAwesomeIcon icon={faCloudMoon} />
    </span>
  );
}

export default WeatherIcon;
