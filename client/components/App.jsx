import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import WorldMap from './WorldMap'
import UpdateForm from './UpdateForm'
import Country from './Country'


class App extends React.Component {
  constructor(props) {
   super(props)
   this.state = {
     error: null,
     updates: [],
     activeCountry: null,
     detailsVisible: false
   }

   this.makeUpdate = this.makeUpdate.bind(this)
   this.refreshMap = this.refreshMap.bind(this)
   this.renderMap = this.renderMap.bind(this)
   this.showDetails = this.showDetails.bind(this)
   this.hideDetails = this.hideDetails.bind(this)

  }

  componentDidMount () {
    this.refreshMap
  }

  renderMap (err, map) {
    this.setState({
      error: err,
      map: map || []
    })
  }

  refreshMap (err) {
    this.setState({
      error:err

    })
    getMap(this.renderMap)
  }



  // makeUpdate (update) {
  //   const updates = this.state.updates
  //   update.id = updates.length + 1
  //   updates.push(update)
  //   this.setState({updates})
  // }

  render () {
    console.log(this.state.updates)
    return <Router>
      <React.Fragment>
        <div className='title'>
          <h1>Click a Country!</h1>
        </div>
        <Route path = '/' component = {WorldMap}/>
        <Route path = '/country' component = {Country}/>
        <Route path = '/' component = {
          (props) => <UpdateForm makeUpdate={this.makeUpdate} {...props} />
        }/>
      </React.Fragment>
    </Router>
  }
}

export default App
