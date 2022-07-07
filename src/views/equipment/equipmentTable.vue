<template>
  <div class="warpper">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="allFormColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">更多筛选</el-button>
      <el-button type="primary">模板下载</el-button>
      <el-button type="primary"><i class="el-icon-download"/>导入</el-button>
      <el-button type="primary"><i class="el-icon-upload2"/>导出</el-button>
    </div>
    </WForm>
    <WTable
    ref="mtable" 
    :table-data="tableData" 
    :columns="allColums" 
    :page="formData" 
    :total="total" 
    :size="'mini'" 
    :header-cell-style="{background:'#eee'}"
    @pageChange="getList" 
  >
    </WTable>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import {allFormColums,allColums} from './config'
export default {
  components:{
    WForm,
    WTable,
  },
  data() {
    return {
      formData:{},
      tableData:[
        {
          realName:'1111'
        }
      ],
      total:1,
      date:'',
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    allFormColums(){
      return allFormColums()
    },

    allColums(){
      return allColums()
    }
  }
}
</script>

<style>

</style>