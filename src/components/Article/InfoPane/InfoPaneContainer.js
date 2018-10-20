import { connect } from 'react-redux'
import InfoPane from './InfoPane';


const getImageSource = (source) => {
    return source;
}


const mapStateToProps = state => ({
    imageSource: getImageSource(state.imagePaneSource)
})

export default connect(
    mapStateToProps
)(InfoPane)