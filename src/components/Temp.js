import React from 'react';

const Temp = ({weather, units}) => {

  const farenheitToCelsius = (temp) => (temp - 32) * 5/9;
  
  return (
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
  )
}

export default Temp;