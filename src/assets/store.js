import Vue from 'vue';
// 引入vuex 并　use
import Vuex from 'vuex';
Vue.use(Vuex)

// 定义属性(数据)
var state = {
	count: 6
}
// 创建store 对象
const store = new Vuex.Store({
	state
})
// 导出store 对象
export default store;