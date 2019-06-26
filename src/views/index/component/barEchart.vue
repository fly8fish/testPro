<template>
    <div class="main-chart">
        <div class="chartbox clear" id="barchart" style="width:100%; height:274px"></div>
        <p class="nodata" v-if="serverError">{{textList}}</p>
        <p class="nodata" v-if="noRate">尚未产生收益~</p>
    </div>
</template>
<script>
export default {
    name: 'barEchart',
    data() {
        return {
            chart: null,
            dateList: [],
            firstLine: [],
            secondLine: [],
            noRate: false,
            serverError: false,
            textList: '加载中...'
        }
    },
    mounted() {
        this.initLineChart();
    },
    methods: {
        initLineChart() {
            this.chart = this.$echarts.init(document.getElementById('barchart'))
            var data1 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
            var data2 = [20, 30, 20, 32, 20, 30, 20, 30, 20, 30];
            var data3 = [2.0, 2.2, 12, 24.5, 11.9, 10.2, 20.3, 23.4, 23.0, 16.5];
            var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
            this.chart.setOption({
                color: ['#5098fc', '#6ae3fe', '#f5df56'],
                tooltip: {
                    trigger: 'axis',
                },
                legend: {

                    top: '4%',
                    right: '4%',
                    data: ['收视用户数', '用户总数', '质差用户数'],
                },
                grid: { //图表的位置
                    top: '20%',
                    left: '30%',
                    right: '4%',
                    bottom: '5%',
                    containLabel: true
                },
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} '
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        show: true,
                    },
                    {
                        type: 'value',
                        min: 0,
                        max: 30,
                        interval: 10,
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }
                ],
                xAxis: [{
                    type: 'category',
                    axisLabel: {
                        interval: 0,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                            fontSize: 10,
                            color: '#000'
                        },

                    },
                    data: datacity,
                }],
                series: [{
                        name: '收视用户数',
                        type: 'bar',
                        stack: 'sum',
                        barWidth: '20px',
                        data: data1

                    },
                    {
                        name: '用户总数',
                        type: 'bar',
                        barWidth: '20px',
                        stack: 'sum',
                        data: data2,

                    },
                    {
                        name:'质差用户数',
                        type:'line',
                        data: data3,
                        yAxisIndex: 1,
                    }
                ]
            })
        },
        dealList(list) {
            this.noRate = false;
            this.dateList = [];
            this.firstLine = [];
            this.secondLine = [];
            list.forEach((item, index) => {
                this.dateList.push(item.deal_time);
                this.firstLine.push(item.x);
                this.secondLine.push(item.y);
            });
            if (list.length === 0) {
                this.noRate = true;
            }
            if (list.length > 0) {
                this.serverError = false;
            }
            this.chart.setOption({
                xAxis: {
                    data: this.dateList
                },
                series: [
                    {
                        data: this.firstLine
                    },
                    {
                        data: this.secondLine
                    }
                ]
            })
        }
    }
}
</script>
<style  lang="scss" scoped>
    .main-chart {
        position: relative;
        .nodata{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            line-height: 140px;
        }
    }
</style>
