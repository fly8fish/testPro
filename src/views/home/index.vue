<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <div class="chart-wrapper">
      <bar-chart/>
    </div>
  </div>
</template>

<script>
import eHeader from './component/header'
import BarChart from './component/BarChart'
import initData from '@/mixins/initData'

export default {
  components: {
    BarChart,
    eHeader
  },
  mixins: [initData],
  created() {
    this.$nextTick(() => {
      this.init()
    })
  },
  methods: {
    beforeInit() {
      this.url = 'api/job'
      const sort = 'sort,asc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const value = query.value
      if (value) { this.params['value'] = value }
      return true
    }
  }
}
</script>

<style scoped>

</style>
