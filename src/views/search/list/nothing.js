import React from "react";
import "../../../asset/css/search/noSearchRes.scss"

export default class NothingInfo extends React.Component{
    render(){
        return(
            <div className={"NothingWrap"}>
                <div className="nothingInfo">
                    <div className="nothingImg">
                        <img src="https://image.hongbeibang.com/FsMQ8zX03K3u2cNUmIT5UZKdsMxb?400X400&imageView2/1/w/350/h/350" alt=""/>
                    </div>
                    <p>要不试一下别的关键词？</p>
                </div>
            </div>
        )
    }
}