// Libraries.
import React from 'react'

// Components.
import { View } from './styled'
import GalleryImageView from './GalleryImageView'

/* PropTypes:
{
    arts: Array<ArtType>
}
*/
const ArtList = props => (
  <View>
    {props.arts &&
      props.arts.map((art, index) => {
        return (
          <GalleryImageView
            key={art.aid}
            image={art.imageUrl}
            height={art.height}
            title={art.title}
            date={art.date}
            features={art.features.join(',')}
          />
        )
      })}
  </View>
)

export default ArtList
