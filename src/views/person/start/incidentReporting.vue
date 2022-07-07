<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="incident"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="assets" @click="$refs.assetsDialog.openDialog()">
      <el-form-item label="资产">
          <el-input placeholder="请选择"></el-input>
        </el-form-item>
    </div>
    <div slot="area" @click="$refs.areaDialog.openDialog()">
      <el-form-item label="区域">
        <el-input placeholder="请选择"></el-input>
      </el-form-item>
    </div>
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
          下一步
        </el-button>
        <el-button type="primary" class="btnPrimary">
          返回
        </el-button>
      </div>
    </WForm>
    <assetsDialog ref="assetsDialog"></assetsDialog>
    <areaDialog ref="areaDialog"></areaDialog>
  </PageLayout>
</template>

<script>
import { WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {incident} from './config'
import assetsDialog from './components/assets.vue';
import areaDialog from './components/area.vue';
export default {
  components:{
    WForm,
    PageLayout,
    assetsDialog,
    areaDialog
  },
  data() {
    return {
      formData:{
        
      },
      tableData:[]
    }
  },
  computed:{
    incident() {
      return incident()
    },
  },
  methods: {
  },
}
</script>

<style>
.el-pagination{
  display: none;
}
</style>