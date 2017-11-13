import { connect } from 'react-redux'

import { selectors } from '../reducers'
import ArtList from '../components/ArtList'

const mapStateToProps = (state, props) => {
    const sculptures = selectors.listSculptures(state)
    return {
        arts: sculptures
    }
}

const enhance = connect(mapStateToProps)

export default enhance(ArtList)