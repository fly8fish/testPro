<template>
  <div class="page-bg">
    <div class="content">
      <eHeader :query="query"/>
      <el-table :data="tableData.slice((curPage-1)*pageSize,curPage*pageSize)" style="width: 100%" v-loading="loading" size="medium"
        :default-sort = "{prop: 'city', order: 'descending'}"
        :header-cell-style="tableHeaderColor">
        <el-table-column prop="city" label="城市" sortable min-width="80px" fixed align="center"></el-table-column>
        <el-table-column prop="startTime" label="开始时间" sortable min-width="130px" align="center"></el-table-column>
        <el-table-column prop="endTime" label="结束时间" sortable min-width="130px" align="center"></el-table-column>
        <el-table-column prop="epgSuc" label="EPG请求成功率(%)" min-width="140px" align="center"></el-table-column>
        <el-table-column prop="wired" label="有线率(%)" min-width="90px" align="center"></el-table-column>
        <el-table-column prop="catonTime" label="卡顿总时长(s)" min-width="115px" align="center"></el-table-column>
        <el-table-column prop="catonNum" label="卡顿总次数" sortable min-width="115px" align="center"></el-table-column>
        <el-table-column prop="flowerTime" label="花屏总时长(s)" sortable min-width="130px" align="center"></el-table-column>
        <el-table-column prop="flowerNum" label="花屏总次数" sortable min-width="120px" align="center"></el-table-column>
        <el-table-column prop="playNum" label="节目播放总次数" sortable min-width="140px" align="center"></el-table-column>
        <el-table-column prop="playSucNum" label="节目播放成功总次数" sortable min-width="165px" align="center"></el-table-column>
        <el-table-column prop="playPer" label="节目播放成功率(%)" sortable min-width="160px" align="center"></el-table-column>
      </el-table>
      <!--分页组件-->
      <el-pagination
        :total="total"
        background
        class="pagination"
        @current-change="pageChange"
        layout="prev, pager, next"/>
    </div>
  </div>
</template>

<script>
import eHeader from './components/header'
export default {
  components: { eHeader },
  data() {
    return {
      tableData: [{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },{
        city: '兰州',
        startTime: '2019/6/21 17:00',
        endTime: '2019/6/21 18:00',
        epgSuc: '100%',
        wired: '100%',
        catonTime: 2664,
        catonNum: 261,
        flowerTime: 1892,
        flowerNum: 274,
        playNum: 3741,
        playSucNum: 2741,
        playPer: '100(%)'
      },],
      total: 0,
      curPage: 1,
      pageSize: 10,
      loading: true,
      query: {
        granularity: "小时",
        city: "兰州",
        startDate: '20190624',
        endDate: '20190625',
        startTime: '17:00',
        endTime: '18:00',
      }
    }
  },
  created() {
    this.total = this.tableData.length
    this.loading = false
  },
  methods: {
    tableHeaderColor: function({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #F6FAFD;'
      }
    },

    pageChange: function(curPage) {
      this.curPage = curPage;
      console.log(this.curPage)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.page-bg {
  background-color: #EFF3F6;
  min-height: calc(100vh - 94px);
  padding: 40px 18px 0px;
  .content {
    border-radius: 5px;
    background-color: #fff;
  }

  .pagination {
    margin: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-end;
  }
}

</style>
