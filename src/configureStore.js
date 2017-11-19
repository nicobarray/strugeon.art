import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import appReducers from './reducers'
import { hydrateStore } from './lib/sanity'

const configureStore = () => {
  const logger = createLogger()
  const middlewares = [logger]
  const enhancer = applyMiddleware(...middlewares)
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(appReducers, composeEnhancer(enhancer))
  hydrateStore(store)
  return store
}

export default configureStore
