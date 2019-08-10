import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload'
import actionCreator from "../../store/actionCreator";
import {Link}from "react-router-dom";

class BaikeList extends React.Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div className={"ba-wrap"}>
                {
                    this.props.baikeList.map((v,i)=>(
                        <section key={i} id={"baike"}>
                            <Link to={"/newbie/video?contentId="+v.courseId}>
                                <dl>
                                    <dt style={{position:"relative"}}>
                                        <LazyLoad style={{background: "#ccc"}} width={"160px"}
                                                  placeholder={<div className={"loadingBox"}><img
                                                      src={this.imgLoading}/></div>}>
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
