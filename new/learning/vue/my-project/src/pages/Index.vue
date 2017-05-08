<template>
  <div class="wrap">
    <img src="../assets/logo.png">
    <p>
      <router-link to="/index">首页</router-link>
    </p>
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