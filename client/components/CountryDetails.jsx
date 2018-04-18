import React from 'react'
import WorldMap from './WorldMap'

export default function CountryDetails (props) {

  let info = {
      name: 'WorldMap.title',
      language: this.state.language,
      capital: this.state.capital
    }

  const {isVisible, hideDetails} = props

  let classes = 'country-details ' + (isVisible ? 'visible': 'hidden')

  return <div className={classes}>
    <h1>{info.name}</h1>
    <h3>{info.language}</h3>
    <h3>{info.capital}</h3>
    <button onClick={hideDetails}>Close</button>
  </div>
}
