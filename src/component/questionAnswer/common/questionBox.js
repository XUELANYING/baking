import React from 'react';
import LazyLoad,{forceCheck} from 'react-lazyload';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Bscroll from "better-scroll";
import actionCreator from "../../../store/actionCreator/index";
import Loading from '../../common/loading'
import RefreshLoading from '../../../component/common/refreshLoading'


class Box extends React.Component {

    constructor() {
        super();

        this.state = {
            flag: false,
            pageIndex: 0,
            count:1,
            isLoading:true,
            refreshScroll: false,
            isRefresh:false,
        }

    }

    render() {
        return (
            <div className={'questionWrap'}>
                <RefreshLoading title={"正在刷新"} show={this.state.isRefresh}></RefreshLoading>
                {
                    this.state.list?this.state.list.map((v, i) => (
                        <div key={i} className={'questionBox'} onClick={() => {
                            this.props.history.push('/question/' + v.contentId)
                        }}>
                            <p className={'question-title'}>{v.coverTitle}</p>
                            <div className={'recipes'} onClick={(e)=>{
                                e.stopPropagation(true)
                                this.props.history.push('/recipe/'+v.contentId+'/'+v.clientId)
                            }}>
                                <div className={'recipes-img'}>
                                    <LazyLoad once height="70" placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                        <img className={"thisImg"} src={v.recipe.image} />
                                    </LazyLoad>
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
                    )):null
                }
                <Loading show={true}></Loading>
               {/* {
                    this.state.isLoading?<LoadingMore count={this.props.count} handleList={this.props.boxList}></LoadingMore>:<div>"没啦没啦"</div>
                }*/}
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.list)
        if (this.props.list.length === 0) {
            this.props[this.props.boxList]()
        }
        console.log("取到了",this.props.list)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps.list)
        if(nextProps.list!== this.props.list){
            this.setState({
                list:nextProps.list,
                refreshScroll:true
            });
        }
    }
   /* getSnapshotBeforeUpdate() {
        return document.documentElement.scrollTop || document.body.scrollTop > 0 ? true : false;
    }
    componentDidUpdate(prevProps, prevState, scroll) {
        // 窗口发生滚动，滚动最顶端
        if (scroll === true) {
            window.scrollTo(0, 0);
        }
    }*/
}

export default withRouter(connect((state) => ({questionAnswer: state.questionAnswer}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Box))
