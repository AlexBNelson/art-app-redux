import { connect } from 'react-redux'
import InfoPane from './InfoPane';
import { VisibilityFilters } from '../../../actions'


const getImageSource = (source) => {
    return source;
}

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



const mapStateToProps = state => ({
    imageSource: getImageSource(state.imagePaneSource),
    viewState: getViewState(state.visibilityFilter)
})

export default connect(
    mapStateToProps
)(InfoPane)