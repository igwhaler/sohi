<template>
  <div class="home-page">
    <div v-if="articleList && articleList.length" class="g-article-list">
      <ArtItem v-for="(article, index) in articleList" :article="article" class="grid-article animated flipInX" :key="index"/>
    </div>
  </div>
</template>

<script>
export { default } from './js/index.js'
</script>

<style scoped lang="less">
.home-page {
  .grid-article {
    margin-bottom: 20px;
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }
  }
}

@media screen and (min-width: 800px) {
  .home-page {
    .grid-article {
      margin-bottom: 30px;
      &:nth-last-of-type(1) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
