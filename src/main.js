import Vue from 'vue';
import App from './App.vue';
import store from './assets/store' //导入store对象

new Vue({
  // 配置 store 选项，指定为 store 对象，会自动将 store 对象注入到所有子组件中，
  // 在子组件中通过 this.$store 访问该 store 对象 
  store,
  el: '#app', // 提供一个在页面上已经存在的 DOM 元素作为 Vue 实例挂载目标
  // components: { App }  vue1.0的写法
  render: h => h(App)
})