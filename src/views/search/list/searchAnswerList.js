import React from "react";
import LoadingMore from "../../../component/common/loadingMore";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList} from "../../../store/actionCreator/search/search";
import "../../../asset/css/search/searchAnswer.scss";
import NothingRes from "./nothing";


class SearchAnswerList extends React.Component{
    componentDidMount(){
        this.props.getDetailList(1,this.props.match.params.keyword,0,"")
    }
    render(){
        let answersList= this.props.search.searchAnswerList.data || [];
        return(
            <div className={"searchAnswerWrap clear_fix"}>
                {
                    answersList.length !== 0 ? <div className="sAnswerList clear_fix">
                        {
                            answersList.map((v, i) => (
                                <div className="sBox" key={i}>
                                    <p dangerouslySetInnerHTML={{__html: v.description}}></p>
                                    <span>{v.answerNum}个回答</span>
                                </div>
                            ))
                        }
                        <LoadingMore></LoadingMore>
                    </div> : <NothingRes></NothingRes>
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

export default connect(mapStateToProps,mapDispatchToProps)(SearchAnswerList);