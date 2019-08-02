import React,{Fragment} from 'react';
import NavList from './Navlist/index'
import router from './index'

export default class RouterGuard extends React.Component {
    render() {
        return (
            <Fragment>
                <div className={"tab"}>
                    {
                        //isShow的值为true，则显示
                          this.props.meta.isShow?<NavList navList={router.routers}></NavList>:null
                    }
                </div>
                <this.props.component  children={this.props.children}/>
            </Fragment>
        )
    }
    componentDidMount(){
        document.title= this.props.meta.title
    }
}
