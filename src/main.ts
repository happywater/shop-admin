import { createApp } from 'vue'
import App from './App.vue'
// 注册路由组件
import router from './router/index'
// 注册Vuex
import store from './store/index'
// 注册element-plus
import elementPlus from './plugins/element-plus'

const app:any = createApp(App)

// 使用router
app.use(router)
// 使用store
app.use(store)
// 使用element-plus
app.use(elementPlus)

// 挂载
app.mount('#app')
