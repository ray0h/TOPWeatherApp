import React, { useState, useEffect  } from 'react';
import Report from './components/Report';
import "regenerator-runtime/runtime";

const App = () => {
  const [ weather, setWeather ] = useState({});
  const [ city, setCity ] = useState("New York");

  const kelvinToFarenheit = (temp) => (temp - 273) * 9/5 + 32;

  useEffect( () => {
    async function getWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=88bbe9fba9c30c4f20e337dad0989f18`);
        const res = await response.json();

        setWeather(
          {
            name: res.name,
            country: res.sys.country,
            main: res.weather[0].main,
            description: res.weather[0].description,
            icon: res.weather[0].icon,
            currentTemp: Math.round(kelvinToFarenheit(res.main.temp)),
            feelTemp: Math.round(kelvinToFarenheit(res.main.feels_like)),
            pressure: res.main.pressure,
            humidity: res.main.humidity,
            windspeed: Math.round(res.wind.speed*2.237),
            windDir: res.wind.deg,
            time: res.dt,
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset
          }
        )
        
      } catch (error) {
          console.error(error);
      }
    }
    getWeather();
  }, [city]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
      e.target.value="";
    }
  }

  return (
    <div className="container">
      <label>City: </label>
      <input type="text" name="city" onKeyDown={handleEnter}/>
      
      <Report weather={weather}/>
    </div>
  )
}

export default App;