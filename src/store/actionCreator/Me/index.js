import  axios from "axios";
import  actionTypeMe from "../../actionType/Me/index"
const  upPosition = function (payload) { //   addlistOne ==精彩活动
    return {
        type:actionTypeMe.TEST,
        payload
    }
}
const  addSonList  =  function (payload) {//  addlistOne ==精彩活动-2级页
       return {
            type:actionTypeMe.ADD_LIST_SON,
            payload
       }
}
const    acSonson = function (payload) {//  addlistOne ==精彩活动-3级页
       return {
           type:actionTypeMe.ADD_LIST_SON_SON,
           payload
       }
}

export default {
    //创建者 ：郭宇迪  时间 ：8月2日  react 请求

   //////////////////////  addlistOne ==精彩活动////////////////////////////////
    goodsCon (){  //   addlistOne ==精彩活动
        return  async (dispatch)=>{
            let data = await fetch("/api/activity/getActivitys?_t="+Date.now()+"&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1MzkzMjU5NiwiaWF0IjoxNTY0NTQzNzk2fQ.LX3DofGWSer3iUak_42AsPu61jebz3DQQOAGgFJPaLE&pageIndex=0&pageSize=10")
            let result = data.json()
            result.then(res=>{
                dispatch(upPosition(res.data.data))
            })

        }
    },
    addSonList(con){//  addlistOne ==精彩活动-2级页
        return async (dispatch)=>{
               let data =await  fetch("/api/activity/getComponent?_t="+Date.now()+"&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1MzkzMjU5NiwiaWF0IjoxNTY0NTQzNzk2fQ.LX3DofGWSer3iUak_42AsPu61jebz3DQQOAGgFJPaLE&pageIndex=0&pageSize=10&contentId="+con+"&listMode=createTime")
            let  result = data.json()
            result.then(res=>{
               // console.log(res)
                dispatch(addSonList(res.data.activity))
            })

        }
    },
    acSonson(con){//  addlistOne ==精彩活动-3级页
        return async (dispatch)=>{
                 const data = await axios.get("/api/dish/get?_t=1564987166103&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1MzkzMjU5NiwiaWF0IjoxNTY0NTQzNzk2fQ.LX3DofGWSer3iUak_42AsPu61jebz3DQQOAGgFJPaLE&contentId="+con)
                //console.log(data.data.data)
                 dispatch(acSonson(data.data.datadish))
           }

    },
    //////////////////////  addlistOne ==勋章////////////////////////////////
    Medal(){// addlistOne ==Medal 勋章3
             return async (dispatch)=>{
                    const  data =await axios.get("/Medal/guoguo")
                     console.log(data)
             }

    }








}