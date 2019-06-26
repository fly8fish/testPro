<template>
  <div class="head-container">
    <el-date-picker v-model="query.registerTime" format="yyyy-MM-dd" value-format="yyyyMMdd" type="date" placeholder="选择日期时间" align="right" class="filter-item"/>
    <!--<el-input v-model="query.manuFacturer" clearable placeholder="输入终端厂家" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>-->
    <el-select v-model="query.manuFacturer" style="width: 200px;" class="filter-item" placeholder="请选择终端厂家">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <el-select v-model="query.cpappname" style="width: 200px;" class="filter-item" placeholder="请选择牌照方">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <!--<el-input v-model="query.cpappname" clearable placeholder="输入牌照方" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>-->
    <el-input v-model="query.sn" clearable placeholder="输入SN号" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">查询</el-button>
  </div>
</template>

<script>
import { getOptionsValue } from '@/api/terminal'

export default {
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: [],
      options1: [],
      enabledTypeOptions: [
        { key: 'true', display_name: '正常' },
        { key: 'false', display_name: '禁用' }
      ]
    }
  },
  created() {
    getOptionsValue(0).then(res => {
      this.options = res
    }).catch(err => {
      this.loading = false
      console.log(err.response.data.message)
    })
    getOptionsValue(1).then(res => {
      this.options1 = res
    }).catch(err => {
      this.loading = false
      console.log(err.response.data.message)
    })
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
