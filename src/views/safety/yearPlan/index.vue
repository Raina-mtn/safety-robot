<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="safetyFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
      <div slot="btns">
        <el-button type="primary">查询</el-button>
        <el-button type="primary" @click="$refs.moreFilters.openDialog()">更多筛选</el-button>
        <el-button type="primary">重置</el-button>
        <el-button type="primary" @click="$refs.addDialog.openDialog()">新增</el-button>
        <el-button type="primary">导出</el-button>
        <el-button type="primary">导入</el-button>
        <el-button type="primary"><i class="el-icon-download"></i>下载模板</el-button>
      </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="safetyColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :selection="true"
      :selectable="()=>true"
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    <MoreFilters ref="moreFilters"></MoreFilters>
    <EditDialog ref="editDialog"></EditDialog>
    <AddDialog ref="addDialog"></AddDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {safetyFormColums,safetyColums} from './config'
import MoreFilters from './moreFilters.vue'
import EditDialog from './edit.vue'
import AddDialog from './addDialog.vue'
import {safetyYearData} from '@/utils/data';
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    MoreFilters,
    EditDialog,
    AddDialog
  },
  data() {
    return {
      formData:{},
      tableData:safetyYearData,
      // tableData:[],
      total:2,
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