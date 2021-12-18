import { connect } from 'react-redux'
import ImagePaneComponent from './ImagePaneComponent'
import { VisibilityFilters } from '../../../../actions'

const getViewState = ( filter) => {
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

const getImageLink = (imgLink) => {
    return imgLink;
}

const mapStateToProps = state => ({
    viewState: getViewState(state.visibilityFilter),
    imageSource: getImageSource(state.imagePaneSource),
    imgLink: getImageLink(state.imageLink)
})

export default connect(
    mapStateToProps
)(ImagePaneComponent)