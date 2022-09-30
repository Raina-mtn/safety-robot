<template>
  <div class="warpper">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="columns"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
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
  riskPersonData,
  eventPersonData,
  operationPersonData,
  areaPersonData,
  checkPersonData,
  temporaryPersonData,
  surveyPersonData,
  extensionPersonData,
  reportPersonData
  } from '@/utils/data'
import {
  riskFormColums,
  eventFormColums,
  checkFormColums,
  temporaryFormColums,
  surveyFormColums,
  extensionFormColums,
  reportFormColums,
  riskColums,
  eventColums,
  operationColums,
  areaColums,
  checkColums,
  temporaryColums,
  surveyColums,
  extensionColums,
  reportColums,
  } from './config'
export default {
  components:{
    WForm,
    WTable
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
    columns(){
      switch (this.activeName) {
        case 'risk':
          return riskFormColums()
        case 'event':
          return eventFormColums()
        case 'check':
          return checkFormColums()
        case 'temporary':
          return temporaryFormColums()
        case 'survey':
          return surveyFormColums()
        case 'extension':
          return extensionFormColums()
        case 'report':
          return reportFormColums()
      }
    },

    tableColums(){
      switch (this.activeName) {
        case 'risk':
          return riskColums(this)
        case 'event':
          return eventColums(this)
        case 'operation':
          return operationColums(this)
        case 'area':
          return areaColums(this)
        case 'check':
          return checkColums(this)
        case 'temporary':
          return temporaryColums(this)
        case 'survey':
          return surveyColums(this)
        case 'extension':
          return extensionColums(this)
        case 'report':
          return reportColums(this)
      }
    },

    tableData(){
      switch (this.activeName) {
        case 'risk':
          return riskPersonData
        case 'event':
          return eventPersonData
        case 'operation':
          return [{realName:'测试'}]
        case 'area':
          return [{realName:'测试'}]
        case 'check':
          return checkPersonData
        case 'temporary':
          return temporaryPersonData
        case 'survey':
          return surveyPersonData
        case 'extension':
          return extensionPersonData
        case 'report':
          return reportPersonData
      }
    },

  }
}
</script>

<style>

</style>