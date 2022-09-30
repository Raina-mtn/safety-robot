<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">查询</el-button>
      <el-button type="primary">重置</el-button>
      <el-button type="primary" @click="$refs.addDialog.openDialog('add')">新增</el-button>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="colums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
  <AddDialog ref="addDialog" :activeName="activeName"></AddDialog>
  </PageLayout>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import AddDialog from './addDialog.vue'
import {userStatus} from '@/utils/config'
import {dispatchUserData} from '@/utils/data'
import PageLayout from '@/components/page-layout/index.vue'
import {
  formColums,
  colums
  } from './config'
export default {
  components:{
    WForm,
    WTable,
    PageLayout,
    AddDialog
  },
  data() {
    return {
      formData:{},
      tableData:dispatchUserData,
      total:1,
      formColums:formColums(),
      colums:colums(this)
    }
  },
  methods: {
    // 禁用
    handleForbidden(row){
      let obj = {id: row.id}
      if(row.status === userStatus[0].value){
        obj.status=userStatus[2].value,
        obj.msg='禁用'
      }else{
        obj.status=userStatus[0].value,
        obj.msg='启用'
      }
      this.$confirm(`确认${obj.msg }该用户？`, '提示', {
        type: 'warning'
      })
      // .then(() => {
      //   apiUpdateUserStatus({
      //     ...obj
      //   }).then(() => {
      //     this.$message.success(`已${obj.msg}`)
      //   }).finally(() => {
      //     this.getList()
      //   })
      // })
    }
  },
}
</script>

<style>
</style>