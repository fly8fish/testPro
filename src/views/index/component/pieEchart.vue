<template>
    <div class="piebox clear">
        <div class="pieshow" :id="echartId" style="width:400px; height:310px"></div>
        <p class="nodata" v-if="noPie">{{noPieText}}</p>
    </div>
</template>
<script>
export default {
    name: 'pieEchart',
    data() {
        return {
            chart: null,
            pieList: [],
            textList: [],
            bgStyle: [
                '#4bd6b7',
                '#279cf4',
                '#ffd50d',
                '#6ae3fe',
                '#2fbddf',
                '#FF942A',
                '#FF776F',
                '#FD3E53',
                '#E9362A',
                '#D72D4D',
            ],
            noPie: false,
            noPieText: '加载中...'
        }
    },
    props: {
        echartId: {
            type: String,
            default: 'piechart1'
        },
        dataList: {
            type: Array,
            default: []
        }
    },
    mounted() {
        this.dealList();
        this.initPieChart();
    },
    methods: {
        initPieChart() {
            this.chart = this.$echarts.init(document.getElementById(this.echartId))
            this.chart.setOption({
                title: [{
                    text: '',
                    x: '19.8%',
                    y: '45%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 20
                    }
                }],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: [{
                        containLabel: true
                    },
                    {
                        gridindex: 1,
                        containLabel: true
                    }
                ],
                xAxis: [{
                        type: 'value',
                        boundaryGap: [0, 0.01],
                        show: false,
                    },
                ],
                yAxis: [{
                        show: false,
                        type: 'category',
                    },
                ],
                series: [{
                    name: '图形',
                    type: 'pie',
                    center: ['50%', '55%'],
                    radius: ['42%', '50%'],
                    label: {
                        normal: {
                            formatter: '{d}%\n{b}'
                        }
                    },
                    data: this.pieList
                }]
            })
        },
        dealList() {
            console.log(this.dataList, '数据')
            this.pieList = [];
            this.textList = [];
            if (this.dataList.length > 0) {
                this.noPie = false;
            } else {
                this.noPie = true;
                this.noPieText = '哎呀，出错了';
            }
            this.dataList.forEach((item, index) => {
                this.textList.push(item);
                this.pieList.push({
                    value: item.value,
                    name: item.name,
                    itemStyle: {
                        color: this.bgStyle[index]
                    }
                })
            })
        }
    }
}
</script>

<style  lang="scss" scoped>
    .piebox {
        display: flex;
        position: relative;
        .pieshow{
            float: left;
        }
        .nodata{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>
