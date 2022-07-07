<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="新增" 
    center
  >
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="dialogFormColums"
      size="mini"
      >
      <div slot="radio">
        <el-form-item label="状态">
          <el-radio v-model="formData.status" label="0">启用</el-radio>
          <el-radio v-model="formData.status" label="1">禁用</el-radio>
        </el-form-item>
      </div>
      <div slot="btns">
        <el-button type="primary">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </WForm>
  </el-dialog>
</template>
<script>
import {dialogFormColums} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'safetyDialog',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{
        status:''
      }
    };
  },
  computed:{
    dialogFormColums(){
      return dialogFormColums()
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