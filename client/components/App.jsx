import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import Map from './Map'


const App = () => {
  return (
    <Router>
      <React.Fragment>
        <h1>Fun development has begun!</h1>
        <Route path = '/' component = {Map}/>
      </React.Fragment>
    </Router>
  )
}

export default App
