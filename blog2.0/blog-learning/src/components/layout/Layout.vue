<template lang="html">
  <div class="layout" id="app">
    <layout-header></layout-header>
    <layout-body></layout-body>
  </div>
</template>

<script>
import LayoutHeader from './Header'
import LayoutBody from './Body'

export default {
  components: {
    LayoutHeader,
    LayoutBody
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100%;
  padding-top: 6rem;
}
</style>
