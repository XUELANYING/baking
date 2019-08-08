import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
// import React,{Component} from 'react'
// import router from '../../router'
import { NavLink,Link} from 'react-router-dom'
// import {bindActionCreators} from 'redux'
// import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import ShowListCommon from '../../component/bakingRing/ShowListCommon'
import filter from "../../asset/filter";

class Attention extends Component{
    constructor(){
        super();
        this.state={
            imgW:{
                "1":"219px",
                "2":"50%",
                "3":"33%",
                '4':'50%',
                "5":"33%",
                '6':'33%',
                "7":"33%",
                '8':'33%',
                "9":"33%",

            },
            imgH:{
                "1":"auto",
                "2":"161px",
                "3":"105px",
                '4':'105px',
                "5":"105px",
                '6':'105px',
                "7":"105px",
                '8':'105px',
                "9":"105px",

            }
        }
    }
    render(){
        console.log(this.props.followList);
        return (
            <div>
                <div className={'showlistcommon_wrap'}>

                    <div className={'showlist_head'}>
                        {
                            this.props.followList.map((v, i) => (
                                <section key={i}>
                                    <div className={'showlist_head_title'}>
                                        <img src={v.clientImage} alt=""/>
                                        <div>
                                            <p>{v.clientName}</p>
                                            <span>{filter.date(v.createTime)} {v.coverTitle}</span>
                                        </div>
                                    </div>
                                    <div className={'showlist_message'}>
                                        {v.communityName?<span className={"communityName"}>{v.communityName}</span>:null}
                                        {
                                            v.type===4?<span>{v.introduce}</span>:null
                                        }
                                    </div>
                                    <div className={'showlist_center_wrap'}>
                                        {
                                            v.image.map((v1,i)=>(
                                                <div className={'showlist_center'} key={i} style={{width:this.state.imgW[v.image.length]}} >
                                                    <img src={v1} alt=""  style={{width:"100%",height:this.state.imgH[v.image.length]}}/>
                                                </div>
                                            ))
                                        }

                                    </div>
                                    <div className={'showlist_foot'}>
                                        <div className={'showlist_foot_one'}>
                                            {
                                                v.type===2?<div className={'one'}>
                                                        <Link to={'/'}>{v.coverTitle}</Link>
                                                        <div>
                                                            <span className={"span_one"}>{v.communityName}</span>
                                                            <span >{v.introduce}</span>

                                                        </div>
                                                    </div>
                                                    :v.recipe.image?
                                                    <div className={'two'}>
                                                        <img src={v.recipe.image} alt=""/>
                                                        <div>
                                                            <p>{v.recipe.title}</p>
                                                            <span>{v.recipe.clientName}</span>
                                                        </div>
                                                    </div>:null
                                            }
                                        </div>

                                    </div>
                                    <div className={'showlist_comments_wrap'}>
                                        <div>
                                            <i className={'iconfont icon-zan'}></i>
                                            <span>
                                        {
                                            v.likeNum?v.likeNum:'点赞'
                                        }
                                        </span>
                                        </div>
                                        <div>
                                            <i className={'iconfont icon-dashang'}></i>
                                            <span>

                                        {
                                            v.rewardNum?v.rewardNum:'打赏'
                                        }

                                        </span>
                                        </div>
                                        <div>
                                            <i className={'iconfont icon-pinglun1'}></i>
                                            <span>
                                        {
                                            v.commentNum?v.commentNum:'评论'
                                        }
                                        </span>
                                        </div>
                                    </div>



                                </section>
                            ))
                        }
                    </div>



                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log("关注这回出来了吧",this.props.followList);
        this.props.getFollowList();
    }
}
export default connect((state)=>({
    followList:state.bakingRing.followList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Attention)