<template>
  <div>
    <h2>myInput</h2>

    <slot v-if="message" :value="message" name="titleSlot"></slot>
    <p v-else>loading</p>
  </div>
</template>

<script>
  export default {
    namre: 'MyInput',

    data () {
      return {
        message: ''
      }
    },

    mounted () {
      setTimeout(() => {
        this.message = '456778'
      }, 2000)
    }
  }
</script>
