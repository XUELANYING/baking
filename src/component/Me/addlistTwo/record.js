import React,{Fragment} from "react";
import {
    Route,
    withRouter
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import  "@/asset/css/nest/Me/record.scss"
import test from "../../../store/actionCreator/Me";
//亮点 数据分割化根据时间分割   分为昨天 和 更早
//创建人：郭郭
//时间：8月5日
//addlistOne====最新活动
//待优化：图片登陆地址（在刘妈妈那里没有调）  跳转的地址 "/recipe/"+v.clientId+"/"v.contentId
//浏览记录

class Record extends React.Component{
    render(){

        return (
            <div className={"record"}>
                {/*record_top顶部*/}
                <div className={"record_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p className={"signTime"}>浏览记录</p>
                </div>

                {/*record_center*/}
                <Fragment>
                          {
                              this.props.record.map((v,i)=>{
                                  return (
                                      <div className={"record_center"} key={i}>
                                          {/*最新的数据*/}

                                           <div className={"record_new"}>

                                               <h2>昨天</h2>
                                               {
                                                   v.newList==[]?
                                                       <div className={"record_show"}>
                                                          <p>客官看来昨天您没有来呀！！！</p>
                                                       </div>
                                                       : <div className={"record_block"}>
                                                       {
                                                           v.newList.map((v,i)=>{
                                                               return (
                                                                   <div key={i} className={"nnkd"}>
                                                                       <div className={"nnkd_img"}>
                                                                           <img src={v.recipe.image} alt=""/>
                                                                       </div>

                                                                       <div className={"recipeMasge"}>
                                                                           <h3>{v.recipe.coverTitle}</h3>
                                                                           <i>{v.recipe.tip}</i>
                                                                           <p>{v.recipe.clientName}</p>

                                                                           <div>
                                                                               <img src={"https://image.hongbeibang.com/FkYy0i06K2Xbnp7UkhGssEFgzULR?200X200&imageView2/1/w/32/h/32"} alt=""/>
                                                                               <span>{v.recipe.visitNum}</span>

                                                                               <img src={"https://image.hongbeibang.com/FgCTJvM3b9Q3sT5V5YI8ReK4h3dv?200X200&imageView2/1/w/32/h/32"}alt=""/>

                                                                               <span>{v.recipe.collectNum}</span>
                                                                           </div>
                                                                       </div>

                                                                   </div>
                                                               )
                                                           })
                                                       }
                                                   </div>
                                               }



                                         </div>

                                          {/*之前的数据的一批数据*/}
                                          <div  className={"record_old"}>
                                              <h2>更早</h2>
                                              {

                                                  v.oldList.map((v,i)=>{
                                                      return (
                                                              <div key={i} className={"nnkd"}>
                                                                  <div className={"nnkd_img"}>
                                                                      <img src={v.recipe.image} alt=""/>
                                                                  </div>

                                                                  <div className={"recipeMasge"}>
                                                                      <h3>{v.recipe.coverTitle}</h3>
                                                                      <i>{v.recipe.tip}</i>
                                                                      <p>{v.recipe.clientName}</p>

                                                                      <div>
                                                                          <img src={"https://image.hongbeibang.com/FkYy0i06K2Xbnp7UkhGssEFgzULR?200X200&imageView2/1/w/32/h/32"} alt=""/>
                                                                          <span>{v.recipe.visitNum}</span>

                                                                          <img src={"https://image.hongbeibang.com/FgCTJvM3b9Q3sT5V5YI8ReK4h3dv?200X200&imageView2/1/w/32/h/32"}alt=""/>

                                                                          <span>{v.recipe.collectNum}</span>
                                                                      </div>
                                                                  </div>

                                                              </div>
                                                      )
                                                  })
                                              }
                                          </div>

                                      </div>
                                  )
                              })
                          }



                </Fragment>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props)
        this.props.Record()
    }
}
export default connect((state)=>({record:state.Me.record}),(dispatch)=>bindActionCreators(test,dispatch))(withRouter(Record))
