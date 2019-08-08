import React from 'react';
import test from "../../../store/actionCreator/Me";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import LoadingMore from "../../common/loadingMore";
import "@asset/css/nest/Me/answerBox.scss"
class AnswerBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        console.log(22,this.props.Answerbox)
        return (
            <div className={'answerWrap'}>
                {
                    this.props.Answerbox.map((v, i) => (
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
                {/*<LoadingMore handleList={this.props.boxList}></LoadingMore>*/}
            </div>
        )
    }
    componentDidMount(){
        //console.log(this.props)
        this.props.AnswerBox()

    }
}
export default connect((state)=>({Answerbox:state.Me.Answerbox}), (dispatch)=>(bindActionCreators(test,dispatch)))(withRouter(AnswerBox))
