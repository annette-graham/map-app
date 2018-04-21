import React from 'react'
import WorldMap from './WorldMap'

export default function CountryDetails (props) {
  const {data, hideDetails, addInfo} = props


  return (
    <div className='details'>
        {console.log("Here is my " + data.name)}
      <h2>{data.name}</h2>
      <p>Capital: {data.capital}</p>
      <p>Language: {data.language}</p>
      <p>Currency: {data.currency}</p>
      <p>population: {data.population}</p>
      <button onClick={hideDetails}>Close</button>
      <button onClick={addInfo}>Add Info</button>
    </div>
  )

}
