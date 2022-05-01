import Vue from "vue";
import axios from "axios";
import qs from "qs"
import store from '../store/index'
import _ from 'lodash'
import $urls from "../utils/urls";
import { success, warning } from "../utils/alert"

// const baseUrl = $urls.targetUrl
// console.log('baseUrl --------- ',baseUrl);

// 开发环境
if (process.env.NODE_ENV === "development") {
  console.log("开发环境");
  // Vue.prototype.$pre = "http://172.20.10.5:3000"
  // url = "http://172.20.10.5:3000"
}

// 生产环境
if (process.env.NODE_ENV === "production") {
  console.log("生产环境");
  // Vue.prototype.$pre = ""
  // url = ""
}


// 请求拦截器
axios.interceptors.request.use(config => {
  // token验证
  // if (config.url !== "/v1/login") {
  //   config.headers.authorization = store.state.user.token
  // }
  // console.log('config ---- 请求拦截器 ---- ',config);
  return config
})

// 响应拦截器
axios.interceptors.response.use(res => {
  console.group("本次请求的路径是：" + res.config.url)
  console.log(res.data);
  console.groupEnd("拦截器结束")
  // 登陆权限过期验证
  // if (res.data.msg == "登录已过期或访问权限受限") {
  //   // 跳转登录页
  //   window.location = baseUrl + "/login"
  //   warning("登录已过期，请重新登陆！")
  // }
  return res
})



/* 
    get请求
      url   请求地址
      params  请求参数
*/
export const get = (url, params = {}) => {
  return new Promise((resolve, error) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      error(err)
    })
  })
}

/* 
    post请求

*/
export const post = (url, params = {}, isFile = false) => {
  let data = null
  if (isFile) {
    // 有文件
    data = new FormData()
    for (let i in params) {
      data.append(i, params[i])
    }
  } else {
    // 无文件
    data = qs.stringify(params)
  }

  return new Promise((resolve, error) => {
    axios.post(url, data).then(res => {
      resolve(res.data)
    }).catch(err => {
      error(err)
    })
  })
}