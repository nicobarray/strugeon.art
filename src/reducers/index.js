import uniq from 'lodash/uniq'

import actionCreators from '../actions'
import actionTypes from '../constants/actionTypes'

import add from './art/add'

export const initialState = {
  arts: {},
  filters: {
    painting: [],
    sculpture: [],
    drawing: []
  },
  activeFilters: [],
  events: {
    lastEvent: null,
    lastTimestamp: 0
  }
}

const reducers = (prevState = initialState, action) => {
  if (action.type.indexOf('EVENT_') === 0) {
    return {
      ...prevState,
      events: {
        lastEvent: action.type,
        lastTimestamp: action.payload.timestamp
      }
    }
  }
  if (action.type === actionTypes.ART_ADD) {
    return add(prevState, action)
  }
  if (action.type === actionTypes.ART_ADD_BATCH) {
    return action.payload.artworks.reduce(
      (nextState, payload) =>
        add(
          nextState,
          actionCreators.arts.add(
            payload.aid,
            payload.type,
            payload.title,
            payload.date,
            payload.height,
            payload.imageUrl,
            payload.features
          )
        ),
      prevState
    )
  }
  if (action.type === actionTypes.SET_FILTER) {
    return {
      ...prevState,
      activeFilters: uniq([...prevState.activeFilters, action.payload.filter])
    }
  }
  if (action.type === actionTypes.REMOVE_FILTER) {
    return {
      ...prevState,
      activeFilters: prevState.activeFilters.filter(
        filter => filter !== action.payload.filter
      )
    }
  }
  if (action.type === actionTypes.CLEAR_FILTERS) {
    return {
      ...prevState,
      activeFilters: []
    }
  }

  return prevState
}

const isMatchingFilter = (features, state) =>
  state.activeFilters.filter(filter => features.includes(filter)).length ===
  state.activeFilters.length

export const selectors = {
  listPaintings: state => {
    return Object.values(state.arts).filter(
      art => art.type === 'painting' && isMatchingFilter(art.features, state)
    )
  },
  listSculptures: state => {
    return Object.values(state.arts).filter(
      art => art.type === 'sculpture' && isMatchingFilter(art.features, state)
    )
  },
  listDrawings: state => {
    return Object.values(state.arts).filter(
      art => art.type === 'drawing' && isMatchingFilter(art.features, state)
    )
  },
  getArt: (aid, state) => {
    return state.arts[aid]
  },
  listFilters: (type, state) => state.filters[type],
  listActiveFilters: state => state.activeFilters,
  isMatchingFilter,
  getLastEventTimestamp: state => state.events.lastTimestamp,
  getLastEventType: state => state.events.lastEvent
}

export default reducers
