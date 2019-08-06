import React,{Fragment,Component} from 'react'
import '../../asset/font/iconfont.css'
import {connect} from 'react-redux'
import {NavLink,withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import actionCreator from '../../store/actionCreator'
import '../../asset/css/bakingRing/bakingCircleDetail.scss'


class BakingCircleDetail extends Component {
    constructor(){
        super();
        this.state={
            most:[3
                {
                    id:'0',
                    mostName:'最新',
                    component:Newest

                },{
                    id:'1',
                    mostName:'最近',
                    component:Recently
                }
            ],
            index:0


        }
    }
    handlerChange(index){
        this.setState({
            index
        })
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
                                <div className={'community_type'} key={i} onClick={this.handlerChange.bind(this,i)} style={{borderBottom:i===this.state.index ? '2px solid #E98B71 ':''}}>
                                    <span >{v.mostName}</span>
                                </div>

                            ))
                        }

                    </div>

                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        this.props.getCommunityDetail(this.props.match.params.id);
        console.log(this.props.communityDetail)
    }
}
export default withRouter(connect((state)=>({
    communityDetail:state.bakingRing.communityDetail
}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(BakingCircleDetail))