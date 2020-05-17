// Libraries.
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

// Pages.
import Paintings from './pages/PaintingsPage'
import Sculptures from './pages/SculpturesPage'
import Drawings from './pages/DrawingsPage'
import Who from './containers/Who'

// Components.
import AppMenu from './components/AppMenu'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppMenu />
          <Switch>
            <Route exact path="/peintures" component={Paintings} />
            <Route exact path="/dessins" component={Drawings} />
            <Route exact path="/sculptures" component={Sculptures} />
            <Route exact path="/qui" component={Who} />
            <Route component={Paintings} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
