import React,{Component} from "react";
import "../../asset/css/search/search.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getSearchList} from "../../store/actionCreator/search/search";
import {Link} from "react-router-dom";
import SearchBar from "../../component/search/searchBar"

class Search extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getSearchList();
    }
    render(){
        const {lastestSearch,popularSearch} = this.props.search
        return(
            <div className={'searchsWrap'}>
                <SearchBar {...this.props}>
                    <span>搜索</span>
                </SearchBar>
                <div className="searchTitle">
                    <div>热门搜索</div>
                </div>
                <div className="popularSearchBox">
                    {
                        popularSearch.map((v,i)=>(
                            <Link to={"/search/recipe/"+v.keyword} key={v.popularSearchId} className={"SearchResult"}>{v.keyword}</Link>
                        ))
                    }
                </div>
                {
                    lastestSearch.length!==0?<div className="current">
                        <div className="currentSearch">
                            <div className="searchText">
                                最近搜索
                                <p><img src="https://image.hongbeibang.com/FlNyAtoE7VQRWghfLMIzjymlNTI2?48X48&imageView2/1/w/38/h/38" alt=""/></p>
                            </div>
                        </div>
                        <div className="popularSearch">
                            {
                                lastestSearch.map((v,i)=>(
                                    <div key={v.lastestSearchId} className="SearchResult">{v.keyword}</div>
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