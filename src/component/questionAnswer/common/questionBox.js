import React from 'react';
import LazyLoad from 'react-lazyload';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {formatDate, localItem, removeLocalItem} from '../../../component/common/utils/fn';
import actionCreator from "../../../store/actionCreator/index";
import LoadingMore from '../../common/loadingMore';

/*//滚动到记录的位置方法
const returnTop = (con) => {
    if (localItem('scrollPosition')) {
        //这个回滚对象我写的比较放飞自我，一般可以用类名获取等方法
        if (!con.refs.lv) return;
        try {
            con.refs.lv.scrollTop = localItem('scrollPosition');
        }
        catch (e) {
            console.log(e)
        }
        removeLocalItem('scrollPosition');
    }
};*/

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            flag: false,
            pageIndex: 0
        }
    }
/*//返回记录滚动位置三件套1-针对切换Tab情况：
    componentDidMount(){

        returnTop(this);

    }

    //返回记录滚动位置三件套2-针对浏览器返回按钮情况：
    componentDidUpdate(){
        returnTop(this);
    }

    //返回记录滚动位置三件套3-记录离开时的滚动条位置：
    componentWillUnmount(){
        localItem('scrollPosition', this.refs.lv.scrollProperties.offset);
    }*/

    render() {

        return (
            <div className={'questionWrap'} ref={"lv"}>
                {
                    this.props.questionAnswer[this.props.list].map((v, i) => (
                        <div key={i} className={'questionBox'} onClick={() => {
                            this.props.history.push('/question/' + v.contentId)
                        }}>
                            <p className={'question-title'}>{v.coverTitle}</p>
                            <div className={'recipes'} onClick={(e)=>{
                                e.stopPropagation(true)
                                this.props.history.push('/recipe/'+v.recipe.clientId+"/"+v.recipe.contentId);
                            }}>
                                <div className={'recipes-img'}>
                                    <LazyLoad once height="70" width={"70px"} placeholder={<div className={"loadingBox"}><img src={this.imgLoading}/></div>}>
                                        <img src={v.recipe.image}/>
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
                    ))
                }
                <LoadingMore handleList={this.props.boxList} isFetching={this.props.questionAnswer.isFetching}></LoadingMore>
            </div>
        )
    }

   /* componentDidMount() {
        if (this.props.list.length === 0) {
            this.props[this.props.boxList]()
        }
    }*/

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
