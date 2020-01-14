import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import imagePaneSource from './imagePaneSource'
import articleScrollValue from './articleScrollValue'
import articleData from './articleData'

export default combineReducers({
    visibilityFilter,
    imagePaneSource, 
    articleScrollValue,
    articleData
})