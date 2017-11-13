// Libraries.
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import styled from 'styled-components'

// Pages.
import Paintings from './pages/PaintingsPage'
import Sculptures from './containers/Sculptures'

// Components.
import AppMenu from './components/AppMenu'

const AppView = styled.div`
  overflow: auto;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppView>
          <AppMenu />
          <Switch>
            <Route exact path='/paintings' component={Paintings} />
            <Route exact path='/sculptures' component={Sculptures} />
            <Route component={Paintings} />
          </Switch>
        </AppView>
      </Router>
    );
  }
}

export default App;
