import React,{Component} from "react";
import "../../asset/css/search/search.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getSearchList} from "../../store/actionCreator/search/search";
import {Link} from "react-router-dom";
import SearchBar from "../../component/search/searchBar";

class Search extends Component{
    constructor(){
        super();
        this.state={
            lastestSearch:[]
        }
    }
    componentDidMount(){
        this.props.getSearchList();
        if(localStorage.keyword){
            this.setState({
                lastestSearch:JSON.parse(localStorage.keyword)
            })
        }
    }
    setHistoryList(item){
        if(localStorage.keyword){
            let kw = JSON.parse(localStorage.keyword);
            let index = kw.findIndex((v)=>v===item);
            if(index > -1){
                kw.unshift(kw.splice(index,1)[0])
            }else{
                kw.unshift(item);
                if(kw.length>5){
                    kw.length = 5
                }
            }
            localStorage.setItem("keyword",JSON.stringify(kw))
        }else{
            let arr = [];
            arr.push(item);
            localStorage.setItem("keyword",JSON.stringify(arr))
        }
        this.setState({
            lastestSearch:JSON.parse(localStorage.keyword)
        })
    }
    clearHistory(){
        localStorage.keyword = "";
        this.setState({
            lastestSearch:[]
        })
    }
    render(){
        const {popularSearch} = this.props.search;
        let {lastestSearch} = this.state;
        return(
            <div className={'searchsWrap'}>
                <SearchBar {...this.props}>
                    <span>搜索</span>
                </SearchBar>
                <div className="searchTitle">
                    <div>热门搜索</div>
                </div>
                <div className="popularSearchBox clear_fix">
                    {
                        popularSearch.map((v,i)=>(
                            <Link to={"/search/recipe/"+v.keyword} key={v.popularSearchId} className={"SearchResult"} onClick={this.setHistoryList.bind(this,v.keyword)}>{v.keyword}</Link>
                        ))
                    }
                </div>
                {
                    lastestSearch.length!==0?<div className="current">
                        <div className="currentSearch">
                            <div className="searchText">
                                最近搜索
                                <p onClick={this.clearHistory.bind(this)}>
                                    <img src="https://image.hongbeibang.com/FlNyAtoE7VQRWghfLMIzjymlNTI2?48X48&imageView2/1/w/38/h/38" alt=""/>
                                </p>
                            </div>
                        </div>
                        <div className="popularSearchBox clear_fix">
                            {
                                lastestSearch.map((v,i)=>(
                                    <Link to={"/search/recipe/"+v} key={i} className="SearchResult" onClick={this.setHistoryList.bind(this,v)}>{v}</Link>
                                ))
                            }
                        </div>
                    </div>:null
                }
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

export default connect(mapStateToProps,mapDispatchToProps)(Search);