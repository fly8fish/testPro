<template>
  <div class="app-container">
    <el-card class="box-card" style="margin-bottom: 15px;">
      <div><eHeader :query="query"/></div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: #999">机顶盒列表</span>
      </div>
      <div>
        <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
          <el-table-column prop="username" label="终端SN"/>
          <el-table-column prop="phone" label="城市"/>
          <el-table-column prop="phone" label="区县"/>
          <el-table-column prop="phone" label="厂商"/>
          <el-table-column prop="phone" label="牌照方"/>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import eHeader from './module/header'
import initData from '@/mixins/initData' // 引入封装好的请求

export default {
  components: { eHeader },
  mixins: [initData],
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    beforeInit() {
      this.url = 'api/users'
      const sort = 'id,desc'
      const query = this.query
      const upgradePackageName = query.upgradePackageName
      this.params = { page: this.page, size: this.size, sort: sort }
      if (upgradePackageName) {
        this.params['upgradePackageName'] = upgradePackageName
      }
      return true
    }
  }
}
</script>

<style scoped>

</style>
