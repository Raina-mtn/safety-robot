<template>
  <div class="warpper">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="typeFormColums"
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
    :columns="typeColums" 
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
import {typeFormColums,typeColums,modeFormColums,modeColums} from './config'
import {typeBasicData,modeBasicData} from '@/utils/data'
export default {
  components:{
    WForm,
    WTable,
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
      switch (this.activeName){
        case 'type':
          return typeFormColums()
        case 'mode':
          return modeFormColums()
      }
    },

    typeColums(){
      switch (this.activeName){
        case 'type':
          return typeColums()
        case 'mode':
          return modeColums()
      }
    },

    tableData(){
      switch (this.activeName){
        case 'type':
          return typeBasicData
        case 'mode':
          return modeBasicData
      }
    },
  }
}
</script>

<style>

</style>