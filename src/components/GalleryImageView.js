// Libraries.
import React from 'react'
import styled from 'styled-components'

import { Image } from './styled'

const ImageView = styled.div`
    min-height: 600px;

    display: flex;
    justify-content: space-between;

    /* Mobile. */
    @media screen and (max-width: 664px) {
        flex-flow: column nowrap;
        justify-content: center;
    }
`

const GalleryImage = Image.extend`
    margin-left: 32px;
    margin-right: 32px;

    /* Mobile. */
    @media screen and (max-width: 664px) {
        margin: 0px;
    }
`

const ImageInfo = styled.div`
    width: 300px;

    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;

    /* Mobile. */
    @media screen and (max-width: 664px) {
        padding-top: 32px;
    }
`
const ImageName = styled.div`
    /* Text */
    font-size: 1.5em;
    font-family: Verdana;
    font-style: italic;
    text-align: right;
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

const GalleryImageView = props =>
    <ImageView>
        <GalleryImage src={props.image} alt='gallery-image' height={props.height} />
        <ImageInfo height={props.height}>
            <ImageName>{props.title || 'Painting Title'}</ImageName>
            <ImageCreationDate>{props.date || 'Painting Date'}</ImageCreationDate>
            <ImageFeature>{props.features || 'Painting Feature'}</ImageFeature>
        </ImageInfo>
    </ImageView>

export default GalleryImageView