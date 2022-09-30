<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="dataFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="formData={}">重置</el-button>
      <el-button type="primary" @click="$refs.moreFilters.openDialog()">更多筛选</el-button>
      <el-button type="primary">导入</el-button>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="dataColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      selection
      :selectable="()=>true"
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    <MoreFilters ref="moreFilters"></MoreFilters>
    <EditDialog ref="editDialog"></EditDialog>
    <StationDialog ref="stationDialog"></StationDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import MoreFilters from './moreFilters.vue'
import EditDialog from './editingDialog.vue'
import StationDialog from './stationDialog.vue'
import {dataFormColums,dataColums} from './config'
import {handleData} from '@/utils/data'
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    MoreFilters,
    EditDialog,
    StationDialog
  },
  data() {
    return {
      formData:{},
      // tableData:[],
      tableData:handleData,
      total:1,
      dataFormColums:dataFormColums(),
      dataColums:dataColums(this)
    }
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>