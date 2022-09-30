<template>
  <PageLayout class="app-container">
    <WForm label-width="100px" :form-data="formData" :columns="formColumns" size="mini">
      <div slot="btns">
        <el-button type="primary" class="mc-btn--default">
          查询
        </el-button>
        <el-button type="primary" class="mc-btn--primary" @click="$refs.roleDialog.openDialog('add')">
          添加新角色
        </el-button>
      </div>
    </WForm>
    <WTable ref="mtable" :table-data="tableData" :columns="roleColums" :page="formData" :size="'mini'" :total="total" :header-cell-style="{background:'#eee'}" @pageChange="getList" />
    <RoleDialog ref="roleDialog" /> 
  </PageLayout>
</template>
<script>
import PageLayout from '@/components/page-layout/index.vue'
import {WForm, WTable} from '@common-ui/w-form'
import RoleDialog from './roleDialog.vue'
import {roleColums,formColumns} from './config'
// import { apiRoleList, apiDelRole } from '@/api/interface/modules/permission/role.js'
export default {
  components: {
    WForm,
    WTable,
    RoleDialog,
    PageLayout
  },
  data() {
    return {
      formData: {
        pageIndex: 1,
        pageSize: 10
      },
      roleColums:roleColums(this),
      formColumns:formColumns(),
      tableData: [
        {
          code:'测试'
        }
      ],
      showDialog: false,
      isEdit: false,
      total: 1
    }
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.tableBox {
  width: 100%;
  overflow: hidden;
}
.role-container{
  margin: 20px;
  background: #fff;
  padding: 0 10px 10px 10px;
}
</style>
