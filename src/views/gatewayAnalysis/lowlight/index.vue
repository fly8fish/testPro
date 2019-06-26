<template>
  <div class="page-bg">
    <div class="content">
      <eHeader :query="query"/>
      <el-table :data="tableData.slice((curPage-1)*pageSize,curPage*pageSize)" style="width: 100%" v-loading="loading" size="medium"
        :default-sort = "{prop: 'city', order: 'descending'}"
        :header-cell-style="tableHeaderColor">
        <el-table-column prop='startTime' label='开始时间' sortable min-width='130px' align='center'></el-table-column>
        <el-table-column prop='endTime' label='结束时间' sortable min-width='130px' align='center'></el-table-column>
        <el-table-column prop='city' label='城市' sortable min-width='80px' align='center'></el-table-column>
        <el-table-column prop='sn' label='网关SN' sortable align='center'></el-table-column>
        <el-table-column prop='vendor' label='厂商' sortable align='center'></el-table-column>
        <el-table-column prop='mac' label='MAC' sortable align='center'></el-table-column>
        <el-table-column prop='pon' label='PON口功率(dBm)' sortable min-width='160px' align='center'></el-table-column>
        <el-table-column label='详细信息' min-width='90px' align='center'>
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" plain size="mini" style="width:80px">查看</el-button>
          </template>
        </el-table-column>
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
        sn: '6f0045a768912003',
        vendor: '华为',
        mac: '60:d2:fa:22:35:6a',
        pon: '-30.12'
      }],
      total: 0,
      curPage: 1,
      pageSize: 10,
      loading: true,
      query: {
        granularity: '小时',
        city: "all",
        sn: '6f0045a768912003',
        startDate: '20190624',
        endDate: '20190625',
        startTime: '17:00',
        endTime: '18:00'
      }
    }
  },
  created() {
    var dataTmp = this.tableData[0];
    var tableDataTmp = [];
    for(let i=0;i<15;i++) {
      tableDataTmp.push(dataTmp)
    }
    this.tableData = tableDataTmp;
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
