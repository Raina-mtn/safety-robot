<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="maintenFormColums"
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
      :columns="maintenColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    <MaintenDialog ref="maintenDialog"></MaintenDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {maintenFormColums,maintenColums} from './config'
import MaintenDialog from './maintenDialog.vue';
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    MaintenDialog
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
    }
  },
  computed:{
    maintenFormColums(){
      return maintenFormColums(this)
    },

    maintenColums(){
      return maintenColums(this)
    },
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>