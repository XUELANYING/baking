import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import {
    withRouter
} from 'react-router-dom'

class NavList extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            path: ['/', '/show', '/questionAndAnswer', '/client']
        }
    }
    render() {
        return (
            <Fragment>
                {
                    this.props.navList.map((v, i) => (
                        //display的值为true，则不显示该路由
                        //因为问答模块有二级路由，activeClassName匹配不上，
                        v.display ? null :
                            <NavLink className={this.state.index === i ? 'tabbar-item active' : 'tabbar-item'}
                                     exact={true} key={i} to={v.to}
                                     onClick={this.handleClick.bind(this, i)}>
                                <img className={"tabbar-logo"}
                                     src={this.state.index === i ? v.meta.active : v.meta.unActive} alt=""/>
                                {v.name}
                            </NavLink>
                    ))
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.setState({
            index: this.state.path.indexOf(this.props.match.path)
        })
    }

    handleClick(i) {
        this.setState({
            index: i
        })
    }
    componentDidMount(){
        //console.log(222,this.props.navList)
    }
}

export default withRouter(NavList);
