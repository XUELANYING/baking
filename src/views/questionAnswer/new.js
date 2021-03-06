import React, {Fragment} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import QuestionBox from "../../component/questionAnswer/questionBox";

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
                <QuestionBox boxList={"getNewsList"} list={"newsList"}></QuestionBox>
            </Fragment>
        )
    }

    componentDidMount() {
        if (this.props.newsList.length === 0) {
            this.props.getNewsList()
        }
    }
}

export default connect((state) => ({newsList: state.questionAnswer.newsList}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(New)
