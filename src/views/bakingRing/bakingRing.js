import React from 'react';
import router from '../../router'
import '../../asset/font/iconfont.css'
import '../../asset/css/bakingRing/main.scss'
import {Switch, NavLink, Route,withRouter} from 'react-router-dom'
import Attention from './attention'
import Latest from './latest'
import Expert from './expert'
class BakingRing extends React.Component {
    constructor() {
        super();
        this.state = {
            index:1 
        };
        this.data=[
            {
                name:'关注',
                index: 0
            },{
                name:'最新',
                index: 1
            },{
                name:'达人',
                index: 2
            }
        ]
    }
    handleClick(i){
        this.setState({
            index:i
        })
    }
    render() {
        return (
            <div id={"bakingRing"}>
              <div id='aaaa'>
                    <div id={"baking_header"}>
                        <span className={"baking_header_icon baking_header_icon_left"}><i className={"iconfont icon-jia"}></i></span>
                        <div className={'baking_header_main'}>
                            {
                                this.data.map((v,i)=>(
                                    <div key={i} onClick={this.handleClick.bind(this,i)}
                                      className={this.state.index === i ? 'active' : ''}>{v.name}</div>
                                ))
                            }
                        </div>
                        <span className={"baking_header_icon baking_header_icon_right"}>
                            <i className={"iconfont icon-lingdang"}></i>
                        </span>
                    </div>
              </div> 
                {
                    this.state.index === 0?<Attention></Attention>:this.state.index === 1 ? <Latest></Latest>:this.state.index === 2 ?<Expert></Expert> :null
                }      
            </div>
        )
    }
}
export default withRouter(BakingRing)
