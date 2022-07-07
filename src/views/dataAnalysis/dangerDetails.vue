<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="dangerFormColums"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">重置</el-button>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="dangerColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {dangerFormColums,dangerColums} from './config'
export default {
  components:{
    WTable,
    WForm,
    PageLayout
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
    }
  },
  computed:{
    dangerFormColums(){
      return dangerFormColums(this)
    },

    dangerColums(){
      return dangerColums(this)
    },
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>

</style>