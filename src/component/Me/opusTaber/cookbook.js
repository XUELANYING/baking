import React from "react";
import {
    Route
} from "react-router-dom"
import kk from "@asset/img/dg.jpg"
export default class CookBook extends React.Component{
    render(){
        return (
            <div style={{width:'100%',height:"100%"}}>
                <img src={kk} alt="" style={{width:'100%',height:"100%"}}/>
            </div>
        )

    }
}
