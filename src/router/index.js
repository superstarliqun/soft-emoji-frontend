import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    component: () => import("../page/index/home.vue"),
    name: '首页',
    meta: '首页'
  },
  // 归档
  {
    path: '/file', component: () => import("../page/file"),
    children: [
      { path: '', component: () => import('../page/file/catalogue.vue') },
      { path: 'details', component: () => import('../page/file/document-details.vue') }
    ],
    name: '归档',
    meta: '归档'
  },
  // 清单
  {
    path: '/hobby', component: () => import("../page/hobby"),
    children: [],
    name: '清单',
    meta: '清单'
  },
  // 留言板
  {
    path: '/message', component: () => import("../page/leavemessage"),
    children: [],
    name: '留言板',
    meta: '留言板'
  },
  // 关于
  {
    path: '/about', component: () => import("../page/about"),
    name: '关于',
    meta: '关于'
  }
]

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL
})

export default router
