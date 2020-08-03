import React, { useState, useEffect  } from 'react';
import Search from './components/Search';
import Report from './components/Report';
import LoadScreen from './components/LoadScreen';
import "regenerator-runtime/runtime";

const App = () => {
  const [ weather, setWeather ] = useState({});
  const [ city, setCity ] = useState("New York");
  const [ currentCity, setCurrentCity] = useState("");

  const weatherDataEmpty = Object.keys(weather).length === 0;
  const kelvinToFarenheit = (temp) => (temp - 273) * 9/5 + 32;

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
      e.target.value = "";
    }
  };

  useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_key}`);
        
        const res = await response.json();

        setWeather(
          {
            city: res.name,
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
            timeZone: res.timezone,
            sunrise: res.sys.sunrise,
            sunset: res.sys.sunset
          }
        );
        
      } catch (error) {
        setWeather({})
        console.error(error);
      }
    }

    // short timeout to emphasize (show off) loading screen
    setTimeout(() => {
      getWeather();
      setCurrentCity(city);
    }, 1500)

  }, [city]);

  // Error Message
  if (weatherDataEmpty && currentCity === city) {
    return (
      <div className="container">
        <Search handleFn={handleEnter}/>
        <br/>
        <h2>{`'${city}' - City Not Found`}</h2>
      </div>
    )
  } else if (weatherDataEmpty || currentCity !== city) {
    return (
      <div className="container">
        <Search handleFn={handleEnter}/> 
        <LoadScreen/>
      </div>
    )
  } else {
    return (
      <div className="container">
      <Search handleFn={handleEnter}/>
      <Report weather={weather}/>
    </div>
    )
  }
  
};

export default App;