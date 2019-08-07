import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {NavLink,Link,Route}from "react-router-dom";
import actionCreator from "../../store/actionCreator";
import More from "./more";
import router from "../../router"
import "../../asset/css/learnBaking/showList.scss"

class KindList extends React.Component {
    constructor(){
        super();
        this.state={
            kindList:[]
        }
    }
    render(){
        return(
            <div>
                {
                    this.props.kindList.splice(1,this.props.kindList.length).map((v,i)=>(
                        <div id="list" key={i}>
                           <p>
                               <span>{v.title}</span>
                        <em>查看全部</em>
                           </p>
                            <div className={"sect"}>
                            {v.item.map((v1, i) => (
                                <Link  key={i} to={"/lesson?contentId="+v1.educationCourseId}>
                                    <dl>
                                        <dt>
                                            <img src={v1.image} alt=""/>
                                            <i>{v1.buyNum>1000?"1000+在学":v1.buyNum+"在学"}</i>
                                        </dt>
                                        <dd>{v1.shareTitle}</dd>
                                    </dl>
                                </Link>
                            ))
                            }
                            </div>
                        </div>
                    ))
                }
                </div>
        )
    }
    componentWillMount(){
        this.props.getKindList();
    }
    componentDidMount(){
        // this.props.getKindList();
        // console.log(this.props.id)
    }
    componentDidUpdate(){
        // this.props.getKindList();
      // console.log(this.props.kindList)
        }
}

export default connect((state) => ({kindList: state.learnBaking.kindList}),
    (dispatch) => (bindActionCreators(actionCreator,dispatch)))(KindList)