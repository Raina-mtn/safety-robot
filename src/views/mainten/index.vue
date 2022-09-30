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
      <el-button type="primary">重置</el-button>
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
    <EditDialog ref="editDialog"></EditDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {maintenFormColums,maintenColums} from './config'
import EditDialog from './editDialog.vue'
import {maintenData} from '@/utils/data'
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    EditDialog
  },
  data() {
    return {
      formData:{},
      tableData:maintenData,
      // tableData:[],
      total:1,
      maintenFormColums:maintenFormColums(),
      maintenColums:maintenColums(this)
    }
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>