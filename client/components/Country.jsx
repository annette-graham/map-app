import React from 'react'
import WorldMap from './WorldMap'

const Country = (props) => {

  let info = {
      name: 'WorldMap.title',
      // language: this.state.language,
      // capital: this.state.capital
  }

  return <div id='countryInfo'>
    <h1>{info.name}</h1>
    <h3>{info.language}</h3>
    <h3>{info.capital}</h3>
  </div>
}

export default Country
