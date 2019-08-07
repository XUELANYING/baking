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
        if(payload.list.length > payload.showNum){
            payload.list.length = payload.showNum;
        }
        state.searchVideoList = payload.list;
    }
    if(type === searchType.SearchAnswer){
        state.searchAnswerList = payload
    }
    if(type === searchType.SearchHelpFriends){
        state.searchHFList = payload
    }
    // console.log(state)
    return state;
}