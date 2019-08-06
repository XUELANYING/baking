import React from 'react';
import {Switch, NavLink, Route, withRouter} from 'react-router-dom';
import '../../asset/css/questionAnswer/main.scss'
import QuestionDetail from '../../component/questionAnswer/questionDetail'

class QuestionAnswer extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    render() {
        return (
            <div id={"wrap"}>
                <div className={'positionFixed'}>
                    <div className={'x-searchWrap'}>
                        <span className={'getQus'} onClick={() => {
                            this.props.history.push('/edit/question')
                        }}>提问</span>
                        <div className={'x-searchBox'}>
                            <span>搜索问题</span>
                        </div>
                        <span>
                        <img className={'icon msg'}
                             src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"
                             alt=""/>
                    </span>
                    </div>
                    <nav className={'qusTab'}>
                        {
                            this.props.children.map((v, i) => (
                                v.isHide ? null :
                                    <NavLink activeClassName={'active'} key={i} to={v.to}>{v.name}</NavLink>
                            ))
                        }
                    </nav>
                </div>

                {
                    this.props.children.map((v, i) => (
                        v.isHide ? null : <Route key={i} path={v.path} {...v}/>
                    ))
                }

            </div>
        )
    }
    componentWillMount(){
        if(this.props.location.pathname==='/questionAndAnswer'){
            this.props.history.push('/questionAndAnswer/new')
        }

    }
}

export default withRouter(QuestionAnswer)
