import React,{Fragment} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";
import AnswerBox from '../../component/questionAnswer/common/answerBox'
import QuestionBox from "../../component/questionAnswer/common/questionBox";

class Essence extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Fragment>
                <AnswerBox  boxList={"getEssenceList"} list={"essenceList"}></AnswerBox>
            </Fragment>
        )
    }
    componentDidMount(){
        if(this.props.questionAnswer.essenceList.length===0){
            this.props.getEssenceList()
        }
    }
}
export default withRouter(connect((state)=>({questionAnswer: state.questionAnswer}),
    (dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Essence))
