// Libraries.
import React from 'react'
import styled from 'styled-components'

const ArtView = styled.div`
  display: flex;
  flex-flow: row nowrap;

  max-width: 1400px;
  width: 100%;
  height: 80vh;
  margin: 0 auto 64px auto;
  padding: 0 16px;

  @media screen and (max-width: 664px) {
    flex-flow: column nowrap;
    
    width: 100%;
    height: 80vh;
    margin-bottom: 64px;
  }
`

const ImgCarroussel = styled.div`
  width: 100%;
  height: 80vh;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: contain;
`

const ArtDesc = styled.div`
  width: 20vw;
  padding-right: 16px;

  @media screen and (max-width: 664px) {
    width: 100%;
    padding-right: 0;
    padding-bottom: 16px;
  }
`

const ArtTitle = styled.div`
  font-size: 1.5em;
`

const ArtInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;

  padding-bottom: 16px;
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

const PreviewButton = styled.button`
  background: url(${props => props.src});
  background-size: cover;
`

const CarrousselController = styled.div`
  @media screen and (max-width: 664px) {
    flex-flow: column nowrap;
    left: 0;
    top: -80px;
  }

  ${PreviewButton} {
    width: 64px; 
    height: 64px;

    border: 2px solid white;
    border-radius 50%;
  }

  ${PreviewButton}:nth-child(${props => props.selectedIndex + 1}) {
    border: 2px solid blue;
  }

  ${PreviewButton}:not(:last-child) {
    margin-right: 16px;
  }
`

const Dimension = props => {
  if (props.width && props.height) {
    return (
      <ImageFeature>
        Dimension {props.height}x{props.width}
        cm
      </ImageFeature>
    )
  }
  return (
    <ImageFeature>
      Taille {props.height}
      cm
    </ImageFeature>
  )
}

const getImageSize = imageUrl => {
  try {
    const [width, height] = imageUrl
      .split('-')[1]
      .split('.')[0]
      .split('x')
    return { width: parseInt(width, 10), height: parseInt(height, 10) }
  } catch (err) {
    return { width: undefined, height: undefined }
  }
}

const ArtItem = props => {
  const [carrousselIndex, setCarrousselIndex] = React.useState(0)
  const images = [props.image, props.image2, props.image3].filter(Boolean)
  const currentImage = images[carrousselIndex];
  const size = getImageSize(currentImage)
  const landscape = size.width > size.height

  return (
    <ArtView>
      <ArtDesc hasPreviews={images.length > 1}>
        <ArtTitle>{[props.title || 'Painting Title', images.length > 1 ? images.length : null].filter(Boolean).join(' ')}</ArtTitle>
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
        {images.length > 1 && <CarrousselController selectedIndex={carrousselIndex}>
          {images.map((src, index) => {
            return <PreviewButton key={src} onClick={() => setCarrousselIndex(index)} src={images[index]} />
          })}
        </CarrousselController>}
      </ArtDesc>
      <ImgCarroussel landscape={landscape} src={currentImage} />
    </ArtView>
  )
}

export default ArtItem
