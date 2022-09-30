<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="incidentColums"
      size="mini"
      @inputEnter="getList"
    >
      <div slot="assets">
        <WTable
          ref="wtable"
          show-num
          :showPage="false"
          :table-data="tableData"
          :total="total" 
          :columns="assetsColums"
          :size="'mini'"
          :header-cell-style="{ background: '#eee' }"
        />
        <el-button type="primary" style="width:100%;" @click="$refs.assetsDialog.openDialog()">
          添加资产
        </el-button>
      </div>
    <div slot="area">
      <WTable
        ref="wtable"
        show-num
        :showPage="false"
        :table-data="tableData"
        :total="total" 
        :columns="areaColums"
        :size="'mini'"
        :header-cell-style="{ background: '#eee' }"
      />
      <el-button type="primary" style="width:100%;" @click="$refs.areaDialog.openDialog()">
        添加区域
      </el-button>
    </div>
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
    <AssetsDialog ref="assetsDialog"></AssetsDialog>
    <AreaDialog ref="areaDialog"></AreaDialog>
    <AgreeDialog ref="agreeDialog"></AgreeDialog>
  </PageLayout>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import AgreeDialog from '../components/argeeDialog.vue'
import {incidentColums,assetsColums,areaColums} from './config'
import AssetsDialog from '@/components/area-assets/assets.vue';
import AreaDialog from '@/components/area-assets/area.vue';
export default {
  components:{
    WForm,
    WTable,
    PageLayout,
    AssetsDialog,
    AreaDialog,
    AgreeDialog
  },
  data() {
    return {
      formData:{},
      tableData:[],
      incidentColums:incidentColums(),
      assetsColums:assetsColums(),
      areaColums:areaColums(),
    }
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

<style scoped>
::v-deep .el-dialog{
    width: 80% !important;
  }
</style>