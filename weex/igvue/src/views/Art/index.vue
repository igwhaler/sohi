<template>
  <div class="art-detail">
    <text @click="goHome">返回首页</text>

    <text>文章</text>
  </div>
</template>

<script>
export default {
  name: 'Art',

  methods: {
    goHome () {
      this.$router.back()
    }
  }
}
</script>
