import React,{Component} from "react";
import "../../../asset/css/search/list.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList,getVideoList} from "../../../store/actionCreator/search/search";
import {Link} from "react-router-dom";
import LoadingMore from "../../../component/common/loadingMore"

class List extends Component{
    constructor(){
        super();
        this.state={
            keyword:"",
            tabBar:[
                {
                    name:"综合排序",
                    sortType:""
                },
                {
                    name:"做过最多",
                    sortType:"dishNum"
                },
                {
                    name:"达人食谱",
                    sortType:"master"
                }
            ],
            index:0
        }
    }
    componentDidMount(){
        //待优化
        this.props.getDetailList(this.props.match.params.keyword,this.state.tabBar[0].sortType)
        this.setState({
            keyword:this.props.match.params.keyword
        });
        this.props.getVideoList(this.props.match.params.keyword)
    }
    changeKeyword(){
        this.setState({
            keyword:this.refs.recipe.value
        })
    }
    changeTabBar(index,t,sortType){
        this.setState({
            index
        });
        this.props.getDetailList(this.props.match.params.keyword,t,sortType)
    }
    render(){
        let recipeList = this.props.search.searchRecipeResults;
        // console.log(recipeList);
        let videoList = this.props.search.searchVideoList;
        let {keyword,tabBar} = this.state;
        return(
            <div className={'listWrap'}>
                <div className="searchBox2">
                    <p className={"backImg"}><img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""/></p>
                    <div className={"searchText"}>
                        <span><img src="https://image.hongbeibang.com/Fi6tDLktzhDiUQoin--ZelAIFSsr?94X94&imageView2/1/w/80/h/80" alt=""/></span>
                        <input type="text" placeholder={"搜索食谱"} ref={"recipe"} value={keyword} onChange={this.changeKeyword.bind(this)}/>
                    </div>
                    <span>
                        <strong>食谱</strong>
                        <b>
                            <img src="https://image.hongbeibang.com/FnX5qtpWKlcHoDYC5KDFHulWfEZl?32X32&imageView2/1/w/32/h/32" alt=""/>
                        </b>
                    </span>
                </div>
                <div className="bar">
                    <div className="tabbar">
                        {
                            tabBar.map((v,i)=>(
                                <div key={i} className={i===this.state.index?"cookBook active":"cookBook"} onClick={this.changeTabBar.bind(this,i,v.t,v.sortType,this.state.keyword)}>
                                    <span>{v.name}</span>
                                    <div className={i===this.state.index?"activeBook":""}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="lists clear_fix">
                    {
                        videoList.map((v,i)=>(
                            <div className="cookList" key={i}>
                                <Link className="listInfo" to={"/lesson/"+v.contentId}>
                                    <div className="listImg">
                                        <img src={v.image} alt=""/>
                                        <div className={"videoLogo"}>视频</div>
                                    </div>
                                    <div className="ListDescript">
                                        <div className="title1">{v.title}</div>
                                        {v.buyNum>1000? <div className="title2">1000+人学过</div>: <div className="title2">{v.buyNum}人学过</div>}
                                        <div className="title2">
                                            <span>视频学习更简单</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="isShow"><span>不再显示</span></div>
                            </div>
                        ))
                    }
                    {
                        recipeList.map((v,i)=>(
                            <Link className="cookList" key={i} to={"/recipe/"+v.clientId+"/"+v.contentId}>
                                <div className="listInfo">
                                    <div className="listImg">
                                        <img src={v.coverImage} alt={v.coverTitle}/>
                                    </div>
                                    <div className="ListDescript">
                                        <div className="title1 title3" ref={"title"}>{v.coverTitle}</div>
                                        {
                                            v.coverTitle.length<8?<div className="title2">{
                                                v.material.map((item,index)=>(
                                                    <span key={index}>{item.name} </span>
                                                ))
                                            }</div>:null
                                        }
                                        <div className="title2">{v.clientName}</div>
                                        <div className="title2"><span>{v.collectNum}收藏 </span><span>{v.dishNum}人做过</span></div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <LoadingMore getMoreRecipe={this.props.getDetailList}></LoadingMore>
            </div>
        )
    }
}

function mapStateToProps({search}){
    return{
        search
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(getSearchInfo,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(List);