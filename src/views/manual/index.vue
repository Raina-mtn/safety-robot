<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="area" label="区域" lazy>
          <AreaTable :activeName="activeName"></AreaTable>
        </el-tab-pane>
        <el-tab-pane name="operation" label="作业" lazy>
          <OperationTable :activeName="activeName"></OperationTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import AreaTable from './area.vue'
import OperationTable from './operation.vue'
export default {
  components:{
    PageLayout,
    AreaTable,
    OperationTable
  },
  data() {
    return {
      activeName:'area'
    }
  },
}
</script>

<style>

</style>