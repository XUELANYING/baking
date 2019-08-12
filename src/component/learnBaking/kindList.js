import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link,withRouter}from "react-router-dom";
import actionCreator from "../../store/actionCreator";
import "../../asset/css/learnBaking/showList.scss";
import LazyLoad from 'react-lazyload';

class KindList extends React.Component {
    constructor(){
        super();
        this.state={
            kindList:[]
        }
    }
    render(){
        return(
            <div className={"ka-b"}>
                {
                    this.props.kindList.splice(1,this.props.kindList.length).map((v,i)=>(
                        <div id="l-list" key={i}>
                           <p>
                               <span>{v.title}</span>
                                <em onClick={()=>{
                                    this.props.history.push("/university/allLessons/"+v.categoryId)
                                }}>查看全部</em>
                           </p>
                            <div className={"sect"}>
                            {v.item.map((v1, i) => (
                                <Link  key={i} to={"/lesson/"+v1.educationCourseId+"/"+v1.clientId}>
                                    <dl>
                                        <dt>
                                            <LazyLoad once height="70" placeholder={<div style={{position:"relative"}} className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                                <img src={v1.image} alt=""/>
                                            </LazyLoad>
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
    componentDidMount(){
        this.props.getKindList();
    }


}

export default connect((state) => ({kindList: state.learnBaking.kindList}),
    (dispatch) => (bindActionCreators(actionCreator,dispatch)))(withRouter(KindList))