import axios from 'axios'
import actionType from '../../actionType/bakingRing'

import filter from '../../../asset/filter'
const activityList=(payload)=>{
    return {
        type:actionType.GET_ACTIVITY,
        payload
    }
}
const activityDetail = (payload) =>{
    return {
        type:actionType.GET_ACTIVITY_DETAIL,
        payload
    }
}
const communityList = (payload) =>{
    return {
        type:actionType.GET_COMMUNITY,
        payload
    }
}
const communityDetail = (payload) =>{
    return {
        type:actionType.GET_COMMUNITY_DETAIL,
        payload
    }
}
const showList = (payload) =>{
    return {
        type:actionType.GET_SHOW_LIST,
        payload
    }
}
const newest=(payload) =>{
    console.log(payload)
    return {
        type:actionType.GET_NEWEST,
        payload

    }
}
const hotMost=(payload) =>{
    return{
        type:actionType.GET_HOT_MOST,
        payload
    }
}
const followList = (payload) =>{
    return{
        type:actionType.GET_FOLLOW,
        payload
    }
}
const dishDetail = (payload) =>{
    return {
        type:actionType.GET_DISH_DETAIL,
        payload
    }
}

const expertList = (payload) =>{
    return {
        type:actionType.GET_EXPERT,
        payload
    }
}

export default {
    // 获得烘焙圈主页的动态信息列表
    getShowList(){
        return  async(dispatch)=>{
            let {data} = await axios.get('/api/v2/feed/getNew?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10')
            console.log('烘焙圈主页信息列表',data.data.content);
            dispatch(showList(data.data.content))
        }
    },
    // 获得活动列表
    getActivityList(){
        return async (dispatch)=>{
                let {data} = await axios.get('/api/feed/getCategory?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken);
                console.log('日常活动列表', data.data.category);
                dispatch(activityList(data.data.category))
             }
    },
    getActivityDetail(id){
        // console.log("jing5555555",contentId);
        return async(dispatch) =>{
            let {data} = await axios.get('/api/activity/getComponent?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10&contentId='+id);
            console.log("活动详情列表",data.data.activity);
            dispatch(activityDetail(data.data.activity))
        }
    },
    // 获取活动下方具体作品详细信息
    getDishDetail(id){
        return async (dispatch) =>{
            let {data} = await axios.get('/api/dish/get?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&contentId='+id);
            console.log("dish具体活动详细信息",data.data.dish);
            dispatch(dishDetail(data.data.dish))
        }
    },
    // 获得社区列表
    getCommunityList(){
        return async (dispatch) =>{
            let {data} = await axios.get('/api/community/getByLimit?isShow=4&_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=99')
            console.log('烘焙圈社区列表',data.data)
            dispatch(communityList(data.data.data))

        }
    },
    //获得社区详情列表
    getCommunityDetail(id,index){
        return async(dispatch) =>{
            let {data} = await axios.get('/api/v2/feed/getNewByCommunity?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10&communityId='+id)
            console.log('社区详情列表', data.data.content);
            if(index===2/1){
                let newestStr =data.data.content.sort(filter.compareAsc('createTime'));
                dispatch(newest(newestStr));
                console.log('最新排序', newestStr);
            }else if(index === 1/1){
                let hotStr = data.data.content.sort(filter.compareDesc('communityHotNum'));
                dispatch(hotMost(hotStr));
                console.log('最热排序',hotStr);
            }
            dispatch(communityDetail(data.data));
        }
    },
    //获得关注列表
    getFollowList(){
        return async (dispatch)=> {
            let {data} = await axios.get('/show/getFollow');
            console.log('关注列表',data);
            dispatch(followList(data));
        }
    },
    // 获得达人列表
    getExpertList(){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/v2/feed/getMasterNew?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10')
            console.log('达人列表',data.data.content);
            dispatch(expertList(data.data.content))

        }
    }
}
