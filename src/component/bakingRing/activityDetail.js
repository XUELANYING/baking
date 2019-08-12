import React,{Component} from 'react'
import '../../asset/font/iconfont.css'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreators from '../../store/actionCreator'
import Activitycommon from './Activitycommon'
import '../../asset/css/bakingRing/activitydetail.scss'
import LazyLoad from 'react-lazyload'
 class ActivityDetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id={'activityDetail'}>
                <div >
                    <div className={'activityDetail_head'}>
                        <i className={'iconfont icon-arrow-left'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>日常活动</span>
                    </div>
                    <div className={'activityDetail_image'}>
                        <LazyLoad  once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                        <img src={this.props.activityDetail.image} alt=""/>
                        </LazyLoad>
                    </div>
                    {
                        <div className={'activityDetail_image_two'} dangerouslySetInnerHTML={{__html:this.props.activityDetail.activityIntroduce}}></div>
                    }
                    <div className={'activity_join'}>
                        <span>参与活动即可获得幸运数字</span>
                    </div>
                    <div className={'activity_join activity_join_two'}>
                        {this.props.activityDetail.component?<span>参与人数 {this.props.activityDetail.component.count}</span>:<span></span>}
                    </div>
                    <Activitycommon ></Activitycommon>
                </div>

            </div>
        )
    }

    componentDidMount(){
            this.props.getActivityDetail(this.props.match.params.id);
    }
}

export default withRouter( connect((state)=>({
        activityDetail:state.bakingRing.activityDetail,
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(ActivityDetail))
