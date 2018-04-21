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
     detailsVisible: false,
     editVisible: false,
     selectedCountry: '',
     data: []
   }

   this.refreshMap = this.refreshMap.bind(this)
   this.hideDetails = this.hideDetails.bind(this)
   this.selectCountry = this.selectCountry.bind(this)

  }


  componentDidMount () {
    this.refreshMap
  }



  refreshMap (err) {
    this.setState({
      error:err
    })

  }


  selectCountry (countryCode) {
      console.log('You clicked ' + countryCode + '!')
      this.setState({
        selectedCountry: countryCode,
        detailsVisible: true
      })
      getCountryCode(countryCode, (err, data) => {
          console.log({err, data});
          this.setState({
            data: data
          })
      })
  }


  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

  addInfo () {
    //set props edit to true
    //set details to false false
    // this should force render
  }

  render () {
    return (
      <div className = 'container'>
        <div className ='title'>
          <h1>Click a Country!</h1>
        </div>
        <div className = 'map'>
          <WorldMap selectCountry={this.selectCountry}/>
          // if editVisible = true, show component regardless of details being true or false
          // remember to turn edit back to false once component is closed

          {this.state.detailsVisible && <CountryDetails data={this.state.data} hideDetails={this.hideDetails}/>}
        </div>
      </div>
    )
  }
}

export default App
