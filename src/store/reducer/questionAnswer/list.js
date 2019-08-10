import types from '../../actionType/questionAnswer'
import { Toast } from 'antd-mobile';

const defaultState = {
    list: null,
    page: 0,
    size: 10,
    scrollHeight: null,
    scrollTop: null,
    loading: {
        hasMore: true,
        refreshing: false,
        isLoading: false
    },
    query:{},
    selectedMenu: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        // 设置loading
        case types.SET_LOADING:
            if (action.loading.isLoading) {
                Toast.loading('加载中', 0);
            }
            if (action.loading.isLoading === false) {
                Toast.hide();
            }
            return { ...state, loading: { ...state.loading, ...action.loading } };
        // 设置列表
        case types.SET_DATA_LIST:
            return { ...state, list: action.list };
        // 设置滚动高度
        case types.SET_SCROLL_HEIGHT:
            return { ...state, scrollHeight: action.scrollHeight };
        // 设置页码
        case types.CHANGE_PAGE:
            return { ...state, page: action.page };
        // 加载更多
        case types.LOADMORE_LIST:
            return {
                ...state,
                list: state.list.concat(action.list)
            };
        // 设置滚动条当前位置
        case types.SET_SCROLL_TOP:
            return { ...state, scrollTop: action.scrollTop };
    }
    console.log(state)
    return state;
};
