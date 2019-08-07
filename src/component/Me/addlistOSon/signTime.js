import React from "react";
import {
    Route
} from "react-router-dom"
import {connect} from "react-redux";
import  {bindActionCreators}from "redux";

import { List, Switch, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
//addlistOne===SignTime
const extra = {
    '2017/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});
class SignTime extends React.Component{
    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

    constructor(props) {
        super(props);
        this.state = {
            en: false,
            show: false,
            config: {},
        };
    }

    renderBtn(zh, en, config = {}) {
        config.locale = this.state.en ? enUS : zhCN;
        return (
            <List.Item arrow="horizontal"
                       onClick={() => {
                           document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
                           this.setState({
                               show: true,
                               config,
                           });
                       }}
            >
                {this.state.en ? en : zh}
            </List.Item>
        );
    }

    changeLanguage = () => {
        this.setState({
            en: !this.state.en,
        });
    }

    onSelectHasDisableDate = (dates) => {
        console.warn('onSelectHasDisableDate', dates);
    }

    onConfirm = (startTime, endTime) => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime,
            endTime,
        });
    }

    onCancel = () => {
        document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
        this.setState({
            show: false,
            startTime: undefined,
            endTime: undefined,
        });
    }

    getDateExtra = date => extra[+date];

    render(){
        return (
            <div >
                <List>
                    {this.renderBtn('签到', 'Horizontal enter', { enterDirection: 'horizontal' })}
                    {
                        this.state.startTime &&
                        <List.Item>Time1: {this.state.startTime.toLocaleString()}</List.Item>
                    }
                    {
                        this.state.endTime &&
                        <List.Item>Time2: {this.state.endTime.toLocaleString()}</List.Item>
                    }
                </List>
                <Calendar
                    {...this.state.config}
                    visible={this.state.show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    pickTime={false}
                    minDate={new Date(+now - 5184000000)}
                    maxDate={new Date(+now + 31536000000)}
                />
            </div>
        )

    }
    componentDidMount(){

    }
}
export default SignTime