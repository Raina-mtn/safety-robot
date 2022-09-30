
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
      :columns="formColums"
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
import {
  riskDialogColums,
  checkDialogColums,
  temporaryDialogColums,
  surveyDialogColums,
  eventDialogColums,
  faultDialogColums,
  reportDialogColums
} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'RiskDialog',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{}
    };
  },
  props:{
    type:{
      type: String,
      default: 'service'
    }
  },
  computed:{
    formColums(){
      switch(this.type){
        case 'risk':
          return riskDialogColums()
        case 'check':
          return checkDialogColums()
        case 'temporary':
          return temporaryDialogColums()
        case 'survey':
          return surveyDialogColums()
        case 'event':
          return eventDialogColums()
        case 'report':
          return reportDialogColums()
        case 'fault':
          return faultDialogColums()
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

</style>