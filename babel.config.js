/*
 * @Description:babel 配置文件
 * @Author: iwillbe12138
 * @Date: 2021-02-24 13:30:54
 * @LastEditTime: 2021-02-24 14:04:58
 * @LastEditors:
 */

module.exports = {
  presets: [
    "@babel/preset-typescript",
    "@babel/preset-react",
    "@babel/preset-env",
    // "babel-preset-mobx",
    "mobx",
  ],
  plugins: [
    ["@babel/plugin-transform-typescript", { allowNamespaces: true }],
    // ... other
  ],
};
