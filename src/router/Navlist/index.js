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
                        v.display ? null :
                            <NavLink className={this.state.index === v.to ? 'tabbar-item active' : 'tabbar-item'}
                                     exact={true} key={i} to={v.to}
                                     onClick={this.handleClick.bind(this, v.to)}>
                                <img className={"tabbar-logo"}
                                     src={this.props.match.path === v.to ? v.meta.active : v.meta.unActive}/>
                                {v.name}
                            </NavLink>
                    ))
                }
            </Fragment>
        )
    }

    componentDidMount() {
        console.log(this.props.match)
        this.setState({
            index: this.state.path.indexOf(this.props.match.path)
        })
    }

    handleClick(i) {
        console.log(i)
        this.setState({
            index: i
        })

    }
}

export default withRouter(NavList);
