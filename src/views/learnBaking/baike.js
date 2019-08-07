import React from 'react';
import "../../asset/css/learnBaking/baike.scss";
import BaikeList from "../../component/learnBaking/baikeList";
import {Link}from "react-router-dom";

export default class Baike extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ""
        }
    }
    render() {
        return (
            <div>
                <div className={"header"}>
                    <Link to={"/"}>
                        <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                    </Link>

                </div>
                <BaikeList></BaikeList>
                <footer>
                    <img src="https://image.hongbeibang.com/FqrNwXey8HDGxtROft8FVPUMPEwE" alt=""/>
                </footer>
            </div>

        )
    }
    componentDidMount(){

    }

}
