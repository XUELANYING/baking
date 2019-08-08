import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../../store/actionCreator/index";
import LoadingMore from "../../common/loadingMore";

class AnswerBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={'questionWrap essenceWrap'}>
                {
                    this.props.questionAnswer[this.props.list].map((v, i) => (
                        <div key={i} className={'questionBox'} onClick={() => {
                            this.props.history.push('/answer/' + v.contentId)
                        }}>
                            <div className={'userInfo'} onClick={(e) => {
                                e.stopPropagation(true)
                                this.props.history.push('/clientInfo/' + v.clientId)
                            }}>
                                <div className={'user-logo'}>
                                    <img src={v.clientImage}/>
                                </div>
                                {
                                    v.isMaster === 1 ? <div className={'user-vip'}>
                                        <img
                                            src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                                            alt=""/>
                                    </div> : null
                                }

                                <div className={'user-name'}>{v.clientName}</div>
                            </div>
                            <div className={'essence-box'}>
                                <p className={'essence-title'}>{v.coverTitle}</p>
                                <p className={'essence-detail'}>{v.coverSummary}</p>
                            </div>
                            {
                                v.hotNum ? <div className={'topNum'}>{v.hotNum}个赞</div> : null
                            }

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
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(AnswerBox))
