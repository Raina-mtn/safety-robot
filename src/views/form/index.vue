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
      <el-button type="primary" @click="$refs.moreFilters.openDialog()">更多筛选</el-button>
      <el-button type="primary">刷新</el-button>
      <el-button type="primary">导出</el-button>
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
    <MoreFilters ref="moreFilters" :type="type"></MoreFilters>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {
  riskFormData,
  checkFormData,
  temporaryFormData,
  surveyFormData,
  eventFormData,
  faultFormData
  } from '@/utils/data'
import {
  riskFormColums,riskColums,
  checkFormColums,checkColums,
  temporaryFormColums,temporaryColums,
  surveyFormColums,surveyColums,
  eventFormColums,eventColums,
  faultFormColums,faultColums
  } from './config'
import MoreFilters from './moreFilters.vue'
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    MoreFilters
  },
  data() {
    return {
      formData:{},
      // tableData:[],
      total:1,
    }
  },
  props:{
    type:{
      type: String,
      default: 'service'
    }
  },
  computed:{
    formColums(){
      switch(this.type){
        case 'risk':
          return riskFormColums()
        case 'check':
          return checkFormColums()
        case 'temporary':
          return temporaryFormColums()
        case 'survey':
          return surveyFormColums()
        case 'event':
          return eventFormColums()
        case 'fault':
          return faultFormColums()
      }
    },

    tableColums(){
      switch(this.type){
        case 'risk':
          return riskColums()
        case 'check':
          return checkColums()
        case 'temporary':
          return temporaryColums()
        case 'survey':
          return surveyColums()
        case 'event':
          return eventColums()
        case 'fault':
          return faultColums()
      }
    },

    tableData(){
      switch(this.type){
        case 'risk':
          return riskFormData
        case 'check':
          return checkFormData
        case 'temporary':
          return temporaryFormData
        case 'survey':
          return surveyFormData
        case 'event':
          return eventFormData
        case 'fault':
          return faultFormData
      }
    },
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>