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

export const getSearchAnswerInfo = (payload)=>{
    return {
        type:searchType.SearchAnswer,
        payload
    }
};

export const getSearchHelpFriendInfo = (payload)=>{
    return {
        type:searchType.SearchHelpFriends,
        payload
    }
};

export default{
    getSearchList(){
        return async(dispatch)=>{
            let result = await fetch("/api/keyword/detail?_t="+Date.now()+"&csrfToken="+token);
            let res = result.json();
            res.then((data)=>{
                dispatch(getSearchInfo(data.data))
            })
        }
    },
    getDetailList(type,keyword,pageIndex,sortType){
        return async(dispatch)=>{
            if(type === 0){//食谱
                let result = await fetch("/api/search/getMoreRecipe?_t="+Date.now()+"&csrfToken="+token+"&pageIndex="+pageIndex+"&pageSize=10&keyword="+keyword+"&sort=");
                let res = result.json();
                res.then((data)=>{
                    let obj={};
                    obj={
                        infoType:1,
                        data:data.data.search.list.recipe
                    }
                    dispatch(getDetailInfo(obj))
                })
            }
            if(type === 1){//问答
                let result = await fetch("/api/search/getMoreQuestion?_t="+Date.now()+"&csrfToken="+token+"&pageIndex="+pageIndex+"&pageSize=10&keyword="+keyword+"&sort=");
                let res = result.json();
                res.then((data)=>{
                    dispatch(getSearchAnswerInfo(data.data.search.list.question))
                })
            }

            if(type === 2){//帮友
                let result = await fetch("/api/search/getMoreClient?_t="+Date.now()+"&csrfToken="+token+"&pageIndex="+pageIndex+"&pageSize=10&keyword="+keyword+"&sort=");
                let res = result.json();
                res.then((data)=>{
                    dispatch(getSearchHelpFriendInfo(data.data.search.list.client))
                })
            }

        }
    },
    getDidMoreList(keyword,pageIndex){
        return async(dispatch)=>{
             let result = await fetch("/api/search/getMoreRecipe?_t="+Date.now()+"&csrfToken="+token+"&pageIndex="+pageIndex+"&pageSize=10&keyword="+keyword+"&sort=dishNum");
             let res = result.json();
             res.then((data)=>{
                let obj={};
                    obj={
                        infoType:2,
                        data:data.data.search.list.recipe
                    }
                    dispatch(getDetailInfo(obj))
             })
        }
    },
    getPopularList(keyword,pageIndex){
        return async(dispatch)=>{
             let result = await fetch("/api/search/getMoreRecipe?_t="+Date.now()+"&csrfToken="+token+"&pageIndex="+pageIndex+"&pageSize=10&keyword="+keyword+"&sort=master");
             let res = result.json();
             res.then((data)=>{
                let obj={};
                obj={
                    infoType:3,
                    data:data.data.search.list.recipe
                }
                dispatch(getDetailInfo(obj))
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