import React from 'react';

const ToggleSwitch = ({handleFn}) => {

  return (
    <div id="toggleSwitch">
      <input type="checkbox" className="checkbox" id="switch" onClick={handleFn}/>
      <label htmlFor="switch" className="toggle">
        <span className="label">C</span> 
        <span className="label">F</span>
      </label>
    </div>
  )
};

export default ToggleSwitch;