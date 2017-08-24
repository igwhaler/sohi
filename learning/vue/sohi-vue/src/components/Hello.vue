<template>
  <div class="hello">
    <img src="../assets/common/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '呵呵哒'
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
