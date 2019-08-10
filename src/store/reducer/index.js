import {combineReducers} from 'redux'
import learnBaking from './learnBaking'
import bakingRing from './bakingRing'
import questionAnswer from './questionAnswer'
import Me from './Me'
import classify from "./search/classify"
import recipeDetail from "./search/recipeDetail"
import search from "./search/search"
import list from './questionAnswer/list'

export default combineReducers({
    learnBaking,
    bakingRing,
    questionAnswer,
    Me,
    classify,
    recipeDetail,
    search,
    list
})
