<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="申请延期" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="extensionForm"
      size="mini"
      >
    </WForm>
    <div slot="footer">
      <el-button type="primary" @click="closeDialog">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
import {extensionForm} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'ExtensionDialog',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{},
      extensionForm:extensionForm()
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