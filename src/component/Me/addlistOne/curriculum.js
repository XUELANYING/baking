import React from "react";
import {
    Route
} from "react-router-dom"
import  con from "@asset/img/guoSon.png"
export default class Curriculum extends React.Component{
    render(){
        return (
            <div style={{width:"100%",height:"100%"}}>
                <img src={con} alt="" style={{width:"100%",height:"100%"}}/>
            </div>
        )

    }
}
