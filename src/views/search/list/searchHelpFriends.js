import React from "react";
import LoadingMore from "../../../component/common/loadingMore";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList} from "../../../store/actionCreator/search/search";
import "../../../asset/css/search/searchHelpFriends.scss";
import NothingResult from "./nothing"

class SearchHelpFriends extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.getDetailList(this.props.showIndex,this.props.match.params.keyword,0,"");
    }
    render(){
        let HFList = this.props.search.searchHFList.data || [];
        return(
           <div className={"searchHelpFriends"}>
               {
                   HFList.length!==0?<div className="sHelpFList clear_fix">
                       {
                           HFList.map((v,i)=>(
                               <div className="HFBox" key={i}>
                                   <div className="HFInfo">
                                       <div className="HFAvator">
                                           <img src={v.image} alt=""/>
                                       </div>
                                       <div className="infos">
                                           <p className={"HFName"}>{v.name}</p>
                                           <p className="aboutHF">
                                               <span>{v.followedNum}粉丝</span>
                                               <span>{v.recipeNum}食谱</span>
                                           </p>
                                       </div>
                                   </div>
                                   <div className="followHF">+关注</div>
                               </div>
                           ))
                       }
                       <LoadingMore></LoadingMore>
                   </div>:<NothingResult></NothingResult>
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchHelpFriends);