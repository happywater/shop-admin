import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// createWebHashHistory  hash 路由   使用location.hash   通过hashchange事件监听url变化
// createWebHistory   普通路由    使用history   通过popstate事件监听url变化
// createMemoryHistory   服务端渲染使用

const routes: Array<RouteRecordRaw> = [
  {
    path: '/mytest',
    // 定义路由名称 可以快速使用 name 进行跳转
    name: 'mytest',
    // 异步加载组件
    component: () => import('../views/mytest/home-index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
