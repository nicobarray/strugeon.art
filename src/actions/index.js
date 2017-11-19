import actionTypes from '../constants/actionTypes'

const setArtworkType = artwork => {
  if (artwork.categories.find(cat => cat === 'peinture')) return 'painting'
  if (artwork.categories.find(cat => cat === 'sculpture')) return 'sculpture'
  if (artwork.categories.find(cat => cat === 'dessin')) return 'drawing'
  return 'none'
}

const actionCreators = {
  arts: {
    add: (aid, type, title, date, height, imageUrl, features = []) => ({
      type: actionTypes.ART_ADD,
      aid,
      payload: {
        type,
        title,
        date,
        height,
        features,
        imageUrl
      }
    }),
    addBatch: artworks => ({
      type: actionTypes.ART_ADD_BATCH,
      payload: {
        artworks: artworks.map(data => ({
          aid: data._id,
          type: setArtworkType(data),
          title: data.title,
          date: data.date,
          features: data.categories.filter(
            cat => cat !== 'peinture' && cat !== 'dessin' && cat !== 'sculpture'
          ),
          height: 300,
          imageUrl: data.imageUrl
        }))
      }
    })
  },
  filters: {
    set: filter => ({
      type: actionTypes.SET_FILTER,
      payload: {
        filter
      }
    }),
    remove: filter => ({
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

export default actionCreators
