<template>
  <div class="page-bg">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="时段查询" name="first"><time-inquire /></el-tab-pane>
      <el-tab-pane label="对比分析" name="second">对比分析</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import timeInquire from './components/timeInquire'

export default {
  components: { timeInquire }, 
  data() {
    return {
      activeName: 'first'
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.page-bg {
  background-color: #EFF3F6;
  min-height: calc(100vh - 94px);
  padding: 40px 18px 0px;
  .content {
    border-radius: 5px;
    background-color: #fff;
  }

  .el-tabs__header {
    margin-bottom: 0px;
  }
  .el-tabs__header .el-tabs__nav {
    border: none;
  }
  .el-tabs__header .el-tabs__item {
    border-left: none;
    background-color: #fafbfd;
    border-bottom: 1px solid #dfe4de;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-right: 15px;
  }
  .el-tabs__item.is-active {
    background-color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-top: 1px solid #dfe4ed;
    border-left: 1px solid #dfe4ed;
    border-right: 1px solid #dfe4ed;
  }
}

</style>
