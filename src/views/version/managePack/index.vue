<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
      <el-table-column prop="username" label="升级包名称"/>
      <el-table-column prop="requestIp" label="版本"/>
      <el-table-column prop="description" label="大小"/>
      <el-table-column prop="description" label="下载地址"/>
      <el-table-column prop="description" label="是否启用"/>
      <el-table-column prop="description" label="最近操作时间"/>
      <el-table-column prop="description" label="操作人"/>
      <el-table-column v-if="checkPermission(['ADMIN','USERJOB_ALL','USERJOB_EDIT','USERJOB_DELETE'])" label="操作" width="200px" align="center">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="packDetail()">用户配置</el-button>
          <el-button type="success" size="mini">是否启用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <el-pagination
      :total="total"
      background
      style="margin-top: 8px;"
      layout="total, prev, pager, next, sizes"
      @size-change="sizeChange"
      @current-change="pageChange"/>
  </div>
</template>

<script>
import eHeader from './module/header'
import initData from '@/mixins/initData' // 引入封装好的请求
import checkPermission from '@/utils/permission'

export default {
  components: { eHeader },
  mixins: [initData],
  data() {
    return {
      delLoading: false
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    checkPermission,
    beforeInit() {
      this.url = 'api/logs'
      const sort = 'id,desc'
      const query = this.query
      const upgradePackageName = query.upgradePackageName
      this.params = { page: this.page, size: this.size, sort: sort }
      if (upgradePackageName) { this.params['upgradePackageName'] = upgradePackageName }
      return true
    },
    packDetail() {
      this.$router.push({
        path: '/version/packdetail'
      })
    }
  }
}
</script>

<style scoped>

</style>
