<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="maintenFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.maintenDialog.openDialog()">新增</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary"><i class="el-icon-download"></i>下载模板</el-button>
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
      :selection="true"
      :selectable="()=>true"
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
import {maintenBasicData} from '@/utils/data'
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
      // tableData:[],
      tableData:maintenBasicData,
      total:1,
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