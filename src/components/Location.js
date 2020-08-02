import React from 'react';

const Location = ({weather}) => {
  // Openweather API has UTC timezone offset, but creating additional offset for local time
  const offset = new Date(Date.now()).getTimezoneOffset() * 60;
  
  const formattedDate = new Date((weather.time + weather.timeZone + offset)*1000).toLocaleDateString("en", {weekday: "short", month: "short", day: "numeric", year: "numeric"});
  const formattedTime = new Date((weather.time + weather.timeZone + offset)*1000).toLocaleTimeString("en", {hour: '2-digit', minute: '2-digit'});

  return (
    <div id="location">
      <h2>{weather.city}</h2>
      {weather.country} <br/>
      {formattedDate} <br/>
      {formattedTime}
    </div>
  )
};

export default Location;