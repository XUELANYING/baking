import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import {NavLink} from 'react-router-dom'
import LazyLoad from 'react-lazyload'

class Activitycommon extends Component{
    render(){
        const activity = this.props.bakingRing.activityDetail.component;
        return (
            <div  id={'activity_common_wrap' } >
                {
                    activity?activity.data.map((v,i)=>(
                        <LazyLoad height={200}>
                        <NavLink key={i} className={"aaa"} to={'/dish/'+v.contentId}>
                            <div className={'activity_common'}>
                                <img src={v.coverImage} alt="动态图片"/>
                                <div className={'activity_userInfo'}>
                                    <img src={v.clientImage} alt="头像"/>
                                    <div className={'userInfo'}>
                                        <span>{v.clientName}</span>
                                        <p>{v.clientSign}</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        </LazyLoad>
                    )):<div></div>
                }
            </div>
        )
    }
    componentDidMount(){
        console.log("日常活动的组件",this.props.bakingRing.activityDetail)
        console.log('dishDetailId',this.props.bakingRing.dishDetail)
    }
}
export default connect((state)=>({...state}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(Activitycommon)