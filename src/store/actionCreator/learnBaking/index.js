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
    getLesson(contentId=10481){
        return(dispatch)=>{
            let url = "/api/education/getCourse?_t=1564628182665&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&educationCourseId="+contentId+""
            fetchfill(url)
                .then(res => res.json())
                .then(data=>{
                    console.log(data.data)
                    dispatch(upLesson(data.data))
                })
        }
    },
    getStudent(pageIndex=0){
        return (dispatch)=>{
            let url = "/api/dish/getOutstandingCourseContent?_t=1564486861750&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&pageIndex="+pageIndex+"&pageSize=10&educationCourseId=10481";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    console.log(data.data.content.data)
                    dispatch(upStudent(data.data.content.data))
                })
        }
    },
    getNewest(pageIndex=0){
        return (dispatch)=>{
            let url = "/api/dish/getCourseContent?_t=1564665986001&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&pageIndex="+pageIndex+"&pageSize=10&educationCourseId=10481";
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
            let url = "/api/dish/getSingleCourseContent?_t=1564726101051&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&contentId="+contentId+"&educationCourseId=10481";
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
            let url = "/api/comment/getFloor?_t=1564727602690&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&pageIndex=0&pageSize=10&contentId="+contentId+"";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    console.log(444,data.data)
                    dispatch(upFloor(data.data))
                })
        }
    },
    getHomeWork(){
        return (dispatch)=>{
            let url = "/api/dish/getOutstandingCourseContent?_t=1564748723055&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&pageIndex=0&pageSize=10&educationCourseId=10481";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    console.log(555,data.data.content.data)
                    dispatch(upHomeWork(data.data.content.data))
                })
        }
    },
    getCurr(){
        return (dispatch)=>{
            let url = "/api/course/getClientOtherCourse?_t=1564748722824&csrfToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzg3NDUyNiwiaWF0IjoxNTY0NDg1NzI2fQ.2zlFlPe3c5RBI9gX4Vx4s_Sjn_C_sqydVbRDjiL7Tn0&pageIndex=0&pageSize=10&clientId=2245326&educationCourseId=10481";
            fetchfill(url)
                .then(res => res.json())
                .then(data => {
                    console.log(666,data.data.data)
                    dispatch(upCurr(data.data.data))
                })
        }
    }

}
