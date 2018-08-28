<template>
  <div class="flex">
    <div class="box box1">1</div>

    <div class="box box2">2</div>

    <div class="box box3">3</div>

    <div class="box box4">4</div>
  </div>
</template>

<script>
export default {
  name: 'Flex',
  data () {
    return {}
  }
}
</script>

<style lang="less">
.flex {
  height: 500px;
  width: 600px;
  border: 2px solid black;
  display: inline-flex;
  // flex-direction: column;
  // flex-wrap: wrap-reverse;
  // flex-flow: row wrap;
  // justify-content: flex-start;
  // align-items: flex-start;
  // align-content: center;

  .box {
    width: 100px;
    height: 100px;
  }

  .box1 {
    // flex-shrink: 3;
    // flex-grow: 2;
    // flex-basis: 200px;
    background-color: red;
  }
  .box2 {
    // flex-shrink: 1;
    // flex-grow: 1;
    align-self: flex-end;
    background-color: tan;
  }
  .box3 {
    // flex-shrink: 1;
    // flex-grow: 1;
    background-color: greenyellow;
  }
  .box4 {
    // flex-shrink: 0;
    background-color: gray;
  }
}
</style>
