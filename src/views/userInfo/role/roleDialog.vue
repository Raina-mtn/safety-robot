<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    :title="title" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="addFormColumns"
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
import {addFormColumns} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{},
      addFormColumns:addFormColumns(this),
      title:'新增',
      type:'',
    };
  },
  methods: {
    //打开
    openDialog(type) {
      this.type = type;
      this.title = this.type === 'add' ? '新增' : '编辑'
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