import React from 'react';
import '../../asset/css/loading.scss'
import img from '../../asset/img/loading.gif'
import more from "../../asset/img/more.gif";

export default class Loading extends React.Component {
    render() {
        return (
            <div
                style={{width: "100%", margin: "0 auto", background: "#fff", display: "flex", justifyContent: "center"}}
                ref={"wrapper"}>
                <img src={more} alt=""/>
            </div>
        )
    }
}
