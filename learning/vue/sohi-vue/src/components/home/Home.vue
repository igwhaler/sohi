<template>
  <div class="wrap-home">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '@/components/common/Header'

  export default {
    name: 'Home',
    components: {
      MyHeader
    }
  }
</script>

<style scoped lang="less">
  .wrap-home {
    min-height: 800px;
    // background: url('../../assets/common/bg.jpeg') 50% 50% no-repeat;
    background-size: cover;
  }
</style>
