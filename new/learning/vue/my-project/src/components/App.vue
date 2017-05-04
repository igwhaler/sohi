<template>
  <div id="app">
    <img src="../assets/logo.png">
    <p>
      <router-link to="/index">首页</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 14px;
}
</style>
