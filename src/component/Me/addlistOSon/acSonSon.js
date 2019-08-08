import React from "react";
import {
    Route,
    withRouter
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import test from "@store/actionCreator/Me";
import "@asset/css/nest/Me/acSonson.scss"

//创建人 郭郭
//时间:8/7
//功能：三级路由跳转 调取刘妈妈的接口
//待优化：98行 跳转刘妈妈页面 有问题  但是问题不大
//亮点;功能朋友圈   难点没有


class AcSonson extends React.Component {
    constructor() {
        super()
        this.state = {
            imgW: {
                "1": "219px",
                "2": "50%",
                "3": "33%",
                '4': '50%',
                "5": "33%",
                '6': '33%',
                "7": "33%",
                '8': '33%',
                "9": "33%",

            },
            imgH: {
                "1": "auto",
                "2": "161px",
                "3": "105px",
                '4': '105px',
                "5": "105px",
                '6': '105px',
                "7": "105px",
                '8': '105px',
                "9": "105px",

            }
        }

    }

    render() {
        const con = this.props.sondoubleSon[0]
       // console.log(con)
        return (
            <div id={'dishDetail_wrap_outside'}>
                {
                    this.props.sondoubleSon.map((v, i) => {
                        return (
                            <div key={i}>

                                <div className={'activityDetail_head'}>
                                    <img
                                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                                        onClick={()=>{
                                            this.props.history.go(-1)
                                        }}
                                    />

                                    <span>作品</span>
                                </div>
                                <div id={'dishDetail_wrap'}>
                                    <div className={'dishDetail_info'}>
                                        <img src={v.clientImage} alt=""/>
                                        <div className={'userinfo'}>
                                            <p>{v.clientName}</p>
                                            <div>
                                                <span>{v.createTime}</span>
                                                {/*{filter.date(show.createTime)}*/}
                                                <span>{v.coverTitle}</span>
                                            </div>
                                        </div>
                                        <div className={'follow'}>
                                            <span>+  关注</span>
                                        </div>
                                    </div>
                                    <div className={'dishDetail_instroduce'}>{v.introduce}</div>

                                    <div className={'dishDetail_image'}>

                                        {
                                            v.image ? v.image.map((con, i) => (
                                                <div className={'showlist_center'} key={i}
                                                     style={{width: this.state.imgW[v.image.length]}}>
                                                    <img src={con} alt="" style={{
                                                        width: "100%",
                                                        height: this.state.imgH[v.image.length]
                                                    }}/>
                                                </div>
                                            )) : null
                                        }

                                    </div>
                                    <div className={'dishDetail_title'}>
                                        <div>{v.coverTitle}</div>
                                        <div>
                                            <span   onClick={()=>{
                                                this.props.history.push("/classify")
                                            }}>找食谱</span>

                                            <i className={'iconfont icon-iconfontyoujiantou-copy'}></i>
                                        </div>
                                    </div>

                                </div>
                                <div className={'dishDetail_bottom'}>
                                    <section>
                                        <div>
                                            <span>点赞{v.likeNum}</span>
                                            <div></div>
                                        </div>

                                        <div>
                                            <span>打赏{v.rewardNum}</span>
                                            <div></div>
                                        </div>
                                    </section>

                                    <div>
                                        <span>评论</span>
                                        <div></div>
                                    </div>

                                </div>

                            </div>

                        )
                    })
                }
            </div>
        )
    }

// {
//     this.props.sondoubleSon.map((v,i)=>{
//     return (
// <div key={i}>
// <img src={v.clientImage} alt=""/>
// </div>
// )
// })
// }
    componentDidMount(){
        const  con =  this.props.match.params.id/1
        this.props.acSonson(con)
    }
}
export default  connect((state)=>{ return{sondoubleSon:state.Me.sondoubleSon}},(dispatch)=>bindActionCreators(test,dispatch))(withRouter(AcSonson))
