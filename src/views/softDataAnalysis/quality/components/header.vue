<template>
  <div class="head-container">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="20" class="form-group">
        <!-- <div class="form">
          <label class="bold">粒度：</label>
          <el-select v-model="query.granularity" style="width: 100px;" placeholder="请选择粒度">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div> -->
        <div class="form">
          <label class="bold">城市：</label>
          <el-select v-model="query.city" style="width: 110px;" placeholder="请选择城市">
            <el-option
              v-for="item in optionsCity"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
        <div class="form">
          <label class="bold text-xl">终端ID：</label>
          <el-input v-model="query.terminalid" placeholder="请输入终端ID" style="width: 130px;"></el-input>
        </div>
        <div class="form">
          <label class="bold text-xxl">用户账号：</label>
          <el-input v-model="query.account" placeholder="请输入用户账号" style="width: 130px;"></el-input>
        </div>
        <div class="form">
          <el-checkbox v-model="query.checked">
            <label class="bold">粒度：</label>
            <el-input v-model="query.granularity" placeholder="" style="width: 70px;"></el-input>
          </el-checkbox>
        </div>
        <div class="form">
          <label class="bold text-xxl">起止时间：</label>
          <div class="linkage">
            <el-date-picker
              v-model="query.startDate"
              type="date"
              style="width: 140px;"
              format="yyyy/MM/dd" value-format="yyyyMMdd"
              placeholder="选择开始日期">
            </el-date-picker>
            <el-select v-model="query.startTime" style="width: 85px;">
              <el-option
                v-for="item in optionsTime"
                :key="item"
                :label="item"
                :value="item"/>
            </el-select>
          </div>
          <label class="tip">至</label>
          <div class="linkage">
            <el-date-picker
              v-model="query.endDate"
              type="date"
              style="width: 140px;"
              format="yyyy/MM/dd" value-format="yyyyMMdd"
              placeholder="选择开始日期">
            </el-date-picker>
            <el-select v-model="query.endTime" style="width: 85px;">
              <el-option
                v-for="item in optionsTime"
                :key="item"
                :label="item"
                :value="item"/>
            </el-select>
          </div>
        </div>
        <!-- <div class="form">
          <label class="bold">日期：</label>
          <el-date-picker
            v-model="query.startDate"
            type="date"
            style="width: 150px;"
            format="yyyy/MM/dd" value-format="yyyyMMdd"
            placeholder="选择开始日期">
          </el-date-picker>
          <label class="tip">至</label>
          <el-date-picker
            v-model="query.endDate"
            type="date"
            format="yyyy/MM/dd" value-format="yyyyMMdd"
            style="width: 150px;"
            placeholder="选择结束日期">
          </el-date-picker>
        </div>
        <div class="form">
          <label class="bold">时间：</label>
          <el-select v-model="query.startTime" style="width: 90px;">
            <el-option
              v-for="item in optionsTime"
              :key="item"
              :label="item"
              :value="item"/>
          </el-select>
          <label class="tip">至</label>
          <el-select v-model="query.endTime" style="width: 90px;">
            <el-option
              v-for="item in optionsTime"
              :key="item"
              :label="item"
              :value="item"/>
          </el-select>
        </div> -->
        <el-button size="mini" type="primary" style="width: 90px;margin-top:15px;" @click="toQuery">查询</el-button>
      </el-col>
      <el-col :span="4" class="operate-btn">
        <el-button size="mini" type="primary" plain style="width: 90px;" @click="toQuery">配置</el-button>
        <el-button size="mini" type="primary" plain style="width: 90px;" @click="toQuery">结果导出</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: [{
        value: "小时",
        label: "小时"
      }, {
        value: "分钟",
        label: "分钟"
      }],
      optionsCity: [{
        value: "all",
        label: "所有城市"
      }, {
        value: "兰州",
        label: "兰州"
      }, {
        value: "广州",
        label: "广州"
      }],
      optionsTime: [
        '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
        '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
        '20:00', '21:00', '22:00', '23:00'
      ]
    }
  },
  created() {
  },
  methods: {
    toQuery: function() {

    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.head-container {
  width: 100%;
  .form-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .form {
      height: 45px;
      display: flex;
      align-items: center;
      margin: 15px 10px 0px 10px;
    }
    .bold {
      width: 45px;
      font-size: 14px;
    }
    .tip {
      margin: 0px 5px;
      font-weight: normal;
    }
    .text-xl {
      width: 60px;
    }
    .text-xxl {
      width: 70px;
    }
    .linkage {
      display: flex;
    }
  }
  .operate-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
    margin-top: 15px;
    height: 45px;
  }
}
</style>
