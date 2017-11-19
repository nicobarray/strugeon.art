import uniq from 'lodash/uniq'

const add = (prevState, action) => ({
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
    [action.payload.type]: uniq([
      ...prevState.filters[action.payload.type],
      ...action.payload.features
    ])
  }
})

export default add
