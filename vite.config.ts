/*
 * @Description: 
 * @Author: iwillbe12138
 * @Date: 2021-06-08 23:32:57
 * @LastEditTime: 2021-06-09 00:36:52
 * @LastEditors: iwillbe12138
 */
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // base: "."
})
