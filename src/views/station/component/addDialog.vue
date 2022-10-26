
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    :title="title" 
    center
  >
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="dialogColums"
      size="mini"
    />
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
import { WForm } from '@common-ui/w-form';
import {dialogColums} from '../config'
import {apiCreateStation} from '@/api/interface'
export default {
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{},
      dialogColums,
    };
  },
  methods: {
    //打开
    openDialog(event,row) {
      console.log('row :>> ', row);
      this.event = event
      this.title = this.event === 'add' ?'新增' : '编辑'
      this.isShow = true;
      this.formData = row
    },

    // 关闭
    closeDialog() {
      this.formData = {},
      this.event = '',
      this.title = ''
      this.isShow = false;
    },
    submit(){
      const params = {
        ...this.formData
      }
      apiCreateStation(params).then(()=>{
        this.closeDialog()
      })
    }

  },
}
</script>
<style lang="scss" scoped>

</style>