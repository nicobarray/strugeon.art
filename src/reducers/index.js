export const initialState = {
    arts: {},
}

const reducers = (prevState = initialState, action) => {
    if (action.type === actionTypes.ART_ADD) {
        return {
            ...prevState,
            arts: {
                ...prevState.arts,
                [action.aid]: {
                    aid: action.aid,
                    ...action.payload
                }
            }
        }
    }

    return prevState
}

export const actionTypes = {
    ART_ADD: 'PAINTING_ADD',
}

export const actionCreators = {
    arts: {
        add: (aid, type, title, date, height, features = []) => {
            return {
                type: actionTypes.ART_ADD,
                aid,
                payload: {
                    type,
                    title,
                    date,
                    height,
                    features,
                }
            }
        }
    }
}

export const selectors = {
    listPaintings: (state) => {
        return Object.values(state.arts).filter(art => art.type === 'PAINTING')
    },
    listSculptures: (state) => {
        return Object.values(state.arts).filter(art => art.type === 'SCULPTURE')
    },
    getArt: (aid, state) => {
        return state.arts[aid]
    }
}

export default reducers