<template>
  <div class="wrap-index">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '@/components/common/Header'

  export default {
    name: 'hello',
    components: {
      MyHeader
    }
  }
</script>

<style scoped lang="less">

</style>