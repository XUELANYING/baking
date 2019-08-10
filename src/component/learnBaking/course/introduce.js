import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../../store/actionCreator";
import "../../../asset/css/learnBaking/lessonSeries.scss"

class Introduce extends React.Component {
    render() {
        // console.log(111,this.props.lessonLists.introduces)
        return (
            <div className={"l-course"}>
                {
                    this.props.lessonLists.introduces?this.props.lessonLists.introduces.map((v,i)=>(
                        <div key={i} className={"words"}>
                            <h2>{v.title}</h2>
                            <p dangerouslySetInnerHTML = {{ __html:v.introduce }}></p>
                        </div>
                    )):null
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getLessonList();
    }
}
export default connect((state) => ({lessonLists: state.learnBaking.lessonLists}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Introduce)