import classifyType from "../../actionType/search/classify";
import axios from "axios"
import token from "../../../common/config"
export const getCommendInfo = (payload)=>{
    return{
        type:classifyType.classifyCommendType,
        payload
    }
};

export const getClassifyInfo = (payload)=>{
    return{
        type:classifyType.classifyListType,
        payload
    }
};

export default{
    getCommendList(dispatch){
        return async(dispatch)=>{
            let result = await fetch("/api/classify/getRecommend?_t="+Date.now()+"&csrfToken="+token)
            let res = result.json();
            res.then(({data})=>{
                // console.log(data)
                dispatch(getCommendInfo(data))
            })
        }
    },
    getClassifyList(dispatch){
        return async(dispatch)=>{
            let result = await fetch("/api/classify/get?_t="+Date.now()+"&csrfToken="+token)
            let res = result.json();
            res.then(({data})=>{
                // console.log(data)
                dispatch(getClassifyInfo(data))
            })
        }
    }
}