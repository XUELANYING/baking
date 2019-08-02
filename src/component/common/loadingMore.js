import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import more from '../../asset/img/more.gif'
import actionCreator from "../../store/actionCreator";

class LoadingMore extends React.Component {
    constructor(){
        super()
        this.state={
            pageIndex:0
        }
    }
    render() {
        return (
            <div ref={"wrapper"}>
                <img src={more} alt=""/>
            </div>
        )
    }
    componentDidMount(){
        const wrapper = this.refs.wrapper;
        window.addEventListener('scroll', ()=>{
            const scrollTop = wrapper.getBoundingClientRect().top;//获取LoadingMore组件中的ref绑定元素距屏幕顶部的距离
            const windowHeight = window.screen.height;//窗口高度
            // clearTimeout(this.timer);
            // this.timer = setTimeout(()=>{    //检测到屏幕滚动后，延时30ms进行下一次检测。优化体验,保证性能。
            if(scrollTop && scrollTop<windowHeight){
                this.setState({
                    flag:true
                })
            }else{
                this.setState({
                    flag:false
                })
            }
            // },0)
            if(this.state.flag){
                this.handleClick()
            }
        },false)
    }
    handleClick(){
        this.props[this.props.handleList](this.state.pageIndex+=10)
        this.setState({
            pageIndex:this.state.pageIndex+=10
        })
    }
}
export default connect((state)=>({...state}),(dispatch)=>(bindActionCreators(actionCreator,dispatch)))(LoadingMore);
