<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="troubleTicket"
      size="mini"
      :rules="troubleRules"
      @inputEnter="getList"
    >
      <div slot="picture">
         <el-form-item label="上传图片">
          <el-upload
          action=""
          list-type="picture-card">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
      </div>
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary">
          保存
        </el-button>
        <el-button type="primary" class="btnPrimary">
          确认报单
        </el-button> 
        <el-button type="primary" class="btnPrimary">
          下一步
        </el-button>
        <el-button type="primary" class="btnPrimary">
          调度跟踪
        </el-button>
        <el-button type="info" class="btnPrimary">
          返回
        </el-button>
      </div>
    </WForm>
  </PageLayout>
</template>

<script>
import { WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {troubleTicket,troubleRules} from './config'
export default {
  components:{
    WForm,
    PageLayout
  },
  data() {
    return {
      formData:{}
    }
  },
  computed:{
    troubleTicket() {
      return troubleTicket()
    },
    troubleRules(){
      return troubleRules()
    }
  }
}
</script>

<style>

</style>