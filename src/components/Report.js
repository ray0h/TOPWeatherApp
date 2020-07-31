import React, { useState } from "react";

function Report({ weather }) {
  const [ units, setUnits ] = useState("F");

  const farenheitToCelsius = (temp) => (temp - 32) * 5/9;
  
  const mphToMs = (speed) => speed/2.237;

  const degreeToCardinal = (deg) => {
    let directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
    let section = Math.round(deg/45) + 1;
    return(directions[section]);
  }
  
  const toggleUnits = () => {
    if (units === "F") {
      setUnits("C");
    } else {
      setUnits("F");
    }
  }

  let weatherIcon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`

  return (
    <div>
      <div className="flex-row">
        <h2>Current Weather</h2>
        <div id="toggleSwitch">
          <input type="checkbox" className="checkbox" id="switch" onClick={toggleUnits}/>
          <label htmlFor="switch" className="toggle">
          <span className="label">F</span> <span className="label">C</span>
          </label>
        </div>
      </div>
      <div className="flex-row" id="locAndTemp">
        <div id="location">
          <h2>{weather.name}</h2>
          {weather.country}      
          <br/>
          {new Date(weather.time * 1000).toTimeString()}
         
        </div>
        <div id="temp">
          <div style={{fontSize: "60px"}}>
            {(units === "F") 
              ? `${weather.currentTemp}\u00B0` 
              : `${Math.round(farenheitToCelsius(weather.currentTemp))}\u00B0`
            }
          </div>
          Feels Like: {
            (units === "F") 
            ? `${weather.feelTemp}\u00B0` 
            : `${Math.round(farenheitToCelsius(weather.feelTemp))}\u00B0`
          }
        </div>
      </div>
      <div className="flex-row">
        <div id="weatherIcon">
     
          <strong>{weather.description}</strong>
      
          <img src={weatherIcon} alt="weather condition"/>
        </div>
        <div id="addlConditions">
          <p>
            Humidity: {`${weather.humidity}%`} <br/>
            Wind: {(units === "F")
              ? `${weather.windspeed} mph, ${degreeToCardinal(weather.windDir)}`
              : `${Math.round(mphToMs(weather.windspeed))} m/s, ${degreeToCardinal(weather.windDir)}`
            } <br/>
            Sunrise: {new Date(weather.sunrise * 1000).toLocaleTimeString()} <br/>
            Sunset: {new Date(weather.sunset * 1000).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
    
    );
}

export default Report;