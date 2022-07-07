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
      :columns="columns"
      size="mini"
      >
      <div slot="btns">
        <el-button type="primary" @click="closeDialog">取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </WForm>
  </el-dialog>
</template>
<script>
import {permission,role,perRole,rolePerson} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'ExtensionDialog',
  components:{
    WForm
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      isShow:false,
      formData:{}
    };
  },
  computed:{
    columns(){
      switch (this.activeName) {
        case 'permission':
          return permission()
        case 'role':
          return role()
        case 'perRole':
          return perRole()
        case 'rolePerson':
          return rolePerson()
      }
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