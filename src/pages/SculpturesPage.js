import React from 'react'
import styled from 'styled-components'

import Sculptures from '../containers/Sculptures'
import Select from '../containers/FilterMenu'

const FilterView = styled(Select)`
  width: 80%;
  display: flex;
  justify-content: center;

  margin: 32px auto 32px;
`

const SculpturesPage = props => {
  return (
    <div>
      <FilterView
        multi
        placeholder={'Sélectionner un ou plusieurs critères...'}
        type={'sculpture'}
      />
      <Sculptures />
    </div>
  )
}

export default SculpturesPage
