<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="risk" label="故障工单" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="event" label="事件工单" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="operation" label="变更作业风险" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="area" label="变更区域风险" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="check" label="检修工单" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="temporary" label="临时性工单" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="survey" label="普查整改工单" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
        <el-tab-pane name="extension" label="故障修复延期申请" lazy>
          <DoneTable :activeName="activeName"></DoneTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import DoneTable from './doneTable.vue'
export default {
  components:{
    PageLayout,
    DoneTable
  },
  data() {
    return {
      activeName:'risk'
    }
  },
}
</script>

<style>

</style>