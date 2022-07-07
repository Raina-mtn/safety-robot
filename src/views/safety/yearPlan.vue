<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="safetyFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <div class="btns_left">
        <el-button type="primary">导入</el-button>
        <el-button type="primary"><i class="el-icon-download"></i>下载模板</el-button>
      </div>
      <div class="btns_right">
        <el-button type="primary">查询</el-button>
        <el-button type="primary" @click="$refs.yearDialog.openDialog()">更多筛选</el-button>
        <el-button type="primary">重置</el-button>
      </div>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="safetyColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    <YearDialog ref="yearDialog"></YearDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {safetyFormColums,safetyColums} from './config'
import YearDialog from './components/yearDialog.vue'
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    YearDialog
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
    }
  },
  computed:{
    safetyFormColums(){
      return safetyFormColums(this)
    },

    safetyColums(){
      return safetyColums(this)
    },
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>
.btns_left{
  float: left;
}
.btns_right{
  float: right;
}
</style>