import { connect } from 'react-redux'
import ImagePaneComponent from './ImagePaneComponent'
import { VisibilityFilters } from '../../../../actions'

const getViewState = ( filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return true
        case VisibilityFilters.SHOW_COMPLETED:
            return false
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    viewState: getViewState(state.visibilityFilter)
})

export default connect(
    mapStateToProps
)(ImagePaneComponent)