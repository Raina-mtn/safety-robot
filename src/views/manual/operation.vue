<template>
  <div class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="operationFormColums"
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
      :columns="operationColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
  </div>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {operationFormColums,operationColums} from './config'
export default {
  components:{
    WTable,
    WForm,
    PageLayout
  },
  data() {
    return {
      formData:{},
      tableData:[
        {
          realName:'测试'
        }
      ],
      total:1,
      operationFormColums:operationFormColums(),
      operationColums:operationColums()
    }
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>