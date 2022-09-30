<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="safetyFormColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.addDialog.openDialog()">新增</el-button>
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
    <AddDialog ref="addDialog"></AddDialog>
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {safetyFormColums,safetyColums} from './config'
import AddDialog from './addDialog.vue';
export default {
  components:{
    WTable,
    WForm,
    PageLayout,
    AddDialog
  },
  data() {
    return {
      formData:{},
      tableData:[
        {
          realName:'1'
        },
        {
          realName:'2'
        },
        {
          realName:'3'
        },
      ],
      total:3,
      safetyFormColums:safetyFormColums(),
      safetyColums:safetyColums(this)
    }
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>