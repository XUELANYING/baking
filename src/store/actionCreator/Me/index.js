import  axios from "axios";
import  actionTypeMe from "../../actionType/Me/index"
const  upPosition = (payload)=> { //   addlistOne ==精彩活动
    return {
        type:actionTypeMe.TEST,
        payload
    }
}
const  addSonList = (payload)=>{//  addlistOne ==精彩活动-2级页
       return {
            type:actionTypeMe.ADD_LIST_SON,
            payload
       }
}
const  acSonson   = (payload)=> {//  addlistOne ==精彩活动-3级页
       return {
           type:actionTypeMe.ADD_LIST_SON_SON,
           payload
       }
}
const  signAddlist =(payload) =>{//addlistOne ==签到 排行榜
       return{
           type:actionTypeMe.SIGN_ADD_LIST,
           payload
       }
}
const  record = (payload)=>{//addlistTwo==浏览记录
        return{
            type:actionTypeMe.RECORD,
            payload
        }
}
const  Convert=(payload)=>{//addlistTwo===兑换帮币
        return{
            type :actionTypeMe.CONVERT,
            payload
        }
}
const  AnswerBox=(payload)=>{//opusTaber === troble 问题
       console.log(payload)
      return {
            type:actionTypeMe.ANSWERBOX,
            payload
      }
}

export default {
    //创建者 ：郭宇迪  时间 ：8月2日  react 请求

   //////////////////////  addlistOne ==精彩活动////////////////////////////////
    goodsCon (){  //   addlistOne ==精彩活动
        return  async (dispatch)=>{
            let data = await fetch("/api/activity/getActivitys?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10")
            let result = data.json()
            result.then(res=>{
                //console.log(res)
                dispatch(upPosition(res.data.data))
            })

        }
    },
    addSonList(con){//  addlistOne ==精彩活动-2级页
        return async (dispatch)=>{
            let data =await  fetch("/api/activity/getComponent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10&contentId="+con+"&listMode=createTime")
            let  result = data.json()
            result.then(res=>{
               // console.log(res)
                dispatch(addSonList(res.data.activity))
            })

        }
    },
    acSonson(con){//  addlistOne ==精彩活动-3级页
        return async (dispatch)=>{
                 const data = await axios.get("/api/dish/get?_t=1564987166103&csrfToken="+localStorage.csrfToken+"&contentId="+con)//axios请求方式
                //console.log(data.data.data)
                 dispatch(acSonson(data.data.data.dish))
           }

    },


    //////////////////////  addlistOne == 签到  ////////////////////////////////

    signAddlist(){// addlistOne == sign 签到排行榜
        return async (dispatch)=>{
            const  data = await fetch("/api/sign/getTodayTopTaskClient?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken)
            let result = data.json()
            result.then(res=>{
               // console.log(res.data)
               dispatch(signAddlist(res.data))
            })

        }
    },
    ///////////////////////////addlistTwo == 浏览记录/////////////////////////////
    Record(){
        return async (dispatch)=>{
            const {data} = await  axios.get("/api/browserecords/getbrowserecords?_t=1565089367752&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1MzkzMjU5NiwiaWF0IjoxNTY0NTQzNzk2fQ.LX3DofGWSer3iUak_42AsPu61jebz3DQQOAGgFJPaLE&pageIndex=0&pageSize=77")
            //console.log(data.data.data)
            const oldList =[];
            const newList = [];
            var d = new Date();
            var years = d.getFullYear();
            var month = d.getMonth() + 1;
            var days =  d.getDate()-1;
            var hours = d.getHours();
            var minutes = d.getMinutes();
            var seconds = d.getSeconds();
            var time = years + "-0" + month + "-0" + days +' '+hours + ":" + minutes + ":" + seconds;

            data.data.data.forEach(v=>{
              // console.log(v.Time)
                if( time < v.createTime){
                    newList.push(v);
                }else{
                    oldList.push(v)
                }
            })
            //console.log(time)
            //console.log(111,newList)
            //console.log(2222,oldList)
            dispatch(record({newList,oldList}))

        }
    },

    //////////////////////////addlistTwo == 获取帮币/////////////////////////////
    Convert(){//addlistTwo == 获取帮币
        return async (dispatch)=>{
            const  data = await  fetch("/api/notice/get?_t=1565093798528&csrfToken="+localStorage.csrfToken+"&noticeId=10100")
            let  result =data.json()
               result.then(res=>{
                   console.log(res.data)
                   dispatch(Convert(res.data))
               })
        }
    },

    /////////////////////////////addlistTwo === 成为达人///////////////////////////////////

    // Daren(){
    //     return  async (dispatc)=>{
    //            const {data} = await axios.get("")
    //            console.log(data)
    //     }  没有借口了 不想写 了
    // },

    //////////////////////////////opusTaber === troble 问题 /////////////////////////////////

    AnswerBox(clientId){// opusTaber === troble 问题
        return async (dispatch)=>{
            const  data =await axios.get("/api/question/getNew?_t=1565166887124&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10")
            const info =data.data.data.content.data
            dispatch(AnswerBox(info))
            console.log(info)

        }

    },






    ////////////////////  郭郭测试数据用的 ////////////////////////////////
      Test(){// 可删可查  可爱的像四姐烤冷面
             return async (dispatch)=>{
                    const  data =await axios.get("/Medal/guoguo")//mokre 请求方式
                     //console.log(data)
             }

    }








}
