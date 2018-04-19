import React from 'react'
import WorldMap from './WorldMap'

export default function CountryDetails (props) {
  const {country, isVisible, hideDetails} = props
  const classes = 'country-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className='classes'>
      <h2>{props.name}</h2>
    </div>
  )

}
