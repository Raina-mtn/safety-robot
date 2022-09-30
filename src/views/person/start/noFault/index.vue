<template>
  <PageLayout class="app-container">
      <WForm
      label-width="110px"
      :form-data="formData"
      :columns="noFalut"
      size="mini"
      @inputEnter="getList"
    >
      <div slot="divider1">
        <el-divider content-position="left">基础信息</el-divider>
      </div>
      <div slot="type">
        <el-input disabled :value="formType"></el-input>
      </div>
      <div slot="divider2">
        <el-divider content-position="left">作业详细信息</el-divider>
      </div>
      <div slot="schedule">
        <AddTable ref="addTable" :columns="scheduleColums"></AddTable>
      </div>
      <div slot="divider3">
        <el-divider content-position="left">责任归属</el-divider>
      </div>
      <div slot="divider4">
        <el-divider content-position="left">资产</el-divider>
        <AddTable ref="addTable" :columns="assetColums"></AddTable>
      </div>
      <div slot="divider5">
        <el-divider content-position="left">物资消耗</el-divider>
        <AddTable ref="addTable" :columns="materialsColums"></AddTable>
      </div>
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary">
          保存
        </el-button>
        <el-button type="primary" class="btnPrimary">
          下一步
        </el-button>
        <el-button type="primary" class="btnPrimary" @click="$router.back(-1)">
          返回
        </el-button>
      </div>
    </WForm>
  </PageLayout>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import AddTable from '@/components/addTable/index.vue'
import {noFalut,scheduleColums,assetColums,materialsColums} from './config'
export default {
  components:{
    WForm,
    WTable,
    PageLayout,
    AddTable
  },
  data() {
    return {
      formData:{},
      tableData:[],
      noFalut:noFalut(),
      scheduleColums:scheduleColums,
      assetColums:assetColums,
      materialsColums:materialsColums
    }
  },
  props:{
    type:{
      type: String,
      default: 'service'
    }
  },
  computed:{
    formType(){
      switch(this.type){
        case 'service':
          return '检修工单'
        case 'temporary':
          return '临时性工单'
        case 'survey':
          return '普查整改工单'
      }
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>