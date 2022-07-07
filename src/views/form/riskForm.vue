<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="riskFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.riskDialog.openDialog()">更多筛选</el-button>
      <el-button type="primary">刷新</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="riskColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    <RiskDialog ref="riskDialog"></RiskDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {riskFormColums,riskColums} from './config'
import RiskDialog from './components/riskDialog.vue'
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    RiskDialog
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
    }
  },
  computed:{
    riskFormColums(){
      return riskFormColums(this)
    },

    riskColums(){
      return riskColums(this)
    },
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>