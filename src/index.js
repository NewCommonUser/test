/**
 * 入口js
 */
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import memoryUtils from './utils/memoryUtils';
import storageUtils from './utils/storageUtils';
//读取local中保存的user，保存到内存中
const user=storageUtils.getUser();
memoryUtils.user=user;


//将App组件标签渲染到index页面的root的div上
ReactDom.render(<App/>,document.getElementById("root"));