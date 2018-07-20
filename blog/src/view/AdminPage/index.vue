<template>
  <div class="admin-page">
    <TextEditor></TextEditor>
  </div>
</template>

<script>
import TextEditor from '../../components/TextEditor/index'

export default {
  name: 'AdminPage',
  components: {
    TextEditor
  },
  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="less">
.admin-page {
  background-color: #ffffff;
}
</style>
