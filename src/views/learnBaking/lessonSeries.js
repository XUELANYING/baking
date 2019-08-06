import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
// import {Link}from "react-router-dom";
import "../../asset/css/learnBaking/lessonSeries.scss"

class LessonSeries extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className={"lesson"}>
                {
                    <div className={"lesson-wrap"}>
                        <img src={this.props.lessonList.image} alt=""/>
                        <div className={"biaoti"}>
                            <p >{this.props.lessonList.title}</p>
                            <div className={"study"}>
                                <img className={"icon"} src="https://image.hongbeibang.com/FgRQxfAWq4kOdLc5xd_GxWm03Vs_?54X54&imageView2/1/w/54/h/54" alt=""/>
                                {this.props.lessonList.buyNum>1000?"1000+人在学":this.props.lessonList.buyNum+"人在学"}
                            </div>
                        </div>
                        <ul className="adv">
                            <li><em></em><span >永久无限次回看</span></li>
                            <li><em></em><span>购买后即看</span></li>
                            <li><em></em><span>烘焙帮自营课程</span></li>
                            <li><em></em><span>高效的学习体验</span></li>
                            <li><em></em><span>分步骤学习</span></li>
                            <li><em></em><span>专注打造唯一品类</span></li>
                        </ul>

                    </div>


                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getLessonList();
        console.log(55,this.props.getLessonList);

    }
}
export default connect((state) => ({lessonList: state.learnBaking.lessonList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(LessonSeries)