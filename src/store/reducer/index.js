import {combineReducers} from 'redux'
import learnBaking from './learnBaking'
import bakingRing from './bakingRing'
import questionAnswer from './questionAnswer'
import Me from './Me'

export default combineReducers({
    learnBaking,
    bakingRing,
    questionAnswer,
    Me
})
