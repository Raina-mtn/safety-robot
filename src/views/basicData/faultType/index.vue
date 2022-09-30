<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="type" label="故障类型" lazy>
          <FalutTable :activeName="activeName"></FalutTable>
        </el-tab-pane>
        <el-tab-pane name="mode" label="处理方式" lazy>
          <FalutTable :activeName="activeName"></FalutTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import FalutTable from './falutTable.vue'
export default {
  components:{
    PageLayout,
    FalutTable
  },
  data() {
    return {
      activeName:'type'
    }
  },
}
</script>

<style>

</style>