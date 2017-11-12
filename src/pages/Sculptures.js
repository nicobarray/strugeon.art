// Libraries.
import React from 'react'

// Components.
import { View } from './styled'
import GalleryImageView from '../components/GalleryImageView'

// Resources.
import Rodin from '../img/sculptures/rodin.jpg';
import Rodin1 from '../img/sculptures/rodin1.jpg';
import Rodin2 from '../img/sculptures/rodin2.jpg';

const Sculptures = props => <View>
    <GalleryImageView height={'198'} image={Rodin} title={'La Danaïde'} date={'1889'} features={'Marbre'} />
    <GalleryImageView height={'451'} image={Rodin1} title={'La cathédrale'} date={'1908'} features={'Pierre'} />
    <GalleryImageView height={'289'} image={Rodin2} title={'Le Penseur'} date={'1902'} features={'Bronze'} />
</View>

export default Sculptures