
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
      :columns="moreFiltersColums"
      size="mini"
      >
      <div slot="daterange">
        <el-date-picker
          v-model="formData.date"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
          :value-format="'yyyy-MM-dd'"
        />
      </div>
    </WForm>
    <div slot="footer" class="assets_footer">
      <el-button icon="el-icon-circle-close" @click="closeDialog">
        取 消
      </el-button>
      <el-button icon="el-icon-circle-check" type="primary" @click="submit">
        提 交
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
import {moreFiltersColums} from './config'
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
    moreFiltersColums(){
      return moreFiltersColums()
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