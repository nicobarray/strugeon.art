// Libraries.
import React from 'react'

// Components.
import { View } from './styled'
import ArtItem from './ArtItem'

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
          <ArtItem
            key={art.id}
            image={art.imageUrl}
            image2={art.imageUrl2}
            image3={art.imageUrl3}
            title={art.title}
            date={art.date}
            dimension={{
              width: art.width,
              height: art.height
            }}
            features={art.features.join(', ')}
          />
        )
      })}
  </View>
)

export default ArtList
