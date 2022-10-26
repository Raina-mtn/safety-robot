<template>
  <div class="warpper">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
    >
      <div slot="btns">
        <el-button type="primary">
          查询
        </el-button>
        <el-button type="primary" @click="add">
          新增
        </el-button>
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
    <addDialog ref="addDialog" />
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import {formColums,tableColums} from './config' 
import addDialog from './component/addDialog.vue'
import {apiGetStationList} from '@/api/interface'
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
      formData:{
        pageIndex:1,
        pageSize:10
      },
      formColums,
      tableData:[],
      total:4,
      tableColums:tableColums(this),
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    add(){
      this.$refs.addDialog.openDialog('add')
    },
    getList(){
      apiGetStationList(this.formData).then(res=>{
        this.tableData = res.data
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>