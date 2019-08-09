import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../../store/actionCreator/index";
import LoadingMore from "../../common/loadingMore";
import Scroll from '../../../component/common/utils/Bscroll'
import '../../../asset/css/list.scss'
import Loading from "../../../component/common/loading"

class AnswerBox extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            sliderList: [],
            newAlbums: [],
            refreshScroll: false,
            page:0,
        };
    }

    render() {
        return (
            <Scroll refresh={this.state.refreshScroll} className="list" handleList={this.props.boxList} list={this.props.list}>
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
                <Loading show={true}></Loading>
            {/*    <LoadingMore handleList={this.props.boxList} show={true}></LoadingMore>*/}
            </div>
            </Scroll>
        )
    }

    componentDidMount() {
        if (this.props.list.length === 0) {
            this.props[this.props.boxList]()
            this.setState({
                loading: false,
            },() => {
                //刷新scroll
                this.setState({refreshScroll:true});
            })
        }
    }

    componentWillReceiveProps(nextProps){
       // console.log(nextProps.questionAnswer[this.props.list])
            console.log("接收到了值")
        console.log(this.props.list)
        this.setState({refreshScroll:true});
            this.setState({
                newAlbums: this.props.list
            }, () => {
                //刷新scroll

            });
        }

}

export default withRouter(connect((state) => ({questionAnswer: state.questionAnswer}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(AnswerBox))
