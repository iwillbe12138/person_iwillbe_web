/*
 * @Description:跨域设置
 * @Author: IWillBe12138
 * @Date: 2021-07-17 23:36:18
 * @LastEditTime: 2021-07-17 23:36:18
 * @LastEditors: IWillBe12138
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://mock.mengxuegu.com/mock/605f6f45f2e38f3a2f6b9b6c/Person_React17_TS',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
};
