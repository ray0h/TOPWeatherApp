import React, { useState } from "react";
import ToggleSwitch from './ToggleSwitch';
import Temp from './Temp';
import Location from './Location';
import Forecast from './Forecast';
import AddlCond from './AddlCond';

function Report({ weather }) {
  const [ units, setUnits ] = useState("F");
  
  const toggleUnits = () => (units === "F") ? setUnits("C") : setUnits("F");
  
  return (
    <div>
      <div className="flex-row" id="headAndToggler">
        <h2>Current Weather</h2>
        <ToggleSwitch handleFn={toggleUnits}/>
      </div>
      <div className="flex-row" id="locAndTemp">
        <Location weather={weather}/>
        <Temp weather={weather} units={units}/>
      </div>
      <div className="flex-row" id="conditions">
        <Forecast weather={weather}/>
        <AddlCond weather={weather} units={units}/>
      </div>
    </div>
  );
}

export default Report;