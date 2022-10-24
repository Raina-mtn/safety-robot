<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="power" label="供电" lazy />
        <el-tab-pane name="civil" label="土建" lazy />
        <el-tab-pane name="official" label="工务" lazy />
        <el-tab-pane name="vehicle" label="车辆" lazy />
      </el-tabs>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col v-for="(item, index) in topStat" :key="index" :span="6">
          <el-card>
            <div class="hd">
              {{ item.title }}
            </div>
            <div class="num">
              {{ item.number }}
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div>
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          style="margin:10px 0"
          size="mini"
        />
        <el-button size="mini">
          刷新
        </el-button>
      </div>
      <div class="middle">
        <div>
          <div class="title">
            工单进展
          </div>
          <PieChart />
        </div>
        <div>
          <div class="title">
            故障类型
          </div>
          <BarChart />
        </div>
      </div>
      <div class="bottom">
        <div>
          <div class="title">
            故障数
          </div>
          <LineChart />
        </div>
        <div>
          <div class="title">
            统计列表
          </div>
          <WTable
            ref="mtable"
            :table-data="tableData" 
            :stripe="true"
            :border="false"
            :columns="columns"
            :size="'mini'"
            class="table"
            :show-page="false"
          />
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import PieChart from './chart/pieChart.vue'
import BarChart from './chart/barChart.vue'
import LineChart from './chart/lineChart.vue'
import {WTable} from '@common-ui/w-form'
export default {
  components:{
    PageLayout,
    PieChart,
    BarChart,
    LineChart,
    WTable
  },
  data() {
    return {
      activeName:'power',
      date:[],
      topStat: [{
        title: '机器人数', number: 20
      },{
        title: '场站数', number: 5
      },{
        title: '故障数', number: 1
      },{
        title: '已解决数', number: 1479
      }],
      columns:[{
        label: '专业',
        prop: 'name'
      },{
        label: '线路',
        prop: 'lineName'
      },{
        label: '机器人数',
        prop: 'robotNum'
      },{
        label: '故障数',
        prop: 'defectNum'
      },{
        label: '故障分布',
        prop: 'ce'
      }],
      tableData: [{name:'公务', lineName: '地铁1号线', robotNum: 3, defectNum:15, ce: ''},
        {name:'供电', lineName: '地铁1号线', robotNum: 2, defectNum:7, ce: ''},
        {name:'车辆', lineName: '地铁1号线', robotNum: 5, defectNum:23, ce: ''}]
    }
  },
}
</script>

<style lang="scss" scoped>
.middle,.bottom{
  display: flex;
  height: 270px;
  &>div{
    flex: 1;
    height: 100%;
    &:first-child{
      margin-right: 10px;
    }
  }
  .title{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
  }
}
.middle{
  margin-bottom: 10px;
}
::v-deep{
  .el-date-editor{
    width: 400px;
  }
  .el-input__inner{
    background: transparent;
    color: #fff;
    input{
      background: transparent;
    color: #fff;
    }
  }
  .el-card{
    background: none;
  }
  .el-card__body{
    background: rgba(8, 34, 117, 0.3);
    .hd{
      color: #fff;
    }
    .num{
      color: #fff;
      text-align: right;
      margin-right: 30px;
      font-size: 50px;
    }
  }
  .el-button{
    color: #6dacff;
    background: rgba(8, 34, 117, 0.8);
    border: 1px solid #1863C5;
    margin-left: 10px;
    &:hover,
    &:focus,
    &:active {
        
        color: #fff !important;
    }
  }
}
</style>