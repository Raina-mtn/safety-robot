<template>
  <PageLayout class="app-container">
    故障单号<el-input placeholder="请输入" class="orderSelect"></el-input>
        <el-button>查询</el-button>
        <el-button @click="$refs.moreFilters.openDialog()">更多筛选</el-button>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="reportColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    <MoreFilters ref="moreFilters"></MoreFilters>
  </PageLayout>
</template>

<script>
import { WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {reportColums} from './config'
import MoreFilters from './components/moreFilters.vue'
export default {
  components:{
    WTable,
    PageLayout,
    MoreFilters
  },
  data() {
    return {
      tableData:[
        {
          realName:'1111'
        }
      ],
      total: 0,
    }
  },
  computed:{
    reportColums(){
      return reportColums(this)
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