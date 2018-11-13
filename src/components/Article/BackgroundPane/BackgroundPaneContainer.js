import { connect } from 'react-redux'
import BackgroundPane from './BackgroundPane';


const getScrollValue = (value) => {
    return value;
}


const mapStateToProps = state => ({
    articleScrollValue: getScrollValue(state.articleScrollValue)
})

export default connect(
    mapStateToProps
)(BackgroundPane)