import React,{Fragment,Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import '../../asset/css/bakingRing/showlistcommon.scss'
import ShowListCommon from './ShowListCommon'
 class Newest extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ShowListCommon showProps={this.props.mostMessage} boxList={'getCommunityDetail'}></ShowListCommon>
        )
    }
    componentDidMount(){
        if(this.props.newest.length===0){
            this.props.getCommunityDetail(this.props.match.params.id,this.props.choose,{pageIndex:0});
        }
    }
}
export default connect((state)=>({
    newest:state.bakingRing.newest
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(withRouter(Newest))