import uniq from 'lodash/uniq'

const add = (prevState, action) => {
  return {
    ...prevState,
    [action.payload.contentType]: {
      ...prevState[action.payload.contentType],
      [action.payload.id]: {
        id: action.payload.id,
        ...action.payload
      }
    },
    filters: {
      ...prevState.filters,
      [action.payload.contentType]: uniq([
        ...prevState.filters[action.payload.contentType],
        ...action.payload.features
      ])
    }
  }
}

export default add
