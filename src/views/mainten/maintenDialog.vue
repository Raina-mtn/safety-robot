
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="更多筛选" 
    center
  >
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="maintenDialog"
      size="mini"
      >
      <div slot="btns">
        <el-button type="primary">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </WForm>
  </el-dialog>
</template>
<script>
import { WForm } from '@common-ui/w-form';
import {maintenDialog} from './config'
export default {
  name:'MaintenDialog',
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
    maintenDialog(){
      return maintenDialog()
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