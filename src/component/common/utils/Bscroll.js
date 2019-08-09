import React, { Component,Fragment } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'
import "../../../asset/css/list.scss"
import actionCreator from "../../../store/actionCreator";
import Item from "../../questionAnswer/common/questionBox"
import Loading from "../loading";




 class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            BScroll: null,
            dowm: "松手刷新更多内容",
            page: 0,
            limit: 10,
            show:true,
            isRefresh: false
        }
    }
    render() {
        return (
                <div className="scroll-view" ref="list" down={this.state.down}>
                    <Item isRefresh={this.state.isRefresh} list={this.props.list}></Item>
                </div>
        )
    }
    componentDidMount() {
        if (this.props.list.length === 0 || this.props.list===undefined) {
            this.props.questionAnswer[this.props.list]()
        }
        if (this.state.BScroll && this.props.refresh === true) {
            this.state.BScroll.refresh();
        }
        this.setState({
            show:false ,
            BScroll:new BScroll(this.refs.list, {
                //实时派发scroll事件
                probeType: 3,
                scrollY: true,
                click: this.props.click,
                /*  mouseWheel: true,*/
                bounce:true,
                pullDownRefresh: {
                    threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                    stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                },
                pullUpLoad: {
                    threshold: -20, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                },
            })
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.questionAnswer.list !== this.props.questionAnswer.list) {
            console.log("222", this.props.questionAnswer.list)
            this.setState({
                show:false ,
                BScroll:new BScroll(this.refs.list, {
                    //实时派发scroll事件
                    probeType: 3,
                    scrollY: true,
                    click: this.props.click,
                    /*  mouseWheel: true,*/
                    bounce:true,
                    pullDownRefresh: {
                        threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                        stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                    },
                    pullUpLoad: {
                        threshold: -20, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                    },
                })
            },()=>{
                this.state.BScroll.on("pullingUp", () => {
                    this.setState({
                        show: true
                    })
                    console.log("上拉加载")
                    let newPage = this.state.page;
                    newPage += 10
                    this.setState({
                        page: newPage
                    }, () => {
                        this.props[this.props.boxList](this.state.page)
                        this.setState({
                            list: this.props.list
                        })

                        this.state.BScroll.refresh()
                        this.state.BScroll.finishPullDown();
                    })
                })
                this.state.BScroll.on("pullingDown", () => {
                    console.log("下拉刷新")
                    this.setState({
                        list: [],
                        isRefresh: true
                    })
                    this.state.BScroll.refresh()
                })
              /*  this.state.BScroll.on("scroll", (scroll) => {
                    this.props.onScroll(scroll)
                })*/
            })
                if (this.props.onScroll) {
                    this.state.BScroll.on("scroll", (scroll) => {
                        this.props.onScroll(scroll);
                    });
                }
        }
    }
    componentDidUpdate() {
        //数据跟新完并生成了真实的DOM
        this.state.BScroll.on('scroll',(scroll)=>{
            this.props.onScroll(scroll);
        })
    }
     refresh() {
         if (this.state.BScroll) {
             this.state.BScroll.refresh();
         }
     }
}
export default withRouter(connect((state) => ({questionAnswer: state.questionAnswer}),
    (dispatch) => (bindActionCreators(actionCreator, dispatch)))(List))
