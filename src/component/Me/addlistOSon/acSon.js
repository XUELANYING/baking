import React from "react";
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link,
    Switch,
    withRouter
} from "react-router-dom"
import test from "../../../store/actionCreator/Me";
import "@asset/css/nest/Me/acson.scss"
import AddSonson from "./acSonSon";
 class AcSon extends React.Component{
     constructor(){
         super()
     }
     componentDidMount(){
         const  con = this.props.match.params.id/1
         this.props.addSonList(con)
         this.handleClick()

         //console.log(this.props.sondouble)
     }
     handleClick(){
            //console.log(11111,this.props.sondouble)
             this.setState({
                     index:this.props.sondouble
             })


     }
     shouldComponentUpdate(nextProps,nextState){ // 应该使用这个方法，否则无论props是否有变化都将会导致组件跟着重新渲染
         //console.log(nextProps,nextState)
         if(nextProps.sondouble === nextState.index){
             return false
         }else {
             return true
         }
     }



    render(){
        return (
            <div className={"acSon"}>
                <div className={"acson_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p>精彩活动</p>
                </div>
                  <div className={"acson_center"}>
                      {
                          this.props.sondouble.map((v,i)=>{
                              return  (
                                  <div key={i}>
                                      <div className={'activityDetail_image'}>
                                          <img src={v.image} alt=""/>
                                      </div>
                                      <div className={"activityDetail_image_two"} dangerouslySetInnerHTML={{__html:v.activityIntroduce}}></div>

                                      <div className={'activity_join'}>
                                          <span>参与活动即可获得幸运数字</span>
                                      </div>
                                      <div className={'activity_join activity_join_two'}>
                                          {v.component?<span>参与人数 {v.component.count}</span>:<span></span>}
                                      </div>

                                        <div className={'activity_common_wrap'}>
                                            {
                                                v.component.data.map((info,c)=>{
                                                    return (
                                                        <div key={c} className={"aaa"}>
                                                            <div className={'activity_common'}>
                                                                <Link to={"/me/activity/addSonson/"+info.contentId}  key={i} onClick={this.handleClick.bind(this)} >
                                                                    <img src={info.coverImage} alt="动态图片"/>
                                                                    <div className={'activity_userInfo'}>
                                                                        <img src={info.clientImage} alt="头像"/>
                                                                        <div>
                                                                            <span>{info.clientName}</span>
                                                                            <p>{info.clientSign}</p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <Route exact={true}  path={"/me/activity/addSonson/"+info.contentId} component={AddSonson}></Route>
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
                  </div>

            </div>
        )
    }
}
export default  connect((state)=>{ return{sondouble:state.Me.sondouble}},(dispatch)=>bindActionCreators(test,dispatch))(withRouter(AcSon))
