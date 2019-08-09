import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import loadingImg from '../../asset/img/more.gif'
import actionCreator from "../../store/actionCreator";

class LoadingMore extends React.Component {
    constructor() {
        super()
        this.state = {
            pageIndex: 0,
            nowIndex:1
        }
    }

    render() {
        let displayStyle = this.props.show === true ?
            {display:""} : {display:"none"};
        return (
            <div className="loading-container" style={displayStyle}>
                <div className="loading-wrapper">
                    <img src={loadingImg} style={{width: "100%", margin: "0 auto", background: "#fff", display: "flex", justifyContent: "center"}}/>
                    <div className="loading-title">{this.props.title}</div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props)
        const wrapper = this.refs.wrapper;
        window.addEventListener('scroll', () => {
            const scrollTop = wrapper.getBoundingClientRect().top;//获取LoadingMore组件中的ref绑定元素距屏幕顶部的距离
            const windowHeight = window.screen.height;//窗口高度
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
            if(this.state.flag){
                this.handleClick()
            }
        }, false)
    }
   /* getSnapshotBeforeUpdate(nextProps) {
        return nextProps.count/10>this.state.nowIndex && this.state.flag===true? true: false;
    }
    componentDidUpdate(prevProps, prevState, isLoading) {
        if (isLoading === true) {
            ++this.state.nowIndex
        }
    }*/
 /*  componentWillReceiveProps(nextProps){
       if(nextProps.count.nowCount/1<30){
           this.state.flag=false
       }
       console.log()
   }*/
  /*  shouldComponentUpdate(nextProps){
        if (nextProps.count.nowCount!==this.props.count.nowCount){
            console.log(nextProps.count.nowCount)
            if(nextProps.count.nowCount/1<30){
                return true
            }
        }
        return false
    }*/
   /* componentWillUpdate(){
        if (this.state.flag) {
            this.handleClick()
        }
    }*/

    handleClick() {
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
    }
}

export default withRouter(connect((state) => ({...state}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(LoadingMore));
