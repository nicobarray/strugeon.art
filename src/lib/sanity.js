import sanity from '@sanity/client'
import actionCreators from '../actions'

const instance = sanity({
  projectId: 'yljckzxn',
  dataset: 'production',
  useCdn: true
})

export default instance

export const hydrateStore = async store => {
  const artworks = await instance.fetch(`
  *[_type == "artwork"]{
      _id,
      title,
      date,
      categories,
      "imageUrl": image.asset->url
  }`)

  console.log('Initialize store with: ', artworks)

  artworks.map(art => ({
    aid: art._id,
    ...art
  }))

  store.dispatch(actionCreators.arts.addBatch(artworks))
}
