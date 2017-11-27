import sanity from '@sanity/client'
import actionCreators from '../actions'

const instance = sanity({
  projectId: 'yljckzxn',
  dataset: 'production',
  useCdn: true
})

export default instance

export const hydrateStore = async store => {
  const paintings = await instance.fetch(`
  *[_type == "painting"]{
      _id,
      title,
      date,
      width,
      height,
      categories,
      "imageUrl": image.asset->url
  }`)
  const sculptures = await instance.fetch(`
  *[_type == "sculpture"]{
      _id,
      title,
      date,
      height,
      categories,
      "imageUrl": image.asset->url
  }`)
  const drawings = await instance.fetch(`
  *[_type == "drawings"]{
      _id,
      title,
      date,
      width,
      height,
      categories,
      "imageUrl": image.asset->url
  }`)
  const who = await instance.fetch(`
  *[_type == "who"]{
      description,
      email,
      "imageUrl": image.asset->url
  }`)

  console.log('Fetched paintings: ', paintings)
  console.log('Fetched drawings: ', drawings)
  console.log('Fetched sculptures: ', sculptures)
  console.log('Fetched who: ', who)

  store.dispatch(actionCreators.arts.addBatch(paintings, 'painting'))
  store.dispatch(actionCreators.arts.addBatch(sculptures, 'sculpture'))
  store.dispatch(actionCreators.arts.addBatch(drawings, 'drawing'))

  if (who.length === 1) {
    store.dispatch(actionCreators.who.add(who[0].description, who[0].email))
  }

  //store.dispatch(actionCreators.arts.addBatch(paintings))
}
