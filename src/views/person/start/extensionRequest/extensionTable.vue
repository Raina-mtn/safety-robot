<template>
  <div class="warpper">
    <WForm
      label-width="110px"
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
  <ExtensionDialog ref="extensionDialog"></ExtensionDialog>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import ExtensionDialog from './extensionDialog.vue'
import {faultColums,faultFormColums,checkColums,temporaryColums,surveyColums,otherFormColums} from './config'
export default {
  components:{
    WForm,
    WTable,
    ExtensionDialog
  },
  data() {
    return {
      formData:{},
      tableData:[
        {
          id:'测试',
          describe:'测试',
          reportDep:'测试',
          reportUser:'测试',
          reportTime:'测试',
          status:'测试',
        }
      ],
      total:1
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  mounted(){
    console.log('this.activeName :>> ', this.activeName);
  },
  computed:{
    columns(){
      switch (this.activeName) {
        case 'fault':
          return faultFormColums()
        default:
          return otherFormColums()
      }
    },

    tableColums(){
      switch (this.activeName) {
        case 'fault':
          return faultColums(this)
        case 'check':
          return checkColums(this)
        case 'temporary':
          return temporaryColums(this)
        case 'survey':
          return surveyColums(this)
      }
    }
  }
}
</script>

<style>

</style>