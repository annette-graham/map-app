import React from 'react'
import WorldMap from './WorldMap'

export default function CountryDetails (props) {
  const {data, notes, hideDetails, editNotes} = props

  return (
    <div className='details'>
      <h2>{data.name}</h2>
      <p>Capital: {data.capital}</p>
      <p>Language: {data.language}</p>
      <p>Currency: {data.currency}</p>
      <p>population: {data.population}</p>
      <p>Notes: {data.notes}</p>
      <button className='button' onClick={hideDetails}>Close</button>
      <button className='button' onClick={editNotes}>Add Info</button>
    </div>
  )
}