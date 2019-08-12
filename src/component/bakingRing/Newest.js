import React,{Fragment,Component} from 'react'
import {withRouter,Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import '../../asset/css/bakingRing/showlistcommon.scss'
import Loadable from "../../common/height/loadable"
const ShowListCommon = Loadable(()=> import('../../component/bakingRing/ShowListCommon'));

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

            this.props.getCommunityDetail(this.props.match.params.id,this.props.choose,{pageIndex:0});

    }
}
export default withRouter(connect((state)=>({...state}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(Newest))

