import Activity from "@component/Me/addlistOne/activity"
import Curriculum from "@component/Me/addlistOne/curriculum"
import Medal from "@component/Me/addlistOne/medal"
import Sign from "@component/Me/addlistOne/sign"
import addlistOneSon from "./addlistOneSon"
import Tailoring from "../../../component/Me/Me_SetUP/Tailoring";

export default [
    {// 作品
        to:"/me/activity",
        path:'/me/activity',
        context:"精彩活动",
        display:true,
        exact:true,
        displaySon:false,
        img:"https://image.hongbeibang.com/FjqJkpwIsLMWXY0LsNTSRG853oJR?48X48&imageView2/1/w/48/h/48",
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        component:Activity,
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },
    {//食谱
        to:"/me/curriculum",
        path:'/me/curriculum',
        context:"我的课程",
        component:Curriculum,
        exact:true,
        display:true,
        displaySon:false,
        img:"https://image.hongbeibang.com/FnuWoFzlqjbUFcZHkVG64M-cKA_N?48X48&imageView2/1/w/48/h/48",
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },
    {//问答
        to:"/me/medal",
        path:"/me/Medal",
        context:"勋章",
        component:Medal,
        exact:true,
        display:true,
        displaySon:false,
        img:"https://image.hongbeibang.com/FpFAELJdsHHxStgBnhPdgYgGmAYo?48X48&imageView2/1/w/48/h/48",
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },
    {//收藏
        to:"/me/sign",
        path:'/me/sign',
        context:"每日签到",
        component:Sign,
        exact:true,
        display:true,
        displaySon:false,
        img:'https://image.hongbeibang.com/Fu1OwEAsExJ20OHVI2ZqBEtLtubY?48X48&imageView2/1/w/48/h/48',
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:false
        },
    },
    {// 作品
        to:"/me/setUP/tail",
        path:'/me/setUP/tail',
        context:"",
        exact:true,
        display:true,
        displaySon:true,
        component:Tailoring,
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },
    ...addlistOneSon
 ]

