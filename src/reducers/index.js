import uniq from 'lodash/uniq'

import actionCreators from '../actions'
import actionTypes from '../constants/actionTypes'

import add from './art/add'

export const initialState = {
  painting: {},
  drawing: {},
  sculpture: {},
  filters: {
    painting: [],
    sculpture: [],
    drawing: []
  },
  activeFilters: [],
  who: {
    description: '',
    email: ''
  }
}

const reducers = (prevState = initialState, action) => {
  if (action.type === actionTypes.WHO_ADD_INFO) {
    return {
      ...prevState,
      who: {
        ...prevState.who,
        description: action.description,
        email: action.email
      }
    }
  }
  if (action.type === actionTypes.ART_ADD) {
    return add(prevState, action)
  }
  if (action.type === actionTypes.ART_ADD_BATCH) {
    return action.payload.artworks.reduce((nextState, art) => {
      return add(nextState, actionCreators.arts.add(art, art.contentType))
    }, prevState)
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
  state.activeFilters.some(filter => features.includes(filter))

export const selectors = {
  getDescription: state => {
    return state.who.description
  },
  getEmail: state => {
    return state.who.email
  },
  listPaintings: state => {
    return Object.values(state.painting).filter(art =>
      isMatchingFilter(art.features, state)
    )
  },
  listSculptures: state => {
    return Object.values(state.sculpture).filter(art =>
      isMatchingFilter(art.features, state)
    )
  },
  listDrawings: state => {
    return Object.values(state.drawing).filter(art =>
      isMatchingFilter(art.features, state)
    )
  },
  getArt: (aid, state) => {
    return state.arts[aid]
  },
  listFilters: (type, state) => state.filters[type],
  listActiveFilters: state => state.activeFilters,
  isMatchingFilter
}

export default reducers
