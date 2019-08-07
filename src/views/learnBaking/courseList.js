import React, {Component,Fragment} from 'react';
import "../../asset/css/learnBaking/courseList.scss"
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import LoadingMore from "@component/common/loadingMore";
class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.curriculumList)
        return (
            <div>
                <div className="courseList">
                    <div className="course_con">
                        {
                            this.props.curriculumList.map((item,index)=>(
                                <div className="course_show" key={index}>
                                    <div className="course_img">
                                        <img src={item.image} alt=""/>
                                        <p><span>{item.buyNum>1000?"1000+":item.buyNum}</span><span>人参加</span></p>
                                    </div>
                                    <h3>{item.shareTitle}</h3>
                                </div>
                            ))
                        }
                        <LoadingMore handleList={"getCurr"}></LoadingMore>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getCurr({pageIndex:0,contentId:this.props.match.params.contentId,clientId:this.props.match.params.clientId})
    }
}
export default withRouter(connect((state) => ({
    curriculumList: state.learnBaking.curriculumList,
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(CourseList));