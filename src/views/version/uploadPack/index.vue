<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>升级包上传</span>
      </div>
      <div class="box">
        <div class="upload">
          <el-row>
            <el-col :offset="9" :span="8" style="text-align: left"><div class="grid-content bg-purple-light">
              <h4>选择升级包文件</h4>
              <div class="text item">1、请确保升级证书具有有效签名</div>
              <div class="text item">2、仅支持上传.apk格式的软探针升级包</div>
              <div class="text item">3、升级包版本需要大于现有版本</div>
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <i class="el-icon-upload"/>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip tip">只仅支持上传.apk格式的软探针升级包，且不超过500kb</div>
              </el-upload>
            </div></el-col>
          </el-row>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped rel="stylesheet/scss" lang="scss">
  .el-icon-upload{
    color: rgb(24, 144, 255);
  }
  .upload-demo{
    margin-top: 30px;
  }
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }

</style>
