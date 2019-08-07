import React from "react";
import LoadingMore from "../../../component/common/loadingMore";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList,getVideoList} from "../../../store/actionCreator/search/search";
import {Link} from "react-router-dom";
import "../../../asset/css/search/reachRecipes.scss";


class SearchRecipeList extends React.Component{
    constructor(){
        super();
        this.state={
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
        this.props.getDetailList(this.props.showIndex,this.props.match.params.keyword,0,"");
        this.setState({
            keyword:this.props.match.params.keyword
        });
        this.props.getVideoList(this.props.match.params.keyword)
    }
    componentDidUpdate(nextProps,oldState){
        if(nextProps.match.params.keyword !== oldState.keyword){
            this.props.getDetailList(nextProps.showIndex,nextProps.match.params.keyword,0,this.state.tabBar[0].sortType);
        }
    }
    render(){
        let recipeList = this.props.search.searchRecipeResults || [];
        let videoList = this.props.search.searchVideoList || [];
        let {tabBar} = this.state;
        return(
            <div className={"recipeL"}>
                <div className="bar">
                    <div className="tabbar">
                        {
                            tabBar.map((v,i)=>(
                                <div key={i} className={i===this.state.index?"cookBook active":"cookBook"} onClick={this.changeTabBar.bind(this,i,v.sortType)}>
                                    <span>{v.name}</span>
                                    <div className={i===this.state.index?"activeBook":""}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="lists clear_fix">
                    {
                        videoList.length!==0?videoList.map((v,i)=>(
                            <div className="cookList" key={i}>
                                <Link className="listInfo" to={"/lesson/"+v.educationCourseId+"/"+v.clientId}>
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
                        )):null
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
    changeTabBar(index,sortType){
        this.setState({
            index
        });
        this.props.getDetailList(this.props.showIndex,this.props.match.params.keyword,0,sortType)
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchRecipeList);