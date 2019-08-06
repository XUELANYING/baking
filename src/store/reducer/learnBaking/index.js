import initState from '../../state/learnBaking'
import actionType from '../../actionType/learnBaking'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    // console.log("jing111111",payload);
    if(type===actionType.GET_RECOMMENDLIST){                          //推荐列表
        state.recommendList = [...state.recommendList,...payload];
        // console.log("jing22222", state.recommendList);
    }else if(type===actionType.GET_KINDLIST){                        //首页列表
        state.kindList = payload;
        console.log(1996,payload)
        // console.log("根据类别", state.recommendList);
    }else if (type===actionType.GET_BAIKELIST){                      //技巧百科
        state.baikeList = [...state.baikeList,...payload];
    }else if(type===actionType.GET_SWIPERLIST){
        state.swiperList = [...state.swiperList,...payload];         //轮播图
        // console.log("轮播图",state.swiperList)
    }else if(type===actionType.GET_LESSONLIST){
        state.lessonList = {...state.lessonList,...payload};         //新手教程
        // console.log("新手",state.lessonList)
    }else if(type===actionType.GET_VARIOUSLIST){
        state.variousList = [...payload];        //视频分页列表
        console.log("variousList",state.variousList)
    }
    return state;
}
