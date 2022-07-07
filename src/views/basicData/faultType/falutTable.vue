<template>
  <div class="warpper">
    <WForm
      label-width="90px"
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
import {typeFormColums,typeColums} from './config'
export default {
  components:{
    WForm,
    WTable,
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0
      
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    typeFormColums(){
      return typeFormColums()
    },

    typeColums(){
      return typeColums()
    }
  }
}
</script>

<style>

</style>