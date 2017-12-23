// Libraries.
import React from 'react'
import styled from 'styled-components'

import { Image } from './styled'

const ArtView = styled.div`
  width: 100%;

  display: grid;

  grid-template-areas: 'Title Image' 'Description Image';
  grid-template-columns: 33% auto;

  @media screen and (max-width: 664px) {
    grid-template-areas: 'Image' 'Title' 'Description';
    grid-template-rows: auto auto auto;
    grid-template-columns: auto;
  }

  margin-bottom: 128px;
`

const GalleryImage = Image.extend`
  grid-area: Image;

  width: 60vw;
  height: auto;

  animation: fadein 2s;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    margin-bottom: 64px;
    justify-self: center;
  }
`

const PortraitGalleryImage = GalleryImage.extend`
  width: auto;
  height: calc(90vmin)
`

const ArtInfo = styled.div`
  grid-area: Description;

  padding-left: 32px;

  display: flex;
  flex-flow: column nowrap;
`

const ArtTitle = styled.div`
  grid-area: Title;

  padding-left: 32px;

  /* Text */
  font-size: 1.5em;
`

const ImageCreationDate = styled.div`
  /* Text */
  font-size: 1.25em;
  color: grey;
`

const ImageFeature = styled.div`
  /* Text */
  font-size: 1em;
  color: grey;
`

const Dimension = props => {
  if (props.width && props.height) {
    return (
      <ImageFeature>
        Dimension {props.height}x{props.width}cm
      </ImageFeature>
    )
  }
  return <ImageFeature>Taille {props.height}cm</ImageFeature>
}

const getImageSize = (imageUrl) => {
  try {
    const [width, height] = imageUrl.split('-')[1].split('.')[0].split('x')
    return { width: parseInt(width, 10), height: parseInt(height, 10) }
  } catch (err) {
    return { width: undefined, height: undefined }
  }
}

const ArtItem = props => {
  const size = getImageSize(props.image)
  const landscape = size.width > size.height

  const Img = landscape ? GalleryImage : PortraitGalleryImage

  return (
    <ArtView>
      <Img src={props.image} alt="gallery-image" />
      <ArtTitle>{props.title || 'Painting Title'}</ArtTitle>
      <ArtInfo height={props.height}>
        <ImageCreationDate>{props.date || 'Painting Date'}</ImageCreationDate>
        <ImageFeature>{props.features || 'Painting Feature'}</ImageFeature>
        {props.dimension.width || props.dimension.height ? (
          <Dimension
            width={props.dimension.height}
            height={props.dimension.width}
          />
        ) : null}
      </ArtInfo>
    </ArtView>
  )
}

export default ArtItem
