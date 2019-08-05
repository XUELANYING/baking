import Me from "../../state/Me/index";
import actionTypeMe from "../../actionType/Me/index"
export  default  function (state=Me,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    //console.log(state)
    if (type===actionTypeMe.TEST) {// addlistOne==精彩活动
        state.activity= [...state.activity,...payload]

    }else if(type===actionTypeMe.ADD_LIST_SON){// addlistOne==精彩活动=2级页

        state.sondouble=[payload]

    }else if(type === actionTypeMe.ADD_LIST_SON_SON){// addlistOne==精彩活动=3级页
        state.sondoubleSon=[payload]
    }
     return   state
}