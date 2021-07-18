/*
 * @Description:test api
 * @Author: IWillBe12138
 * @Date: 2021-07-17 17:13:18
 * @LastEditTime: 2021-07-17 17:28:32
 * @LastEditors: IWillBe12138
 */

import request from '../utils/request';

export function getTest() {
    return request({
        url: '/test',
        method: 'post'
    });
}
