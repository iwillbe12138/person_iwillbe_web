/*
 * @Description:axios
 * @Author: IWillBe12138
 * @Date: 2021-07-17 16:29:08
 * @LastEditTime: 2021-07-17 23:48:09
 * @LastEditors: IWillBe12138
 */
import axios from 'axios';
import { message } from 'antd';
/**
 * 设置超时时间和跨域是否允许携带凭证
 */
const instance: any = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    withCredentials: true
});
let cancel: any;

/**
 * 请求防抖当一个url地址被请求多次就会取消前一次请求
 */

/**
 * 请求拦截器
 */
instance.interceptors.request.use(
    async (config: any) => {
        if (typeof cancel === 'function') {
            cancel('强制取消了请求');
        }
        config['cancelToken'] = new axios.CancelToken(function (c) {
            cancel = c;
        });
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    (config: any) => {
        cancel = null;
        return config.data;
    },
    (error: any) => {
        cancel = null;
        if (axios.isCancel(error)) {
            console.log('取消上一个请求');
            // 中断promise链接
            return new Promise(() => {});
        } else {
            // 把错误继续向下传递
            if (!error.response) return undefined;
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    // if (window.location.hostname === 'localhost') {
                    //     axios.post('/api/v1/login?client_name=form', {
                    //         userName: 'lixiaoyao4_vendor',
                    //         password: 123456
                    //     });
                    // } else {
                    //     window.location = error.response.headers.locationurl;
                    // }
                    message.error(error.response.status);
                    break;

                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    // Toast.show({ content: '登录过期，请重新登录', stayTime });
                    // // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    // if (window.location.hostname === 'localhost') {
                    //     axios.post('/api/v1/login?client_name=form', {
                    //         userName: 'lixiaoyao4_vendor',
                    //         password: 123456
                    //     });
                    // } else {
                    //     window.location = error.response.headers.locationurl;
                    // }

                    message.error(error.response.status);
                    break;

                // 404请求不存在
                case 404:
                    message.error(error.response.status);
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    message.info(error.response.status);
            }
            return Promise.reject(error.response);
        }
    }
);

// 对外暴露
export default instance;
