import recipeDetailState from "../../state/search/recipeDetail";
import recipeDetailType from "../../actionType/search/recipeDetail";

export default function(state=recipeDetailState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type === recipeDetailType.getClientInfo){
        state.quantity = payload.quantity;
        state.material = payload.material;
        state.clientId = payload.clientId;
        state.step = payload.step;
        state.recipe = payload.recipe;
        state.dish = payload.dish.data;
        state.coverImage = payload.coverImage;
        state.coverTitle = payload.coverTitle;
        state.coverSummary = payload.coverSummary;
        state.clientImage = payload.clientImage;
        state.clientName = payload.clientName;
        state.likeNum = payload.likeNum;
        state.rewardNum = payload.rewardNum;
    }
    if(type === recipeDetailType.getMoreCommend){
        // console.log(payload)
        state.ownRecipe = payload
    }
    if(type === recipeDetailType.getVideoMoreInfo){
        // console.log(payload)
        state.videoList = payload
    }
    if(type === recipeDetailType.getCommend){
        // console.log(payload)
        state.commend = payload
    }
    // console.log(state);
    return state;
}