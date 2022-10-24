<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="power" label="供电" lazy>
          <robotTab :active-name="activeName" />
        </el-tab-pane>
        <el-tab-pane name="vehicle" label="车辆" lazy>
          <robotTab :active-name="activeName" />
        </el-tab-pane>
        <el-tab-pane name="civil" label="土建" lazy>
          <robotTab :active-name="activeName" />
        </el-tab-pane>
        <el-tab-pane name="official" label="公务" lazy>
          <robotTab :active-name="activeName" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import robotTab from './robotTab.vue'
export default {
  components:{
    PageLayout,
    robotTab
  },
  data() {
    return {
      activeName:'power'
    }
  },
}
</script>

<style>

</style>