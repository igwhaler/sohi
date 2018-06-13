<template>
  <div class="home-page">
    <div v-if="articleList && articleList.length" class="g-article-list">
      <ArtItem v-for="(article, index) in articleList" :article="article" class="grid-article" :key="index"/>
    </div>
  </div>
</template>

<script>
import index from './js/index'

export default index
</script>

<style scoped lang="less">
  .home-page {
    .grid-article {
      margin-bottom: 30px;
    }
  }
</style>
