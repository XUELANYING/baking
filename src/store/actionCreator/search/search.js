import searchType from "../../actionType/search/search";
import axios from "axios";
import token from "../../../common/config"

export const getSearchInfo = (payload)=>{
    return{
        type:searchType.FindType,
        payload
    }
};

export const getDetailInfo = (payload)=>{
    return{
        type:searchType.DetailType,
        payload
    }
};

export const getVideoInfo = (payload)=>{
    return {
        type:searchType.VideoType,
        payload
    }
};

export default{
    getSearchList(){
        return async(dispatch)=>{
            let result = await fetch("/api/keyword/detail?_t="+Date.now()+"&csrfToken="+token);
            let res = result.json();
            res.then((data)=>{
                // console.log(data)
                dispatch(getSearchInfo(data.data))
            })
        }
    },
    getDetailList(keyword,sortType){
        return async(dispatch)=>{
            let result = await fetch("/api/search/getMoreRecipe?_t="+Date.now()+"&csrfToken="+token+"&pageIndex=0&pageSize=10&keyword="+keyword+"&sort="+sortType);
            let res = result.json();
            res.then((data)=>{
                dispatch(getDetailInfo(data.data.search.list.recipe))
            })
        }
    },
    getVideoList(keyword){
        return async(dispatch)=>{
            let data = await axios.get("/api/search/getMoreCourse?_t="+Date.now()+"&csrfToken="+token+"&pageIndex=0&pageSize=10&keyword="+keyword);
            let showNum = await axios.get("/api/v2/recommend/getClassifyCourse?_t="+Date.now()+"&csrfToken="+token+"&classifyId=0&keyword="+keyword+"&type=1")
            let obj = {};
            obj={
                showNum:showNum.data.data.showNum,
                list:data.data.data.search.list.course.data
            };
            if(data.data && showNum.data){
                dispatch(getVideoInfo(obj))
            }
        }
    }
}