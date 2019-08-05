import React, {Component} from 'react';
import "@asset/css/learnBaking/Newest.scss"
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import actionCreator from "@store/actionCreator";
import LoadingMore from "@component/common/loadingMore";
import BScroll from "better-scroll"

class Straight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            pageIndex: 0
        };
    }

    render() {
        return (
            <div ref={"stright"} className={"strigth"}>
                <div className="show_new">
                    {
                        this.props.studentList.map((item, index) => (
                            <div key={index} className="show-con">
                                <img width={"300px"} src={item.image[0]} alt="" className="image"/>
                                <div className="show-client">
                                    <img width={"100px"} src={item.clientImage} alt=""/>
                                    <i>{item.clientName}</i>
                                </div>
                                <p className={"introduce"}>{item.introduce}</p>
                                <p className={"likeNum"}>
                                    <img
                                        src="https://image.hongbeibang.com/FmPQ7b3HImdEi-6BexUS3NPiTfLp?38X38&imageView2/1/w/38/h/38|imageView2/1/w/38/h/38"
                                        alt=""/>
                                    <i>{item.likeNum}</i>
                                </p>
                            </div>
                        ))
                    }
                    <LoadingMore handleList={"getStudent"}></LoadingMore>
                </div>
            </div>
        )
    }

    componentDidMount() {
        if(this.props.studentList.length===0){
            this.props.getStudent()
        }
    }
}

export default connect((state) => ({
    studentList: state.learnBaking.studentList,
    introduces: state.learnBaking.introduces
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(Straight);