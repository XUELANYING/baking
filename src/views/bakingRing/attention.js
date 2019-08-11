import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Loadable from "../../common/height/loadable"
import actionCreator from '../../store/actionCreator'
const ShowListCommon = Loadable(()=> import('../../component/bakingRing/ShowListCommon'));

class Attention extends Component{
    render(){
        return (
            <ShowListCommon showProps={this.props.followList}></ShowListCommon>
        )
    }
    componentDidMount(){
        this.props.getFollowList();
    }
}
export default connect((state)=>({
    followList:state.bakingRing.followList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Attention)
