import React,{Fragment} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LazyLoad,{forceCheck} from 'react-lazyload';
import actionCreator from "../../store/actionCreator";
import QuestionBox from '../../component/questionAnswer/common/questionBox'
import BScroll from '../../component/common/utils/Bscroll'

class Hot extends React.Component {
    constructor(){
        super()
        this.state={
            refreshScroll:false
        }
    }
    render() {
        return (
            <Fragment>
                <BScroll refresh={this.state.refreshScroll} boxList={"getHotList"} list={"hotList"} onScroll={()=>{forceCheck()}}></BScroll>

              {/*  <QuestionBox boxList={"getHotList"} list={"hotList"}></QuestionBox>*/}
            </Fragment>
        )
    }
    componentDidMount() {
        if (this.props.hotList.length === 0) {
            this.props.getHotList()
        }
    }
}
export default withRouter(connect((state)=>({hotList:state.questionAnswer.hotList}),
    (dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Hot))
