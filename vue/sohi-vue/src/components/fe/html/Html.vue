<template>
  <div class="wrap-html">
    <div>
      <h2>HTML</h2>
    </div>

    <div>
      <input type="text" v-model="obj.num" />
      <p>input: {{obj.num}}</p>
      <p>message: {{message}}</p>

      <hr />

      <MyComponent :childObj="obj" v-on:throwTip="receiveTip" :myMessage.sync="message" />
    </div>

    <hr />

    <p>
      <input type="checkbox" id="checkbox1" v-model="checked1">
      <label for="checkbox1">{{checked1}}</label>
    </p>

    <hr />

    <div>
      <MyInput>
        <template slot-scope="props" slot="titleSlot" class="btn">
          <h3 @click="handleShow(props)">{{props.value}}</h3>
        </template>
      </MyInput>
    </div>

    <hr />

    <div>
      <input type="button" @click="handleTroggle" value="点击">
      <transition name="fade">
        <div v-if="isShow">123123123</div>
      </transition>
    </div>

    <hr />

    <div>
      <input type="text" v-focus>
    </div>
  </div>
</template>

<script>
  import MyComponent from './MyComponent'
  import MyInput from './MyInput'

  export default {
    name: 'Html',
    components: {
      MyComponent,
      MyInput
    },
    data () {
      return {
        obj: {
          num: 0
        },
        message: '123',
        checked1: false,

        myInput: {
          value: ''
        },

        isShow: false
      }
    },
    methods: {
      receiveTip (tip) {
        console.log(tip)
      },

      handleShow (props) {
        console.log(props.value)
        props.value = 123
        console.log(props.value)
      },

      handleTroggle () {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="less">
  .wrap-html {
  }
</style>