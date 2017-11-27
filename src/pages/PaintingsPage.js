import React from 'react'
import styled from 'styled-components'

import Paintings from '../containers/Paintings'
import Select from '../containers/FilterMenu'

const FilterView = styled(Select)`
  width: 80%;
  display: flex;
  justify-content: center;

  margin: 32px auto 32px;
`

class PaintingsPage extends React.Component {
  render() {
    return (
      <div>
        <FilterView
          multi
          placeholder={'Sélectionner un ou plusieurs critères...'}
          type={'painting'}
        />
        <Paintings />
      </div>
    )
  }
}

export default PaintingsPage
