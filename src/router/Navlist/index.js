import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

class NavList extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.navList.map((v, i) => (
                        //display的值为true，则不显示
                        v.display ? null : <NavLink className={'tabbar-item'} exact={true} key={i} to={v.to}
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

    handleClick(i) {
        this.setState({
            index: i
        })
    }
}

export default NavList;
