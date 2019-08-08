// import React,{Component} from 'react'
import React,{Component} from 'react'
// import router from '../../router'
import { NavLink,Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../store/actionCreator";
import ShowListCommon from '../../component/bakingRing/ShowListCommon'
import filter from "../../asset/filter";
class Expert extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <ShowListCommon showProps={this.props.expertList}></ShowListCommon>   
        )
    }
    componentDidMount(){
        console.log('达人有吗',this.props.expertList)
        this.props.getExpertList();
    }
}
export default connect((state)=>({
   expertList:state.bakingRing.expertList
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Expert)