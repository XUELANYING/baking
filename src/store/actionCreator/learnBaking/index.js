import axios from 'axios'
import actionType from '../../actionType/learnBaking'

const recommendList=(payload)=>{
    return{
        type:actionType.GET_RECOMMENDLIST,
        payload
    }
}
export default {
    getRecommendList(){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/recommend/getRandContent?_t=1564757240452&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc4ODk1OCwiaWF0IjoxNTY0NDAwMTU4fQ.KbJocxLZoaTbGHYs6JKbGx3MVXSfN6gZgp9Sgd1D2fs&type=3&pageSize=10')
            dispatch(recommendList(data.data.data))
            console.log(2121,data)
        }
    },
}
