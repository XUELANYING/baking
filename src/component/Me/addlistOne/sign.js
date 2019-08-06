import React,{Fragment} from "react";
import {
    Route,
    withRouter
} from "react-router-dom"
import  SignSon from  "../addlistOSon/signSon"
import  SignAddlist from "../addlistOSon/signAddlist"
import  SignTime from "../addlistOSon/signTime"
import  "@asset/css/nest/Me/sign.scss"
//点击弹出
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';

//亮点 快乐大转盘
//创建人：郭郭
//时间：8月3日//8月6日加了个日历和登陆
//下方数据渲染
//待优化：登陆跳转的地址 更改行数：67行

class Sign extends React.Component{
    render(){
        const  son = [
            {img:"https://image.hongbeibang.com/FkNucS_nOe124-csHR6jB2LUtuba?38X48"},
            {img:"https://image.hongbeibang.com/Fj43hsL0BcA8iY5Dg0WlYGAQitKy?38X48"},
            {img:"https://image.hongbeibang.com/Fi8Fqmx9JtbuHUG5A-8mK9d0Ot_H?38X48"}
        ]
     //   console.log(this.props.history) 提示框
        const alert = Modal.alert;
        const showAlert = () => {
            const alertInstance = alert('提示', '15帮贡/次，而你没有钱💴', [
                { text: '确定', style:{color: "#79BAF9"} },
            ]);
            setTimeout(() => {
                // 可以调用close方法以在外部close
                console.log('auto close');
                alertInstance.close();
            }, 500000);
        };
        const con =JSON.parse(localStorage.getItem("doList"))

        return (
            <div className={"Sign"}>
                {/*top栏*/}
                <div className={"sign_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p className={"signTime"}>规则</p>
                </div>
                 {/*center部分*/}
                <div  className={"sign_center"}>
                    {/*个人信息*/}
                    <div className={"sign_mag"}>
                        <img src="https://image.hongbeibang.com/Fkxe82f-QEQ-fsukldcYOqwxVJLL?132X132&imageView2/1/w/132/h/132" alt=""/>
                        <h2>
                            <p>你已连续签到 <i>0</i> 天</p>
                            <span>超过了<i>0.00%</i>的朋友</span>
                        </h2>
                        <h3>
                            {/*日历==签到*/}
                            {/*等登陆跳转加上*/}
                            {
                                con.uesecon?<SignTime></SignTime>:<div><p>请登录</p></div>
                            }

                        </h3>
                    </div>

                    {/*快乐大转盘*/}
                    <div className={"sign_bigHappy"}>
                        <SignSon></SignSon>
                        <WingBlank size="lg" className={"sign_anth"}>
                            <Button onClick={showAlert} className={"sign_button"}>15帮贡/次</Button>
                            <p>今日还有<i>0</i>次机会</p>
                        </WingBlank>
                    </div>
                    {/*幸运任务*/}
                    <div className={"signLink"}>
                        
                        <div className={"signLinkO"}>
                            <img src="https://image.hongbeibang.com/Ftfu-2lUpdTjYCWBv6uhq3_k0ZOd?108X103" alt=""/>
                            <div>
                                <h2>幸运任务</h2>
                                <span>抽奖领取</span>
                            </div>
                        </div>

                        <div className={"signLinkO"}>
                            <img src="https://image.hongbeibang.com/FoUcpZk7ArkzClLT2qAvnI4Ukqv1?112X97" alt=""/>
                            <div>
                                <h2>我的帮贡</h2>
                                <span>帮贡兑换</span>
                            </div>
                        </div>
                        
                    </div>
                    {/*signType*/}
                    <div className={"signType"}>
                        <h2>------------今日大奖花落谁家---------</h2>
                    </div>
                    {/*排行榜*/}
                        <div className={"signAddlist"}>

                            <div className={"signImg"}>
                                {
                                    son.map((v,i)=>{
                                          return (
                                              <div key={i} className={"signAddimg"}>
                                                  <img src={v.img} alt=""/>
                                              </div>

                                          )
                                    })
                                 }
                            </div>

                            <SignAddlist></SignAddlist>
                        </div>

                </div>
            </div>
        )

    }
}
export default  withRouter(Sign)