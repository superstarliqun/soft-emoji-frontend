import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "./assets/css/reset.css"
import "./assets/js/xiaoxinxin.js"
// 在main.js中引入全局公共组件
import "./components/common/index.js"
import "./filters/index"

// Vue.config.productionTip = false

// 在main.js中引入elementUI
import "element-ui/lib/theme-chalk/index.css"
import Ele from "element-ui/lib/index.js"
Vue.use(Ele)

// 请求地址
import urls from './utils/urls/index.js';
Vue.prototype.$urls = urls
Vue.prototype.$pre = Vue.prototype.$urls.targetUrl + '/'

console.log('$pre ---- ', Vue.prototype.$pre);

// 引入封装请求
import { get, post } from "./request/http.js"
Vue.prototype.$get = get
Vue.prototype.$post = post

//引入mavenEditor
import './plugins/mavenEditor.js'


// 引入数据字典
import dict from './utils/dict'
Vue.prototype.$dict = dict


// 引入加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


NProgress.configure({
  undefined,
  easing: 'ease', // 动画方式
  speed: 600, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from, next) => { // 每次切换页面时，调用进度条
  NProgress.start(); // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});
router.afterEach(() => { // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})


// 引入loading
import { loading } from './utils/tools'
Vue.prototype.$loading = loading

// 引入全局成功或失败提示
import { success, warning } from "./utils/alert"
Vue.prototype.$success = success
Vue.prototype.$warning = warning


// 时间过滤器
import "./filters/index"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
