import React from "react";
import {
    Route
} from "react-router-dom"
import "@asset/css/nest/Me/index.scss"
 import Top from "@component/Me/top/index";
import MeSetUp from "@component/Me/Me_SetUP"
export default class Me extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div className={"Me"}>
                    <div  className={"MeSetUp"}>
                        <MeSetUp></MeSetUp>
                    </div>
                    {/*<div className={"Me_SetUp"}>*/}
                    {/*<img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" alt=""/>*/}
                    {/*</div>*/}
                    <Top link={this.props}></Top>
                </div>
            </div>
        )

    }
}