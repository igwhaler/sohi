<template>
  <div>
    <p @click="handleReset">reset: {{childObj.num}}</p>

    <p>text: {{text}}</p>

    <p>computedText: {{computedText}}</p>

    <p>myMessage: {{myMessage}}</p>
  </div>
</template>

<script>
  export default {
    name: 'MyComponent',

    data () {
      return {
        text: 123123,
        tip: 'haha'
      }
    },

    props: ['childObj', 'myMessage'],

    computed: {
      computedText () {
        return this.childObj.num
      }
    },

    watch: {
      'childObj.num': {
        handler (newV, oldV) {
          this.text = newV
        },
        deep: true
      }
    },

    created () {
      this.$emit('throwTip', this.tip)
    },

    updated () {
      console.log('updated')
    },

    methods: {
      handleReset () {
        let {childObj} = this

        childObj.num = 'a'

        this.$emit('throwTip', this.tip)

        // this.myMessage = 456
        this.$emit('update:myMessage', 456)
      }
    }
  }
</script>
