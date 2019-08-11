import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import more from '../../asset/img/more.gif'
import actionCreator from "../../store/actionCreator";

class LoadingMore extends React.Component {
    constructor() {
        super()
        this.state = {
            pageIndex: 0,
            title:"",
            isFetching:true
        }
    }
    render() {
        return (
            <div
                style={{width: "100%", margin: "0 auto", background: "#fff", display: "flex", justifyContent: "center"}}
                ref={"wrapper"}>
                {
                    this.state.isFetching?<img src={more} alt=""/>:<p>没有更多啦~~</p>
                }
            </div>
        )
    }

    componentDidMount() {
        const wrapper = this.refs.wrapper;
        window.addEventListener('scroll', () => {
            const scrollTop = wrapper.getBoundingClientRect().top;//获取LoadingMore组件中的ref绑定元素距屏幕顶部的距离
            const windowHeight = window.screen.height;//窗口高度
            console.log(scrollTop)
            // clearTimeout(this.timer);
            // this.timer = setTimeout(()=>{    //检测到屏幕滚动后，延时30ms进行下一次检测。优化体验,保证性能。
            if (scrollTop && scrollTop < windowHeight) {
                this.setState({
                    flag: true
                })
            } else {
                this.setState({
                    flag: false
                })
            }
            // },0)
            if (this.state.flag) {
                this.handleClick()
            }
        }, false)
    }



    handleClick() {
        if(this.props.isFetching){
            if (this.props.handleList === "getClientRecipe" || this.props.handleList === "getClientInfo" || this.props.handleList === "getClientAnswer") {
                this.props[this.props.handleList]({pageIndex: 0, clientId: this.props.match.params.clientId})
            } else if (this.props.handleList === "getStudent" || this.props.handleList === "getNewest") {
                this.props[this.props.handleList]({
                    pageIndex: this.state.pageIndex += 10,
                    contentId: this.props.match.params.contentId
                })
            } else if (this.props.handleList === "getCurr") {
                this.props[this.props.handleList]({
                    pageIndex: this.state.pageIndex += 10,
                    contentId: this.props.match.params.contentId,
                    clientId: this.props.match.params.clientId
                })
            }else if(this.props.handleList === "getMoreRecipe"){
                this.setState({
                    pageIndex: this.state.pageIndex += 10
                })
                this.props.getDetailList(this.props.showIndex,this.props.match.params.keyword,this.state.pageIndex)
            }else {
                this.props[this.props.handleList](this.state.pageIndex += 10)
                this.setState({
                    pageIndex: this.state.pageIndex += 10
                })
            }
        }else{
            this.setState({
                isFetching: false
            })
        }
    }
}

export default withRouter(connect((state) => ({...state}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(LoadingMore));
