<template>
  <div>
    <IgwHeader />

    <router-view></router-view>
  </div>
</template>

<script>
import IgwHeader from '../view/IgwHeader'

export default {
  name: 'Index',
  components: {
    IgwHeader
  },
  data () {
    return {}
  }
}
</script>
