import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actionCreator from "../../../store/actionCreator/index";
import LoadingMore from '../../common/loadingMore'
import {withRouter,Link} from 'react-router-dom'

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            pageIndex: 0
        }
    }

    render() {
        return (
            <div className={'questionWrap '}>
                {
                    this.props.questionAnswer[this.props.list].map((v, i) => (
                        <div key={i} className={'questionBox'} onClick={() => {
                            this.props.history.push('/question/' + v.contentId)
                        }}>
                            <p className={'question-title'}>{v.coverTitle}</p>
                            <div className={'recipes'}>
                                <div className={'recipes-img'}>
                                    <img src={v.recipe.image} alt=""/>
                                </div>
                                <div className={'recipes-detail'}>
                                    <p className={'recipes-title'}>{v.recipe.title}</p>
                                    <p className={'recipes-author'}>作者：{v.recipe.clientName}</p>
                                </div>
                            </div>
                            <div className={'question-bottom'}>
                                {v.answerNum > 0 ? <p>{v.answerNum}个回答</p> : <p className={'answerNone'}>暂无回答</p>}

                                <p className={'question-bottom'}>
                                    <img className={'icon'}
                                         src="https://image.hongbeibang.com/FlSZI5KwZLrR9-QXD9Vu7u0lVvCE?48X48&imageView2/1/w/40/h/40"
                                         alt=""/>
                                    <span className={'icon-color'}>写答案</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
                <LoadingMore handleList={this.props.boxList}></LoadingMore>
            </div>
        )
    }

    componentDidMount() {
        if (this.props.list.length === 0) {
            this.props[this.props.boxList]()
        }
    }
}

export default withRouter(connect((state) => ({questionAnswer: state.questionAnswer}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Box))
