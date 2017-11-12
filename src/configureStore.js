import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import appReducers, { actionCreators } from './reducers'

const configureStore = () => {
    const logger = createLogger()
    const middlewares = [logger]
    const enhancer = applyMiddleware(...middlewares)
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(appReducers, composeEnhancer(enhancer));

    store.dispatch(actionCreators.arts.add('0', 'PAINTING', 'Autoportrait', '1887', 379, ['Carton', 'Huile', 'Impressionisme']))
    store.dispatch(actionCreators.arts.add('1', 'PAINTING', "Autoportrait à l'oreille bandée", '1889', 339, ['Toile', 'Huile', 'Impressionisme']))
    store.dispatch(actionCreators.arts.add('2', 'PAINTING', "Portrait de l'artiste", '1889', 372, ['Toile', 'Huile', 'Impressionisme']))

    store.dispatch(actionCreators.arts.add('3', 'SCULPTURE', 'La Danaïde', '1889', 198, ['Marbre']))
    store.dispatch(actionCreators.arts.add('4', 'SCULPTURE', "La cathédrale", '1908', 451, ['Pierre']))
    store.dispatch(actionCreators.arts.add('5', 'SCULPTURE', "Le Penseur", '1902', 289, ['Bronze']))

    return store;
}

export default configureStore