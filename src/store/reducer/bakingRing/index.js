import initState from '../../state/bakingRing'
import actionType from '../../actionType/bakingRing'

export default function(state=initState,{type,payload}){
    console.log('jing1111111111111111',payload)
    state = JSON.parse(JSON.stringify(state));
    switch (type){
        case actionType.GET_ACTIVITY:
            state.activityList =[...payload];
            break;
        case actionType.GET_COMMUNITY:
            state.communityList = [...payload];
            break;


        default:
            break;
    }
    return state;
}
