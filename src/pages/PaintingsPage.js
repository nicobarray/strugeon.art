import React from 'react'
import styled from 'styled-components'

import Paintings from '../containers/Paintings'
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

const PaintingsPage = props => {
    return <div>
        <FilterView>
            <FilterMenu type={'PAINTING'} />
            <ClearActiveFiltersButton />
        </FilterView>
        <Paintings />
    </div>
}

export default PaintingsPage