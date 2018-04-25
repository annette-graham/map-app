import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import WorldMap from './WorldMap'
import UpdateForm from './UpdateForm'
import CountryDetails from './CountryDetails'

import {getCountryCode, apiEditNotes} from '../api'

class App extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     error: null,
     detailsVisible: false,
     editVisible: false,
     selectedCountry: '',
     data: [],
     notes: ''
   }

   this.refreshMap = this.refreshMap.bind(this)
   this.hideDetails = this.hideDetails.bind(this)
   this.selectCountry = this.selectCountry.bind(this)
   this.editNotes = this.editNotes.bind(this)
   this.toggleEdit = this.toggleEdit.bind(this)

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
        detailsVisible: true,
        editVisible: false
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


  toggleEdit() {
    this.setState({
      editVisible: !this.state.editVisible
    })
  }


  editNotes (notes) {
    console.log("222222222222")

  console.log("editNotes")
    apiEditNotes(this.state.selectedCountry, notes, (newNotes) => {
      console.log({newNotes})
      const {data} = this.state
      data.notes = newNotes
      this.setState({
        data,
        editVisible: false,
        detailsVisible: true
      })
      console.log("STATE IS SET: NOTES=" + newNotes + "deatils vis -" + this.state)
      console.log("The current state 1 notes " + this.state.notes)
      console.log("The current passed in notes " + newNotes)
    })
  }


  render () {
    return (
      <div className = 'container'>
        <div className ='title'>
          <h1>Click a Country</h1>
        </div>
        <div className = 'para'>
          <p>Travellers unite! View and add information that is valuable for the cheap traveller. </p>
        </div>
        <div className = 'map'>
          <WorldMap selectCountry={this.selectCountry}/>
          {console.log("The current state 2 notes" + this.state.notes)}

          {this.state.editVisible
            ? <UpdateForm
              editNotes={this.editNotes}
              notes={this.state.notes}
              editVisible={this.editVisible}
              hideDetails={this.hideDetails}
              toggleEdit={this.toggleEdit}
            />
            : this.state.detailsVisible
              ? <CountryDetails
                data={this.state.data}
                hideDetails={this.hideDetails}
                editNotes={this.toggleEdit}
              />
              : null
          }

        </div>
      </div>
    )
  }
}

export default App
