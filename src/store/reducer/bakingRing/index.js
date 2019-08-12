import initState from '../../state/bakingRing'
import actionType from '../../actionType/bakingRing'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    switch (type){
        case actionType.GET_ACTIVITY:
            state.activityList =[...payload];
            break;
        case actionType.GET_COMMUNITY:
            state.communityList = [...payload];
            break;
        case actionType.GET_COMMUNITY_DETAIL:
            state.communityDetail = {...payload};
            break;
        case actionType.GET_NEWEST:
            state.newest = [...payload,...state.newest];
            break;
        case actionType.GET_HOT_MOST:
            state.hotMost = [...state.hotMost,...payload];
            break;
        case actionType.GET_ACTIVITY_DETAIL:
            state.activityDetail = {...payload};
            break;
        case actionType.GET_DISH_DETAIL:
            state.dishDetail = {...payload};
            break;
        case actionType.GET_SHOW_LIST:
            state.showList = [...state.showList,...payload];
            break;
        case actionType.GET_FOLLOW:
            state.followList = [...payload];
            console.log(state.followList);
            break;
        case actionType.GET_EXPERT:
            state.expertList = [...payload,...state.expertList];
            break;
        default:
            break;
    }
    return state;
}
