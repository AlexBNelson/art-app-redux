import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import imagePaneSource from './imagePaneSource'

export default combineReducers({
    visibilityFilter,
    imagePaneSource
})