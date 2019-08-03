import axios from 'axios'
import actionType from '../../actionType/bakingRing'
const activityList=(payload)=>{
    return {
        type:actionType.GET_ACTIVITY,
        payload
    }
}
const communityList = (payload) =>{
    return {
        type:actionType.GET_COMMUNITY,
        payload
    }
}
export default {
    getActivityList(){
        return async (dispatch)=>{
                let {data} = await axios.get('/api/feed/getCategory?_t=1564564703431&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw');
                console.log('jing----------------', data.data.category);
                dispatch(activityList(data.data.category))
             }
    },
    getCommunityList(){
        return async (dispatch) =>{
            let {data} = await axios.get("/api/community/getByLimit?isShow=4&_t=1564768698317&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzk0ODE1OCwiaWF0IjoxNTY0NTU5MzU4fQ.rJn3G0BD0fF1tke6OLAO0ys3luCuQ8jw2ZxvK_k9NLw&pageIndex=0&pageSize=99")
            console.log('community------------------jing',data)
            dispatch(communityList(data.data.data))
        }
    }
}
