import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import 'react-select/dist/react-select.css'

import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'
import ReactGA from 'react-ga'

// Google Analytics
ReactGA.initialize('UA-110256150-1')
ReactGA.pageview(window.location.pathname + window.location.search)

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
registerServiceWorker()
