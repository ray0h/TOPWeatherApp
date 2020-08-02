import React from 'react';

const Search = ({handleFn}) => {
  return (
    <div>
      <label htmlFor="city">City: </label>
      <input type="text" name="city" id="city" onKeyDown={handleFn}/>
    </div>
  )
}

export default Search;