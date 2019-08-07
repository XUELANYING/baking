import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
class Attention extends Component{
    render(){
        console.log(this.props.followList);
        return (
            <div>

                关注
                <br/>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>

                <br/>
                <br/>
                <br/>
                <br/>
                关注






            </div>
        )
    }
    componentDidMount(){
        console.log('attention关注1',this.props.followList);
        this.props.getFollowList();
        console.log('attention关注222',this.props.followList);
        console.log(this.props)

    }
}
export default connect((state)=>({
    followList:state.bakingRing.followList
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(Attention)