import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// createWebHashHistory  hash 路由   使用location.hash   通过hashchange事件监听url变化
// createWebHistory   普通路由    使用history   通过popstate事件监听url变化
// createMemoryHistory   服务端渲染使用

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/mytest',
    name: 'mytest',
    component: () => import('../views/mytest/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes]
})

export default router
