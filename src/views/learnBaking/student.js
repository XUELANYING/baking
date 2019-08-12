import React, {Component} from 'react';
import "@asset/css/learnBaking/student.scss"
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Loadable from "@common/height/loadable";
import {withRouter} from "react-router-dom";
const Straight = Loadable(()=> import('@component/learnBaking/student/Straight'));
const Newest = Loadable(()=> import('@component/learnBaking/student/Newest'));
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1
        };
    }

    render() {
        return (
            <div className={"studentCon"}>
                <header>
                    <span onClick={()=>this.props.history.go(-1)}>
                        <img
                            src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48|imageView2/1/w/48/h/48"
                            alt=""/>
                    </span>
                    <div className={"Straight"}>
                        <div className={"Straight-l"} onTouchEnd={this.handOncok.bind(this)}><p
                            className={this.state.type === 1 ? "Straight_action" : null}>学霸帮</p></div>
                        <div className={"Straight-r"} onTouchEnd={this.handOnock.bind(this)}><p
                            className={this.state.type === 2 ? "Straight_action" : null}>最新</p></div>
                    </div>
                </header>
                <div className={"show"}>
                    {
                        this.state.type === 1 ? <Straight/> : <Newest/>
                    }

                </div>
            </div>
        )
    }

    handOncok() {
        this.setState({
            type: 1
        })
    }

    handOnock() {
        this.setState({
            type: 2
        })
    }

    // componentDidMount() {
    //     this.props.getStudent()
    // }
}

export default withRouter(connect((state) => ({
    studentList: state.learnBaking.studentList,
    introduces: state.learnBaking.introduces
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(Student));