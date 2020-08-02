import React from 'react';

const LoadScreen = () => {

  return (
    <div id="loader">
      <div id="spinner">{'\u2602'}</div>
      <p id="msg">fetching weather data...</p>
    </div>
  )
}

export default LoadScreen;