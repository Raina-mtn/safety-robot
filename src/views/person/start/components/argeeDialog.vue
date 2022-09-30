
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="请选择下一节点" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="agreeForm"
      size="mini"
      >
      <div slot="radio">
        <el-radio v-model="formData.agree" label="true">同意</el-radio>
        <el-radio v-model="formData.agree" label="false">不同意</el-radio>
      </div>
    </WForm>
    <div slot="footer">
      <el-button type="primary">归口调度</el-button>
      <el-button type="primary" @click="closeDialog">关闭工单</el-button>
    </div>
  </el-dialog>
</template>
<script>
import {agreeForm} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'AgreeDialog',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{},
      agreeForm:agreeForm()
    };
  },
  methods: {
    //打开
    openDialog() {
      this.isShow = true;
    },

    // 关闭
    closeDialog() {
      this.formData = {}
      this.isShow = false;
    },

  },
}
</script>
<style lang="scss" scoped>

</style>