<template>
  <div>
    <input type="text" v-imFocus>

    <hr />

    <div :title="title">123</div>
  </div>
</template>

<script>
  export default {
    name: 'Css',

    data () {
      return {
        title: '123         13123'
      }
    },

    directives: {
      imFocus: {
        bind (el) {
          console.log('bind', el)
        },

        inserted (el) {
          console.log('inserted', el)
          el.focus()
        }
      }
    },

    methods: {

    }
  }
</script>