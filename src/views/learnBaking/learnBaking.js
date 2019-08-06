import React from 'react';
import {NavLink} from 'react-router-dom';
import router from "../../router";
import '../../asset/css/learnBaking/index.scss'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
import ShowList from "../../component/learnBaking/showList"
import KindList from "../../component/learnBaking/kindList"
export default class LearnBarking extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div>
                <nav>
                    {
                        router.routers.map((v,i)=>(
                            v.meta.isAppear?<NavLink className={"bar"} key={i} to={v.to}>
                                <img src={v.meta.unActive} alt=""/>
                                <h3>{v.name}</h3>
                            </NavLink>:null
                        ))

                    }
                </nav>
                <ShowList></ShowList>
                <KindList ></KindList>


                <br/>
                <br/><br/>
                <br/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(777,router.routers)
    }
}
