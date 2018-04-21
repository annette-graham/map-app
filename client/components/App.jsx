import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import WorldMap from './WorldMap'
import UpdateForm from './UpdateForm'
import CountryDetails from './CountryDetails'

import {getCountryCode} from '../api'

class App extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     error: null,
     map: [],
     detailsVisible: false,
     selectedCountry: '',
     data: []
   }

   // this.makeUpdate = this.makeUpdate.bind(this)
   this.refreshMap = this.refreshMap.bind(this)
   //this.renderMap = this.renderMap.bind(this)
   this.showDetails = this.showDetails.bind(this)
   this.hideDetails = this.hideDetails.bind(this)
   this.selectCountry = this.selectCountry.bind(this)

  }

  componentDidMount () {
    this.refreshMap
  }

  //
  // renderMap (err, map) {
  //   this.setState({
  //     error: err,
  //     map: map || []
  //   })
  // }


  refreshMap (err) {
    this.setState({
      error:err
    })
    // getMap(this.renderMap)
  }


  showDetails () {
    this.setState({
      detailsVisible: true
    })
  }


  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }


  selectCountry (countryCode) {
      console.log('You clicked ' + countryCode + '!')
      this.setState({
        selectedCountry: countryCode
      })
    getCountryCode(countryCode, (err, data) => {
      console.log({err, data});
      this.setState({
        data: data
      })
    })
  }


  render () {
    return (
      <div className='title'>
        <h1>Click a Country!</h1>
          <WorldMap selectCountry={this.selectCountry}/>
          <div>{this.state.selectedCountry}</div>
          <CountryDetails data={this.state.data}/>
      </div>
    )

    //   <button onClick={}</button>//this needs to be linked to country ID}>
    //   <CountryDetails map={this.state.map} isVisible={this.state.detailsVisible}/>
    // }/>
  }
}

export default App
