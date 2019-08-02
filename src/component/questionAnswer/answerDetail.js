import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";
import '../../asset/css/questionAnswer/answerDetail.scss'

class AnswerDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            floor: this.props.questionAnswer.answerFloor.data || []
        }
    }

    /* componentWillReceiveProps(nextProps){
         if(nextProps.props.answerFloor.data!=this.props.questionAnswer.answerFloor.data){
             this.state.floor=this.props.answerFloor.data
         }
     }*/
    render() {
        const info = this.props.questionAnswer.answerDetail
        const floor = this.props.questionAnswer.answerFloor
        return (
            <div className={"answerDetail"}>
                <div className={'detail-top'}>
                    <span onClick={() => {
                        this.props.history.go(-1)
                    }}>
                        <img className={'icon'}
                             src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48"
                             alt=""/>
                    </span>
                    <div>
                        <span className={"title"}>回答</span>
                    </div>
                </div>

                <div className={"answer-title"}>
                    {info.title}
                </div>

                <div className={"answer-main"}>
                    <div className={"answer-user"}>
                        <div className={"user"}>
                            <div className={"answer-logo"}>
                                <img src={info.clientImage} alt=""/>
                            </div>
                            {
                                info.isMaster === 1 ? <div className={"answer-vip"}>
                                    <img
                                        src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                                        alt=""/>
                                </div> : null
                            }

                            <div className={"answer-name"}>{info.clientName}</div>
                        </div>
                        <div>
                            <span className={"care"}>+关注</span>
                        </div>
                    </div>
                    <div className={"answer-content"}>
                        <p>{info.coverSummary}</p></div>
                </div>

                <div className={"comment"}>
                    <div className={"comment-num"}><p>评论 {floor.length}</p></div>
                    <div className={"detail-wrap"}>
                        {
                            floor.map((v, i) => (
                                <div className={"detail-box"} key={i}>
                                    <div className={'detail-user'}>
                                        <div className={"detailUser-logo"}>
                                            <img src={v.clientImage} alt=""/>
                                        </div>
                                        <div className={"client"}>
                                            <div className={'client-info'}>
                                                {
                                                    v.isMaster === 1 ? <div className={"client-logo"}>
                                                        <img
                                                            src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                                                            alt=""/>
                                                    </div> : null
                                                }

                                                <div className={"client-name"}>{v.clientName}</div>
                                            </div>
                                            <div className={"time"}>{v.createTime}</div>
                                        </div>
                                    </div>
                                    <div className={"detail-content"}>
                                        {v.text}
                                        {
                                            v.comments.data.length === 0 ? null : <div className={"answer-text"}>
                                                <ul>
                                                    {
                                                        v.comments.data.map((item, index) => (
                                                            <li key={index}>
                                                                <span>{item.clientName} </span>{item.coverSummary}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        }

                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.questionAnswer)
        this.props.getAnswerDetail(this.props.match.params.contentId)
        this.props.getFloor(this.props.match.params.contentId)
    }
}

export default withRouter(connect((state) => ({questionAnswer: state.questionAnswer}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(AnswerDetail))
