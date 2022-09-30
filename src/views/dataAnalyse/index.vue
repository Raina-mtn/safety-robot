<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">重置</el-button>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="colums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {
  faultFormColums,faultColums,
  faultTableData,
  areaFormColums,areaColums,
  operationFormColums,operationColums,
  areaChangeFormColums,areaChange,
  operationChangeFormColums,operationChange
  } from './config'
export default {
  components:{
    WTable,
    WForm,
    PageLayout
  },
  data() {
    return {
      formData:{},
      // tableData:[],
      // tableData:faultTableData,
      total:1,
    }
  },
  props:{
    type:{
      type: String,
      default: 'fault'
    }
  },
  computed:{
    formColums(){
      switch(this.type){
        case 'fault':
          return faultFormColums()
        case 'area':
          return areaFormColums()
        case 'operation':
          return operationFormColums()
        case 'areaChange':
          return areaChangeFormColums()
        case 'operationChange':
          return operationChangeFormColums()
      }
    },

    tableData(){
      switch(this.type){
        case 'fault':
          return faultTableData
        default:
          return [{realName:'测试'}]
      }
    },

    colums(){
      switch(this.type){
        case 'fault':
          return faultColums(this)
        case 'area':
          return areaColums(this)
        case 'operation':
          return operationColums(this)
        case 'areaChange':
          return areaChange()
        case 'operationChange':
          return operationChange()
      }
    },
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>