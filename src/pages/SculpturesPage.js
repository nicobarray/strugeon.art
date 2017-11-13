import React from 'react'
import styled from 'styled-components'

import Sculptures from '../containers/Sculptures'
import FilterMenu from '../containers/FilterMenu'
import ClearActiveFiltersButton from '../containers/ClearActiveFiltersButton'

const FilterView = styled.div`
    display: flex;
    justify-content: space-around;

    padding: 32px;
`

const SculpturesPage = props => {
    return <div>
        <FilterView>
            <FilterMenu type={'SCULPTURE'} />
            <ClearActiveFiltersButton />
        </FilterView>
        <Sculptures />
    </div>
}

export default SculpturesPage