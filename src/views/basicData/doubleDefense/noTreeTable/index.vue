<template>
  <div class="warpper">
    <WForm
      v-if="isShow"
      label-width="90px"
      :form-data="formData"
      :columns="noInputFormColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">新增</el-button>
    </div>
    </WForm>
    <WForm
    v-else
      label-width="90px"
      :form-data="formData"
      :columns="inputFormColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">查询</el-button>
    </div>
    </WForm>
    <WTable
    ref="mtable" 
    :table-data="tableData" 
    :columns="tableColums" 
    :page="formData" 
    :total="total" 
    :size="'mini'" 
    :header-cell-style="{background:'#eee'}"
    @pageChange="getList" 
  />
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import {
  noInputFormColums,
  inputFormColums,
  typeColums,
  gradeColums,
  frequencyColums,
  eventColums,
  levelColums,
  staffColums,
  hazardColums,
  checkColums,
  lColums,
  eColums,
  cColums,
  stationColums,
  departmentColums
} from './config'
export default {
  components:{
    WForm,
    WTable,
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
      isShow:true
      
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    noInputFormColums(){
      return noInputFormColums()
    },

    inputFormColums(){
      return inputFormColums()
    },

    tableColums(){
      this.isShow = false;
      switch (this.activeName) {
        case 'type':
          return typeColums()
        case 'grade':
          return gradeColums()
        case 'frequency':
          return frequencyColums()
        case 'event':
          return eventColums()
        case 'level':
          return levelColums()
        case 'staff':
          return staffColums()
        case 'hazard':
          return hazardColums()
        case 'check':
          return checkColums()
        case 'l':
          return lColums()
        case 'e':
          return eColums()
        case 'c':
          return cColums()
        case 'station':
          this.isShow = false;
          return stationColums()
        case 'department':
          this.isShow = false;
          return departmentColums()
      }
    }
  }
}
</script>

<style>

</style>