import React from "react";
import {
    Route,
    withRouter,
    Link
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import test from "../../../store/actionCreator/Me";
import "@asset/css/nest/Me/convert.scss"

class Convert extends React.Component{
    render(){
        return (
            <div className={"convert"}>
                <div className={"convert_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p className={"signTime"}>烘焙帮</p>
                </div>
                {
                    this.props.convert.map((v,i)=>{
                        return(
                            <div key={i}>
                                <h1></h1>
                                <div dangerouslySetInnerHTML={{__html:v.content}}></div>
                            </div>
                        )
                    })


                }

            </div>
        )

    }
    componentDidMount(){
        this.props.Convert()

    }
}
export default  connect((state)=>{ return{convert:state.Me.convert}},(dispatch)=>bindActionCreators(test,dispatch))(withRouter(Convert))