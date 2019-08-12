import initState from '../../state/learnBaking'
import actionType from '../../actionType/learnBaking'

export default function(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))


    if (type === actionType.GET_RECOMMENDLIST) {                          //推荐列表
        state.recommendList = [...state.recommendList, ...payload];
    } else if (type === actionType.GET_KINDLIST) {                        //首页列表
        state.kindList = payload;
    } else if (type === actionType.GET_BAIKELIST) {                      //技巧百科
        state.baikeList = [...state.baikeList, ...payload];
    } else if (type === actionType.GET_SWIPERLIST) {
        state.swiperList = [...state.swiperList, ...payload];         //轮播图
    } else if (type === actionType.GET_LESSONLIST) {
        state.lessonLists = {...state.lessonLists, ...payload};         //新手教程
    } else if (type === actionType.GET_VARIOUSLIST) {
        state.variousList = [...payload];                              //视频分页列表
    }else if(type === actionType.GET_MORE_LIST){                      //查看更多
        state.moreList = [ ...payload]
    }else if (type === actionType.GET_CATALOGLIST) {
        state.catalogList = [ ...payload];                                       //课程目录
    } else if (type === actionType.GET_TASKLIST) {
        state.taskLisk = [ ...payload];                                           //学员作业
    }else if (type === actionType.UP_LESSON) {
        state.lessonList = { ...payload};
        state.lessonList =  payload;
    }else if (type === actionType.UP_STUDENT) {
        state.studentList = [...state.studentList, ...payload];
    }else if (type === actionType.UP_NEWEST) {
        state.newestList = [...state.newestList, ...payload];
    }else if (type === actionType.UP_DISH) {
        state.dishList = {...state.dishList, ...payload};
        state.dishList = payload;
    }else if (type === actionType.UP_FLOOR) {
        state.floorList = payload;
    }else if (type === actionType.UP_HOMEWORK) {
        state.homeworkList = payload;
    }else if (type === actionType.UP_CUURR) {
        state.curriculumList = [...state.curriculumList, ...payload];
    }else if(type ===  actionType.UP_CART){
        state.carList=payload;
    }else if (type === actionType.GET_USERINFO) {            //登录
        state.userInfo = { ...payload};
    }else if(type===actionType.CHANGE_ISFETCHING){
        state.isFetching = payload
        console.log(state.isFetching)
    }
    return state;
}


