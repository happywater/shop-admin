import { State } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore<State>({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store
