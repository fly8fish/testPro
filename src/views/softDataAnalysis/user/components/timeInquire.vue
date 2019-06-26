<template>
  <div class="head-container">
    <eHeader :query="query"/>
    <el-table :data="tableData.slice((curPage-1)*pageSize,curPage*pageSize)" style="width: 100%" v-loading="loading" size="medium"
        :default-sort = "{prop: 'city', order: 'descending'}"
        :header-cell-style="tableHeaderColor">
        <el-table-column prop='city' label='城市' sortable min-width='80px' align='center'></el-table-column>
        <el-table-column prop='terminalid' label='终端ID' sortable min-width='130px' align='center'></el-table-column>
        <el-table-column prop='account' label='用户账号' sortable min-width='100px' align='center'></el-table-column>
        <el-table-column prop='startTime' label='开始时间' sortable min-width='130px' align='center'></el-table-column>
        <el-table-column prop='endTime' label='结束时间' sortable min-width='130px' align='center'></el-table-column>
        <el-table-column prop='catonTime' label='卡顿总时长(s)' sortable min-width='140px' align='center'></el-table-column>
        <el-table-column prop='catonNum' label='卡顿总次数' sortable min-width='120px' align='center'></el-table-column>
        <el-table-column prop='flowerNum' label='花屏总次数' sortable min-width='120px' align='center'></el-table-column>
        <el-table-column prop='playNum' label='节目播放总次数' sortable min-width='150px' align='center'></el-table-column>
        <el-table-column prop='playSucNum' label='节目播放成功总次数' sortable min-width='170px' align='center'></el-table-column>
        <el-table-column prop='playPer' label='节目播放成功率(%)' sortable min-width='170px' align='center'></el-table-column>
        <el-table-column prop='epgSucPer' label='EPG请求成功率(%)' sortable min-width='170px' align='center'></el-table-column>
      </el-table>
      <!--分页组件-->
    <el-pagination
        :total="total"
        background
        class="pagination"
        @current-change="pageChange"
        layout="prev, pager, next"/>
  </div>
</template>

<script>
import eHeader from './header'
export default {
    components: {
        eHeader
    },
  props: {
  },
  data() {
    return {
        tableData: [{
            city: '兰州',
            startTime: '2019/6/21 17:00',
            endTime: '2019/6/21 19:00',
            terminalid: '005803ff000323',
            account: '',
            catonTime: 0,
            catonNum: 0,
            flowerNum: 12,
            playNum: 20,
            playSucNum: 20,
            playPer: '100(%)',
            epgSucPer: '100(%)'
        }],
        total: 0,
        curPage: 1,
        pageSize: 10,
        loading: true,
        query: {
            city: "all",
            terminalid: '005803ff000323',
            account: '',
            output: '汇总',
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

<style rel="stylesheet/scss" lang="scss">
.head-container {
    background-color: #fff;
}

.pagination {
    margin: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-end;
}
</style>
