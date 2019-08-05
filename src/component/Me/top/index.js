import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link,
    Switch
} from "react-router-dom"
import "@asset/css/nest/Me/Top.scss"

import AddListone  from "@router/Me/addlistOne";
import AddListtwo  from "@router/Me/addlistTwo"

//import OpusTaber from "../../../router/Me/待优化"
//创建人：郭郭
//时间：7/31
//功能我的主页面dom操作 ===className={"ME_TOP"}
//带优化二级路由
//目标 隐藏路由所携带的参数

class Top extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let arr = [{add:"关注",con:0},{add:"粉丝",con:3000},{add:"帮贡",con:30}]
        let con = [
            { context:"作品", img:"https://image.hongbeibang.com/FgyV7GBC4RPoagtZnK-npLaoB1N6?160X160&imageView2/1/w/80/h/80",id:0},
            { context:"食谱", img:"https://image.hongbeibang.com/FhxeeHCgOPEcoLPR3sP6XNbybdvK?160X160&imageView2/1/w/80/h/80",id:1},
            { context:"问答", img:"https://image.hongbeibang.com/FgKxvkwdg8OOr9mhPok2JBVnCG2n?160X160&imageView2/1/w/80/h/80",id:2},
            { context:"收藏", img:'https://image.hongbeibang.com/FkmRCthKDaI5Afc_NdkTZaqNLPE1?160X160&imageView2/1/w/80/h/80',id:3}
        ]

        return (
            <div>
                <div className={"ME_TOP"}>
                       {/*个人信息块*/}
                       <div className={"ME_TOP_MASAGE"}>
                           <img src="https://image.hongbeibang.com/Fkxe82f-QEQ-fsukldcYOqwxVJLL?132X132&imageView2/1/w/132/h/132" alt=""/>
                           <div className={"ME_TOP_MASAGE_right"}>
                                    <h3><i>郭郭</i><span><img src="https://image.hongbeibang.com/FmFlZjZn6BHHnqrYVMz6MGecwc0J?200X200&imageView2/1/w/50/h/50" alt=""/></span></h3>
                                    <h4><i>ID：5m8m20190730190507558</i>
                                        <span>

                                        <img src="https://image.hongbeibang.com/Fr2noR6eeftUXEWQp5xx3DZjUj16?94X94&imageView2/1/w/46/h/46" alt=""/>
                                         </span>
                                    </h4>
                                    <h5>经验值：0/100</h5>
                           </div>
                       </div>
                       {/*个人粉丝块*/}
                       <div className={"ME_TOP_finds" }>
                           {
                               arr.map((v,i)=> {
                                   return (
                                       <div key={i}>
                                           <p>{v.con}</p>
                                           <p>{v.add}</p>
                                       </div>
                                   )

                               })
                           }
                       </div>
                       {/*个人问题板块*/}
                       <div className={"ME_TOP_NAV"}>
                          <div className={"cee"}>

                              {
                                  con.map((v,i)=>(
                                  <div key={i} className={"see"}>
                                      <Link exact={v.exact} to={"/me/opustaber/"+v.id} key={i} className={"see_son"}>
                                          <img src={v.img} alt=""/>
                                          <p>{v.context}</p>
                                      </Link>
                                      <Route exact={v.exact}  path={v.path} component={v.component}></Route>
                                  </div>

                                  ))

                              }

                          </div>
                       </div>

                </div>

                <div className={"ME_BOOTOM"}>
                    {/*分类列表 实现路由跳转*/}
                    <div className={"ME_TOP_LIST_ONE"}>
                        <AddListone></AddListone>
                    </div>

                    <div className={"ME_TOP_LIST_TWO"}>
                        <AddListtwo></AddListtwo>
                    </div>

                </div>

            </div>
        )

    }
    componentDidMount(){
        localStorage.removeItem("isFooter");
    }
}


export default Top
