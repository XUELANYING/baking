import axios from 'axios'
import actionType from '../../actionType/questionAnswer'
const newsList=(payload)=>{
    return{
        type:actionType.GET_NEWSLIST,
        payload
    }
}
const hotList=(payload)=>{
    return{
        type:actionType.GET_HOTLIST,
        payload
    }
}
const essenceList=(payload)=>{
    return{
        type:actionType.GET_ESSENCELIST,
        payload
    }
}
const questionDetail=(payload)=>{
    return{
        type:actionType.GET_QUESTIONDETAIL,
        payload
    }
}
const answerDetail=(payload)=>{
    return{
        type:actionType.GET_ANSWER,
        payload
    }
}
const getAnswerDetail=(payload)=>{
    return{
        type:actionType.GET_ANSWERDETAIL,
        payload
    }
}
const getAnswerFloor=(payload)=>{
    return{
        type:actionType.GET_ANSWERFLOOR,
        payload
    }
}
export default {
    getNewsList(pageIndex=0){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/question/getNew?_t=1564636667655&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&pageIndex='+pageIndex+'&pageSize=10')
            dispatch(newsList(data.data.content.data))
        }
    },
    getHotList(){
        return async (dispatch)=>{
            let {data} =await axios.get('/api//question/getHot?_t=1564640806432&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&pageIndex=0&pageSize=10')
            dispatch(hotList(data.data.content.data))
        }
    },
    getEssenceList(pageIndex=0){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/question/getEssence?_t=1564641390856&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&pageIndex='+pageIndex+'&pageSize=10')
            dispatch(essenceList(data.data.content.data))
        }
    },
    getQuestionDetail(id){
        return async (dispatch)=>{
            let {data} =await axios.get('/api/question/getQuestion?_t=1564659559477&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&contentId='+id)
            dispatch(questionDetail(data.data.content))
        }
    },
    getAnswer(id){
        return async (dispatch)=>{
            let {data} =await axios.get('/api/question/getAnswers?_t=1564660761438&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&pageIndex=0&pageSize=10&contentId='+id+'&clientId=2913783')
            console.log(data)
            dispatch(answerDetail(data.data.content.answer))
        }
    },
    getAnswerDetail(clientId){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/question/getAnswer?_t=1564731136962&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&contentId='+clientId)
            console.log(data)
            dispatch(getAnswerDetail(data.data.content))
        }
    },
    getFloor(clientId){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/comment/getFloor?_t=1564731137270&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE&pageIndex=0&pageSize=10&contentId='+clientId)
            console.log(data.data)
            dispatch(getAnswerFloor(data.data.data))
        }
    }
}
