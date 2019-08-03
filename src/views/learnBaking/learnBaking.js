import React from 'react';
import {Link,Route,Switch,NavLink} from 'react-router-dom';
import router from "../../router";
import '../../asset/css/learnBaking/index.scss'


import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ShowList from "../../component/learnBaking/showList"
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
              
                <Switch>
                    {
                    //     this.props.children.map((v,i)=>(
                    //         <Route key={i} path={v.to} {...v}/>
                    //     ))
                    }
                </Switch>
                {
                    // this.props.children.map((v,i)=>(
                    //     <Link key={i} to={v.to}>{v.name}</Link>
                    // ))
                }
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
            </div>
        )
    }
    componentDidMount(){
        console.log(777,router.routers)
    }
}
