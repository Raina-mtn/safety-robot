<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="dataFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">重置</el-button>
      <el-button type="primary">更多筛选</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">批量修改</el-button>
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
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {dataFormColums,dataColums} from './config'
export default {
  components:{
    WTable,
    WForm,
    PageLayout
  },
  data() {
    return {
      formData:{},
      tableData:[
        {
          realName:'111'
        }
      ],
      total:1,
    }
  },
  computed:{
    dataFormColums(){
      return dataFormColums(this)
    },

    dataColums(){
      return dataColums(this)
    },
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>