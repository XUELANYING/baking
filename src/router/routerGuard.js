import React,{Fragment} from 'react';
import NavList from './Navlist/index'
import router from './index'

export default class RouterGuard extends React.Component {
    render() {
        return (
            <Fragment>

                    {
                        //isShow的值为true，则显示
                          this.props.meta.isShow?<div className={"tab"}><NavList navList={router.routers}></NavList></div>:null
                    }

                <this.props.component  children={this.props.children}/>
            </Fragment>
        )
    }
    componentDidMount(){
        document.title= this.props.meta.title || "烘焙帮"
    }
}
