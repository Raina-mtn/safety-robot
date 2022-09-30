<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="risk" lazy>
          <span slot="label">
            故障工单<el-badge :value="10" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="event" lazy>
          <span slot="label">
            事件工单<el-badge :value="1" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="operation" lazy>
          <span slot="label">
            变更作业风险<el-badge :value="2" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="area" lazy>
          <span slot="label">
            变更区域风险<el-badge :value="12" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="check" lazy>
          <span slot="label">
            检修工单<el-badge :value="3" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="temporary" lazy>
          <span slot="label">
            临时性工单<el-badge :value="6" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="survey" lazy>
          <span slot="label">
            普查整改工单<el-badge :value="1" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <el-tab-pane name="extension" lazy>
          <span slot="label">
            故障修复延期申请<el-badge :value="1" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane>
        <!-- <el-tab-pane name="report" lazy>
          <span slot="label">
            故障报告<el-badge :value="12" class="item"/>
          </span>
          <PendingTable :activeName="activeName"></PendingTable>
        </el-tab-pane> -->
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import PendingTable from './pendingTable.vue'
export default {
  components:{
    PageLayout,
    PendingTable
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