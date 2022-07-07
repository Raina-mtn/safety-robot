<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="all" lazy>
          <span slot="label">
            全部<el-badge :value="12" class="item"/>
          </span>
          <EquipmentTable :activeName="activeName"></EquipmentTable>
        </el-tab-pane>
        <el-tab-pane name="no-check" lazy>
          <span slot="label">
            超期未检验<el-badge :value="12" class="item"/>
          </span>
          <EquipmentTable :activeName="activeName"></EquipmentTable>
        </el-tab-pane>
        <el-tab-pane name="no-mainten" lazy>
          <span slot="label">
            超期未维保<el-badge :value="12" class="item"/>
          </span>
          <EquipmentTable :activeName="activeName"></EquipmentTable>
        </el-tab-pane>
        <el-tab-pane name="no-inspection" lazy>
          <span slot="label">
            超期未月检<el-badge :value="12" class="item"/>
          </span>
          <EquipmentTable :activeName="activeName"></EquipmentTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import EquipmentTable from './equipmentTable.vue'
export default {
  components:{
    PageLayout,
    EquipmentTable
  },
  data() {
    return {
      activeName:'all'
    }
  },
}
</script>

<style>

</style>