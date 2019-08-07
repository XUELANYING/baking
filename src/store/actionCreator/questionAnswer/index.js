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
const ClientInfo=(payload)=>{
    return{
        type:actionType.GET_GETCLIENTINFO,
        payload
    }
}
const ClientRecipe=(payload)=>{
    return{
        type:actionType.GET_GETCLIENTRECIOPE,
        payload
    }
}
const ClientAchievements=(payload)=>{
    return{
        type:actionType.GET_GETCLIENTACHIEVEMENTS,
        payload
    }
}
const ClientAnswer=(payload)=>{
    return{
        type:actionType.GET_GETCLIENTANSWER,
        payload
    }
}

export default {
    getNewsList(pageIndex=0){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/question/getNew?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex='+pageIndex+'&pageSize=10')
            dispatch(newsList(data.data.content.data))

        }
    },
    getHotList(){
        return async (dispatch)=>{

            let {data} =await axios.get('/api/question/getHot?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10')
            dispatch(hotList(data.data.content.data))
            console.log(data.data.content.data)
        }
    },
    getEssenceList(pageIndex=0){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/question/getEssence?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex='+pageIndex+'&pageSize=10')
            dispatch(essenceList(data.data.content.data))
            console.log('question',data.data.content)
        }
    },
    getQuestionDetail(id){
        return async (dispatch)=>{
            let {data} =await axios.get('/api/question/getQuestion?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&contentId='+id)
            dispatch(questionDetail(data.data.content))
        }
    },
    getAnswer(id){
        return async (dispatch)=>{
            let {data} =await axios.get('/api/question/getAnswers?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10&contentId='+id+'&clientId=2913783')
            dispatch(answerDetail(data.data.content.answer))
        }
    },
    getAnswerDetail(clientId){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/question/getAnswer?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&contentId='+clientId)
            dispatch(getAnswerDetail(data.data.content))
        }
    },
    getFloor(clientId){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/comment/getFloor?_t='+Date.now()+'&csrfToken='+localStorage.csrfToken+'&pageIndex=0&pageSize=10&contentId='+clientId)
            console.log(data.data)
            dispatch(getAnswerFloor(data.data.data))
        }
    },
    getClientInfo({pageIndex=0,clientId}){
        return async (dispatch)=>{
            let {data} = await axios.get('/client/getDish')
           let info= data.find(v=>v.clientId===clientId/1)
            dispatch(ClientInfo(info))
        }
    },
    getClientRecipe({pageIndex=0,clientId}){
        return async (dispatch)=>{
            let {data} = await axios.get('/client/getRecipe')
            let info = data.find(v=>v.clientId === clientId/1)
            dispatch(ClientRecipe(info.recipe.data))
        }
    },
    getClientAnswer({pageIndex=0,clientId}){
        return async (dispatch)=>{
            let {data} = await axios.get('/client/getAnswer')
            let info = data.find(v=>v.clientId === clientId/1)
            dispatch(ClientAnswer(info.questionAndAnswer.data))
        }
    },
    getClientAchievements(clientId){
        return async (dispatch)=>{
            let {data} = await axios.get('/client/getAchievement')
            let info = data.find(v=>v.clientId === clientId/1)
            dispatch(ClientAchievements(info))
        }
    },

}
