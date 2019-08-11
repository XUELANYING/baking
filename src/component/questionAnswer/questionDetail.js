import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import '../../asset/css/questionAnswer/questionDetail.scss'
import actionCreator from "../../store/actionCreator";
import TopWrap from "../common/topWrap";

class QuestionDetail extends React.Component {
    render() {
        let title = "";
        if(this.props.questionDetail.recipe){
            title = this.props.questionDetail.recipe.title
        }
        return (
            <div className={"questionDetail"}>
                <TopWrap styleType={"s2"}></TopWrap>
                <div className={"margintop44"}>
                    <div className={'detail-title'}>{this.props.questionDetail.coverTitle}</div>
                    {
                        title!==""?<div className={"padding1015"}>
                            <div className={'recipes'}>
                                <div className={'recipes-img'}>
                                    <img src={this.props.recipe.image} alt=""/>
                                </div>
                                <div className={'recipes-detail'}>
                                    <p className={'recipes-title'}>{this.props.recipe.title}</p>
                                    <p className={'recipes-author'}>作者：{this.props.recipe.clientName}</p>
                                </div>
                            </div>
                        </div>:null
                    }

                    <div className={'answer-num'}>{this.props.answer.count}个回答</div>
                    {
                        this.props.answer.count === 0 ? null :
                            this.props.answerList.map((v, i) => (
                                <div key={i} className={"detail-wrap"}>
                                    <div className={"detail-box"}>
                                        <div className={'detail-user'}>
                                            <div className={"detailUser-logo"}>
                                                <img src={v.clientImage} alt=""/>
                                            </div>
                                            <div className={"client"}>
                                                <div className={'client-info'}>
                                                    {
                                                        v.isMaster === 0 ? null : <div className={"client-logo"}>
                                                            <img
                                                                src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                                                                alt=""/>
                                                        </div>
                                                    }
                                                    <div className={"client-name"}>{v.clientName}</div>
                                                </div>
                                                <div className={"time"}>{v.createTime}</div>
                                            </div>
                                        </div>
                                        <div className={"detail-content"} dangerouslySetInnerHTML={{__html: v.description}}></div>
                                        <div className={"detail-handle"}>
                                            <div className={"handle-item"}><img className={"handle-icon"}
                                                                                src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"
                                                                                alt=""/>点赞
                                            </div>
                                            <div className={"handle-item"}><img className={"handle-icon"}
                                                                                src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38"
                                                                                alt=""/>评论
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
                <div className={"tab-detail"}>

                    <div className={"tab-item"}>
                        <img src="https://image.hongbeibang.com/Fh_n2YndO4M5AlLq-k3uBHDG5PmP?48X48&imageView2/1/w/48/h/48" alt=""/>
                        <span>邀请回答</span>
                    </div>

                    <div className={"tab-item"}>
                        <img src="https://image.hongbeibang.com/Fnu20JVHiBh4OUcn7CDDPdCyJKC_?48X48&imageView2/1/w/48/h/48" alt=""/>
                        <span>我来回答</span>
                    </div>


                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getQuestionDetail(this.props.match.params.id)
        this.props.getAnswer(this.props.match.params.id)
    }
}

export default withRouter(connect((state) => ({
    questionDetail: state.questionAnswer.questionDetail,
    answer: state.questionAnswer.answer,
    answerList: state.questionAnswer.answerList,
    recipe: state.questionAnswer.recipe
}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(QuestionDetail))
