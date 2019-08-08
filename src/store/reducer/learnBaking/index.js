import initState from '../../state/learnBaking'
import actionType from '../../actionType/learnBaking'

export default function(state=initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state))
    switch (type) {
        case actionType.UP_LESSON:
            state.lessonList =payload;
            break;
        case actionType.UP_STUDENT:
            state.studentList = [...state.studentList,...payload]
            break;
        case actionType.UP_NEWEST:
            state.newestList = [...state.newestList,...payload]
            break;
        case actionType.UP_DISH:
            state.dishList = payload;
            break;
        case actionType.UP_FLOOR:
            state.floorList = payload;
            break;
        case actionType.UP_HOMEWORK:
            state.homeworkList = payload;
            break;
        case actionType.UP_CUURR:
            state.curriculumList = [...state.curriculumList,...payload]
            break;
        case actionType.UP_CART:
            state.carList=payload;
    }
    return state;
}
