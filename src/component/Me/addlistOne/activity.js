import React from "react";
import test from "../../../store/actionCreator/Me"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";
import   AddlistOSon from "../addlistOSon/acSon"
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link,
    Switch,
    withRouter,
} from "react-router-dom"
import "@asset/css/nest/Me/activity.scss"
 class Activity extends React.Component{
    constructor(props){
        super(props)
        this.state={
            result:[],
            pageIndex:1,

        }
    }
    render(){
        return (
            <div className={"con"}>
                <div className={"con_top"}>
                    <img
                        src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt=""
                        onClick={()=>{
                            this.props.history.go(-1)
                        }}
                    />
                    <p>精彩活动</p>
                </div>
                <div className={"conSon_list"}>
                    {
                        this.props.test.map((item,i) => {
                            return (
                                <div className={"conSon-ADD"} key={i}>

                                    <Link to={"/me/activity/addlistOSon/"+item.contentId} exact={item.exact}  key={i} >
                                        <img width={"100px"} src={item.image} alt=""/>
                                    </Link>
                                    <div className={"conSon-Add"}>
                                        <h3>{item.coverTitle}</h3>
                                        <i>{item.activityEndTime.substring(17,5)}截至</i>
                                    </div>

                                    <Route exact={true}  path={"/me/activity/addlistOSon"+item.contentId} component={AddlistOSon}></Route>
                                </div>
                            )
                        })


                    }
                </div>



            </div>
        )

    }
     componentDidMount(){
          // console.log(this.props)
         this.props.goodsCon()
     }
}
export default connect((state)=>({test:state.Me.activity}),(dispatch)=>bindActionCreators(test,dispatch))( withRouter(Activity))