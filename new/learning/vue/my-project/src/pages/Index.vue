<template>
  <div class="wrap">
    <img src="../assets/logo.png">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/guide">导航</router-link>
      <router-link to='/more'>更多</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.wrap {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 14px;
}
</style>
