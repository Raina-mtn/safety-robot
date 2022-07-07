
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
      :columns="moreFormColums"
      size="mini"
      >
      <div slot="btns">
        <el-button type="primary">重置</el-button>
        <el-button type="primary">查询</el-button>
      </div>
    </WForm>
  </el-dialog>
</template>
<script>
import {moreFormColums} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'MoreFilters',
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
    moreFormColums(){
      return moreFormColums()
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


</style>