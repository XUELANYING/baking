import React from "react";
import {
    Route
} from "react-router-dom"
import "@asset/css/nest/Me/store.scss"
export default class Store extends React.Component{
    render(){
        return (
            <div className={"store"}>
                <img src="https://image.hongbeibang.com/Ftp-GZBuuHRca-YD2tX08-4riaCi?400X400&imageView2/1/w/350/h/350" alt=""/>
                 <h3>听说您还没有收藏任何东西</h3>
            </div>
        )

    }
}
