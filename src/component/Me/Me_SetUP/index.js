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

        con.style.zIndex = 11
        //console.log(args[0])
         if(args[0]===false){
             see.style.zIndex = 6
             con.style.zIndex = 5
             ree.style.display="none"
         }
    }
    componentWillMount(){

    }

    render() {
        // fix in codepen
        const sidebar = (<List>
            {[1,2].map((i, index) => {
                if (index === 0) {
                    return (<List.Item key={index}
                                       thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                       multipleLine
                    >Category</List.Item>);
                }
                return (<List.Item key={index}
                                   thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                >Category{index}</List.Item>);
            })}
        </List>);

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
