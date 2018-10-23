<template>
  <div class="blog-container">
    <IgwHeader class="animated zoomInDown"/>
    <ArtDetail />
  </div>
</template>

<script>
import IgwHeader from '~/components/IgwHeader/index.vue'
import ArtDetail from '~/components/ArtDetail/index.vue'

export default {
  name: 'Article',
  components: {
    IgwHeader,
    ArtDetail
  }
}
</script>
