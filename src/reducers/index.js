import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import imagePaneSource from './imagePaneSource'
import articleScrollValue from './articleScrollValue'

export default combineReducers({
    visibilityFilter,
    imagePaneSource, 
    articleScrollValue
})