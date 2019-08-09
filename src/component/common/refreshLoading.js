/*
import React from 'react';
import '../../asset/css/loading.scss'
import img from '../../asset/img/loading.gif'

export default class Loading extends React.Component {
    render() {
        return (
            <div className={"loading"} style={{height:"100%",width:"100%"}}>
                <img className={'loading-img'} src={img} alt=""/>
            </div>
        )
    }
}
*/
import React from "react"
import loadingImg from '../../asset/img/imgLoding.gif'

class Loading extends React.Component {
    render() {
        let displayStyle = this.props.show === true ?
            {display:""} : {display:"none"};
        return (
            <div className="loading-container" style={displayStyle}>
                <div className="loading-wrapper">
                    <img src={loadingImg} style={{width: "100%", margin: "0 auto", background: "#fff", display: "flex", justifyContent: "center"}}/>
                    <div className="loading-title">{this.props.title}</div>
                </div>
            </div>
        );
    }
}

export default Loading
