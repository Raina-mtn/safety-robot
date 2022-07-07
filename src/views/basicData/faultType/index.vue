<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="type" lazy>
          <span slot="label">
            故障类型<el-badge :value="12" class="item"/>
          </span>
          <FalutTable :activeName="activeName"></FalutTable>
        </el-tab-pane>
        <el-tab-pane name="handle" lazy>
          <span slot="label">
            处理方式<el-badge :value="12" class="item"/>
          </span>
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