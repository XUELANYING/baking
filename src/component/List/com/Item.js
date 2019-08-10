import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


export default props => {
    const { v } = props;
    return (
        <div className={'questionWrap'}>
            <div key={v.clientId} className={'questionBox'} onClick={() => {
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
        </div>
    );
};
