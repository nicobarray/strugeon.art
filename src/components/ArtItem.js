// Libraries.
import React from 'react'
import styled from 'styled-components'

import { Image } from './styled'

const ArtView = styled.div`
  display: grid;

  grid-template-areas: 'Title Image' 'Description Image';

  @media screen and (max-width: 664px) {
    grid-template-areas: 'Image' 'Title' 'Description';
  }

  margin-bottom: 128px;
`

const GalleryImage = Image.extend`
  grid-area: Image;

  width: 300px;
  height: auto;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    margin-bottom: 64px;
  }
`

const ArtInfo = styled.div`
  grid-area: Description;

  width: 300px;

  display: flex;
  flex-flow: column nowrap;
`

const ArtTitle = styled.div`
  grid-area: Title;

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

const ArtItem = props => (
  <ArtView>
    <GalleryImage src={props.image} alt="gallery-image" />
    <ArtTitle>{props.title || 'Painting Title'}</ArtTitle>
    <ArtInfo height={props.height}>
      <ImageCreationDate>{props.date || 'Painting Date'}</ImageCreationDate>
      <ImageFeature>{props.features || 'Painting Feature'}</ImageFeature>
    </ArtInfo>
  </ArtView>
)

export default ArtItem
