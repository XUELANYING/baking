import classifyType from "../../actionType/search/classify"
import classifyState from "../../state/search/classify"

export default function(state=classifyState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === classifyType.classifyCommendType){
        state.classifys = payload;
        state.commend.unshift(payload[0]);
    }
    if(type === classifyType.classifyListType){
        state.classify = ["推荐"]
        let arr = state.classify;
        for(let i=0;i<payload.classify.length;i++){
            arr.push(payload.classify[i].name)
        }
        state.classify = arr;
        state.commend = [...state.commend,...payload.classify];
    }
    // console.log(state)
    return state;
}