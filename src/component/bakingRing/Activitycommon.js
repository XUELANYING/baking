import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../store/actionCreator'

class Activitycommon extends Component{

    render(){
        const activity = this.props.bakingRing.activityDetail.component;
        console.log(88888888888888888888888888,activity)
        return (
            <div id={'activity_common_wrap'}>
                {
                    activity?activity.data.map((v,i)=>(
                        <div key={i} className={"aaa"}>
                            <div className={'activity_common'}>
                                <img src={v.coverImage} alt="动态图片"/>
                                <div className={'activity_userInfo'}>
                                    <img src={v.clientImage} alt="头像"/>
                                    <div>
                                        <span>{v.clientName}</span>
                                        <p>{v.clientSign}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )):<div></div>
                }
            </div>
        )
    }
    componentDidMount(){
        console.log("日常活动的组件",this.props.bakingRing.activityDetail)
    }
}
export default connect((state)=>({...state}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(Activitycommon)