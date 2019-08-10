import React, {Component,Fragment} from 'react';
import "@asset/css/learnBaking/Newest.scss"
import {bindActionCreators} from "redux";
import {connect} from "react-redux"
import actionCreator from "@store/actionCreator";
import LoadingMore from "@component/common/loadingMore";
import {withRouter} from "react-router-dom"
import LazyLoad from 'react-lazyload';
class Newest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newestList:[],
            pageIndex: 0
        };
    }

    render() {
        return (
            <Fragment>
                <div className="show_new">
                    {
                        this.props.newestList.map((item,index)=>(
                            <div key={index} className="show-con">
                                <LazyLoad once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                    <img width={"300px"} src={item.image[0]} alt="" className="image"/>
                                </LazyLoad>
                                <div className="show-client">
                                    <img width={"100px"} src={item.clientImage} alt=""/>
                                    <i>{item.clientName}</i>
                                </div>
                                <p className={"introduce"}>{item.introduce}</p>
                                <p className={"likeNum"}>
                                    <img src="https://image.hongbeibang.com/FmPQ7b3HImdEi-6BexUS3NPiTfLp?38X38&imageView2/1/w/38/h/38|imageView2/1/w/38/h/38" alt=""/>
                                    <i>{item.likeNum}</i>
                                </p>
                            </div>
                        ))
                    }
                    <LoadingMore handleList={"getNewest"}></LoadingMore>

                </div>
            </Fragment>
        )
    }
    componentDidMount(){
        if(this.props.newestList.length===0){
            this.props.getNewest({pageIndex:0,contentId:this.props.match.params.contentId})
        }
    }
}
export default withRouter(connect((state)=>({newestList: state.learnBaking.newestList,introduces:state.learnBaking.introduces}),(dispatch)=>bindActionCreators(actionCreator,dispatch))(Newest));