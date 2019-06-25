<template>
  <div class="head-container">
    <el-date-picker v-model="query.registerTime" type="date" placeholder="选择日期时间" class="filter-item"/>
    <el-input v-model="query.value" clearable placeholder="输入终端厂家" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-input v-model="query.value" clearable placeholder="输入牌照方" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-button class="filter-item" type="success" icon="el-icon-search" size="mini" @click="toQuery">查询</el-button>
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
    return {
      enabledTypeOptions: [
        { key: 'true', display_name: '正常' },
        { key: 'false', display_name: '禁用' }
      ]
    }
  },
  methods: {
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
    }
  }
}
</script>

<style scoped>

</style>
