import actionTypes from '../constants/actionTypes'

const actionCreators = {
  who: {
    add: (description, email) => ({
      type: actionTypes.WHO_ADD_INFO,
      description,
      email
    })
  },
  arts: {
    add: (data, contentType) => ({
      type: actionTypes.ART_ADD,
      payload: {
        contentType,
        id: data._id,
        title: data.title,
        date: data.date,
        features: data.categories,
        height: data.width,
        width: data.height,
        imageUrl: data.imageUrl,
        imageUrl2: data.imageUrl2,
        imageUrl3: data.imageUrl3,
        imageUrl4: data.imageUrl4,
        imageUrl5: data.imageUrl5
      }
    }),
    addBatch: (artworks, contentType) => ({
      type: actionTypes.ART_ADD_BATCH,
      payload: {
        contentType,
        artworks: artworks.map(data => ({
          _id: data._id,
          contentType,
          title: data.title,
          date: data.date,
          categories: data.categories,
          width: data.width,
          height: data.height,
          imageUrl: data.imageUrl,
          imageUrl2: data.imageUrl2,
          imageUrl3: data.imageUrl3,
          imageUrl4: data.imageUrl4,
          imageUrl5: data.imageUrl5
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
