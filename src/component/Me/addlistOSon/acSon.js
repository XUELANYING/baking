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
import AddSonson from "./acSonSon";
 class Convert extends React.Component{
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
            <div>
                {
                      this.props.sondouble.map((v,i)=>{
                              return  (
                                     <div key={i}>
                                          <h2>{v.activityPrefixTitle}</h2>
                                          <div dangerouslySetInnerHTML={{__html:v.activityIntroduce}}></div>
                                         {
                                             v.component.data.map((info,c)=>{
                                                   return (
                                                       <div key={c}>
                                                           <Link to={"/me/activity/addSonson/"+info.contentId}  key={i} onClick={this.handleClick.bind(this)} >
                                                               <h2>{info.coverSummary}</h2>
                                                           </Link>
                                                           <Route exact={true}  path={"/me/activity/addSonson/"+info.contentId} component={AddSonson}></Route>

                                                       </div>
                                                   )
                                             })
                                         }
                                     </div>
                              )
                      })
                }
            </div>
        )
    }
}
export default  connect((state)=>{ return{sondouble:state.Me.sondouble}},(dispatch)=>bindActionCreators(test,dispatch))(withRouter(Convert))