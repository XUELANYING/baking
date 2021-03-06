import React from 'react';
import {Switch,NavLink,Route,Redirect} from 'react-router-dom';
import '../../asset/css/questionAnswer/main.scss'
import QuestionDetail from '../../component/questionAnswer/questionDetail'

export default class QuestionAnswer extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: true
        }
    }

    render() {
        return (
            <div>
                <div className={'positionFixed'}>
                    <div className={'searchWrap'}>
                        <span className={'getQus'}>提问</span>
                        <div className={'searchBox'}>
                            <span>搜索问题</span>
                        </div>
                        <span>
                        <img className={'icon msg'} src="https://image.hongbeibang.com/FjmYGE5z6RvQL-_fdLKuSGYfmwO2?48X48&imageView2/1/w/48/h/48" alt="" />
                    </span>
                    </div>
                    <nav className={'qusTab'}>
                        {
                            this.props.children.map((v,i)=>(
                                v.isHide? null:<NavLink activeClassName={'active'} key={i} to={v.to}>{v.name}</NavLink>
                            ))
                        }
                    </nav>
                </div>



                    {
                        this.props.children.map((v,i)=>(
                            v.isHide? null:<Route key={i} path={v.path} {...v}/>

                        ))
                    }

            </div>
        )
    }
}
