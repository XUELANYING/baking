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
        this.state={
            imgW:{
                "1":"219px",
                "2":"50%",
                "3":"33%",
                '4':'50%',
                "5":"33%",
                '6':'33%',
                "7":"33%",
                '8':'33%',
                "9":"33%",

            },
            imgH:{
                "1":"auto",
                "2":"161px",
                "3":"105px",
                '4':'105px',
                "5":"105px",
                '6':'105px',
                "7":"105px",
                '8':'105px',
                "9":"105px",

            }
        }

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
                                    {/*{filter.date(show.createTime)}*/}
                                    <span>{show.coverTitle}</span>
                                </div>
                            </div>
                            <div className={'follow'}>
                                <span>+  关注</span>
                            </div>
                        </div>
                        <div className={'dishDetail_instroduce'}>{show.introduce}</div>

                        <div className={'dishDetail_image'}>

                                {
                                    show.image?show.image.map((v,i)=>(
                                        <div className={'showlist_center'} key={i} style={{width:this.state.imgW[show.image.length]}} >
                                            <img src={v} alt=""  style={{width:"100%",height:this.state.imgH[show.image.length]}}/>
                                        </div>
                                    )):null
                                }

                        </div>
                        <div className={'dishDetail_title'}>
                            <div>{show.coverTitle}</div>
                            <div>
                                <span>找食谱</span>
                                <i className={'iconfont icon-iconfontyoujiantou-copy'}></i>
                            </div>
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
                    <div className={'dishDetail_bottom'}>
                        <section>
                            <div >
                                <span>点赞{show.likeNum}</span>
                                <div></div>
                            </div>
                            <div>
                                <span>打赏{show.rewardNum}</span>
                                <div></div>
                            </div>
                        </section>

                        <div>
                            <span>评论</span>
                            <div></div>
                        </div>

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
