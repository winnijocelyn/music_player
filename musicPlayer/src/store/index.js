import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 创建Vuex实例
const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    getStateCount: function (state) {
      return state.count + 1
    }
  },
  mutations: {

  },
  actions: {

  }
})
export default store
