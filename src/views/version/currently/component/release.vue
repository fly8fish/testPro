<template>
  <div>
    <el-row :gutter="24" style="margin-top: 6%;" type="flex" justify="center">
      <el-col :span="6">
        <div class="snName"><span class="need">需添加的SN</span><span class="title-se">共<span style="color: #3a8ee6">0</span>条</span></div>
        <el-input v-model="form.desc" type="textarea" placeholder="在此输入需要添加的SN，多个用逗号‘，’隔开"/>
        <div style="margin-top: 20px;color: #909399;font-size: 14px;">
          <el-upload
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            multiple
            action="https://jsonplaceholder.typicode.com/posts/"
            class="upload-demo"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传.xlsx/.xls文件，且不超过500kb</div>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="snName"><span class="need">需排除的SN</span><span class="title-se">共<span style="color: #3a8ee6">0</span>条</span></div>
        <el-input v-model="form.desc" type="textarea" placeholder="在此输入需要排除的SN，多个用逗号‘，’隔开"/>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="margin-top: 30px;" type="flex" justify="center">
      <el-button size="small" type="primary">发布</el-button>
      <el-button size="small">返回</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      form: {
        desc: ''
      }
    }
  },
  methods: {
    handlePreview(file) {
      console.log(file)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    }
  }
}
</script>

<style scoped>
  .snName{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  .need, .title-se{
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
</style>
