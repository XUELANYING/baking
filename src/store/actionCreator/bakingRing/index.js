import axios from 'axios'
import actionType from '../../actionType/bakingRing'
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
export default {
    // 获得烘焙圈主页的动态信息列表
    getShowList(){
        return  async(dispatch)=>{
            let {data} = await axios.get('/api/feed/getNew?_t=1564974383035&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=10')
            console.log('烘焙圈主页信息列表',data.data.content);
            dispatch(showList(data.data.content.data))
        }
    },
    // 获得活动列表
    getActivityList(){
        return async (dispatch)=>{
                let {data} = await axios.get('/api/feed/getCategory?_t=1564564703431&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw');
                console.log('jing----------------', data.data.category);
                console.log("jing33333333333333333",data.data);
                dispatch(activityList(data.data.category))
             }
    },
    getActivityDetail(id){
        // console.log("jing5555555",contentId);
        return async(dispatch) =>{
            let {data} = await axios.get('/api/activity/getComponent?_t=1564799201631&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=10&contentId='+id);
            console.log("jing4444444444444444444444",data.data.activity);
            console.log("*********************",data)
            dispatch(activityDetail(data.data.activity))
            // console.log('jing55555555555555555555',contentId)
        }
    },
    // 获得社区列表
    getCommunityList(){
        return async (dispatch) =>{
            let {data} = await axios.get("/api/community/getByLimit?isShow=4&_t=1564768698317&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=99")
            console.log('community------------------jing',data.data)
            dispatch(communityList(data.data.data))
        }
    },
    //获得社区详情列表
    getCommunityDetail(id){
        return async(dispatch) =>{
            let {data} = await axios.get('https://api.hongbeibang.com/v2/feed/getNewByCommunity?_t=1565009896665&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=10&communityId='+id)
            console.log('社区详情',data.data)
            dispatch(communityDetail(data.data))
        }
    }
}
