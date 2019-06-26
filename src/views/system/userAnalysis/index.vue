<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <!--表格渲染-->
    <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
      <el-table-column label="SN号">
        <template slot-scope="scope">
          <div>{{ scope.row.ROW }}</div>
        </template>
      </el-table-column>
      <el-table-column label="CPU型号">
        <template slot-scope="scope">
          <div>{{ scope.row.cpu }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="Android系统版本号">
        <template slot-scope="scope">
          {{ scope.row.cpappversion }}
        </template>
      </el-table-column>
      <el-table-column label="机顶盒固件版本">
        <template slot-scope="scope">
          <div>{{ scope.row.release }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="机顶盒型号">
        <template slot-scope="scope">
          <div>{{ scope.row.model }}</div>
          <!--<span>{{ parseTime(scope.row.createTime) }}</span>-->
        </template>
      </el-table-column>
      <el-table-column prop="name" label="机顶盒厂家">
        <template slot-scope="scope">
          <div>{{ scope.row.manufacturer }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="软探针中间件版本号">
        <template slot-scope="scope">
          <div>{{ scope.row.softprobeversion }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="牌照方应用包名">
        <template slot-scope="scope">
          <div>{{ scope.row.cpappname }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="牌照方应用版本号">
        <template slot-scope="scope">
          <div>{{ scope.row.version }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="网关mac">
        <template slot-scope="scope">
          <div>{{ scope.row.gatewaymac }}</div>
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
import checkPermission from '@/utils/permission'
import { parseTime } from '@/utils/index'
import initData from '@/mixins/initData'

export default {
  components: { eHeader },
  mixins: [initData],
  data() {
    return {
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    parseTime,
    checkPermission,
    beforeInit() {
      this.url = 'api/habase/data'
      const sort = 'sort,asc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const value = query.value
      const sn = query.sn
      const manuFacturer = query.manuFacturer
      const cpappname = query.cpappname
      const registerTime = query.registerTime
      const enabled = query.enabled
      this.params['total'] = this.total
      if (value) { this.params['name'] = value }
      if (sn) { this.params['sn'] = sn }
      if (cpappname) { this.params['cpAppName'] = cpappname }
      if (manuFacturer) { this.params['manuFacturer'] = manuFacturer }
      if (registerTime) { this.params['registerTime'] = registerTime }
      if (enabled !== '' && enabled !== null) { this.params['enabled'] = enabled }
      return true
    }
  }
}
</script>

<style scoped>
</style>
