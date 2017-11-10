<template>
  <div class="wrap-home-youpin">
    <YoupinHeader />

    <div class="home-main">
      <div class="container">
        <CarouselItem />
        <AdvertItem />
        <Floor />
      </div>
    </div>

  </div>
</template>

<script>
  import YoupinHeader from '../YoupinHeader/YoupinHeader'
  import CarouselItem from './CarouselItem'
  import AdvertItem from './AdvertItem'
  import Floor from '../Floor/Floor'

  export default {
    name: 'HomePage',
    components: {
      YoupinHeader,
      CarouselItem,
      AdvertItem,
      Floor
    },
    data () {
      return {
        message: 'Home'
      }
    }
  }
</script>
