import {combineReducers} from 'redux'
import learnBaking from './learnBaking'
import bakingRing from './bakingRing'
import questionAnswer from './questionAnswer'
import nest from './nest'

export default combineReducers({
    learnBaking,
    bakingRing,
    questionAnswer,
    nest
})
