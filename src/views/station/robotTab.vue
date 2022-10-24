<template>
  <div class="warpper">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
    >
    <div slot="btns">
        <el-button type="primary">查询</el-button>
        <el-button type="primary" @click="add">新增</el-button>
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
    />
    <addDialog ref="addDialog"></addDialog>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import {formColums,tableColums} from './config' 
import addDialog from './component/addDialog.vue'
export default {
  components:{
    WForm,
    WTable,
    addDialog
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      formData:{},
      formColums,
      tableData:[{
        station:'A场站',
        robot:'防爆机器人',
        ip:'172.19.3.23:8020'
      },{
        station:'A场站',
        robot:'线路巡检机器人',
        ip:'172.19.3.23:8020'
      },{
        station:'B场站',
        robot:'防爆机器人',
        ip:'172.19.3.23:8020'
      },{
        station:'B场站',
        robot:'360机器人',
        ip:'172.19.3.23:8020'
      },],
      total:4,
      tableColums:tableColums(this),
    }
  },
  methods: {
    add(){
      this.$refs.addDialog.openDialog('add')
    }
  },
}
</script>

<style lang="scss" scoped>
</style>