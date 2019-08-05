import React,{Fragment} from 'react';
import AnswerBox from "./common/answerBox";
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actionCreator from "../../store/actionCreator";

class UserAnswer extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div style={{marginTop:"-80px"}}>
                <AnswerBox  boxList={"getClientAnswer"} list={"userAnswer"}></AnswerBox>
            </div>
        )
    }
    componentDidMount(){
        this.props.getClientAnswer({pageIndex:0,clientId:this.props.match.params.clientId})
    }
}
export default withRouter(connect((state)=>({recipe:state.questionAnswer.userRecipe}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(UserAnswer))
