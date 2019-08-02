import React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../store/actionCreator";
import LoadingMore from "../../component/common/loadingMore";

class Essence extends React.Component {
    constructor() {
        super();
        this.state = {
            pageIndex: 0
        }
    }

    render() {
        return (
            <div className={'questionWrap essenceWrap'}>
                {
                    this.props.essenceList.map((v,i)=>(
                        <div key={i} className={'questionBox'} onClick={()=>{
                            this.props.history.push('/answer/'+v.contentId)
                        }}>
                            <div className={'userInfo'}>
                                <div className={'user-logo'}>
                                    <img src={v.clientImage} alt=""/>
                                </div>
                                {
                                    v.isMaster===1?<div className={'user-vip'}>
                                        <img src="https://image.hongbeibang.com/Fj1UT_HuSX4MkdcukYhWRpioEyWx?200X200&imageView2/1/w/80/h/80" alt=""/>
                                    </div>:null
                                }

                                <div className={'user-name'}>{v.clientName}</div>
                            </div>
                            <div className={'essence-box'}>
                                <p className={'essence-title'}>{v.coverTitle}</p>
                                <p className={'essence-detail'}>{v.coverSummary}</p>
                            </div>
                            <div className={'topNum'}>{v.hotNum}个赞</div>
                        </div>
                    ))
                }
                <LoadingMore handleList={"getEssenceList"}></LoadingMore>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props)
        if(this.props.essenceList.length===0){
            this.props.getEssenceList()
        }
    }
    handleClick(){
        this.props.getNewsList(this.state.pageIndex+=10)
        this.setState({
            pageIndex:this.state.pageIndex+=10
        })
    }
}
export default withRouter(connect((state)=>({essenceList:state.questionAnswer.essenceList}),
    (dispatch)=>(bindActionCreators(actionCreator,dispatch)))(Essence))
