import { VisibilityFilters } from '../actions'

const articleReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_IMAGE_STATE':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter