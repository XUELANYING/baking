import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserWork from './userWork'
import UserRecipe from './userRecipe'
import UserAnswer from '../../component/questionAnswer/userAnswer'
import actionCreator from "../../store/actionCreator";
import TopWrap from '../../component/common/topWrap'
import "../../asset/css/questionAnswer/clientInfo.scss"

class ClientInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }

    render() {
        const info = this.props.clientInfo;
        const achievements = this.props.achievements
        return (
            <div className={"clientInfo-wrap"}>
                <TopWrap styleType={"s1"}></TopWrap>
                <div className={"client-box"}>
                    <div className={"client-avator"}>
                        <img src={info.image} alt=""/>
                    </div>
                    <div className={"client-right"}>
                        <div className={"client-info"}>
                            <span>{info.name}</span>
                            {
                                info.isMaster ? <div className={"client-vip"}>
                                    <img
                                        src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                                        alt=""/>
                                </div> : null
                            }

                            <div className={"client-grade"}>
                                <img src={info.levelImage} alt=""/>
                            </div>
                        </div>
                        <div className={"client-id"}>ID：{info.uniqueKey}</div>
                        <div className={"client-experience"}>
                            经验值：434402/500000
                        </div>
                        <div className={"line"}>
                            <span></span>
                        </div>
                    </div>
                    <div className={"care"}>＋关注</div>
                </div>
                {/*tab*/}
                <div className={"client-wrap"}>
                    <div className={"client-tab"}>
                        <div>
                            <span className={"info-num"}>{info.followNum}</span>
                            <span className={"info-key"}>关注</span>
                        </div>
                        <div>
                            <span className={"info-num"}>{info.followedNum}</span>
                            <span className={"info-key"}>粉丝</span>
                        </div>
                        <div>
                            <span className={"info-num"}>2345</span>
                            <span className={"info-key"}>帮贡</span>
                        </div>
                    </div>

                </div>
                {
                    info.sign ? <div className={"client-sign"}>
                        {info.sign}
                    </div> : null
                }

                <div className={"clientInfo-tab"}>
                    <div className={"clientbox"}>
                        <div onClick={this.handleClick.bind(this, 0)} className={this.state.index === 0 ? 'now' : ''}>
                            作品
                            {
                                this.state.index === 0 ? <span></span> : null
                            }
                        </div>
                        <div onClick={this.handleClick.bind(this, 1)} className={this.state.index === 1 ? 'now' : ''}>
                            食谱 {
                            this.state.index === 1 ? <span></span> : null
                        }</div>
                        <div onClick={this.handleClick.bind(this, 2)}
                             className={this.state.index === 2 ? 'now' : ''}>问答 {
                            this.state.index === 2 ? <span></span> : null
                        }</div>
                    </div>
                </div>
                <div className={"classify-sum"}>
                    <div>{achievements.dishNum}个作品</div>
                    <div>{achievements.recipeNum}个食谱</div>
                    <div>{achievements.questionAndAnswerNum}个问答</div>
                </div>
                {
                    this.state.index === 0 ? <UserWork dish={this.props.dish}></UserWork> : this.state.index === 1 ?
                        <UserRecipe></UserRecipe> : this.state.index === 2 ? <UserAnswer></UserAnswer> : null
                }
            </div>
        )
    }

    componentDidMount() {
        this.props.getClientInfo({pageIndex: 0, clientId: this.props.match.params.clientId || "1305482"})
        this.props.getClientAchievements(this.props.match.params.clientId  || "1305482")
    }

    handleClick(i) {
        this.setState({
            index: i
        })
    }

  /*  getSnapshotBeforeUpdate() {
        return document.documentElement.scrollTop || document.body.scrollTop > 0 ? true : false;
    }

    componentDidUpdate(prevProps, prevState, scroll) {
        // 窗口发生滚动，滚动最顶端
        if (scroll === true) {
            window.scrollTo(0, 0);
        }
    }*/
}

export default withRouter(connect((state) => ({
    clientInfo: state.questionAnswer.clientInfo,
    dish: state.questionAnswer.dish,
    achievements: state.questionAnswer.achievements
}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(ClientInfo))
