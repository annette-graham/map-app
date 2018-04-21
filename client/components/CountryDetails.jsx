import React from 'react'
import WorldMap from './WorldMap'

export default function CountryDetails (props) {
  const {data, isVisible, hideDetails} = props
  const classes = 'country-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className='classes'>
        {console.log("Here is my " + data.name)}
      <h2>{data.name}</h2>
      <p>Capital: {data.capital}</p>
      <p>Language: {data.language}</p>
      <p>Currency: {data.currency}</p>
      <p>population: {data.population}</p>
    </div>
  )

}
