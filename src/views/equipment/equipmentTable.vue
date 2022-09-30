<template>
  <div class="warpper">
    <div class="count" v-for="item in countList" :key="item.label">
      <p class="count_label">{{item.label}}</p>
      <p class="count_value">{{item.value}}</p>
    </div>
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="allFormColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.moreFilters.openDialog()">更多筛选</el-button>
      <el-button type="primary">模板下载</el-button>
      <el-button type="primary"><i class="el-icon-download"/>导入</el-button>
      <el-button type="primary"><i class="el-icon-upload2"/>导出</el-button>
    </div>
    </WForm>
    <el-table
    :data="tableData"
    :total="total"
    style="width: 100%"
    >
    <el-table-column 
      v-for="item in allColums"
      :key="item.label" 
      :label="item.label"
      :fixed="item.fixed"
      >
      <el-table-column
        v-for="subItem in item.subList"
        :key="subItem.label"
        :prop="subItem.prop"
        :label="subItem.label"
        >
      </el-table-column>
    </el-table-column>
  </el-table>
  <MoreFilters ref="moreFilters"></MoreFilters>
  </div>
  
</template>

<script>
import { WForm } from '@common-ui/w-form';
import {allFormColums,allColums} from './config'
import MoreFilters from './moreFilters.vue'
import {equipmentData} from '@/utils/data'
export default {
  components:{
    WForm,
    MoreFilters
  },
  data() {
    return {
      formData:{},
      // tableData:[],
      tableData:equipmentData,
      total:1,
      date:'',
      allColums:allColums,
      countList:[
        {
        label:'电梯',
        value:1681
        },
        {
        label:'叉车',
        value:32
        },
        {
        label:'起重机',
        value:33
        },
      ]
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    allFormColums(){
      return allFormColums()
    },
  }
}
</script>

<style lang="scss" scoped>
.count{
  float: right;
  margin: 10px;
  .count_value{
    font-size: 25px;
    color: #E99A13;
  }
}
</style>