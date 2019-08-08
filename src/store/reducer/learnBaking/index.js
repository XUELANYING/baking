import initState from '../../state/learnBaking'
import actionType from '../../actionType/learnBaking'

export default function(state=initState,{type,payload}) {
    state = JSON.parse(JSON.stringify(state))
    // console.log("jing111111",payload);
    if (type === actionType.GET_RECOMMENDLIST) {                          //推荐列表
        state.recommendList = [...state.recommendList, ...payload];
        // console.log("jing22222", state.recommendList);
    } else if (type === actionType.GET_KINDLIST) {                        //首页列表
        state.kindList = payload;
        console.log(1996, payload)
        // console.log("根据类别", state.recommendList);
    } else if (type === actionType.GET_BAIKELIST) {                      //技巧百科
        state.baikeList = [...state.baikeList, ...payload];
    } else if (type === actionType.GET_SWIPERLIST) {
        state.swiperList = [...state.swiperList, ...payload];         //轮播图
        // console.log("轮播图",state.swiperList)
    } else if (type === actionType.GET_LESSONLIST) {
        state.lessonLists = {...state.lessonLists, ...payload};         //新手教程
        // console.log("新手",state.lessonLists)
    } else if (type === actionType.GET_VARIOUSLIST) {
        state.variousList = [...payload];                              //视频分页列表
        // console.log("variousList", state.variousList)
    } else if (type === actionType.GET_CATALOGLIST) {
        state.catalogList = [ ...payload];                                       //课程目录
        // console.log("catalogList", state.catalogList)
    } else if (type === actionType.GET_TASKLIST) {
        state.taskLisk = [ ...payload];                                           //学员作业

    }else if (type === actionType.UP_LESSON) {
        state.lessonList = { ...payload};

    }else if (type === actionType.UP_STUDENT) {
        state.studentList = [...state.studentList, ...payload];

    }else if (type === actionType.UP_NEWEST) {
        state.newestList = [...state.newestList, ...payload];

    }else if (type === actionType.UP_DISH) {
        state.dishList = {...state.dishList, ...payload};

    }else if (type === actionType.UP_FLOOR) {
        state.floorList = [...state.floorList, ...payload];

    }else if (type === actionType.UP_HOMEWORK) {
        state.homeworkList = [ ...payload];

    }else if (type === actionType.UP_CUURR) {
        state.curriculumList = [...state.curriculumList, ...payload];

    }else if (type === actionType.GET_USERINFO) {            //登录
        state.userInfo = { ...payload};
       console.log("user",state.userInfo)
    }
    return state;
}


