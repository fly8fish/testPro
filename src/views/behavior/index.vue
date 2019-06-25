<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <!--表格渲染-->
    <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
      <el-table-column
        v-for="item in configHeader"
        :key="item.index"
        :label="item.label"
        :property="item.property"
        width="180">
        <template slot-scope="scope">
          <div>{{ change$ToStr(scope.row[scope.column.property]) }}</div>
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
import { change$ToStr } from '@/utils/index'
import initData from '@/mixins/initData'
import { getTableHeadValue } from '@/api/terminal'

export default {
  components: { eHeader },
  mixins: [initData],
  data() {
    return {
      configHeader: [],
      status: '1'
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
    getTableHeadValue(1).then(res => {
      this.configHeader = res
    }).catch(err => {
      this.loading = false
      console.log(err.response.data.message)
    })
  },
  methods: {
    change$ToStr,
    checkPermission,
    beforeInit() {
      this.url = 'api/behavior/data'
      const sort = 'sort,asc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const status = query.status
      const registerTime = query.registerTime
      const channel = query.channel
      const videoName = query.videoName
      const enabled = query.enabled
      const sn = query.sn
      if (sn) { this.params['sn'] = sn }
      if (videoName) { this.params['videoName'] = videoName }
      if (channel) { this.params['channel'] = channel }
      if (status) { this.params['status'] = status } else {
        this.params['status'] = '1'
      }
      if (registerTime) { this.params['registerTime'] = registerTime }
      if (enabled !== '' && enabled !== null) { this.params['enabled'] = enabled }
      return true
    }
  }
}
</script>

<style scoped>

</style>
