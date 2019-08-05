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
    Switch
} from "react-router-dom"

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

                {
                    this.props.test.map((item,i) => {
                        return (
                            <div className={"conSon-ADD"} key={item.activityDisplay / 1 - 1}>
                                <h3>{item.activityPrefixTitle}:{item.coverTitle}</h3>
                                <Link to={"/me/activity/addlistOSon/"+item.contentId} exact={item.exact}  key={i} >
                                    <img width={"100px"} src={item.image} alt=""/>
                                </Link>
                                <Route exact={true}  path={"/me/activity/addlistOSon"+item.contentId} component={AddlistOSon}></Route>
                            </div>
                        )
                    })


                }


            </div>
        )

    }
     componentDidMount(){
           console.log(this.props)
         this.props.goodsCon()
     }
}
export default connect((state)=>({test:state.Me.activity}),(dispatch)=>bindActionCreators(test,dispatch))(Activity)