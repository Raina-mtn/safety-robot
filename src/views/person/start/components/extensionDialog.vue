<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="申请延期" 
    center
  >
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="extensionForm"
      size="mini"
      >
      <div slot="btns">
        <el-button type="primary">确定</el-button>
      </div>
    </WForm>
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
      formData:{}
    };
  },
  computed:{
    extensionForm(){
      return extensionForm()
    }
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
.upload{
  margin: 10px auto;
}

</style>