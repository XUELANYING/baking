import axios from 'axios'
import actionType from '../../actionType/questionAnswer'

// 请求最新
export const fetchNewsList = (
    page = 1,
    size = 30,
    filter = [],
    loadmore
) => dispatch => {
    // 设置loding打开
            // 设置loding打开
            dispatch(IsLoading({isLoading: true}));

            axios.get('/api/question/getNew?_t=' + Date.now() + '&csrfToken=' + localStorage.csrfToken + '&pageIndex=' + pageIndex + '&pageSize=10')
                .then(res => {
                    if (res) {
                        // 如果请求数<size 说明没有更多了
                        if (res.count < (pageIndex + 1) * size) {
                            dispatch(IsLoading({hasMore: false}));
                        }
                        if (loadmore) {
                            // 加载更多
                            dispatch(IsMore(res.data));
                        } else {
                            // 正常获取
                            dispatch(GetData(res.data));
                        }
                        // 设置loding关闭
                        dispatch(IsLoading({isLoading: false}));
                    }
                })
                .catch(err => {
                    console.error(err);
                    dispatch(IsLoading({isLoading: false}));
                });
        };


//设置loading
export const IsLoading = loading =>({
    type: actionType.SET_LOADING,
    loading
})
// 设置滚动列表高度
 export const setScrollHeight = scrollHeight => ({
    type: actionType.SET_SCROLL_HEIGHT,
    scrollHeight
});

// 列表页数更改
export  const changePage = page => ({
    type: actionType.CHANGE_PAGE,
    page
});
//加载更多
export const IsMore = list =>({
    type: actionType.SET_SCROLL_TOP,
    list
})
// 设置当前滚动条位置
export const setScrollTop = scrollTop => ({
    type: actionType.SET_SCROLL_TOP,
    scrollTop
});
//
export const GetData = list =>({
    type: actionType.SET_DATA_LIST,
        list
})
