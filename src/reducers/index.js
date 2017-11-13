import uniq from "lodash/uniq";

export const initialState = {
    arts: {},
    filters: {
        PAINTING: [],
        SCULPTURE: []
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
        return {
            ...prevState,
            arts: {
                ...prevState.arts,
                [action.aid]: {
                    aid: action.aid,
                    ...action.payload
                }
            },
            filters: {
                ...prevState.filters,
                [action.payload.type]: uniq([...prevState.filters[action.payload.type], ...action.payload.features])
            }
        }
    }
    if (action.type === actionTypes.SET_FILTER) {
        return {
            ...prevState,
            activeFilters: uniq([
                ...prevState.activeFilters,
                action.payload.filter
            ])
        }
    }
    if (action.type === actionTypes.REMOVE_FILTER) {
        return {
            ...prevState,
            activeFilters: prevState.activeFilters.filter(filter => filter !== action.payload.filter)
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

export const actionTypes = {
    ART_ADD: 'PAINTING_ADD',
    SET_FILTER: 'SET_FILTER',
    REMOVE_FILTER: 'REMOVE_FILTER',
    CLEAR_FILTERS: 'CLEAR_FILTERS',
    EVENT_CLICK_AWAY: 'EVENT_CLICK_AWAY'
}

export const actionCreators = {
    arts: {
        add: (aid, type, title, date, height, features = []) => ({
            type: actionTypes.ART_ADD,
            aid,
            payload: {
                type,
                title,
                date,
                height,
                features,
            }
        })
    },
    filters: {
        set: (filter) => ({
            type: actionTypes.SET_FILTER,
            payload: {
                filter
            }
        }),
        remove: (filter) => ({
            type: actionTypes.REMOVE_FILTER,
            payload: {
                filter
            }
        }),
        clear: () => ({ type: actionTypes.CLEAR_FILTERS })
    },
    events: {
        clickAway: () => ({
            type: actionTypes.EVENT_CLICK_AWAY,
            payload: {
                timestamp: Date.now()
            }
        })
    }
}

const isMatchingFilter = (features, state) =>
    state.activeFilters.filter(filter => features.includes(filter)).length === state.activeFilters.length;
export const selectors = {
    listPaintings: (state) => {
        return Object.values(state.arts).filter(art => art.type === 'PAINTING' && isMatchingFilter(art.features, state))
    },
    listSculptures: (state) => {
        return Object.values(state.arts).filter(art => art.type === 'SCULPTURE' && isMatchingFilter(art.features, state))
    },
    getArt: (aid, state) => {
        return state.arts[aid]
    },
    listFilters: (type, state) => state.filters[type],
    listActiveFilters: (state) => state.activeFilters,
    isMatchingFilter,
    getLastEventTimestamp: (state) => state.events.lastTimestamp,
    getLastEventType: (state) => state.events.lastEvent
}

export default reducers