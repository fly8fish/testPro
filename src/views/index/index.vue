<template>
  <div class="home-wrap">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="概括呈现" name="first">
        <div class="chart-box">
          <div class="chart-left">
            <p class="chart-title">用户情况</p>
            <ul class="user-situation">
              <li v-for="(item,index) in userSituation" :key="index">
                <p class="user-data"><span>{{ item.total }}<b :class="[item.status === 1 ? 'up' : 'down']">{{item.status === 1?'+':'-'}}{{ item.change }}<i></i></b></span></p>
                <span class="user-name">{{ item.name }}</span>
              </li>
            </ul>
            <div class="user-numbox">
              <div class="user-numleft">
                <div class="progress-box">
                  <p>开机用户数</p>
                  <el-progress type="circle" :percentage="50" :color="openColor" :show-text="false"></el-progress>
                  <div class="progress-num">
                    <p>10,0213</p>
                    <span><i class="up-row"></i>1.1%</span>
                  </div>
                </div>
                <div class="progress-box">
                   <p>流失用户数</p>
                  <el-progress type="circle" :percentage="70" :color="outColor" :show-text="false"></el-progress>
                   <div class="progress-num">
                    <p>132</p>
                    <span><i class="down-row"></i>2.15%</span>
                  </div>
                </div>
              </div>
              <div class="user-numright">
                <div class="user-box">
                  <p class="user-title">直播用户数</p>
                  <p class="user-num">6,2435<b class="up">+432<i></i></b></p>
                  <el-progress :percentage="70" :color="liveColor" :text-inside="true" :show-text="false"></el-progress>
                </div>
                <div class="user-box">
                  <p class="user-title">点播用户数</p>
                  <p class="user-num">1,6891<b class="down">-102<i></i></b></p>
                  <el-progress :percentage="30" :color="demandColor" :text-inside="true" :show-text="false"></el-progress>
                </div>
              </div>
            </div>
            <div class="watch-box">
              <p class="chart-title">地市收视情况</p>
              <div class="watch-echart">
                <barEchart></barEchart>
              </div>
              <div class="watch-total">
                <div class="total-list" v-for="(item, index) in totalList" :key="index">
                    <i></i>
                    <p>{{item.num}}</p>
                    <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="chart-right">
            <p class="chart-title">直播点播清晰度占比</p>
            <div class="pie-box">
              <p class="tip-text">直播清晰度占比</p>
              <pieEchart :echartId="piechart1" :dataList="liveData"></pieEchart>
            </div>
            <div class="pie-box">
              <p class="tip-text">点播清晰度占比</p>
              <pieEchart :echartId="piechart2" :dataList="demandData"></pieEchart>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { testUrl } from '@/api/test'
