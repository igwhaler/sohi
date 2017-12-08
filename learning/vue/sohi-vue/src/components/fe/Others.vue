<template>
  <div class="wrap-others">
    <h2>Others</h2>
    <div class="wrap-add-data">
      <el-input class="add-data-input" v-model="input"></el-input>
      <el-button type="primary" @click="handleClick">提交</el-button>
    </div>
    <p>{{input}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Others',
    data () {
      return {
        input: ''
      }
    },
    methods: {
      handleClick () {
        let {input} = this

        this.$http({
          url: '/addData',
          method: 'POST',
          body: {name: input}
        }).then(json => {
          console.log(json)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .wrap-others {
    padding: 20px;
  }

  .wrap-add-data {
    .add-data-input {
      width: 200px;
    }
  }
</style>