import React from 'react';
import Loadable from 'react-loadable';
import {Card} from 'antd-mobile';
import imgUrl from '../../asset/img/111.gif';

//过场组件
// 按需加载组件
export default function withLoadable (comp) {
    return Loadable({
        loader:comp,
        loading:(props)=>{
            if (props.error) {
                return <Card style={{width:"100%",height:"100%"}} >
                    加载错误。请刷新
                </Card>;
            } else if (props.timedOut) {
                return <Card style={{width:"100%",height:"100%"}} >
                    加载超时。请刷新
                </Card>;
            } else if (props.pastDelay) {
                return <Card style={{width:"100%",height:"100%"}}>
                    <img src={imgUrl} style={{height:"300px",width:"300px",margin:"40px auto"}} alt=""/>
                </Card>;
            } else {
                return null;
            }
        },
        timeout:10000
    })
}