import pieEchart from './component/pieEchart'
import barEchart from './component/barEchart'
export default {
  components: {
    pieEchart,
    barEchart
  },
  data() {
    return {
      activeName: 'first',
      userSituation: [
        {
          name: '用户总量',
          total: '121,3410',
          change: '47',
          status: 1,
        },
        {
          name: '昨日新增用户',
          total: '3441',
          change: '28',
          status: 0,
        },
        {
          name: '上月新增用户',
          total: '5,4098',
          change: '530',
          status: 1,
        }
      ],
      openColor: '#289cf5',
      outColor: '#4bd6b7',
      liveColor: '#5e72e3',
      demandColor: '#ffcc0e',
      liveData: [
        {
          value: 6682,
          name: '直播 高清'
        },
        {
          value: 3317,
          name: '直播 标清'
        },
      ],
      demandData: [
        {
          value: 1656,
          name: '点播 4k'
        },
        {
          value: 4016,
          name: '点播 高清'
        },
        {
          value: 460,
          name: '点播 低清'
        },
        {
          value: 2495,
          name: '点播 标清'
        },
        {
          value: 1670,
          name: '点播 超清'
        },
        {
          value: 300,
          name: '点播 8k以上'
        }
      ],
      piechart1: 'piechart1',
      piechart2: 'piechart2',
      totalList: [
        {
          num: '10,8567',
          name: '用户总数最多(枣庄)'
        },
        {
          num: '1,1031',
          name: '收视用户最多(东营)'
        },
        {
          num: '342',
          name: '质差用户最多(东营)'
        }
      ]
    }
  },
  methods: {
    test() {
      testUrl().then(res => {
        console.log(res)
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
  }
  i, b {
    font-style: normal;
    font-weight: 400;
  }
  .home-wrap {
    width: 100%;
    min-height: calc(100vh - 84px);
    background: #eff3f6;
    padding: 20px 15px;
  }
  /deep/ .el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    background: #1a91eb;
    color: #fff;
    border-bottom-color: #1a91eb;
    height: 35px;
    line-height: 35px;
  }
  .chart-box {
    display: flex;
    .chart-left {
      flex: 1;
    }
    .chart-right {
      width: 400px;
    }
  }
  .chart-title {
    color: #4b5968;
    font-size: 18px;
    line-height: 20px;
    margin: 5px 0 20px;
  }
  .user-situation {
    display: flex;
    padding-right: 20px;
    li {
      border: 1px solid #e6e9ee;
      flex: 1;
      margin-left: 10px;
      background: #fff;
      padding: 20px 0;
      &:first-child {
        margin-left: 0;
      }
      .user-data {
        text-align: center;
        span {
          font-size: 24px;
          line-height: 24px;
          color: #35414f;
          position: relative;
        }
      }
      .user-name { 
        text-align: center;
        font-size: 14px;
        line-height: 14px;
        display: block;
        color: #b8bcc7;
        padding-top: 10px;
      }
    }
  }
  b {
    font-size: 16px;
    line-height: 16px;
    position: absolute;
    top: 0px;
    left: 100%;
    margin-left: 5px;
    i {
      width: 0;
      height: 0;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      position: relative;
      left: 3px;
    }
  }
  .up {
    color: #6ed701;
    i {
      border-bottom: 5px solid #6ed701;
      top: -11px;
    }
  }
  .down {
    color: #fe4b2a;
    i {
      border-top: 5px solid #fe4b2a;
      top: 11px;
    }
  }
  .user-numbox {
    display: flex;
    height: 206px;
    margin: 10px 20px 0 0;
    .user-numleft {
      flex: 3;
      background: #fff;
      margin-right: 10px;
      border: 1px solid #e6e9ee;
      display: flex;
      p {
        font-size: 16px;
        line-height: 16px;
        color: #b8bcc7;
        text-align: center;
        padding-bottom: 20px;
      }
      .progress-box {
        padding: 15px 38px;
        flex: 1;
      }
      .progress-num {
        margin-top: -70%;
        p {
          font-size: 24px;
          line-height: 24px;
          color: #35414f;
          padding-bottom: 10px;
        }
        span {
          font-size: 14px;
          line-height: 14px;
          display: block;
          color: #b8bcc7;
          text-align: center;
          i {
            display: inline-block;
            padding: 3px;
            vertical-align: middle;
          }
          .up-row {
              border: 2px solid #289cf5;
              border-width: 0 2px 2px 0;
              transform: rotate(-135deg);
              -webkit-transform: rotate(-135deg);
              margin: 2px 3px 0 0;
          }
          .down-row {
              border: 2px solid #4bd6b7;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
              -webkit-transform: rotate(45deg);
              margin: -5px 4px 0 0;
          }
        }
      }
    }
    .user-numright {
      flex: 2;
      .user-box {
        background: #fff;
        padding: 15px 20px;
        border: 1px solid #e6e9ee;
        margin-top: 10px;
        &:first-child {
          margin-top: 0;
        }
        .user-title {
          font-size: 16px;
          line-height: 16px;
          color: #b8bcc7;
        }
        .user-num {
          padding: 10px 0;
          font-size: 24px;
          line-height: 24px;
          position: relative;
          b {
            top: 13px;
            left: 80%;
          }
        }
      }
    }
  }
  .pie-box {
    background: #fff;
    position: relative;
    margin-top: 10px;
    border: 1px solid #e6e9ee;
    .tip-text {
      position: absolute;
      top: 15px;
      left: 20px;
      z-index: 99;
      color: #4b5968;
      font-size: 18px;
      line-height: 20px;
    }
    &:first-child {
      margin-top: 0;
    }
  }
  .watch-box {
    position: relative;
    .chart-title {
      margin: 20px 0 10px;
    }
    .watch-echart {
      background: #fff;
      margin-right: 20px;
      border: 1px solid #e6e9ee;
    }
    .watch-total {
      position: absolute;
      top: 50px;
      left: 0;
      .total-list {
        padding: 30px 0 0 50px;
        position: relative;
        i {
          width: 16px;
          height: 16px;
          display: block;
          position: absolute;
          top: 44px;
          left: 22px;
          background: url(../../assets/logo/user-total.png) no-repeat;
          background-size: 100% 100%;
        }
        &:first-child i{
          background: url(../../assets/logo/watch-total.png) no-repeat;
          background-size: 100% 100%;
        }
        &:last-child i{
          background: url(../../assets/logo/quality-total.png) no-repeat;
          background-size: 100% 100%;
        }
        p {
          font-size: 18px;
          line-height: 18px;
          color: #35414f;
          border-bottom: 1px solid #e6e9ee;
          padding-bottom: 5px;
        }
        span {
          font-size: 12px;
          line-height: 12px;
          color: #b8bcc7;
          padding-top: 5px;
          display: block;
        }
      }
    }
  }
</style>
