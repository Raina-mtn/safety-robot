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
      <el-button type="primary">查询  </el-button>
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
import {riskFormColums,riskColums,otherColums,eventColums,extensionColums,operationColums,areaColums} from './config'
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
    columns(){
      return riskFormColums()
    },

    tableColums(){
      switch (this.activeName) {
        case 'risk':
          return riskColums()
        case 'other':
          return otherColums()
        case 'event':
          return eventColums()
        case 'extension':
          return extensionColums()
        case 'operation':
          return operationColums()
        case 'area':
          return areaColums()
      }
    }
  }
}
</script>

<style>

</style>