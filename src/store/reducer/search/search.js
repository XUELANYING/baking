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
            state.searchRecipeResults.count = payload.data.count
            for(let i=0;i<payload.data.data.length;i++){
                state.searchRecipeResults.list.push(payload.data.data[i])
            }
        }
        if(payload.infoType===2){
            state.searchDidMore.count = payload.data.count
            for(let i=0;i<payload.data.data.length;i++){
                state.searchDidMore.list.push(payload.data.data[i])
            }
        }
        if(payload.infoType===3){
            state.searchPopular.count = payload.data.count
            for(let i=0;i<payload.data.data.length;i++){
                state.searchPopular.list.push(payload.data.data[i])
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
        state.searchAnswerList.count = payload.count
        for(let i=0;i<payload.data.length;i++){
            state.searchAnswerList.data.push(payload.data[i])
        }
    }
    if(type === searchType.SearchHelpFriends){
        state.searchHFList = payload
    }
    return state;
}