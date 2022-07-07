<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="basic" label="调度/工程师/班组基础信息配置" lazy>
          <PersonnelTable :activeName="activeName"></PersonnelTable>
        </el-tab-pane>
        <el-tab-pane name="correspondence" label="调度/工程师/班组对应关系配置" lazy>
          <PersonnelTable :activeName="activeName"></PersonnelTable>
        </el-tab-pane>
        <el-tab-pane name="personnel" label="调度/工程师/班组对应人员信息配置" lazy>
          <PersonnelTable :activeName="activeName"></PersonnelTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import PersonnelTable from './personnel.vue'
export default {
  components:{
    PageLayout,
    PersonnelTable
  },
  data() {
    return {
      activeName:'basic'
    }
  },
}
</script>

<style>

</style>