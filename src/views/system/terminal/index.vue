<template>
  <div class="app-container">
    <eHeader :query="query"/>
    <div class="chart-wrapper">
      <bar-chart/>
    </div>
  </div>
</template>

<script>
import BarChart from './component/BarChart'
import eHeader from './component/header'
import initData from '@/mixins/initData'

export default {
  components: {
    BarChart,
    eHeader
  },
  mixins: [initData],
  methods: {
    beforeInit() {
      this.url = 'api/job'
      const sort = 'sort,asc'
      this.params = { page: this.page, size: this.size, sort: sort }
      const query = this.query
      const value = query.value
      const registerTime = query.registerTime
      const enabled = query.enabled
      if (value) { this.params['name'] = value }
      if (!registerTime) { this.params['registerTime'] = registerTime }
      if (enabled !== '' && enabled !== null) { this.params['enabled'] = enabled }
      console.log(this.params)
      return true
    }
  }
}
</script>

<style scoped>

</style>
