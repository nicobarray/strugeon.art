import { connect } from 'react-redux'

import { selectors } from '../reducers'
import ArtList from '../components/ArtList'

const isPaintingMatchingAllFilters = (filters) => (paint) => {
    return filters.filter(filter => paint.features.includes(filter)).length === filters.length
}

const mapStateToProps = (state, props) => {
    const filters = selectors.listActiveFilters(state)
    const paints = selectors.listPaintings(state)
    return {
        arts: filters.length > 0 ? paints.filter(isPaintingMatchingAllFilters(filters)) : paints
    }
}

const enhance = connect(mapStateToProps)

export default enhance(ArtList)