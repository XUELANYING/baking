import React,{Fragment} from "react";
import {
    Route,
    withRouter
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import test from "@store/actionCreator/Me";
//addlistOne=== Medal组件
class SignAddlist extends React.Component{

    render(){
        return (
            <Fragment>
                <div  className={"SignSonList"}>
                    {
                        this.props.signaddlist.map((v,i)=>{
                            return(
                                <div key={i} className={"SignAddlistSon"}>
                                    <img src={v.clientImage} alt=""/>
                                    <p>{v.clientName}</p>
                                    <h6>{
                                      v.description.substring(7,16)
                                    }</h6>
                                </div>
                            )
                        })
                    }
                </div>

            </Fragment>
        )

    }
    componentDidMount(){
        this.props.signAddlist()
    }
}
export default connect((state)=>({signaddlist:state.Me.signAddlist}),(dispatch)=>bindActionCreators(test,dispatch))(withRouter(SignAddlist))