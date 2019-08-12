import React from "react";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";
import LoadingMore from "../../../component/common/loadingMore";

export default class RecipeList extends React.Component{
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    componentDidMount(){
        this.props.getPopularList(this.props.match.params.keyword,0)
    }
    render(){
        let recipeList = this.props.search.searchPopular || [];
        return(
            <div className="recipeLists">
                {
                    recipeList.map((v,i)=>(
                        <Link className="cookList" key={i} to={"/recipe/"+v.clientId+"/"+v.contentId}>
                            <div className="listInfo">
                                <div className="listImg">
                                    <LazyLoad once placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                        <img src={v.coverImage} alt={v.coverTitle}/>
                                    </LazyLoad>
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
                <LoadingMore handleList={"getMoreRecipe"} type={"3"}></LoadingMore>
            </div>
        )
    }
}
