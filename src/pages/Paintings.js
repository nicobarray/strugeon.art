// Libraries.
import React from 'react'

// Style.
import { View, Image } from './styled'

// Resources.
import VanGogh from '../img/paintings/van-gogh.jpg';
import VanGogh1 from '../img/paintings/van-gogh-1.jpg';
import VanGogh2 from '../img/paintings/van-gogh-2.jpg';


const Paintings = props => <View>
    <Image src={VanGogh} alt='van-gogh-0' />
    <Image src={VanGogh1} alt='van-gogh-1' />
    <Image src={VanGogh2} alt='van-gogh-2' />
</View>

export default Paintings