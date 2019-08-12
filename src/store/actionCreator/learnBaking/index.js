import axios from 'axios'
import actionType from '../../actionType/learnBaking'
import {fetch as fetchfill} from "whatwg-fetch";
//首页推荐列表
const recommendList=(payload)=>{
    return{
        type:actionType.GET_RECOMMENDLIST,
        payload
    }
};
//首页分类列表
const kindList=(payload)=>{
    return{
        type:actionType.GET_KINDLIST,
        payload
    }
};
//技巧百科
const baikeList = (payload)=>{
    return{
        type:actionType.GET_BAIKELIST,
        payload
    }
};
//轮播图
const swiperList = (payload)=>{
    return{
        type:actionType.GET_SWIPERLIST,
        payload
    }
};
//新手教程
const lessonLists = (payload)=>{
    return{
        type:actionType.GET_LESSONLIST,
        payload
    }
};
//视频学堂页分类列表
const variousList = (payload) =>{
    return {
        type:actionType.GET_VARIOUSLIST,
        payload
    }
};
//查看更多
const moreList = (payload) =>{
    return {
        type:actionType.GET_MORE_LIST,
        payload
    }
};
// 课程目录
const catalogList = (payload) =>{
    return {
        type:actionType.GET_CATALOGLIST,
        payload
    }
};
//学员作业
const taskLisk = (payload) =>{
    return{
        type:actionType.GET_TASKLIST,
        payload
    }
};
//登录
const userInfo = (payload) =>{
    return{
        type:actionType.GET_USERINFO,
        payload
    }
};
const upLesson = function (payload) {
    return{
        type:actionType.UP_LESSON,
        payload
    }
}
const upStudent = function (payload) {
    return{
        type:actionType.UP_STUDENT,
        payload
    }
}
const upNewest = function (payload) {
    return{
        type:actionType.UP_NEWEST,
        payload
    }
}
const upDish = function (payload) {
    return{
        type:actionType.UP_DISH,
        payload
    }
}
const upFloor = function (payload) {
    return{
        type:actionType.UP_FLOOR,
        payload
    }
}
const upHomeWork = function (payload) {
    return{
        type:actionType.UP_HOMEWORK,
        payload
    }
}
const upCurr = function (payload) {
    return{
        type:actionType.UP_CUURR,
        payload
    }
}

const upCart = function (payload) {
    return{
        type:actionType.UP_CART,
        payload
    }
}



export default {
    //首页推荐列表
    getRecommendList(){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/recommend/getRandContent?_t=1564757240452&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc4ODk1OCwiaWF0IjoxNTY0NDAwMTU4fQ.KbJocxLZoaTbGHYs6JKbGx3MVXSfN6gZgp9Sgd1D2fs&type=3&pageSize=10')
            dispatch(recommendList(data.data.data));
        }
    },
    //首页分类列表
    getKindList(id){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/education/getIndex?_t=1565015693131&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc4ODk1OCwiaWF0IjoxNTY0NDAwMTU4fQ.KbJocxLZoaTbGHYs6JKbGx3MVXSfN6gZgp9Sgd1D2fs')
            dispatch(kindList(data.data.category));
        }
    },
    //技巧百科
    getBaikeList(){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/education/getNewbieGuide?type=5&_t=1564813836836&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc4ODk1OCwiaWF0IjoxNTY0NDAwMTU4fQ.KbJocxLZoaTbGHYs6JKbGx3MVXSfN6gZgp9Sgd1D2fs')
            dispatch(baikeList(data.data.courseGuide));
        }
    },
//轮播图
    getSwiperList(){
        return async (dispatch)=>{
            let {data} = await axios.get('/api/index/getIndexItem?_t=1565516544274&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&categoryId=10163')
            dispatch(swiperList(data.data));
        }
    },
    //新手教程
    getLessonList(){
        return async (dispatch)=>{
            let {data} = await axios.get("/api/education/getCourse?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&educationCourseId=10377");
            dispatch(lessonLists(data.data));
        }
    },
    //视频学堂页分类列表
    getVariousList(categoryId){
        return async (dispatch)=>{
            let {data} = await axios.get("/api/index/getIndexItem?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&categoryId="+categoryId);
            dispatch(variousList(data.data));
        }
    },
    // 查看更多
    getMoreList(categoryId){
        return async (dispatch)=>{
            let {data} = await axios.get("/api/index/getIndexItem?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10&categoryId="+categoryId);
            dispatch(moreList(data.data));
        }
    },
    // 课程目录
    getCatalogList(){
        return async (dispatch)=>{
            let {data} = await axios.get("/api/education/getSeriesCourse?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10&educationCourseId=10377");
            dispatch(catalogList(data.data.data));
        }
    },
    //学员作业
    getTaskList(){
        return async (dispatch)=>{
            let {data} = await axios.get("/api/dish/getOutstandingCourseContent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10&educationCourseId=10377")
            dispatch(taskLisk(data.data.content.data));
        }
    },
    //登录
    getUserInfo(){
        return async (dispatch)=>{
            let {data} = await axios.get("/login")
            dispatch(userInfo(data));

        }
    },


    getLesson(contentId){
        return(dispatch)=>{
            let url = "/api/education/getCourse?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&educationCourseId="+contentId+""
            fetchfill(url)
                .then(res => res.json())
                .then(data=>{
                    dispatch(upLesson(data.data))
                })
        }
    },
    getStudent({pageIndex,contentId}){
        return (dispatch)=>{
            let url = "/api/dish/getOutstandingCourseContent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex="+pageIndex+"&pageSize=10&educationCourseId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    dispatch(upStudent(data.data.content.data))
                })
        }
    },
    getNewest({pageIndex,contentId,}){
        return (dispatch)=>{
            let url = "/api/dish/getCourseContent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex="+pageIndex+"&pageSize=10&educationCourseId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    dispatch(upNewest(data.data.content.data))
                })
        }
    },
    getDish(contentId){
        return (dispatch)=>{
            let url = "/api/dish/getSingleCourseContent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&contentId="+contentId+"&educationCourseId=10481";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    dispatch(upDish(data.data.dish))
                })
        }
    },
    getFloorList(contentId){
        return (dispatch)=>{
            let url = "/api/comment/getFloor?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10&contentId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    dispatch(upFloor(data.data))
                })
        }
    },
    getHomeWork(contentId){
        return (dispatch)=>{
            let url = "/api/dish/getOutstandingCourseContent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex=0&pageSize=10&educationCourseId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    dispatch(upHomeWork(data.data.content.data))
                })
        }
    },
    getCurr({pageIndex,contentId,clientId}){
        return (dispatch)=>{
            let url = "/api/course/getClientOtherCourse?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex="+pageIndex+"&pageSize=10&clientId="+clientId+"&educationCourseId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(666,data)
                    dispatch(upCurr(data.data.data))
                })
        }
    },

    getCart(contentId){
        return (dispatch)=>{
            let url = "/api/education/getCourse?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&educationCourseId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {

                    dispatch(upCart(data.data))
                })
        }
    },

}

