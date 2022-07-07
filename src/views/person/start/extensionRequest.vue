<template>
  <PageLayout class="app-container">
    <div class="no-fault">
    <el-tabs class="tabs-box" type="card">
      故障单号<el-input placeholder="请输入" class="orderSelect"></el-input>
        <el-button>查询</el-button>
      <el-tab-pane label="故障工单" name="" lazy>
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="extensionColums" 
          :page="formData" 
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
          @pageChange="getList" 
        />
      </el-tab-pane>
    </el-tabs>
  </div>
  <ExtensionDialog ref="extensionDialog"></ExtensionDialog>
  </PageLayout>
</template>

<script>
import { WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {extensionColums} from './config'
import ExtensionDialog from './components/extensionDialog.vue'
export default {
  components:{
    WTable,
    PageLayout,
    ExtensionDialog
  },
  data() {
    return {
      tableData:[
        {
          realName:'11'
        }
      ],
      total:0,

    }
  },
  computed:{
    extensionColums(){
      return extensionColums(this)
    }
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>
.orderSelect{
  width: 20% !important;
  margin: 10px;
}
</style>