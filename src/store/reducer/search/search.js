import searchState from "../../state/search/search";
import searchType from "../../actionType/search/search";

export default function(state=searchState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === searchType.FindType){
        state.popularSearch = payload.popularSearch;
        state.lastestSearch = payload.lastestSearch;
    }
    if(type === searchType.DetailType){
        state.searchRecipeResults = payload.data
    }
    if(type === searchType.VideoType){
        payload.list.length = payload.showNum;
        state.searchVideoList = payload.list;
    }
    // console.log(state)
    return state;
}