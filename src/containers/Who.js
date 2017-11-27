import { connect } from 'react-redux'

import { selectors } from '../reducers'
import Page from '../pages/BioPage'

const mapStateToProps = (state, props) => {
  const description = selectors.getDescription(state)
  const email = selectors.getEmail(state)
  return {
    description,
    email
  }
}

const enhance = connect(mapStateToProps)

export default enhance(Page)
