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
     selectedCountry: '',
     data: []
   }

   this.refreshMap = this.refreshMap.bind(this)
   this.showDetails = this.showDetails.bind(this)
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


  render () {
    return (
      <div className='title'>
        <h1>Click a Country!</h1>
          <WorldMap selectCountry={this.selectCountry}/>
          {console.log(this.state.detailsVisible)}
          {this.state.detailsVisible && <CountryDetails data={this.state.data} hideDetails={this.hideDetails}/>}
      </div>
    )
  }
}

export default App
