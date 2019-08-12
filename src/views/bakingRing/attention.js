import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import { NavLink,Link} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";
import ShowListCommon from '../../component/bakingRing/ShowListCommon'
import filter from "../../asset/filter";

class Attention extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <ShowListCommon showProps={this.props.followList} boxList={'getFollowList'}></ShowListCommon>
        )
    }
    componentDidMount(){
        if(this.props.followList.length===0){
            this.props.getFollowList({pageIndex:0});
        }
    }

}
export default connect((state)=>({
    followList:state.bakingRing.followList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Attention)