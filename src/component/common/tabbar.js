import React from 'react';
import NavList from '../../router/Navlist/index'
import router from '../../router/index'

export default class Tabbar extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.meta.isShow?  <NavList navList={router.routers}></NavList>:null
                }
            </div>
        )
    }
}
