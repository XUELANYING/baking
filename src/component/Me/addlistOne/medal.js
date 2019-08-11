import React from "react";
import {
    Route,
    Link,
    Switch,
    withRouter,
    BrowserRouter as Router,
    NavLink,
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import "@asset/css/nest/Me/medal.scss"
import test from "../../../store/actionCreator/Me";
//addlistOne=== Medal组件
 class Medal extends React.Component{

    render(){
        return (
            <div>
                <div className={"medal_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p>勋章</p>
                </div>
                <div className={"medal_center"}>
                    <img src="https://image.hongbeibang.com/FsMQ8zX03K3u2cNUmIT5UZKdsMxb?400X400&imageView2/1/w/350/h/350" alt=""/>
                    <h2>快去签到领取勋章吧</h2>
                </div>

            </div>
        )

    }
     componentDidMount(){
     }
}
export default connect((state)=>({medal:state.Me.medal}),(dispatch)=>bindActionCreators(test,dispatch))(withRouter(Medal))
