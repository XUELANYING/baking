import React from 'react';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LazyLoad from 'react-lazyload';
import ImgView from '../../component/common/utils/ImgView'
import '../../asset/css/questionAnswer/clientInfo.scss';
import LoadingMore from '../../component/common/loadingMore'
import actionCreator from "../../store/actionCreator";


class UserWork extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: ""
        }
    }

    render() {
        return (
            <div className={"userWork"}>
                {
                    this.props.dish.map((v, i) => (
                        <div key={i} className={"box-wrap"}>
                            <div className={"box-top"}>
                                <div className={"box-top-img"}>
                                    <img src={v.clientImage} alt=""/>
                                </div>
                                <div className={"box-top-info"}>
                                    <div className={"info-top"}>
                                        {
                                            v.isMaster ? <div className={"info-adt"}>
                                                <img
                                                    src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80"
                                                    alt=""/>
                                            </div> : null
                                        }
                                        <div className={"info-name"}>{v.clientName}</div>
                                    </div>
                                    <div className={"info-time"}>
                                        {
                                            v.prefixTitle ? <span>{v.createTime}</span> :
                                                <span>{v.createTime} {v.coverTitle}</span>
                                        }
                                        <span>{v.prefixTitle}</span>
                                    </div>
                                </div>
                            </div>
                            {
                                v.introduce ? <div className={"box--text"}>
                                    {v.introduce}
                                </div> : null
                            }

                            <div className={"box"}>
                                <div className={"box-wrap-img"}>
                                    <LazyLoad once height="70">
                                        <ImgView list={v.image} width={'110px'} height={"110px"}/>
                                    </LazyLoad>
                                    {/*{
                                        v.image.map((it, index) => (
                                            <div key={index} className={"img-box"}>
                                                <LazyLoad once height="70"
                                                          placeholder={<div className={"loadingBox"}>
                                                              <img src={this.imgLoading}/></div>}>
                                                    <img src={it} alt=""/>
                                                </LazyLoad>
                                            </div>
                                        ))
                                    }*/}
                                </div>
                            </div>
                            <div className={"box-bottom"}>
                                <div>
                                    <img className={"zan"}
                                         src="https://image.hongbeibang.com/Fqv9VBHXG627znbKlZYnHQMTHVdc?200X200&imageView2/1/w/38/h/38"
                                         alt=""/>
                                    <span>{v.likeNum}</span>
                                </div>
                                <div>
                                    <img className={"zan"}
                                         src="https://image.hongbeibang.com/Fi6E0gsACPeVV5_xgH5JBn6PN45m?200X200&imageView2/1/w/38/h/38"
                                         alt=""/>
                                    <span>{v.rewardNum}</span>
                                </div>
                                <div className={"border-none"}>
                                    <img className={"zan"}
                                         src="https://image.hongbeibang.com/FiZ5-B7_rmV_gnPl97P-FkpjSlij?200X200&imageView2/1/w/38/h/38"
                                         alt=""/>
                                    <span>{v.commentNum}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <LoadingMore handleList={"getClientInfo"}></LoadingMore>
            </div>
        )
    }

    componentDidMount() {
        this.props.getClientInfo({pageIndex: 0, clientId: this.props.match.params.clientId})
    }
}

export default withRouter(connect((state) => ({recipe: state.questionAnswer.userRecipe}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(UserWork))
