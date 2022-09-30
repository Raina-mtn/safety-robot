
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="编辑" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="editColums"
      size="mini"
      >
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
import {editColums} from './config'
export default {
  name:'MaintenDialog',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{},
      editColums:editColums(),

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