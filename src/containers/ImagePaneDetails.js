import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import TodoList from '../components/TodoList';

const mapStateToProps = (state, ownProps) => ({
    viewState: ownProps.filter
})


export default connect(
    mapStateToProps
)(TodoList)