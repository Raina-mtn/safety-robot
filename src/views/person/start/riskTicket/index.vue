<template>
  <PageLayout class="app-container">
    <span class="num" v-if="num">单据号：{{num}}，状态：草稿</span>
    <WForm
      ref="wform"
      label-width="110px"
      :form-data="formData"
      :columns="troubleTicket"
      size="mini"
      :rules="troubleRules"
      :validate-event="false" 
      @inputEnter="getList"
    >
      <div slot="picture">
        <el-upload
        action=""
        list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary" @click="$router.back(-1)">
          返 回
        </el-button>
        <el-button type="primary" class="btnPrimary" @click="submit">
          保 存
        </el-button>
        <el-button type="primary" class="btnPrimary" @click="next">
          下一步
        </el-button>
      </div>
    </WForm>
    <AgreeDialog ref="agreeDialog"></AgreeDialog>
  </PageLayout>
</template>

<script>
import { WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {troubleTicket,troubleRules} from './config'
import AgreeDialog from '../components/argeeDialog.vue'
// import {getUserList} from '@/api/interface/index'
export default {
  components:{
    WForm,
    PageLayout,
    AgreeDialog 
  },
  data() {
    return {
      formData:{},
      troubleTicket:troubleTicket(this),
      troubleRules:troubleRules(),
      num:'',
      userList:[]
    }
  },
  mounted() {
    // getUserList({})
  },
  methods: {
    submit(){
      this.$refs.wform.validate((valid) => {
        if (valid) {
          //验证通过
        } else {
          //验证失败
        }
      })
    },
    
    next(){
      this.$refs.wform.validate((valid) => {
        if (valid) {
          //验证通过
          this.$refs.agreeDialog.openDialog()
        } else {
          //验证失败
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.app-container{
  .num{
    color: red;
    float: right;
  }
}
</style>