import React from "react";
import LoadingMore from "../../../component/common/loadingMore";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import getSearchInfo,{getDetailList} from "../../../store/actionCreator/search/search";
import "../../../asset/css/search/searchAnswer.scss";
import NothingRes from "./nothing";


class SearchAnswerList extends React.Component{
    constructor(){
        super();
        this.state={
            isFetching:true
        }
    }
    componentDidMount(){
        this.props.getDetailList(1,this.props.match.params.keyword,0,"")
    }
    componentDidUpdate(){
        let count = this.props.search.searchAnswerList.count;
        let length = this.props.search.searchAnswerList.data.length;
        console.log(count,length)
        if(length >= count){
            if(length >= count){
                this.state.isFetching = false
            }
        }
    }
    render(){
        let answersList= this.props.search.searchAnswerList.data || [];
        return(
            <div className={"searchAnswerWrap clear_fix"}>
                {
                    answersList.length !== 0 ? <div className="sAnswerList clear_fix">
                        {
                            answersList.map((v, i) => (
                                <div className="sBox" key={i} onClick={()=> this.props.history.push('/question/' + v.contentId)}>
                                    <p>{v.coverTitle}</p>
                                    <span>{v.answerNum}个回答</span>
                                </div>
                            ))
                        }
                        <LoadingMore {...this.props} handleList={"getMoreAnswers"} isFetching={this.state.isFetching}></LoadingMore>
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