<template>
  <div class="home-page">
    <YoupinHeader />
    <router-view />
  </div>
</template>

<script>
  import YoupinHeader from '../YoupinHeader/YoupinHeader'

  export default {
    name: 'HomePage',
    components: {
      YoupinHeader
    },
    data () {
      return {
        message: 'Home'
      }
    }
  }
</script>
