// Libraries.
import React from 'react'

// Components.
import { View } from './styled'
import GalleryImageView from './GalleryImageView'

import res from '../img'

/* PropTypes:
{
    arts: Array<ArtType>
}
*/
const ArtList = props => <View>
    {props.arts && props.arts.map((art, index) => {
        return <GalleryImageView key={art.aid} image={res.arts[art.aid]} height={art.height} title={art.title} date={art.date} features={art.features.join(',')} />
    })}
</View>

export default ArtList