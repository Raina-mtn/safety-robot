<template>
  <PageLayout class="app-container" @tabChange="tabChange">
    <div slot="header" class="searchForm">
      <WForm
        label-width="110px"
        :form-data="formData"
        :columns="formColums"
        size="mini"
      >
        <div slot="date" style="display: flex">
          <el-radio-group v-model="dateType" size="mini">
            <el-radio-button label="日" />
            <el-radio-button label="月" />
          </el-radio-group>
          <el-date-picker
            v-show="dateType === '日'"
            v-model="formData.date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOption"
          />
          <el-date-picker
            v-show="dateType === '月'"
            v-model="formData.date"
            type="monthrange"
            range-separator="至"
            start-placeholder="开始月份"
            end-placeholder="结束月份"
            value-format="yyyy-MM-dd"
            :picker-options="pickerOption"
          />
        </div>
        <div slot="btn">
          <el-button
            size="small"
            type="primary"
            icon="el-icon-search"
            class="button-linear"
            @click="refresh"
          >
            搜索
          </el-button>
          <el-button
            size="small"
            type="primary"
            icon="el-icon-refresh"
            @click="reset"
          >
            重置
          </el-button>
        </div>
      </WForm>
    </div>
    <div slot="content" class="content">
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
      <div class="middle">
        <div>
          <div class="title">
            任务完成情况
          </div>
          <div class="filterBtn">
            <el-radio-group v-model="taskDateType" size="mini">
              <el-radio-button label="月" />
              <el-radio-button label="季" />
              <el-radio-button label="年" />
            </el-radio-group>
          </div>
          <Chart :option="taskDoneOption" />
        </div>
        <div>
          <div class="title">
            工单完成情况
          </div>
          <Chart :option="workDoneOption" />
        </div>
      </div>
      <div class="bottom">
        <div>
          <div class="title">
            故障总数
          </div>
          <Chart :option="defectNumOption" />
        </div>
        <div>
          <div class="title">
            故障类型分布
          </div>
          <Chart :option="defectTypeOption" />
        </div>
      </div>
      <div class="bottom">
        <div>
          <div class="title">
            故障等级
          </div>
          <Chart :option="defectGradeOption" />
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
import {WTable,WForm} from '@common-ui/w-form'
import {formColums, tableColumns} from './config'
import Chart from './chart.vue'
import {horizontalBarOption,pieOption,lineOption, barOption} from './chartConfig'
export default {
  components:{
    PageLayout,
    Chart,
    WForm,
    WTable
  },
  data() {
    return {
      activeName:'power',
      formData:{
        date:[]
      },
      formColums,
      dateType: '日',
      pickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      topStat: [{
        title: '机器人数', number: 20
      },{
        title: '场站数', number: 5
      },{
        title: '故障数', number: 1
      },{
        title: '已解决数', number: 1479
      }],
      columns:tableColumns,
      tableData: [{name:'公务', lineName: '地铁1号线', robotNum: 3, defectNum:15, ce: ''},
        {name:'供电', lineName: '地铁1号线', robotNum: 2, defectNum:7, ce: ''},
        {name:'车辆', lineName: '地铁1号线', robotNum: 5, defectNum:23, ce: ''}],
      taskDoneOption:horizontalBarOption({axisData:['一号线','二号线'], seriesData: [50,60]}), // 任务完成情况
      taskDateType: '月',
      workDoneOption: pieOption([{value:20, name:'已提报'},{value:20, name:'进行中'},{value:20, name:'已完成'}]),
      
      defectNumOption: lineOption({
        axisData:['2022-10-11','2022-10-11','2022-10-12'], 
        seriesData:[
          {label:'一号线', data:[20,40,10]},
          {label:'二号线', data:[30,60,25]}
        ]
      }),
      defectTypeOption: barOption({
        xAxisData:['几何','异物','磨耗'],
        seriesData:[
          {label:'一号线', data:[20,40,10]},
          {label:'二号线', data:[30,60,25]},
          {label:'三号线', data:[30,60,25]}
        ]
      }),
      defectGradeOption: pieOption([{value:20, name:'严重'},{value:20, name:'轻微'},{value:20, name:'危急'}]),
    }
  },
  methods:{
    tabChange(){},
    refresh(){},
    reset(){
      this.formData = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.searchForm{
  position: absolute;
  top: 0px;
  right: 0;
  width: 1200px;
  .el-date-editor.el-input__inner{
    width: 70%;
    margin-left: 10px;
    ::v-deep{
      .el-range-separator{
        width: 9%;
      }
    }
  }
}
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
  }
}
.middle{
  margin-bottom: 10px;
}
</style>