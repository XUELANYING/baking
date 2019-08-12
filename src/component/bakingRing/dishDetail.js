import React,{Component} from 'react'
import '../../asset/font/iconfont.css'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreators from "../../store/actionCreator";
import '../../asset/css/bakingRing/dishDetail.scss'
import LazyLoad from 'react-lazyload'
class DishDetail extends Component {
    constructor(props){
        super(props);
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
        const show = this.props.dishDetail;
        return (
            <div id={'dishDetail_wrap_outside'}>
                <div >
                    <div className={'activityDetail_head'}>
                        <i className={'iconfont icon-arrow-left'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>作品</span>
                    </div>
                    <div id={'dishDetail_wrap'}>
                        <div className={'dishDetail_info'}>
                            <div className={'houhou'}>
                                <LazyLoad  once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>

                                <img className={'dishDetail_clientImage'} src={show.clientImage} alt=""/>
                                </LazyLoad>
                                    <div className={'dishDetail_userInfo'}>
                                    <p>{show.clientName}</p>
                                    <div>
                                        <span>{show.createTime}</span>
                                        <span>{show.coverTitle}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={'dishDetail_follow'}>
                                <span>+  关注</span>
                            </div>
                        </div>
                        <div className={'dishDetail_instroduce'}>{show.introduce}</div>

                        <div className={'dishDetail_image'}>
                                {
                                    show.image?show.image.map((v,i)=>(
                                        <div className={'showlist_center'} key={i} style={{width:this.state.imgW[show.image.length]}} >
                                            <LazyLoad  once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                                <img ref={'dishImg'} src={v} alt=""  style={{width:"100%",height:this.state.imgH[show.image.length]}} />
                                            </LazyLoad>
                                        </div>
                                    )):null
                                }
                        </div>
                        <div className={'dishDetail_title'}>
                            <div>{show.coverTitle}</div>
                            <div>
                                <span onClick={(e)=>{
                                    this.props.history.push('/classify');
                                    e.stopPropagation();
                                }}>找食谱</span>
                                <i className={'iconfont icon-iconfontyoujiantou-copy'}></i>
                            </div>
                        </div>

                </div>
                    <div className={'dishDetail_bottom'}>
                        <div className={'haha'}>
                            <div className={'content'}>
                                <span>点赞{show.likeNum}</span>
                                <div></div>
                            </div>
                            <div className={'content'}>
                                <span>打赏{show.rewardNum}</span>
                                <div></div>
                            </div>
                        </div>

                        <div className={'content'}>
                            <span>评论</span>
                            <div></div>
                        </div>

                    </div>

            </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDishDetail(this.props.match.params.id)
    }
}

export default withRouter( connect((state)=>({
      dishDetail:state.bakingRing.dishDetail,
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))( DishDetail))
