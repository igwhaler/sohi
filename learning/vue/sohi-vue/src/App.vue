<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from './components/common/Header'
  export default {
    name: 'app',
    components: {
      MyHeader
    }
  }
</script>

<style>
  #app {
    text-align: center;
  }
</style>
