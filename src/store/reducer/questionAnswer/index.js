import initState from '../../state/questionAnswer'
import actionType from '../../actionType/questionAnswer'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    if(type===actionType.GET_NEWSLIST){
        state.newsList = [...state.newsList,...payload]
    }else if(type===actionType.GET_HOTLIST){
        state.hotList = [...state.hotList,...payload]
    }else if (type===actionType.GET_ESSENCELIST){
        state.essenceList = [...state.essenceList,...payload]
    }else if(type === actionType.GET_QUESTIONDETAIL){
        state.questionDetail = payload
        state.recipe = payload.recipe
    }else if(type===actionType.GET_ANSWER){
        state.answer = payload
        state.answerList = payload.data
    }else if(type===actionType.GET_ANSWERDETAIL){
        state.answerDetail = payload
    }else if(type===actionType.GET_ANSWERFLOOR){
        state.answerFloor = payload
    }
    return state;
}
