<template>
  <div id="app">
     <!-- 把count 方法直接写入，可自己执行 -->
    <h1>{{count}}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    count() {
      //　返回获取到的数据
      return this.$store.state.count;
             }    
  }
  }
</script>

<style>

</style>
