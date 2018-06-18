import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PageImageTransition from './components/pages/image-transition'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PageImageTransition} />
        </div>
      </Router>
    )
  }
}

export default App
