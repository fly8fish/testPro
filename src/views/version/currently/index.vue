<template>
  <div class="app-container">
    <el-card class="box-card" style="margin-bottom: 15px;">
      <div>
        <el-row :gutter="20">
          <el-col :span="8" :align="center"><div class="search"><i class="el-icon-location-outline iconfont"/><span class="configure">地域配置</span><span class="content" @click="detailContent(1)">详细内容>></span></div></el-col>
          <el-col :span="8" :align="center"><div class="search"><i class="el-icon-bell iconfont"/><span class="configure">机顶盒配置</span><span class="content" @click="detailContent(2)">详细内容>></span></div></el-col>
          <el-col :span="8" :align="center"><div class="search"><i class="el-icon-printer iconfont"/><span class="configure">终端SN配置</span><span class="content" @click="detailContent(3)">详细内容>></span></div></el-col>
        </el-row>
        <sForm ref="form"/>
        <tForm ref="tform"/>
        <cForm ref="cform"/>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: #999">最近一次策略配置的SN列表</span>
      </div>
      <div>
        <el-table v-loading="loading" :data="data" size="small" style="width: 100%;">
          <el-table-column prop="username" label="终端SN"/>
          <el-table-column prop="requestIp" label="城市"/>
          <el-table-column prop="description" label="区县"/>
          <el-table-column prop="description" label="厂商"/>
          <el-table-column prop="description" label="牌照方"/>
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
    </el-card>
    <release/>
  </div>
</template>

<script>
import initData from '@/mixins/initData'
import sForm from './component/Region'
import tForm from './component/SetTopBox'
import cForm from './component/SnConfig'
import release from './component/release'
export default {
  components: { sForm, tForm, cForm, release },
  mixins: [initData],
  props: {},
  data() {
    return {
      center: 'center'
    }
  },
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    detailContent(num) {
      switch (num) {
        case 1:
          this.$refs.form.dialog = true
          break
        case 2:
          this.$refs.tform.dialog = true
          break
        case 3:
          this.$refs.cform.dialog = true
          break
      }
    },
    beforeInit() {
      this.url = 'api/logs'
      const sort = 'id,desc'
      const query = this.query
      const upgradePackageName = query.upgradePackageName
      this.params = { page: this.page, size: this.size, sort: sort }
      if (upgradePackageName) { this.params['upgradePackageName'] = upgradePackageName }
      return true
    }
  }
}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .search{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .configure{
    font-size: 14px;
    margin-right: 10px;
    margin-left: 5px;
  }
  .content{
    color: #3a8ee6;
    font-size: 14px;
  }
  .content:hover{
    cursor: pointer;
  }
  .iconfont{
    font-size: 50px;
    color: #666;
  }
</style>
