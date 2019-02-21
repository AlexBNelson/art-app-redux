import { connect } from 'react-redux'
import { VisibilityFilters } from '../../../../actions'
import TextPaneComponent from './TextPaneComponent';

const getViewState = (filter) => {
    switch (filter) {
        case VisibilityFilters.INVISIBLE:
            return true
        case VisibilityFilters.VISIBLE:
            return false
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const getImageSource = (source) => {
    return source;
}


const mapStateToProps = state => ({
    viewState: getViewState(state.visibilityFilter),
    imageSource: getImageSource(state.imagePaneSource)
})

export default connect(
    mapStateToProps
)(TextPaneComponent)