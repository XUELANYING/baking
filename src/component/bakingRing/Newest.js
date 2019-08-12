import React,{Fragment,Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import '../../asset/css/bakingRing/showlistcommon.scss'
import filter from '../../asset/filter'
import ShowListCommon from './ShowListCommon'
 class Newest extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ShowListCommon showProps={this.props.mostMessage}></ShowListCommon>
        )
    }
    componentDidMount(){

        this.props.getCommunityDetail(this.props.match.params.id,this.props.choose);
        console.log("---------------",this.props.choose)
    }
}
export default withRouter(connect((state)=>({...state}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(Newest))
