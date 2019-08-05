import React from "react";
import {
    Route
} from "react-router-dom"
import Top from "../top"
import { Drawer, List, NavBar, Icon } from 'antd-mobile';

export default class MeSetUp extends React.Component {
    state = {
        docked: false,
    }
    onOpenChange = (...args) => {
        this.setState({ docked: !this.state.docked });
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

        return (<div>
            <NavBar className={"Me_SetUp"} icon={<Icon type="ellipsis" />} onClick={this.onOpenChange}>
                <img src="https://image.hongbeibang.com/FthUBRvh6uWFq7omAeGtn8A-0E4s?48X48&imageView2/1/w/48/h/48" alt=""/>
            </NavBar>
            <Drawer
                    position={'right'}
                    className=" my_Top my-drawer"
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                    sidebarStyle={{ border: '1px solid #ddd' }}
                    sidebar={sidebar}
                    docked={this.state.docked}
            >
               {/*<Top></Top>*/}
            </Drawer>
        </div>);
    }
}
