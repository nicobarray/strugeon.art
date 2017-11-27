import styled from 'styled-components'
import { withProps } from 'recompact'

import Select from './FilterMenu'

const FilterView = styled(Select)`
  width: 80%;
  display: flex;
  justify-content: center;

  margin: 32px auto 32px;

  /* Mobile. */
  @media screen and (max-width: 664px) {
    margin-bottom: 64px;
  }
`

const enhance = withProps(props => ({
  multi: true,
  placeholder: 'Sélectionner un ou plusieurs critères...'
}))

export default enhance(FilterView)
