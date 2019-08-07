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
    // 获取活动下方具体作品详细信息
    getDishDetail(id){
        return async (dispatch) =>{
            let {data} = await axios.get('/api/dish/get?_t=1565111603661&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&contentId='+id);
            console.log("dishDetail",data.data.dish);
            dispatch(dishDetail(data.data.dish))
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
    getCommunityDetail(id,index){
        return async(dispatch) =>{
            let {data} = await axios.get('/api/v2/feed/getNewByCommunity?_t=1565009896665&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=10&communityId='+id)
            console.log('社区详情',data.data);
            console.log('最新排序', data.data.content);
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
            let {data} = await axios.get('/api/v2/feed/getFollow?_t=1565100848958&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=10')
            console.log('关注列表',data.data.content);
            dispatch(followList(data.data.content));
        }
    }
}
