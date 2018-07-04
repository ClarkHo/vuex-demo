<template>
  <div id="app">
     <!-- 这个　increment 方法与下面　methods 中的　increment 相对应 -->
     <button @click="increment">增加</button>
     <button @click="abc">减少</button>
    <h1>{{count}}</h1>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: 'app',
  computed: mapGetters([
    // 此处的　count 与以下store.js 文件中的getters 内的count 相对应
    'count'
    ]),
  methods: mapActions([
    // 该increment　来自　store.js 中导出的　actions 和　mutations 中的　increment
    'increment','abc'
    ])
  }
  
</script>

<style>

</style>
