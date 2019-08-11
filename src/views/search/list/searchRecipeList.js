import React from "react";
import LoadingMore from "../../../component/common/loadingMore";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList,getVideoList,getDidMoreList,getPopularList} from "../../../store/actionCreator/search/search";
import {Link} from "react-router-dom";
import "../../../asset/css/search/reachRecipes.scss";
import MultiRecipe from "./multiRecipe";
import DidMoreRecipe from "./didMoreRecipe";
import PopularRecipe from "./popularRecipe";
import LazyLoad from "react-lazyload";

class SearchRecipeList extends React.Component{
    constructor(){
        super();
        this.state={
            tabBar:["综合排序","做过最多","达人食谱"],
            index:0
        }
    }
    componentDidMount(){
        this.props.getVideoList(this.props.match.params.keyword)
        this.props.getDetailList(this.props.showIndex,this.props.match.params.keyword,0,"");
        this.setState({
            keyword:this.props.match.params.keyword
        });
    }
    componentDidUpdate(nextProps,oldState){
        if(nextProps.match.params.keyword !== oldState.keyword){
            this.props.getDetailList(nextProps.showIndex,nextProps.match.params.keyword,0);
        }
    }
    render(){
        let videoList = this.props.search.searchVideoList || [];
        let {tabBar,index} = this.state;
        return(
            <div className={"recipeL"}>
                <div className="bar">
                    <div className="tabbar">
                        {
                            tabBar.map((v,i)=>(
                                <div key={i} className={i===this.state.index?"cookBook active":"cookBook"} onClick={()=>this.setState({index:i})}>
                                    <span>{v}</span>
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
                                        <LazyLoad once  placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                            <img src={v.image} alt=""/>
                                        </LazyLoad>
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
                    {/*列表组件 */} 
                    {index===0?<MultiRecipe {...this.props}></MultiRecipe>:index===1?<DidMoreRecipe {...this.props}></DidMoreRecipe>:<PopularRecipe {...this.props}></PopularRecipe>}
                </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchRecipeList);
