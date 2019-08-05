import React, {Component,Fragment} from 'react';
import "@asset/css/learnBaking/lesson.scss";
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
class PlayUrl extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Fragment>
                <div className={"vido"}>
                    <video poster={this.props.lessonList.image} controls={"controls"}>
                        <source src={this.props.lessonList.playURL} type={"video/mp4"} data-reactid=".qved0w02k0.1.0.2.0.0"></source>
                    </video>
                </div>
            </Fragment>
        )
    }
}
export default withRouter(connect((state)=>({lessonList: state.learnBaking.lessonList}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(PlayUrl)) ;