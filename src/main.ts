import { createApp } from 'vue'
import App from './App.vue'
// 注册路由组件
import router from './router/index'
import store from './store/index'

const app:any = createApp(App)

// 使用router
app.use(router)
// 使用store
app.use(store)

app.mount('#app')
