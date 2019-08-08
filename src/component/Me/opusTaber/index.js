import React from "react"
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import  Troble from  "./troble"
import  Cookbook from "./cookbook"
import  Opus  from "./opus"
import  "@/asset/css/nest/Me/opusTaber.scss"
import {
    Route,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"
import "@/asset/css/nest/Me/ceeTaber.scss"
class OpusTaber extends React.Component{
    constructor(){
        super()
        console.log()
        // console.log(
        //     match,history,location
        // )
            this.state={
                    index:1
            }
    }
// 功能:top由跳转
// 时间：7/31
// 创建者：郭宇迪
// 未优化
// 创建名字：className={"taber"}
    render(){
        const tabs = [

            { title: <Badge >作品</Badge> },
            { title: <Badge >食谱</Badge> },
            { title: <Badge >问答</Badge> },
        ];
        const  {index} = this.state


        return (
            <div className={"cee"}>
                <div className={"cee_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <div>
                        <p>发布</p>
                    </div>

                </div>
                <div className={"cee_taber"}>
                    <Tabs tabs={tabs}
                          initialPage={index}
                          onTabClick={(tab,index)=>{
                                   //console.log(tab,index)
                          }}
                          //tabBarUnderlineStyle={}
                          tabBarActiveTextColor={"#4A4945"}
                          tabBarInactiveTextColor={"#999999"}
                    >
                        <Opus></Opus>
                        <Cookbook></Cookbook>
                        <Troble></Troble>
                    </Tabs>

                </div>
            </div>
        )
    }



    componentDidMount(){
        this.setState({
             index:this.props.match.params.id/1
        })

    }
    componentWillMount(){
        this.setState({
            index:this.props.match.params.id/1
        })

    }

}
export  default  withRouter(OpusTaber);
