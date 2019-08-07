import React, {Component} from 'react';
import "@asset/css/learnBaking/university.scss"
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
class School extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log(this.props.floorList.data)
        return (
            <div className={"university"}>
                <div className="image-header">
                    <img src={this.props.dishList.coverImage} alt=""/>
                </div>
                <div className="user">
                    <img src={this.props.dishList.clientImage} alt=""/>
                    <div className={"title"}>{this.props.dishList.clientName}</div>
                    <div style={{width: "150px", height: "1px", background: "#F1F1F1", margin: "10px 0"}}></div>
                    <div className={"describe"}>{this.props.dishList.coverSummary}</div>
                    <div className={"blank"}></div>
                </div>
                <div className={"number"}>
                    <div className="liu">
                        <span>留言</span>
                        <span>{this.props.floorList.count}</span>
                    </div>
                    <div className="blank"></div>
                </div>
                {this.props.floorList.count?<ul className={"list"}>
                    {
                        this.props.floorList.data.map((item,index)=>(
                            <li className={"list-li"} key={index}>
                                <div className="list-user">
                                    <img src={item.clientImage} alt=""/>
                                    <div className={"list-name"}>
                                        <p>{item.clientName}</p>
                                        <span>{item.createTime}</span>
                                    </div>
                                </div>
                                <div className={"content"}>
                                    <p>{item.coverSummary}</p>
                                </div>

                            </li>
                        ))
                    }
                </ul>:null}
                <footer className={"fot"}>
                    <input type="text" className={"inp"}/>
                    <button>发送</button>
                </footer>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDish(this.props.match.params.contentId)
        this.props.getFloorList(this.props.match.params.contentId)
    }
}
export default withRouter(connect((state)=>({dishList: state.learnBaking.dishList,floorList:state.learnBaking.floorList}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(School));

