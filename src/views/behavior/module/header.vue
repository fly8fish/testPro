<template>
  <div class="head-container">
    <el-date-picker v-model="query.registerTime" type="datetime" value-format="yyyyMMdd" placeholder="选择日期时间" align="right" class="filter-item"/>
    <!--<el-input v-model="query.value" clearable placeholder="输入事件号" style="width: 200px;" class="filter-item" @keyup.enter.native="toQuery"/>-->
    <el-select v-model="query.status" style="width: 200px;" class="filter-item" placeholder="请选择事件号">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <el-input v-model="query.channel" clearable placeholder="输入频道" style="width: 200px;" class="filter-item" />
    <el-input v-model="query.videoName" clearable placeholder="输入节目名称/APP名称" style="width: 200px;" class="filter-item" />
    <el-input v-model="query.sn" clearable placeholder="输入SN号" style="width: 200px;" class="filter-item" />
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">查询</el-button>
  </div>
</template>

<script>
import { getTableHeadValue } from '@/api/terminal'
export default {
  props: {
    query: {
      type: Object,
      required: true,
      value: '1'
    }
  },
  data() {
    return {
      options: [
        { value: '1', label: '主页点击信息' },
        { value: '2', label: '列表点击信息' },
        { value: '3', label: '节目信息' },
        { value: '4', label: '节目列表信息' },
        { value: '5', label: '搜索信息' },
        { value: '6', label: '收藏信息' },
        { value: '7', label: '筛选信息' },
        { value: '8', label: '播放记录信息' },
        { value: '9', label: '播放行为信息' },
        { value: '10', label: 'App信息' },
        { value: '11', label: '节目主题信息' },
        { value: '12', label: '主页入口点击信息' },
        { value: '13', label: '主页布局信息' },
        { value: '14', label: '菜单入口点击信息' }
      ],
      enabledTypeOptions: [
        { key: 'true', display_name: '正常' },
        { key: 'false', display_name: '禁用' }
      ]
    }
  },
  created() {
  },
  methods: {
    toQuery() {
      this.$parent.page = 0
      this.$parent.init()
      const eventStatus = this.$parent.query.status
      getTableHeadValue(eventStatus).then(res => {
        this.$parent.configHeader = res
      }).catch(err => {
        this.loading = false
        console.log(err.response.data.message)
      })
    }
  }
}
</script>

<style scoped>

</style>
