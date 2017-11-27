import { connect } from 'react-redux'

import { selectors } from '../reducers'
import ArtList from '../components/ArtList'

const mapStateToProps = (state, props) => {
  const drawings = selectors.listDrawings(state)
  return {
    arts: drawings
  }
}

const enhance = connect(mapStateToProps)

export default enhance(ArtList)
