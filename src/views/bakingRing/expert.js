import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Loadable from "../../common/height/loadable"
import actionCreator from '../../store/actionCreator';
const ShowListCommon = Loadable(()=> import('../../component/bakingRing/ShowListCommon'));

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
