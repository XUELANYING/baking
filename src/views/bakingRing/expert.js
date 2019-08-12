import React,{Component} from 'react'
import { NavLink,Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import ShowListCommon from '../../component/bakingRing/ShowListCommon'
class Expert extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <ShowListCommon showProps={this.props.expertList} boxList={'getExpertList'}></ShowListCommon>
        )
    }
    componentDidMount(){
        if(this.props.expertList.length === 0){
            this.props.getExpertList({pageIndex:0});

        }
    }
}
export default connect((state)=>({
   expertList:state.bakingRing.expertList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Expert)