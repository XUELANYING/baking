import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LazyLoad from 'react-lazyload';
import '../../asset/css/questionAnswer/clientInfo.scss'
import actionCreator from "../../store/actionCreator";
import LoadingMore from "../common/loadingMore";

class UserRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div className={"userWork"}>
                {
                    this.props.recipe.map((v,i)=>(
                        <div key={i} className={"box-wrap"} onClick={()=>{
                            this.props.history.push('/recipe/'+v.clientId+'/'+v.contentId)
                        }}>
                            <div className={"box-top"}>
                                <div className={"box-top-img"}>
                                    <img src={v.clientImage} alt=""/>
                                </div>
                                <div className={"box-top-info"}>
                                    <div className={"info-top"}>

                                        {
                                            v.isMaster?<div className={"info-adt"}>
                                                <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" alt=""/>
                                            </div>:null
                                        }

                                        <div className={"info-name"}>{v.clientName}</div>
                                    </div>
                                    <div className={"info-time"}>
                                        {
                                            v.prefixTitle?<span>{v.createTime}</span>:<span>{v.createTime}  {v.coverTitle}</span>
                                        }
                                        <span>{v.prefixTitle}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={"main-img"}>
                                <LazyLoad once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                    <img src={v.coverImage} alt=""/>
                                </LazyLoad>
                            </div>
                            <div className={"main-title"}>
                                {v.coverTitle}
                            </div>
                            <div className={"box-text"}>{v.summary}</div>
                            <div className={"box-bottom"}>
                                <div>
                                    <img className={"zan"} src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38" alt=""/>
                                    <span>{v.likeNum}</span>
                                </div>
                                <div>
                                    <img className={"zan"} src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38" alt=""/>
                                    <span>{v.rewardNum}</span>
                                </div>
                                <div className={"border-none"}>
                                    <img className={"zan"} src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38" alt=""/>
                                    <span>{v.commentNum}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <LoadingMore handleList={"getClientRecipe"}></LoadingMore>
            </div>
        )
    }
    componentDidMount(){
        this.props.getClientRecipe({pageIndex:0,clientId:this.props.match.params.clientId})
    }
}
export default withRouter(connect((state)=>({recipe:state.questionAnswer.userRecipe}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(UserRecipe))
