import React from 'react'
import styled from 'styled-components'

import Sculptures from '../containers/Sculptures'
import FilterMenu from '../containers/FilterMenu'
import ClearActiveFiltersButton from '../containers/ClearActiveFiltersButton'

const FilterView = styled.div`
  display: flex;
  justify-content: center;

  padding: 32px;

  > div {
    margin-right: 8px;
  }
`

const SculpturesPage = props => {
  return (
    <div>
      <FilterView>
        <FilterMenu type={'sculpture'} />
        <ClearActiveFiltersButton />
      </FilterView>
      <Sculptures />
    </div>
  )
}

export default SculpturesPage
