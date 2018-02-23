<template>
  <div class="home-page">
    <ArtItem class="grid-article" />
  </div>
</template>

<script>
import ArtItem from './ArtItem'

export default {
  name: 'HomePage',
  components: {
    ArtItem
  }
}
</script>

<style scoped lang="less">
  .home-page {
    .grid-article {
      margin-bottom: 30px;
    }
  }
</style>
