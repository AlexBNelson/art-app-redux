import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import { changeImageState } from '../actions'
import { VisibilityFilters } from '../actions'
import Link from '../components/Link'
import TextPane from '../components/Article/ArticlePane/TextPane';

const mapDispatchToProps = (dispatch, ownProps) => ({
    hideImage: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL))
})

export default connect(
    mapDispatchToProps
)(TextPane)