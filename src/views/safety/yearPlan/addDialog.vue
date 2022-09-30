
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="新增计划" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="addSafetyDialog"
      size="mini"
      >
      <div slot="divider1">
        <el-divider content-position="left">计划信息</el-divider>
      </div>
      <div slot="divider2">
        <el-divider content-position="left">明细详情</el-divider>
      </div>
      <div slot="daterange">
        <el-date-picker
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          :value-format="'yyyy-MM-dd'"
        />
      </div>
      <div slot="addcheck">
        <AddTable ref="addTable" :columns="addCheckColums"></AddTable>
      </div>
    </WForm>
    <div slot="footer" class="btn-grops">
      <el-button icon="el-icon-circle-close" @click="closeDialog">
        取 消
      </el-button>
      <el-button icon="el-icon-circle-check" type="primary" @click="submit">
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
import { WForm } from '@common-ui/w-form';
import AddTable from '@/components/addTable/index.vue'
import {addSafetyDialog,addCheckColums} from './config'
export default {
  components:{
    WForm,
    AddTable
  },
  data() {
    return {
      isShow:false,
      formData:{},
      addSafetyDialog:addSafetyDialog(),
      addCheckColums
    };
  },
  methods: {
    //打开
    openDialog() {
      this.isShow = true;
    },

    // 关闭
    closeDialog() {
      this.isShow = false;
    },

  },
}
</script>
<style lang="scss" scoped>

</style>