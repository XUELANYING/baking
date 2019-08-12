import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'
import {NavLink} from 'react-router-dom'
import LazyLoad from 'react-lazyload'

class Activitycommon extends Component{
    render(){
        const activity = this.props.activityDetail.component;
        return (
            <div  id={'activity_common_wrap' } >
                {
                    activity?activity.data.map((v,i)=>(

                            <NavLink  key={i} className={"aaa"} to={'/dish/'+v.contentId}>
                                <div className={'activity_common'}>
                                    <LazyLoad  once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                    <img src={v.coverImage} alt="动态图片"/>
                                    </LazyLoad>
                                    <div className={'activity_userInfo'}>
                                        <LazyLoad  once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                        <img src={v.clientImage} alt="头像"/>
                                        </LazyLoad>
                                        <div className={'userInfo'}>
                                            <span>{v.clientName}</span>
                                            <p>{v.clientSign}</p>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>

                    )):<div></div>
                }
            </div>
        )
    }
}
export default connect((state)=>({
    activityDetail:state.bakingRing.activityDetail
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(Activitycommon)