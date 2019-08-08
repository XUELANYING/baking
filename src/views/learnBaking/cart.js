import React, {Component,Fragment} from 'react';
import "@asset/css/learnBaking/cart.scss";
import actionCreator from "@store/actionCreator";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onOpenChange = (...args) => {
        console.log(111)
        // console.log(args);
        this.setState({open: !this.state.open});
        const con = document.getElementsByClassName("my_Top")[0]
        const see = document.getElementsByClassName("Me_SetUp")[0]
        const ree = document.getElementsByClassName("am-drawer-draghandle")[0]
        const iTem= document.getElementsByClassName("Item")
        con.style.zIndex = 30
        console.log(args[0])
        if(args[0]===false){
            con.style.zIndex = 5
        }
    }
    render() {
        const sidebar = (
            <div className={"codeList"}>
                <List>
                    <List className="Item">
                        <div className={"serv"}>服务</div>
                        <div className="condition">
                            <div className="work">
                                <div className="dian"></div>
                                <h3>永久无限次回看</h3>
                                <p>课程视频支持永久回看，不限次数</p>
                            </div>
                            <div className="work">
                                <div className="dian"></div>
                                <h3>购买后即看</h3>
                                <p>报名后即刻观看视频，随时随地即学即做</p>
                            </div>
                            <div className="work">
                                <div className="dian"></div>
                                <h3>烘焙帮自营课程</h3>
                                <p>烘焙帮原创，课程/视频/课件均为烘焙帮自制，品质
                                    保证</p>
                            </div>
                            <div className="work">
                                <div className="dian"></div>
                                <h3>高效的学习体验</h3>
                                <p>课程精心录制、剪辑，剔除无效内容，让学习更高效</p>
                            </div>
                            <div className="work">
                                <div className="dian"></div>
                                <h3>分步骤学习</h3>
                                <p>按实操步骤实现结构清晰的课程框架，跟着做保证成
                                    功率</p>
                            </div>
                            <div className="work">
                                <div className="dian"></div>
                                <h3>专注打造唯一品类</h3>
                                <p>为你提供最好的配方与做法，每个品类只有一个课程，持续优化迭代</p>
                            </div>
                        </div>
                    </List>
                </List>
            </div>);
        return (
            this.props.carList.clientId?
            <Fragment>
                <div className={"cart"}>
                    <div className="cart_con">
                        <div className="cart_img" onClick={()=>this.props.history.push("/lesson/"+this.props.carList.educationCourseId+"/"+this.props.carList.clientId)}>
                            <img src={this.props.carList.image} alt=""/>
                            <div className={"cart_word"}>
                                <h6>{this.props.carList.shareTitle}</h6>
                                 <p>
                                     <span>讲师：</span>
                                     <span>{this.props.carList.clientName}</span>
                                 </p>
                            </div>
                        </div>
                        <div className="cart_pir">
                            <div className="subtotal">
                                <span>小计：</span>
                                <span>￥{this.props.carList.preDiscountPrice}</span>
                            </div>
                            <div style={{height:"1px",margin:"10px auto",background:"#f1f1f1"}}></div>
                            <div className="total">
                                <span>合计</span>
                                <i>￥{this.props.carList.price}</i>
                            </div>
                        </div>
                        <div className="cart_ser">
                            <div className="serve">
                                <img src="https://image.hongbeibang.com/FtxphXt4PqYG1Ev17CPrMfbmtM3V?imageMogr2/strip/thumbnail/640x640" alt=""/>学堂服务</div>
                            <div style={{height:"1px",margin:"10px auto",background:"#f1f1f1"}}></div>
                            <div className="cart_con" onClick={this.onOpenChange.bind(this)}>
                                <div className="cart_work">
                                    <div className="cart_top">
                                        <div className="cart_dian"></div>
                                        <p>永久无限次回看</p>
                                        <div className="cart_dian"></div>
                                        <p>购买后即看</p>
                                        <div className="cart_dian"></div>
                                        <p>烘焙帮自营课程</p>
                                    </div>
                                    <div className="cart_bot">
                                        <div className="cart_dian"></div>
                                        <p>高效的学习体验</p>
                                        <div className="cart_dian"></div>
                                        <p>分步骤学习</p>
                                        <div className="cart_dian"></div>
                                        <p>专注打造唯一品类</p>
                                    </div>
                                </div>
                                <div className="cart_san">
                                    <img src="https://image.hongbeibang.com/Fqee_DzmTrYWinRY2tMPfDtu1ym8" alt=""/>
                                </div>
                            </div>
                            <Drawer
                            position={'bottom'}
                            className="my_Top"
                            sidebar={sidebar}
                            style={{ minHeight: document.documentElement.clientHeight }}
                            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                            sidebarStyle={{ border: '1px solid #ddd' }}
                            enableDragHandle
                            open={this.state.open}
                            onOpenChange={this.onOpenChange}
                            >

                            </Drawer>
                        </div>
                    </div>
                    <div className="cart_fot">
                        微信支付
                    </div>
                </div>
            </Fragment>:null
        )
    }
    componentDidMount(){
        this.props.getCart(this.props.match.params.contentId)
    }
}
export default withRouter(connect((state) => ({
    carList: state.learnBaking.carList,
}), (dispatch) => bindActionCreators(actionCreator, dispatch))(Cart));