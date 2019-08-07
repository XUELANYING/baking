import React,{Fragment,Component} from 'react'
import '../../asset/font/iconfont.css'
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actionCreator from '../../store/actionCreator'
import '../../asset/css/bakingRing/bakingCircleDetail.scss'
import Newest from './Newest'

class BakingCircleDetail extends Component {
    constructor(){
        super();
        this.state={
            most:[
                {
                    id:0,
                    mostName:'最热',
                    // component:Newest

                },{
                    id:1,
                    mostName:'最新',
                    // component:Recently
                }
            ],
            index:1


        }
    }
    handlerChange(index){
        this.setState({
            index
        });
        console.log('dianji',index);
        this.props.getCommunityDetail(this.props.match.params.id,this.state.index)
    }

    render(){
        return (
            <div >
                <div id={'activityDetail'}>
                    <div className={'activityDetail_head'}>
                        <i className={'iconfont icon-arrow-left'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        {this.props.communityDetail.community?<span>{this.props.communityDetail.community.name}</span>:<span></span>}
                    </div>
                </div>
                <div className={'community_head_bar_wrap'}>
                    <div className={'community_head_bar'}>
                        {
                            this.state.most.map((v,i)=>(
                                <div className={'community_type'} key={i} onClick={this.handlerChange.bind(this,i+1)} style={{borderBottom:i+1===this.state.index ? '2px solid #E98B71 ':''}}>
                                    <span >{v.mostName}</span>
                                </div>

                            ))
                        }

                    </div>

                </div>
                {this.state.index===1? <Newest mostMessage={this.props.hotMost} choose={this.state.index}></Newest>:<Newest mostMessage={this.props.newest} choose={this.state.index}></Newest>}


            </div>
        )
    }
    // componentDidUpdate(){
    //     this.props.getCommunityDetail(this.props.match.params.id);
    // }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.getCommunityDetail(this.props.match.params.id);
        console.log(this.props.communityDetail)
    }
}
export default withRouter(connect((state)=>({
    communityDetail:state.bakingRing.communityDetail,
    newest:state.bakingRing.newest,
    hotMost:state.bakingRing.hotMost,
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(BakingCircleDetail))