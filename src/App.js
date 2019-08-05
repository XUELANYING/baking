import React from 'react';
import './asset/css/common.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import router from './router';
import actionCreator from './store/actionCreator'
import RouterGuard from "./router/routerGuard";
import Loading from './component/common/loading'
import axios from 'axios'
import Lrouters from "./router/Lrouters";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false
        }
    }
    render() {
        return (
            <div className={"App"}>
                {
                    this.state.isLoading ? <Loading/> : <Router>
                        <Switch>
                            {
                                router.routers.map((v, i) => (
                                    <Route key={i} exact={v.exact} render={() => (<RouterGuard {...v}/>)}
                                           path={v.to}></Route>
                                ))
                            }
                            {
                                Lrouters.map((v,i)=>(
                                    <Route exact={v.exact} key={i} path={v.path} component={v.component}></Route>
                                ))
                            }
                        </Switch>
                    </Router>
                }
            </div>
        );
    }
    componentWillMount() {
        if(! localStorage.csrfToken){
            localStorage.csrfToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOjAsImV4cCI6MTc1Mzc3NzIzMywiaWF0IjoxNTY0Mzg4NDMzfQ.N_xvMOAIQwmW-ff8By4ia2xN1DIhb9x98Kpkxz3bgQE'
        }
        // loading 动画 的结束 控制 模块
        if (this.state.isLoading) {
            setTimeout(() => {
                this.setState({
                    isLoading: false
                })
            }, 2500)
        }
    }
}

export default connect((state) => ({...state}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(App);
