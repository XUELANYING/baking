import React, {Fragment} from 'react';
import NavList from './Navlist/index'
import router from './index'
import {withRouter} from 'react-router-dom'
import 'react-animated-router/animate.css'; //导入默认的切换动画样式，如果需要其它切换样式，可以导入自己的动画样式定义文件


class RouterGuard extends React.Component {
    render() {
        return (
            <Fragment>

                <this.props.component children={this.props.children}/>
                {
                    //isShow的值为true，则显示tabbar
                    this.props.meta.isShow ?
                        <div className={"tab"}><NavList navList={router.routers}></NavList></div> : null
                }
            </Fragment>
        )
    }

    componentDidMount() {
        document.title = this.props.meta.title || "烘焙帮"
    }
}

export default withRouter(RouterGuard)
