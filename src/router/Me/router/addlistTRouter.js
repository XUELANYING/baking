import Loadable from'../../../common/height/loadable'
const Record = Loadable(()=> import('@component/Me/addlistTwo/record'));
const Daren = Loadable(()=> import("@component/Me/addlistTwo/daren"));
const Convert = Loadable(()=> import("@component/Me/addlistTwo/convert"));

export default [
    {// 作品
        to:"/me/convert",
        path:'/me/convert',
        context:"兑换",
        display:true,
        exact:true,
        img:"https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48",
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        component:Convert,
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },

    {//问答
        to:"/me/record",
        path:"/me/record",
        context:"浏览记录",
        component:Record,
        exact:true,
        display:true,
        img:"https://image.hongbeibang.com/FloihK3c4UsgFSSuiI6ZNNFiYWHN?48X48&imageView2/1/w/48/h/48",
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isShow:false
        }
    },
    {//收藏
        to:"/me/daren",
        path:'/me/daren',
        context:"达人申请",
        component:Daren,
        exact:true,
        display:true,
        img:'https://image.hongbeibang.com/FrIG0d-LU4bOADQE1euyCOGWO7Ep?48X48&imageView2/1/w/48/h/48',
        imgs:"https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46",
        meta:{
            title:"标题",
            keywored:"关键字",
            descrieption:"描述",
            isFooter:false
        },
    }
]

