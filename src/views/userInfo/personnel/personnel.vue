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
      <el-button type="primary" @click="$refs.addDialog.openDialog()">新增</el-button>
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
  <AddDialog ref="addDialog" :activeName="activeName"></AddDialog>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import AddDialog from './addDialog.vue'
import {
  basicFormColums,
  correspondenceFormColums,
  personnelFormColums,
  basicColums,
  correspondenceColums,
  personnelColums
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
    columns(){
      switch (this.activeName) {
        case 'basic':
          return   basicFormColums()
        case 'correspondence':
          return correspondenceFormColums()
        case 'personnel':
          return personnelFormColums()
      }
    },

    tableColums(){
      switch (this.activeName) {
        case 'basic':
          return basicColums()
        case 'correspondence':
          return correspondenceColums()
        case 'personnel':
          return personnelColums()
      }
    }
  }
}
</script>

<style>

</style>