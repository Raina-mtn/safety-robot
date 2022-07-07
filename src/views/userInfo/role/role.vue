<template>
  <div class="warpper">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="columns"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button v-if="selectShow" type="primary">查询</el-button>
      <el-button type="primary" @click="$refs.addDialog.openDialog()">新增</el-button>
      <el-button v-if="btnShow" type="primary">导入</el-button>
      <el-button v-if="btnShow" type="primary">导出</el-button>
    </div>
    </WForm>
    <WTable
    ref="mtable" 
    :table-data="tableData" 
    :columns="tableColums" 
    :page="formData" 
    :total="total" 
    :size="'mini'" 
    :header-cell-style="{background:'#eee'}"
    @pageChange="getList" 
  />
  <AddDialog ref="addDialog" :activeName="activeName"></AddDialog>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import AddDialog from './addDialog.vue'
import {
  permissionFormColums,
  perRoleFormColums,
  rolePersonFormColums,
  permissionColums,
  roleColums,
  perRoleColums,
  rolePersonlColums
  } from './config'
export default {
  components:{
    WForm,
    WTable,
    
    AddDialog
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
      selectShow:false,
      btnShow:true
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    columns(){
      this.selectShow = false;
      this.btnShow = true;
      switch (this.activeName) {
        case 'permission':
          return permissionFormColums()
        case 'role':
          return permissionFormColums()
        case 'perRole':
          this.btnShow = false;
          this.selectShow =true;
          return perRoleFormColums()
        case 'rolePerson':
          this.selectShow =true;
          return rolePersonFormColums()
      }
    },

    tableColums(){
      switch (this.activeName) {
        case 'permission':
          return permissionColums()
        case 'role':
          return roleColums()
        case 'perRole':
          return perRoleColums()
        case 'rolePerson':
          return rolePersonlColums()
      }
    }
  }
}
</script>

<style>

</style>