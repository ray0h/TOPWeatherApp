import React from 'react';

const Forecast = ({weather}) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  
  return (
    <div id="weatherIcon">
      <strong>{weather.description}</strong>
      <br/>
      <img src={weatherIcon} alt="weather condition"/>
    </div>
  )
}

export default Forecast;