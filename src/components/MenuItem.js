import React from 'react'
import styled from 'styled-components'
import { compose } from 'recompact'
import { connect } from 'react-redux'

import { selectors, actionCreators } from '../reducers'
import Button from './Button'

const MenuItemButton = Button.extend`
    /* Text */
    color: white;
    font-size: 1.2em;
    border-radius: 0;
    border: 0;

    background-color: #313131;
    :hover {
        background-color: #315131;
    }
`

const MenuItem = ({ onClick, ...rest }) => {
    return <MenuItemButton {...rest} onClick={e => { onClick(rest.active)(e) }}>{rest.active ? rest.label + ' ⬅' : rest.label}</MenuItemButton>
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