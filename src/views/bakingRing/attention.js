import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreator from '../../store/actionCreator'
import Loadable from "../../common/height/loadable"
const ShowListCommon = Loadable(()=> import('../../component/bakingRing/ShowListCommon'));
class Attention extends Component{
    render(){
        return (
            <ShowListCommon showProps={this.props.followList} boxList={'getFollowList'}></ShowListCommon>
        )
    }
    componentDidMount(){
        this.props.getFollowList();
    }

}
export default connect((state)=>({
    followList:state.bakingRing.followList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Attention)
