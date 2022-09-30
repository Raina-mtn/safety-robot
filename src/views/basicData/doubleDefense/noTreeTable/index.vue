<template>
  <div class="warpper">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns1">
      <el-button type="primary" @click="$refs.addDialog.openDialog(activeName,'add')">新增</el-button>
    </div>
    <div slot="btns2">
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.addDialog.openDialog(activeName,'add')">新增</el-button>
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
  <AddDialog ref="addDialog"></AddDialog>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import AddDialog from '../addDialog.vue'
import {
  typeDoubleData,
  gradeDoubleData,
  frequencyDoubleData,
  eventDoubleData,
  levelDoubleData,
  staffDoubleData,
  hazardDoubleData,
  checkDoubleData,
  lDoubleData,
  eDoubleData
} from '@/utils/data'
import {
  noInputFormColums,
  inputFormColums1,
  inputFormColums2,
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
    AddDialog
  },
  data() {
    return {
      formData:{},
      // tableData:[],
      total:1
      
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    formColums(){
      switch (this.activeName) {
        case 'station':
          return inputFormColums1()
        case 'department':
          return inputFormColums2()
        default:
          return noInputFormColums()
      }
    },

    tableColums(){
      switch (this.activeName) {
        case 'type':
          return typeColums(this)
        case 'grade':
          return gradeColums(this)
        case 'frequency':
          return frequencyColums(this)
        case 'event':
          return eventColums(this)
        case 'level':
          return levelColums(this)
        case 'staff':
          return staffColums(this)
        case 'hazard':
          return hazardColums(this)
        case 'check':
          return checkColums(this)
        case 'l':
          return lColums(this)
        case 'e':
          return eColums(this)
        case 'c':
          return cColums(this)
        case 'station':
          return stationColums(this)
        case 'department':
          return departmentColums(this)
      }
    },

    tableData(){
      switch (this.activeName) {
        case 'type':
          return typeDoubleData
        case 'grade':
          return gradeDoubleData
        case 'frequency':
          return frequencyDoubleData
        case 'event':
          return eventDoubleData
        case 'level':
          return levelDoubleData
        case 'staff':
          return staffDoubleData
        case 'hazard':
          return hazardDoubleData
        case 'check':
          return checkDoubleData
        case 'l':
          return lDoubleData
        case 'e':
          return eDoubleData
        case 'c':
          return []
        case 'station':
          return []
        case 'department':
          return []
      }
    },

  }
}
</script>

<style>

</style>