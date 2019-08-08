import React,{Fragment} from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import router from "../../router";
import '../../asset/css/learnBaking/index.scss'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
import ShowList from "../../component/learnBaking/showList"
import KindList from "../../component/learnBaking/kindList"
class LearnBarking extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }
    render() {
        return (
            <Fragment>
                <nav>
                    <div className="search"></div>
                    <div className={"l-w"}>
                        {
                            router.routers.map((v,i)=>(
                                v.meta.isAppear?<NavLink  className={"l-bar"} key={i} to={v.to}>
                                    <img src={v.meta.unActive} alt=""/>
                                    <h3>{v.name}</h3>
                                </NavLink>:null

                            ))
                        }
                    </div>

                </nav>
                <ShowList></ShowList>
                <KindList ></KindList>
            </Fragment>
        )
    }
}

export default withRouter(LearnBarking)




