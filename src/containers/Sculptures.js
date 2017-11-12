import { connect } from 'react-redux'

import { selectors } from '../reducers'
import ArtList from '../components/ArtList'

const mapStateToProps = (state, props) => {
    return {
        arts: selectors.listSculptures(state)
    }
}

const enhance = connect(mapStateToProps)

export default enhance(ArtList)