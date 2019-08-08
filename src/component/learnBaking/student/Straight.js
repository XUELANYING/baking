import React, {Component,Fragment} from 'react';
import "@asset/css/learnBaking/Newest.scss"
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import actionCreator from "@store/actionCreator";
import LoadingMore from "@component/common/loadingMore";
import BScroll from "better-scroll"
import {withRouter} from "react-router-dom"

class Straight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            pageIndex: 0,
            contentId:0
        };
    }

    render() {

        return (
            <Fragment>
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
            </Fragment>
        )
    }

    componentDidMount() {
        console.log(12345,this.props.match.params.contentId)
        if(this.props.studentList.length===0){
            this.props.getStudent({pageIndex:0,contentId:this.props.match.params.contentId})
        }
    }
}

export default withRouter(connect((state) => ({
    studentList: state.learnBaking.studentList,
    introduces: state.learnBaking.introduces
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(Straight));