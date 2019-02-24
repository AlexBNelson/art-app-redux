import { connect } from 'react-redux'
import BackgroundPane from './BackgroundPane';


const getScrollValue = (value) => {
    return value;
}

const getImageSource = (source) => {
    return source;
}

const mapStateToProps = state => ({
    articleScrollValue: getScrollValue(state.articleScrollValue),
    imageSource: getImageSource(state.imagePaneSource)
})

export default connect(
    mapStateToProps
)(BackgroundPane)