// Libraries.
import React from 'react'

// Style.
import { View, Image } from './styled'

// Resources.
import Rodin from '../img/sculptures/rodin-girl.jpg';
import Rodin1 from '../img/sculptures/rodin-hands.jpg';
import Rodin2 from '../img/sculptures/rodin-the-thinker.jpg';

const Sculptures = props => <View>
    <Image src={Rodin} alt='rodin-0' />
    <Image src={Rodin1} alt='rodin-1' />
    <Image src={Rodin2} alt='rodin-2' />
</View>

export default Sculptures