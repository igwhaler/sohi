<template>
  <div class="home-page">
    <text>首页</text>

    <text @click="jumpArt">跳转详情</text>
  </div>
</template>

<script>
export default {
  name: 'Home',

  methods: {
    jumpArt (e) {
      this.$router.push('art')
    }
  }
}
</script>
