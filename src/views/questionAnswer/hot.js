import React,{Fragment} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";
import QuestionBox from '../../component/questionAnswer/common/questionBox'


class Hot extends React.Component {
    render() {
        return (
            <Fragment>
                <QuestionBox boxList={"getHotList"} list={"hotList"}></QuestionBox>
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
