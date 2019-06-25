<template>
  <div>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="test">搜索</el-button>
  </div>
</template>

<script>
import { testUrl } from '@/api/test'

export default {
  methods: {
    test() {
      testUrl().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
