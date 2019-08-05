import React from "react";
import {
    Route,
    withRouter
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import test from "../../../store/actionCreator/Me";
class AcSonson extends React.Component{
    render(){
        return (
            <div>
                我是儿子
                {
                    this.props.sondoubleSon.map((v,i)=>{
                          return (
                              <div key={i}>
                                  <img src={v.coverImage} alt=""/>
                              </div>
                          )
                    })
            }
            </div>
        )

    }
    componentDidMount(){
        console.log(this.props.match.params.id/1)
        const   con =  this.props.match.params.id/1
        this.props.acSonson(con)
    }
}
export default  connect((state)=>{ return{sondoubleSon:state.Me.sondoubleSon}},(dispatch)=>bindActionCreators(test,dispatch))(withRouter(AcSonson))