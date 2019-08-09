import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import actionCreator from "../../../store/actionCreator";


class Scroll extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 10,
            bScroll: null
        }
    }

    componentDidUpdate() {
        //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
        if (this.state.bScroll && this.props.refresh === true) {

            this.state.bScroll.refresh();
        }
    }

    componentDidMount() {
        // console.log(this.props.handleList,this.props.list)
        this.scrollView = ReactDOM.findDOMNode(this.refs.scrollView);
        if (!this.bScroll) {
            this.setState = ({
                bScroll: new BScroll(this.scrollView, {
                    //实时派发scroll事件
                    probeType: 3,
                    scrollY: true,
                    click: this.props.click,
                    /*  mouseWheel: true,*/
                    bounce: true,
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
    }

    componentWillReceiveProps(nextProps) {
        console.log("222", this.state.BScroll)
        this.setState = ({
            bScroll: new BScroll(this.scrollView, {
                //实时派发scroll事件
                probeType: 3,
                scrollY: true,
                click: this.props.click,
                /*  mouseWheel: true,*/
                bounce: true,
                pullDownRefresh: {
                    threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                    stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                },
                pullUpLoad: {
                    threshold: -20, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                },
            })
        }, () => {
            this.bScroll.on("pullingUp", () => {
                console.log("该加载了")
                console.log(this.props.list)
                let pageIndex = this.state.page;
                pageIndex += 10
                this.setState({
                    page: pageIndex
                }, () => {
                    this.props[this.props.handleList](this.state.page)
                    this.state.bScroll.finishPullUp()
                    this.state.bScroll.refresh()
                })

            });
            this.state.bScroll.on("pullingDown", () => {
                console.log("下拉刷新")
                this.setState({
                    list: this.props.newsList
                }, () => {
                    console.log(this.state.list)
                })
                this.state.bScroll.refresh()
            })
            this.state.bScroll.on("scroll", (scroll) => {
                this.props.onScroll(scroll)
            })
        })
        this.setState({
            list: nextProps.newsList,
        }, () => {
            this.bScroll.on("pullingUp", () => {
                console.log("该加载了")
                console.log(this.props.list)
                let pageIndex = this.state.page;
                pageIndex += 10
                this.setState({
                    page: pageIndex
                }, () => {
                    this.props[this.props.handleList](this.state.page)
                    this.state.BScroll.finishPullUp()
                    this.state.BScroll.refresh()
                })

            });
            this.state.bScroll.on("pullingDown", () => {
                console.log("下拉刷新")
                this.setState({
                    list: this.props.newsList
                }, () => {
                    console.log(this.state.list)
                })
                this.state.bScroll.refresh()
            })
            this.state.bScroll.on("scroll", (scroll) => {
                this.props.onScroll(scroll)
            })
        })
    }

    loadingMore() {
        this.bScroll.on("pullingUp", () => {
            console.log("该加载了")
            console.log(this.props.list)
            let pageIndex = this.state.page;
            pageIndex += 10
            this.setState({
                page: pageIndex
            }, () => {
                this.props[this.props.handleList](this.state.page)
            })

        });
    }

    componentWillUnmount() {
        this.bScroll.off('pullingUp');
        this.bScroll = null;
    }

    refresh() {
        if (this.bScroll) {
            this.bScroll.refresh();
        }
    }

    render() {

        return (
            <div className="scroll-view" ref="scrollView">
                {/*获取子组件*/}
                {this.props.children}
            </div>
        );
    }
}

Scroll.defaultProps = {
    click: true,
    refresh: false,
    onScroll: null
};

Scroll.propTypes = {
    //是否启用点击
    click: PropTypes.bool,
    //是否刷新
    refresh: PropTypes.bool,
    onScroll: PropTypes.func
};

export default withRouter(connect((state) => ({...state}), (dispatch) => (bindActionCreators(actionCreator, dispatch)))(Scroll));

