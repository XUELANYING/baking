import axios from 'axios'
import actionType from '../../actionType/learnBaking'
import {fetch as fetchfill} from "whatwg-fetch";
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
export default {
    getLesson(contentId){
        return(dispatch)=>{
            let url = "/api/education/getCourse?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&educationCourseId="+contentId+""
            fetchfill(url)
                .then(res => res.json())
                .then(data=>{
                    console.log(data.data)
                    dispatch(upLesson(data.data))
                })
        }
    },
    getStudent({pageIndex,contentId}){
        console.log(pageIndex,contentId)
        return (dispatch)=>{
            let url = "/api/dish/getOutstandingCourseContent?_t="+Date.now()+"&csrfToken="+localStorage.csrfToken+"&pageIndex="+pageIndex+"&pageSize=10&educationCourseId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    console.log(1234,data.data.content.data)
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
                    console.log(222,data.data.content.data)
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
                    console.log(333,data.data.dish)
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
                    console.log(444,data.data)
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
                    console.log(555,data.data.content.data)
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
                    console.log(666,data)
                    dispatch(upCurr(data.data.data))
                })
        }
    },
}

