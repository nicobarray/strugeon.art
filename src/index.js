import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const store = configureStore()

// window.addEventListener('click', e => {
//     store.dispatch(actionCreators.events.clickAway())
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
registerServiceWorker()
