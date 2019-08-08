import Me from "../../state/Me/index";
import actionTypeMe from "../../actionType/Me/index"
export  default  function (state=Me,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    //console.log(state)
    if (type===actionTypeMe.TEST) {// addlistOne==精彩活动
        state.activity= [...payload]
    }else if(type===actionTypeMe.ADD_LIST_SON){// addlistOne==精彩活动=2级页
        state.sondouble=[payload]
    }else if(type === actionTypeMe.ADD_LIST_SON_SON){// addlistOne==精彩活动=3级页
        state.sondoubleSon=[payload]
    }else if(type===actionTypeMe.SIGN_ADD_LIST){//addlistOne == 签到
           state.signAddlist=payload
    }else if(type === actionTypeMe.RECORD){//addListTow ===浏览记录
            // console.log(payload)
            state.record = [payload]
           // console.log(state.record)
    }else  if(type == actionTypeMe.CONVERT){//addlistTwo  ==== 兑换帮币
             state.convert =[payload]
    }else  if(type == actionTypeMe.ANSWERBOX){//opusTaber === troble 问题
            state.Answerbox=payload
            console.log(111,state.Answerbox)
    }
     return   state
}
