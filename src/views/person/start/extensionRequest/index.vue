<template>
  <PageLayout class="app-container">
    <div class="no-fault">
    <el-tabs class="tabs-box" type="card" v-model="activeName">
      <el-tab-pane label="故障工单" name="fault" lazy>
        <ExtensionTable :activeName="activeName"></ExtensionTable>
      </el-tab-pane>
      <el-tab-pane label="检修工单" name="check" lazy>
        <ExtensionTable :activeName="activeName"></ExtensionTable>
      </el-tab-pane>
      <el-tab-pane label="临时性工单" name="temporary" lazy>
        <ExtensionTable :activeName="activeName"></ExtensionTable>
      </el-tab-pane>
      <el-tab-pane label="普查整改工单" name="survey" lazy>
        <ExtensionTable :activeName="activeName"></ExtensionTable>
      </el-tab-pane>
    </el-tabs>
  </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import ExtensionTable from './extensionTable.vue';
export default {
  components:{
    PageLayout,
    ExtensionTable
  },
  data() {
    return {
      activeName:'fault',
    }
  },
  methods: {


  },
}
</script>

<style lang="scss" scoped>
</style>