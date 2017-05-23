<template>
  <div class="ele">
    <div class="ep1">
      <el-button @click="visible = true">按钮</el-button>
      <el-dialog v-model="visible" title="Hello world">
        <p>欢迎使用 Element</p>
      </el-dialog>
    </div>

    <div class="ep2">
      <el-button @click="show = !show">Click Me</el-button>
      <div style="display: flex; margin-top: 20px; height: 100px;">
        <transition name="el-fade-in-linear">
          <div v-show="show" class="transition-box">.el-fade-in-linear</div>
        </transition>
        <transition name="el-fade-in">
          <div v-show="show" class="transition-box">.el-fade-in</div>
        </transition>
      </div>
    </div>

    <div class="ep3">
      <el-row :gutter="40">
        <el-col :span="4" :offset="2">
          <div class="box"></div>
        </el-col>
        <el-col :span="8">
          <div class="box"></div>
        </el-col>
        <el-col :span="10">
          <div class="box"></div>
        </el-col>
      </el-row>
    </div>

    <div class="ep4">
      <el-row class="ep4-grid" :gutter="40" type="flex" justify="center" align="bottom">
        <el-col :span="4">
          <div class="box"></div>
        </el-col>
        <el-col :span="4">
          <div class="box"></div>
        </el-col>
        <el-col :span="4">
          <div class="box"></div>
        </el-col>
      </el-row>
    </div>

    <div class="ep5">
      <el-row :gutter="10">
        <el-col :xs="8" :sm="10" :md="2" :lg="16">
          <div class="box"></div>
        </el-col>
        <el-col :xs="10" :sm="4" :md="20" :lg="4">
          <div class="box"></div>
        </el-col>
        <el-col :xs="6" :sm="10" :md="2" :lg="4">
          <div class="box"></div>
        </el-col>
      </el-row>
    </div>

    <div class="ep6">
      <i class="el-icon-edit edit-hover"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-loading"></i>
      <el-button type="primary" icon="search">搜索</el-button>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Ele',
    data () {
      return {
        visible: false,
        show: true
      }
    }
  }
</script>

<style scoped>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #20A0FF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .ep3, .ep4 {
    margin: 10px auto;
    width: 800px;
    background: darkred;
  }
  .ep4-grid {
    height: 150px
  }
  .box {
    height: 60px;
    background: tan;
    border: 2px solid yellowgreen;
    border-radius: 4px;
  }
  .ep5  {
    background: darkred;
  }
  .edit-hover:hover {
    color: tan;
    transform: scale(1.25);
    transition: 0.5s;
  }
</style>
