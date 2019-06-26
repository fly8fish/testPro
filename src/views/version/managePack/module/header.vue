<template>
  <div class="head-container">
    <el-input v-model="query.upgradePackageName" clearable placeholder="请输入升级包" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">搜索</el-button>
  </div>
</template>

<script>
export default {
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    toQuery() {
      console.log(this)
      this.$parent.page = 0
      this.$parent.init()
    }
  }
}
</script>
