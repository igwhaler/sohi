<template>
  <div class="blog-container">
    <IgwHeader class="animated zoomInDown"/>
    <HomePage />
  </div>
</template>

<script>
import IgwHeader from '~/components/IgwHeader/index.vue'
import HomePage from '~/components/HomePage/index.vue'

export default {
  components: {
    IgwHeader,
    HomePage
  }
}
</script>

<style lang="less">
</style>
