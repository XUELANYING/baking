import React from 'react';
import './asset/css/common.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import router from './router';
import actionCreator from './store/actionCreator'
import RouterGuard from "./router/routerGuard";
import Loading from './component/common/loading'
import QuestionDetail from "./component/questionAnswer/questionDetail";

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
                            <Route path={'/question/:id'} component={QuestionDetail}></Route>
                        </Switch>
                    </Router>
                }
            </div>
        );
    }
    componentWillMount() {
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
