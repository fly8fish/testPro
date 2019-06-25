<template>
  <div>
    <el-dialog :visible.sync="dialog" title="当前终端SN配置" append-to-body width="500px">
      <el-form ref="form" size="small" label-width="66px">
        <el-select v-model="form.city" filterable placeholder="请选择城市" style="width: 100%" class="el-form-item--small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
        <el-select v-model="form.county" filterable placeholder="请选择区县" style="width: 100%">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="text" @click="cancel">取消</el-button>
        <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      input: '',
      loading: false,
      dialog: false,
      form: {
        city: '',
        county: ''
      },
      options: [
        { value: 1, label: '上海' },
        { value: 2, label: '北京' },
        { value: 3, label: '深圳' },
        { value: 4, label: '广州' }
      ]
    }
  },
  methods: {
    cancel() {
      this.resetForm()
    },
    doSubmit() {
      console.log('doSubmit')
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
    }
  }
}
</script>

<style scoped>
  .el-form-item--small{
    margin-bottom: 25px;
  }
</style>
