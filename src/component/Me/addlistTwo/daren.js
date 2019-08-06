import React from "react";
import {
    Route,
    withRouter,
    Link
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import test from "../../../store/actionCreator/Me";
import "@asset/css/nest/Me/daren.scss"

class Daren extends React.Component{
    render(){
        return (
            <div className={"daren"}>
                <div className={"daren_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p className={"signTime"}>烘焙帮</p>
                </div>
                 <h1>成为达人就是开心就好 😊😊😊😊😊😊😊😊</h1>
            </div>
        )

    }
    componentDidMount(){
      //this.props.Daren()

    }
}
export default  connect((state)=>{ return{convert:state.Me.convert}},(dispatch)=>bindActionCreators(test,dispatch))(withRouter(Daren ))