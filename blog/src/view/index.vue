<template>
  <div>
    <transition name="fade">
      <div v-if="showState">
        <IgwHeader />
      </div>
    </transition>

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
