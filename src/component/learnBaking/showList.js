import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";

class ShowList extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                组件1
            </div>
        )
    }
    componentDidMount(){
             console.log(1996,this.state)
    }
}
export default withRouter(connect((state) => ({getRecommendList: state.getRecommendList}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(ShowList))