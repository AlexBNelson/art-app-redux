import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.INVISIBLE, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter