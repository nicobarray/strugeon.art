import React from 'react'
import { connect } from 'react-redux'

import actionCreators from '../actions'
import { selectors } from '../reducers'
import Button from '../components/Button'

const ClearActiveFiltersButton = ({ clearFilters, ...rest }) => {
  return (
    <Button {...rest} onClick={clearFilters}>
      Clear Filters
    </Button>
  )
}

const mapStateToProps = (state, props) => ({
  disabled: selectors.listActiveFilters(state).length === 0
})
const mapDispatchToProps = (dispatch, props) => ({
  clearFilters() {
    dispatch(actionCreators.filters.clear())
  }
})

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(ClearActiveFiltersButton)
