<template>
  <div class="wrap-index">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import MyHeader from '@/components/common/Header'

  export default {
    name: 'Index',
    components: {
      MyHeader
    }
  }
</script>

<style scoped lang="less">

</style>
