import React from 'react'
import WorldMap from './WorldMap'

export default function CountryDetails (props) {
  const {data, isVisible, hideDetails} = props
  const classes = 'country-details ' + (isVisible ? 'visible' : 'hidden')

  return (
    <div className='classes'>
        {console.log("THIS " + {data})}
      <h2>hi</h2>
    </div>
  )

}
