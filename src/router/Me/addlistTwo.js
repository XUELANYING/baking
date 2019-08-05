import React from "react"
import "@asset/css/nest/Me/Top.scss"
import {
    NavLink,
    Link,
    BrowserRouter as Router,
    Route
} from "react-router-dom"
import ouper from "./router/addlistTRouter"
import "@asset/css/nest/Me/addlistOne.scss"
class TpusTaber extends React.Component{
    constructor(){
        super()
    }
// 功能:top由跳转
// 时间：7/31
// 创建者：郭宇迪
// 未优化
// 创建名字：className={"taber"}
    render(){
        return (
            <div>
                {/*<Router>*/}
                {
                    ouper.map((v,i)=>(
                        <div key={i} className={"addListRoute"}>
                            <Link to={v.to}  key={i} className={"addListRoute_son"}>
                                <img src={v.img} alt="" className={"img"}/>
                                <p>{v.context}</p>
                                <img src={v.imgs} alt="" className={"imgs"}/>
                            </Link>
                            <Route exact={v.exact}  path={v.path} component={v.component}></Route>
                        </div>

                    ))
                }
                {/*</Router>*/}
            </div>
        )
    }
    componentWillMount(){
        // let routerList = JSON.parse(JSON.stringify(Ouper.routers));
        // let index  = routerList.splice(5,4);
        //         this.setState({
        //              index
        //         })
    }

}
export  default TpusTaber;