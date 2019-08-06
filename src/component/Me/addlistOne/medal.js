import React from "react";
import {
    Route
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import test from "../../../store/actionCreator/Me";
//addlistOne=== Medal组件
 class Medal extends React.Component{

    render(){
        return (
            <div>
                勋章
            </div>
        )

    }
     componentDidMount(){
     }
}
export default connect((state)=>({medal:state.Me.medal}),(dispatch)=>bindActionCreators(test,dispatch))(Medal)