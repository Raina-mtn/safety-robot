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
import {riskFormColums,riskColums,otherColums,eventColums,extensionColums,operationColums,areaColums,reportColums} from './config'
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
      return riskFormColums()
    },

    tableColums(){
      switch (this.activeName) {
        case 'risk':
          return riskColums(this)
        case 'event':
          return eventColums(this)
        case 'extension':
          return extensionColums(this)
        case 'operation':
          return operationColums(this)
        case 'area':
          return areaColums(this)
        case 'report':
          return reportColums(this)
        default:
          return otherColums(this)
      }
    },

    tableData(){
      switch (this.activeName) {
        case 'risk':
          return riskPersonData
        case 'event':
          return eventPersonData
        case 'operation':
          return operationPersonData
        case 'area':
          return areaPersonData
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