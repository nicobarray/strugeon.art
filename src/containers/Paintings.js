import { connect } from 'react-redux'

import { selectors } from '../reducers'
import ArtList from '../components/ArtList'

const mapStateToProps = (state, props) => {
    const paints = selectors.listPaintings(state)
    return {
        arts: paints
    }
}

const enhance = connect(mapStateToProps)

export default enhance(ArtList)