<template lang="html">
  <div class="new-wrap">
    <div class="new">
      <span class="iconfont">&#xe61c;</span>
      <h3 class="title">创建一个新的调查问卷</h3>
      <a
        v-link="{ path: '/platform/new/edit' }"
        @click="setMode"
        class="btn">新建</a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setMode () {
      window.sessionStorage.setItem('edit-mode', 'create')
    }
  }
}
</script>

<style lang="scss">
@import "../../scss/base";
@import "../../scss/helpers/mixins";
.new-wrap {
  height: 100%;
  text-align: center;
  @include child-center;
  .new {
    @include square(30rem);
    border-radius: .5rem;
    box-shadow: 0 0 10px 0 #ccc;
    transform: translateY(-6rem);
    .iconfont {
      font-size: 6rem;
      color: $blue;
      margin: 4rem 0 3rem;
      display: inline-block;
    }
    .title {
      font-size: $font-size-default;
      color: $gray;
      margin-bottom: 6rem;
    }
    .btn {
      @include button(3rem, 1.5rem, $blue);
      border-width: 2px;
      font-size: $font-size-xl;
      text-decoration: none;
      color: $light-black;
    }
  }
}
</style>
