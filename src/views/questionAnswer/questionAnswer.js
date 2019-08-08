import React,{Fragment} from 'react';
import {Switch, NavLink, Route, withRouter} from 'react-router-dom';
import '../../asset/css/questionAnswer/main.scss'
import QuestionDetail from '../../component/questionAnswer/questionDetail'
import Hot from './hot'
import Essence from './essence'
import New from './new'

class QuestionAnswer extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            index: 1
        }
        this.data = [
            {
                name: "精华问答",
                index: 0
            },
            {
                name: "最新问题",
                index: 1
            },
            {
                name: "最热问题",
                index: 2
            },
        ]
    }

    render() {
        const index =this.state.index;
        return (
            <div>
                <div className={'positionFixed'}>
                    <div className={'x-searchWrap'}>
                        <span className={'getQus'} onClick={() => {
                            this.props.history.push('/edit/question')
                        }}>提问</span>
                        <div className={'x-searchBox'} onClick={() => {
                            this.props.history.push('/search')
                        }}>
                            <span>搜索问题</span>
                        </div>
                        <span>
                        <img className={'icon msg'}
                             src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48"
                             alt=""/>
                    </span>
                    </div>
                    <nav className={"qusTab"}>
                        {
                            this.data.map((v, i) => (
                                <div key={i} onClick={this.handleClick.bind(this, i)}
                                     className={this.state.index === i ? 'active' : ''}>{v.name}</div>
                            ))
                        }
                    </nav>

                    {/*<nav className={'qusTab'}>
                        {
                            this.props.children.map((v, i) => (
                                v.isHide ? null :
                                    <NavLink activeClassName={'active'} key={i} to={v.to}>{v.name}</NavLink>
                            ))
                        }
                    </nav>*/}
                </div>
                {
                    index===0? <Essence></Essence>:index===1? <New></New>:index===2?<Hot></Hot>:null
                }
                {/*{
                    this.props.children.map((v, i) => (
                        v.isHide ? null : <Route key={i} path={v.path} {...v}/>
                    ))
                }*/}
            </div>
        )
    }
    handleClick(i) {
        this.setState({
            index: i
        })
    }

}

export default withRouter(QuestionAnswer)
