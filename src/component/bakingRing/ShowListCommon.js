import React,{Fragment,Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import LazyLoad from 'react-lazyload'
import '../../asset/css/bakingRing/showlistcommon.scss'
import filter from '../../asset/filter'
import LoadingMore from "../common/loadingMore";


 class ShowListCommon extends Component{
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

            },
            //回到顶部图标是否显示
            look:false,
            imgUrl:'https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80',
            isLoading:true
        }
        this.handleScroll=this.handleScroll.bind(this);
    }
    //回到顶部
     handleScroll(){
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop > 220){
            this.setState({
                look:true
            })
        }else{
            this.setState({
                look:false
            })
        }
     }
     backTop(){
        document.documentElement.scrollTop = 0;
     }

    componentWillMount(){
        window.addEventListener('scroll',this.handleScroll,true);
    }
    render() {
        const show = this.props.showProps;
        return (
            <div className={'showlistcommon_wrap'}>

                    <div className={'showlist_head'}>
                        {
                            show.map((v, i) => (
                                <section key={i} onClick={(e)=>{
                                    this.props.history.push("/dish/"+v.contentId);
                                    e.stopPropagation();
                                }}>
                                    <div className={'showlist_head_title'}>
                                        <LazyLoad height='70' placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                        <img src={v.clientImage} alt="" />
                                        </LazyLoad>
                                        <div className={'showList_info'} >
                                            <div>
                                                <LazyLoad height='70' placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                                {v.isMaster===1?<img src={this.state.imgUrl} alt=""/>:null}
                                                </LazyLoad>
                                                <p>{v.clientName}</p>
                                            </div>
                                            <span>{filter.date(v.createTime)} {v.coverTitle}</span>
                                        </div>
                                    </div>
                                    <div className={'showlist_message'}>
                                        {v.communityName?<span className={"communityName"}>{v.communityName}</span>:null}
                                        {
                                            v.type===4?<p>{v.introduce}</p>:null
                                        }
                                    </div>

                                    <div className={'showlist_center_wrap'}>
                                        {
                                            v.image.map((v1,i)=>(
                                                <div className={'showlist_center'} key={i} style={{width:this.state.imgW[v.image.length]}} >
                                                    <LazyLoad height='70' placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                                    <img src={v1} alt=""  style={{width:"100%",height:this.state.imgH[v.image.length]}}/>
                                                    </LazyLoad>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className={'showlist_foot'} >
                                        <div className={'showlist_foot_one'}>
                                            {
                                                v.type===2?<div className={'one'} onClick={(e)=>{
                                        this.props.history.push('/recipe/'+v.clientId+"/"+v.contentId);
                                        e.stopPropagation();
                                    }}>
                                                        <Link to={'/'}>{v.coverTitle}</Link>
                                                        <div>
                                                            <span className={"span_one"}>{v.communityName}</span>
                                                            <span >{v.introduce}</span>

                                                        </div>
                                                    </div>
                                                    :v.recipe.image?
                                                    <div className={'two'} onClick={(e)=>{
                                        this.props.history.push('/recipe/'+v.recipe.clientId+"/"+v.recipe.contentId);
                                        e.stopPropagation();
                                    }}>
                                                        <LazyLoad height='70' placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                                        <img  src={v.recipe.image} alt=""/>
                                                        </LazyLoad>

                                                        <div>
                                                            <p>{v.recipe.title}</p>
                                                            <span>{v.recipe.clientName}</span>
                                                        </div>
                                                    </div>:null
                                            }
                                        </div>

                                    </div>
                                    <div className={'showlist_comments_wrap'} >
                                        <div>
                                            <i className={'iconfont icon-zan'}></i>
                                            <span  >
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

                    <div className={'backTop'} style={{display:this.state.look?'block':'none'}} onClick={this.backTop.bind(this)}>
                        <i className={'iconfont icon-huidaodingbu-copy-copy'} onClick={this.backTop.bind(this)}></i>
                    </div>
                <LoadingMore handleList={this.props.boxList} ></LoadingMore>

            </div>
        )
    }

}
export default withRouter(connect((state)=>({
    showList:state.bakingRing.showList
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(ShowListCommon))