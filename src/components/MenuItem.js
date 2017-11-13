import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompact'
import { connect } from 'react-redux'

import { selectors, actionCreators } from '../reducers'

const MenuItemButton = styled.button``

const MenuItem = props => {
    return <MenuItemButton onClick={e => { props.onClick(props.active)(e) }}>{props.active ? props.label + ' ⬅' : props.label}</MenuItemButton>
}

const mapStateToProps = (state, props) => {
    return {
        active: selectors.listActiveFilters(state).includes(props.label)
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: (active) => (e) => {
            console.log('props', props)
            if (!active) {
                dispatch(actionCreators.filters.set(props.label))
            } else {
                dispatch(actionCreators.filters.remove(props.label))
            }
        }
    }
}

const enhance = compose(connect(mapStateToProps, mapDispatchToProps))

export default enhance(MenuItem)