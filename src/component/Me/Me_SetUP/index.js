import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Link,
    Switch,
    withRouter
} from "react-router-dom"
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import "@asset/css/nest/Me/meSetup.scss"
import Tailoring from "./Tailoring"
import AddSonson from "../addlistOSon/acSonSon";
class MeSetUp extends React.Component {
    state = {
        open: false,
    }

    onOpenChange = (...args) => {
       // console.log(args);
        this.setState({open: !this.state.open});
        const con = document.getElementsByClassName("my_Top")[0]
        const see = document.getElementsByClassName("Me_SetUp")[0]
        const ree = document.getElementsByClassName("am-drawer-draghandle")[0]
        const iTem= document.getElementsByClassName("Item")
        con.style.zIndex = 11
        //console.log(args[0])
         if(args[0]===false){
             see.style.zIndex = 11
             con.style.zIndex = 5
             ree.style.display="none"
         }
    }
    componentDidMount(){
    }

//<li>    <List className="Item"><h3>个人设置</h3></List></li>
    render() {
        // fix in codepen
        const sidebar = (
              <div className={"codeList"}>
                  <List>
                      <List className="Item">
                           <h3>设置</h3>
                      </List>
                          <div className={"coo"}>
                              <List className="Item coSon">
                                  <h3 className={"coSon_h3"}>
                                      个人设置
                                          <i onClick={()=>{
                                              this.props.history.push("/me/setUP/tail")
                                          }}>
                                              >
                                          </i>

                                  </h3>

                                  <Route exact={true}  path={"/me/setUP/tail"} component={Tailoring}></Route>

                              </List>
                              <List className="Item"><h3  className={"coSon_h3"}>账号设置  <i> > </i></h3></List>
                          </div>
                           <div className={"donDon"}>
                               <List className="Item"><h3  className={"coSon_h3"}>意见反馈  <i> > </i></h3></List>
                               <List className="Item"><h3  className={"coSon_h3"}>用户守则  <i> > </i></h3></List>
                               <List className="Item"><h3  className={"coSon_h3"}>关于我们  <i> > </i></h3></List>
                           </div>
                      <div className={"donwon"}>
                          <List className="Item">
                              <h3  className={"coSon_h4"}>
                                  <Button type="warning" className={"ddde"} onClick={()=>{
                                      this.props.history.push("/login")
                                  }}>退出</Button>
                              </h3>
                          </List>
                      </div>


                  </List>
              </div>);

        return (
            <div>
            <NavBar className={"Me_SetUp"}  icon={<Icon type="ellipsis" />} onClick={this.onOpenChange}>
                <img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" alt=""/>
            </NavBar>
            <Drawer
                    position={'right'}
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
        </div>);
    }
}
export default  withRouter(MeSetUp)
