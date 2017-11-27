import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle, withState } from 'recompact'
import xor from 'lodash/xor'
import Select from 'react-select'

import actionCreators from '../actions'
import { selectors } from '../reducers'

const mapStateToProps = (state, props) => {
  return {
    options: selectors
      .listFilters(props.type, state)
      .map(opt => ({ label: opt, value: opt })),
    activeFilters: selectors.listActiveFilters(state)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    clearFilters: () => {
      dispatch(actionCreators.filters.clear())
    },
    createOnChange: activeFilters => value => {
      const filters = value.map(opt => opt.value)
      const newFilter = xor(activeFilters, filters)
      newFilter.forEach(filter => {
        if (filters.indexOf(filter) !== -1) {
          dispatch(actionCreators.filters.set(filter))
        } else {
          dispatch(actionCreators.filters.remove(filter))
        }
      })
      props.setValue(value)
    }
  }
}

const enhance = compose(
  withState('value', 'setValue', []),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.clearFilters()
    }
  })
)

export default enhance(({ createOnChange, activeFilters, ...rest }) => (
  <Select
    {...rest}
    onChange={createOnChange(activeFilters)}
    closeOnSelect={false}
  />
))
