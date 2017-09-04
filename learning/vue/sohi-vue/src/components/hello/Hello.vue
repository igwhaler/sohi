<template>
  <div class="wrap-hello">
    <div class="hello">
      <img src="../../assets/common/logo.png">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Hello world!'
      }
    }
  }
</script>

<style scoped lang="less">
  .hello {
    padding-top: 30px;
    text-align: center;
  }
</style>
