import React from 'react';

const AddlCond = ({weather, units}) => {
  // Openweather API has UTC timezone offset, but creating additional offset for local time
  let offset = new Date(Date.now()).getTimezoneOffset() * 60;

  const mphToMs = (speed) => speed/2.237;

  // convert wind degrees to cardinal direction (8 points)
  const degreeToCardinal = (deg) => {
    let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    let section = Math.round(deg/45) + 1;
    return(directions[section]);
  }

  const sunrise = new Date((weather.sunrise + weather.timeZone + offset) * 1000).toLocaleTimeString("en", {hour: '2-digit', minute: '2-digit'});
  const sunset = new Date((weather.sunset + weather.timeZone + offset) * 1000).toLocaleTimeString("en", {hour: '2-digit', minute: '2-digit'});

  return (
    <div id="addlConditions">
      <p>
        Humidity: {`${weather.humidity}%`} <br/>
        Wind: {(units === "F")
          ? `${weather.windspeed} mph, ${degreeToCardinal(weather.windDir)}`
          : `${Math.round(mphToMs(weather.windspeed))} m/s, ${degreeToCardinal(weather.windDir)}`
        } <br/>
        Sunrise: {sunrise} <br/>
        Sunset: {sunset}
      </p>
    </div>
  )
}

export default AddlCond;