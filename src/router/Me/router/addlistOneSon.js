import  AddlistOSon from  "@component/Me/addlistOSon/acSon"
import  AddSonson from  "@component/Me/addlistOSon/acSonSon"

export default [
    {// 作品
        to:"/me/activity/addlistOSon/:id",
        path:'/me/activity/addlistOSon/:id',
        context:"",
        display:true,
        displaySon:true,
        exact:true,
        component:AddlistOSon,
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },
    {// 作品
        to:"/me/activity/addSonson/:id",
        path:'/me/activity/addSonson/:id',
        context:"",
        exact:true,
        display:true,
        displaySon:true,
        component:AddSonson,
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },




]