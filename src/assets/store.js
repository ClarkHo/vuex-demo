import Vue from 'vue';
// 引入vuex 并　use
import Vuex from 'vuex';
Vue.use(Vuex)

// 定义属性(数据)
var state = {
  count: 6
}
// 定义　getters
var getters = {
  // 需要伟个形参，用来获取　state 属性
  count(state) {
    return state.count
  }
}  
// 定义　actions　, 要执行的动作，如流程的判断＼异步请求
const actions = {
  // ({commit, state}) 这各写法是ＥＳ６中的对象解构
  increment({commit,state}) {
    // 提交一个名为 increment 的变化，名字可自定义，可以认为是类型名，与下方 mutations 中
    // 的 increment 对应
    //commit 提交变化，修改数据的唯一方式就是显式的提交 mutations
    commit('increment')
  },
   abc({commit,state}) {
     commit('abc')
  }
}

// 定义　mutations　，处理状态(数据)的改变
const mutations = {
  // 与上方　commmit 中的'increment'　相对应
  increment(state) {
    state.count ++;
  },
  abc(state) {
    state.count --;
  }
}
// 创建store 对象
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
// 导出store 对象
export default store;