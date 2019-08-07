import React,{Component} from 'react'
import '../../asset/font/iconfont.css'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreators from "../../store/actionCreator";
import filter from '../../asset/filter'
import '../../asset/css/bakingRing/dishDetail.scss'
class DishDetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log('最想看到的',this.props.dishDetail);
        const show = this.props.dishDetail;
        return (
            <div id={'dishDetail_wrap_outside'}>

                <div >
                    <div className={'activityDetail_head'}>
                        <i className={'iconfont icon-arrow-left'} onClick={()=>{
                            this.props.history.go(-1)
                        }}></i>
                        <span>作品</span>
                    </div>
                    <div id={'dishDetail_wrap'}>
                        <div className={'dishDetail_info'}>
                            <img src={show.clientImage} alt=""/>
                            <div className={'userinfo'}>
                                <p>{show.clientName}</p>
                                <div>
                                    <span>{show.createTime}</span>
                                    <span>{show.coverTitle}</span>
                                </div>
                            </div>
                            <div></div>
                        </div>


                    {/*</div>*/}
                    {/*{*/}
                        {/*<div className={'activityDetail_image_two'} dangerouslySetInnerHTML={{__html:this.props.activityDetail.activityIntroduce}}></div>*/}
                    {/*}*/}
                    {/*<div className={'activity_join'}>*/}
                        {/*<span>参与活动即可获得幸运数字</span>*/}
                    {/*</div>*/}
                    {/*<div className={'activity_join activity_join_two'}>*/}
                        {/*{this.props.activityDetail.component?<span>参与人数 {this.props.activityDetail.component.count}</span>:<span></span>}*/}
                    {/*</div>*/}


                </div>

            </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getDishDetail(this.props.match.params.id)
    }
}

export default connect((state)=>({
      dishDetail:state.bakingRing.dishDetail,
}),(dispatch)=>(bindActionCreators(actionCreators,dispatch)))(withRouter( DishDetail))
