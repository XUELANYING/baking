import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import 'lib-flexible';
import 'antd-mobile/dist/antd-mobile.css';
import * as serviceWorker from './serviceWorker';
import config from './common/config'

// 引入mockjs
import './mock/clientInfo.js'

React.Component.prototype.config = config;
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
