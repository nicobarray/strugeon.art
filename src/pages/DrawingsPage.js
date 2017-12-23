import React from 'react'

import Drawings from '../containers/Drawings'
import Categorizer from '../containers/Categorizer'

class PaintingsPage extends React.Component {
  render() {
    return (
      <div>
        <Categorizer type={'drawing'} />
        <Drawings />
      </div>
    )
  }
}

export default PaintingsPage
