// Libraries.
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

// Pages.
import Paintings from './pages/Paintings'
import Sculptures from './pages/Sculptures'

// Components.
import AppMenu from './components/AppMenu'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppMenu />
          <Switch>
            <Route exact path='/paintings' component={Paintings} />
            <Route exact path='/sculptures' component={Sculptures} />
            <Route component={Paintings} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
