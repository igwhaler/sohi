<template>
  <div class="home-page">
     <keep-alive>
      <div v-if="articleList && articleList.length" class="g-article-list">
        <ArtItem v-for="(article, index) in articleList" :article="article" class="grid-article animated flipInX" :key="index"/>
      </div>
    </keep-alive>
  </div>
</template>

<script>
export { default } from './js/index'
</script>

<style scoped lang="less">
  .home-page {
    .grid-article {
      margin-bottom: 30px;
    }
  }
</style>
