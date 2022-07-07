<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="permission" label="权限配置" lazy>
          <RoleTable :activeName="activeName"></RoleTable>
        </el-tab-pane>
        <el-tab-pane name="role" label="角色配置" lazy>
          <RoleTable :activeName="activeName"></RoleTable>
        </el-tab-pane>
        <el-tab-pane name="perRole" label="权限--角色配置" lazy>
          <RoleTable :activeName="activeName"></RoleTable>
        </el-tab-pane>
        <el-tab-pane name="rolePerson" label="角色--人员配置" lazy>
          <RoleTable :activeName="activeName"></RoleTable>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import RoleTable from './role.vue'
export default {
  components:{
    PageLayout,
    RoleTable
  },
  data() {
    return {
      activeName:'permission'
    }
  },
}
</script>

<style>

</style>