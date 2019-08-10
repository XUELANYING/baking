import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {
    fetchNewsList,
    setScrollHeight,
    changePage,
    setScrollTop
} from '../../store/actionCreator/list';
import { List as list} from './com';

class TabHouseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBackTop: false
        };
    }

    componentDidMount() {
        // 初始化
        const { list, scrollTop, routeQuery, scrollHeight } = this.props;
        // 是否从搜索页返回
     /*   const fromSearch = routeQuery && routeQuery.fromSearch;*/
        if (!list) {
            // redux中没有List才去请求
            this.handleGetList();
        }
        if (!scrollHeight) {
            // 搜索和下拉菜单的高度
            let top_h = 99
            // 底部tabs高度
            const bot_h = 44;
            // 设置滚动高度
            this.props.dispatch(
                setScrollHeight(document.documentElement.clientHeight - top_h - bot_h)
            );
        }
    }

    //组件卸载时存储滚动条位置
    componentWillUnmount() {
        this.saveScroll();
    }

    // 存储滚动条位置
    saveScroll() {
        if (this.lv) {
            let scrollTop = this.lv.listviewRef.ListViewRef.ScrollViewRef.scrollTop;
            this.props.dispatch(setScrollTop(scrollTop));
        }
    }

    // 获取列表
    handleGetList(isLoadmore) {
        const { dispatch, page, size,query } = this.props;
        let queryArr = [];
        for (let i in query) {
            queryArr.push({ key: i, value: query[i] });
        }
        dispatch(fetchNewsList(page,isLoadmore));
    }

    // 下拉刷新事件
    onRefresh = () => {
        this.props.dispatch(changePage(1));
        this.handleGetList();
    };

    // 上拉加载更多事件
    onEndReached = () => {
        const { isLoading, hasMore, dispatch, page } = this.props;
        if (isLoading || !hasMore) {
            return;
        }
        dispatch(changePage(page + 1));
        this.handleGetList(true);
    };

    // 列表滚动到顶部
    handleBackTop = () => {
        this.lv && this.lv.scrollTo(0, 0);
    };



    render() {
        const {
            list,
            query,
            scrollHeight,
            hasMore,
            refreshing,
            scrollTop,
        } = this.props;
        return (
            <Fragment>
                <List
                    height={scrollHeight}
                    lv={ref => (this.lv = ref)}
                    list={list}
                    hasMore={hasMore}
                    refreshing={refreshing}
                    /*scrollTop={scrollTop}*/
                    onScroll={this.handleShowBackTop}
                    onEndReached={this.onEndReached}
                    onRefresh={this.onRefresh}
                />
               {/* <BackTop show={this.state.showBackTop} toTop={this.handleBackTop} />*/}
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    list: state.list.list,
    size: state.list.size,
    page: state.list.page,
    query: state.list.query,
    scrollHeight: state.list.scrollHeight,
    scrollTop: state.list.scrollTop,
    isLoading: state.list.loading.isLoading,
    hasMore: state.list.loading.hasMore,
    refreshing: state.list.loading.refreshing,
});

export default connect(mapStateToProps)(TabHouseList);
