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
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.safetyDialog.openDialog()">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
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
    <SafetyDialog ref="safetyDialog"></SafetyDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {safetyFormColums,safetyColums} from './config'
import SafetyDialog from './safetyDialog.vue';
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    SafetyDialog
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

</style>