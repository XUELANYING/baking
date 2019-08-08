import React from "react";
import LoadingMore from "../../../component/common/loadingMore";
import {Link} from "react-router-dom";

export default class RecipeList extends React.Component{
    componentDidMount(){
        this.props.getDidMoreList(this.props.match.params.keyword,0);
    }
    render(){
        let recipeList = this.props.search.searchDidMore || [];
        return(
            <div className="recipeLists">
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
                <LoadingMore></LoadingMore>
            </div>
        )
    }
}