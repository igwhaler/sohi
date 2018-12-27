<template>
  <div>
    <IgwHeader class="animated zoomInDown"/>

    <router-view></router-view>
  </div>
</template>

<script>
import IgwHeader from '@/components/IgwHeader'

export default {
  name: 'Index',
  components: {
    IgwHeader
  },
  data () {
    return {
      showState: false
    }
  },

  created () {
    setTimeout(() => {
      this.showState = true
    }, 0)
  }
}
</script>
