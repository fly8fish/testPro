<template>
  <div class="head-container">
    <el-cascader :options="CityInfo" v-model="query.address" placeholder="请选择地域" clearable class="filter-item" @change="handleChange"/>
    <el-select v-model="query.id" placeholder="请选择厂商" class="filter-item"><el-option v-for="item in options" :key="item.id" :label="item.value" :value="item.value"/></el-select>
    <el-select v-model="query.id" placeholder="请选择牌照方" class="filter-item"><el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/></el-select>
    <el-button class="filter-item" size="mini" type="success" icon="el-icon-search" @click="toQuery">查 找</el-button>
  </div>
</template>

<script>
import { CityInfo } from '@/assets/data/city-data'
export default {
  props: {
    query: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      CityInfo: CityInfo,
      form: {
        selectedOptions: [] // 地区筛选数组
      },
      options: [
        { value: '测试', id: 1 },
        { value: '测试1', id: 2 }
      ]
    }
  },
  created() {},
  methods: {
    handleChange() {
      console.log(this)
    },
    toQuery() {
      console.log(this)
      this.$parent.page = 0
      this.$parent.$parent.init()
    }
  }
}
</script>

<style scoped>

</style>
