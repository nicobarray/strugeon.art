// Libraries.
import React from 'react'

// Components.
import { View } from './styled'
import GalleryImageView from '../components/GalleryImageView'

// Resources.
import VanGogh from '../img/paintings/van-gogh.jpg';
import VanGogh1 from '../img/paintings/van-gogh-1.jpg';
import VanGogh2 from '../img/paintings/van-gogh-2.jpg';

const Paintings = props => <View>
    <GalleryImageView image={VanGogh} height={'379'} title={'Autoportrait'} date={'1887'} features={'Huile sur carton'} />
    <GalleryImageView image={VanGogh1} height={'339'} title={"Autoportrait à l'oreille bandée"} date={'1889'} features={'Huile sur toile'} />
    <GalleryImageView image={VanGogh2} height={'372'} title={"Portrait de l'artiste"} date={'1889'} features={'Huile sur toile'} />
</View>

export default Paintings