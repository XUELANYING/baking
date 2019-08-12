import React from 'react';
import './asset/css/common.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import router from './router';
import RouterGuard from "./router/routerGuard";
import Loading from './component/common/loading'
import Lrouters from "./router/Lrouters";
import './asset/css/transition.scss'


const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back'
}
const Routes = withRouter(({location, history}) => {
    return (
        <TransitionGroup
            className={'router-wrapper'}
            childFactory={child => React.cloneElement(
                child,
                {classNames: ANIMATION_MAP[history.action]}
            )}
        >
            <CSSTransition
                key={location.pathname}
                timeout={500} // 动画时间设置为500ms，和css中的需要一致。
            >
                <Switch>
                    {
                        router.routers.map((v, i) => (
                            <Route key={i} exact={v.exact} render={() => (<RouterGuard {...v}/>)}
                                   path={v.to}></Route>
                        ))}
                    }
                    {
                        Lrouters.map((v, i) => (
                            <Route exact={v.exact} key={i} path={v.path} component={v.component}></Route>
                        ))
                    }
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
})

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            num: 0
        }
    }

    render() {
        return (
            <div className={"App"}>
                {
                    this.state.isLoading?<p>jiaz</p>:
                        <Router>
                        <Routes/>
                    </Router>
                }

            </div>
        );
    }

    componentWillMount() {
        /*存个token*/
        if (!localStorage.csrfToken) {
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

export default App;
