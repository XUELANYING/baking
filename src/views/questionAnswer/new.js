import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import LazyLoad,{forceCheck} from 'react-lazyload';
import actionCreator from "../../store/actionCreator";
import QuestionBox from "../../component/questionAnswer/common/questionBox";
import BScroll from '../../component/common/utils/Bscroll'

class New extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            pageIndex: 0
        }
    }

    render() {
        return (
            <Fragment>
                /*检查懒加载组件是否出现在视图中，如果出现就加载组件*/
                <BScroll refresh={this.state.refreshScroll} boxList={"getNewsList"} list={"newsList"} onScroll={()=>{forceCheck()}}></BScroll>
{/* <QuestionBox count={{nowCount:this.props.newsList.length,sumCount:this.props.newsCount}} boxList={"getNewsList"} list={"newsList"}></QuestionBox>*/}
            </Fragment>
        )
    }
    componentDidMount() {
        if (this.props.newsList.length === 0) {
            this.props.getNewsList()
        }
    }
}

export default connect((state) => ({newsList: state.questionAnswer.newsList,
    newsCount:state.questionAnswer.newsCount}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(New)
