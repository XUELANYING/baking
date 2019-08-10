import React from 'react';
import { PullToRefresh, ListView, ActivityIndicator } from 'antd-mobile';
import ListItem from './Item';

const NoMoreText = '没有更多了哦~';
const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});
const row = rowData => <ListItem  v={rowData} />;

const EmptyHandle = list =>
  list && list.length === 0 ? (
      <div>
          {"暂时没有房源哦~"}
      </div>
  ) : null;

export default props => {
  const { list, height } = props;
  return list && list.length ? (
    <div className="list">
      <ListView
        style={{
          height: height
        }}
        ref={props.lv}
        dataSource={ds.cloneWithRows(list)}
        renderFooter={() => {
          return props.hasMore ? (
            <div className="flexbox jc">
              <ActivityIndicator text="正在加载" />
            </div>
          ) : (
            <div className="flexbox jc">{NoMoreText}</div>
          );
        }}
        renderRow={row}
        pullToRefresh={
          <PullToRefresh
            refreshing={props.refreshing}
            onRefresh={props.onRefresh}
          />
        }
        onScroll={e => {
          props.onScroll(e);
        }}
        initialListSize={props.scrollTop ? list.length : 20}
        scrollEventThrottle={500}
        scrollRenderAheadDistance={1000}
        onEndReached={props.onEndReached}
        pageSize={20}
      />
    </div>
  ) : (
    <div>{EmptyHandle(list)}</div>
  );
};
