
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="更多筛选" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="dataMoreColums"
      size="mini"
      >
    </WForm>
    <div slot="footer" class="btn-grops">
      <el-button icon="el-icon-circle-close" @click="closeDialog">
        取 消
      </el-button>
      <el-button icon="el-icon-circle-check" type="primary" @click="submit">
        查 询
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
import {dataMoreColums} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'MoreFilters',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{},
      dataMoreColums:dataMoreColums()
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