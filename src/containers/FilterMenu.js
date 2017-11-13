import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompact'

import { selectors, actionCreators } from '../reducers'

import DropDownMenu from '../components/DropDownMenu'
import MenuItem from '../components/MenuItem'

const FilterMenu = props => {
    return <DropDownMenu>
        {props.filters.map((filter, index) => (
            <MenuItem key={filter} label={filter} />
        ))}
    </DropDownMenu>
}

const mapStateToProps = (state, props) => {
    return {
        filters: selectors.listFilters(props.type, state)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        clearFilters: () => {
            dispatch(actionCreators.filters.clear())
        }
    }
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            this.props.clearFilters()
        }
    })
)

export default enhance(FilterMenu)