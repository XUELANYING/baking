import searchState from "../../state/search/search";
import searchType from "../../actionType/search/search";

export default function(state=searchState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === searchType.FindType){
        state.popularSearch = payload.popularSearch;
        state.lastestSearch = payload.lastestSearch;
    }
    if(type === searchType.DetailType){
        if(payload.infoType===1){
            for(let i=0;i<payload.data.data.length;i++){
                state.searchRecipeResults.push(payload.data.data[i])
            }
        }
        if(payload.infoType===2){
            for(let i=0;i<payload.data.data.length;i++){
                state.searchDidMore.push(payload.data.data[i])
            }
        }
        if(payload.infoType===3){
            for(let i=0;i<payload.data.data.length;i++){
                state.searchPopular.push(payload.data.data[i])
            }
        }
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