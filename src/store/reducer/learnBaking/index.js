import initState from '../../state/learnBaking'
import actionType from '../../actionType/learnBaking'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type===actionType.GET_RECOMMENDLIST){
        state.getRecommendList = [...state.getRecommendList,...payload];


    }
    return state;
}
