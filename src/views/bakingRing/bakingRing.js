import React from 'react';
import router from '../../router'
import '../../asset/font/iconfont.css'
import '../../asset/css/bakingRing/main.scss'
import {Switch, NavLink, Route,withRouter} from 'react-router-dom'
class BakingRing extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div id={"bakingRing"}>
              <div id='aaaa'>
                    <div id={"baking_header"}>
                        <span className="baking_header_icon baking_header_icon_left">
                            <i className="iconfont icon-jia"></i>
                        </span>
                        <nav className={'baking_header_main'}>
                            {
                                this.props.children.map((v,i)=>(

                                    v.isHide? null:<NavLink className={'baking_header_main_list'} activeClassName={'active'} exact={true} key={i} to={v.to}>{v.name}</NavLink>
                                ))
                            }
                        </nav>
                        <span className={"baking_header_icon baking_header_icon_right"}>
                            <i className={"iconfont icon-lingdang"}></i>
                        </span>
                    </div>
                </div> 

                    {
                        this.props.children.map((v,i)=>(
                            v.isHide? null:<Route key={i} exact={v.exact} path={v.path} {...v}/>

                        ))
                    }
            </div>
        )
    }
}
export default withRouter(BakingRing)
