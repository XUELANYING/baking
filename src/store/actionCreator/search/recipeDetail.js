import axios from "axios";
import recipeDetail from "../../actionType/search/recipeDetail";
import token from "../../../common/config"
export const  recipeDetailInfo = (payload)=>{
    return{
        type:recipeDetail.getClientInfo,
        payload
    }
};

export const moreCommend = (payload)=>{
    return {
        type:recipeDetail.getMoreCommend,
        payload
    }
};

export const moreVideoInfo = (payload)=>{
    return{
        type:recipeDetail.getVideoMoreInfo,
        payload
    }
};
export const commendList = (payload)=>{
    return{
        type:recipeDetail.getCommend,
        payload
    }
};


export default {
    getUserList(contentId,quantity){
        return async(dispatch)=>{
            let {data} = await axios.get("/api/recipe/get?_t="+Date.now()+"&csrfToken="+token+"&contentId="+contentId+"&quantity="+quantity);
            // console.log(data)
            dispatch(recipeDetailInfo(data.data.recipe))
        }
    },
    getMoreCommendInfo(clientId,contentId){
        return async(dispatch)=>{
            let {data} = await axios.get("/api/recipe/getClientByNoContenId?_t="+Date.now()+"&csrfToken="+token+"&clientId="+clientId+"&noContentId="+contentId+"&pageSize=10&pageIndex=0");
            // console.log(data)
            dispatch(moreCommend(data.data))
        }
    },
    getMoreVideoInfo(){
        return async(dispatch)=>{
            let {data} = await axios.get("/api/recommend/getRandContent?_t="+Date.now()+"&csrfToken="+token+"&type=3&pageSize=10");
            // console.log(data)
            dispatch(moreVideoInfo(data.data.data))
        }
    },
    getCommendList(contentId){
        return async(dispatch)=>{
            let {data} = await axios.get("/api/comment/getFloor?_t="+Date.now()+"&csrfToken="+token+"&pageIndex=0&pageSize=10&contentId="+contentId);
            // console.log(data)
            dispatch(commendList(data.data))
        }
    }
}