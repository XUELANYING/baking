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
            let {data} = await axios.get("/api/classify/getRecommend?_t="+Date.now()+"&csrfToken="+token)
            // console.log(data.data)
            dispatch(getCommendInfo(data.data))
        }
    },
    getClassifyList(dispatch){
        return async(dispatch)=>{
            let {data} = await axios.get("/api/classify/get?_t="+Date.now()+"&csrfToken="+token)
            // console.log(data.data)
            dispatch(getClassifyInfo(data.data))
        }
    }
}