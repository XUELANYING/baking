import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import {Link}from "react-router-dom";
import LazyLoad from 'react-lazyload';
class BaikeList extends React.Component {
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className={"ba-wrap"}>
                {
                    this.props.baikeList.map((v,i)=>(
                        <section key={i} id={"baike"}>
                            <Link to={"/newbie/video?contentId="+v.courseId}>
                                <dl>
                                    <dt>
                                        <LazyLoad once height="70" placeholder={<div style={{position:"relative"}} className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                            <img src={v.image} alt="" />
                                        </LazyLoad>
                                    </dt>
                                    <dd className={"tit"}>{v.title}</dd>
                                </dl>
                            </Link>
                        </section>
                    ))
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getBaikeList();
    }
}
export default connect((state) => ({baikeList: state.learnBaking.baikeList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(BaikeList)