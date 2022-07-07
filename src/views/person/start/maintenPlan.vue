<template>
  <PageLayout class="app-container">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="maintenPlan"
      size="mini"
      :rules="maintenRules"
      @inputEnter="getList"
    >
      <div slot="assets" class="assets">
        <el-form-item label="资产" required>
          <WTable
            ref="wtable"
            :table-data="tableData"
            :columns="maintenColums"
            :size="'mini'"
            :header-cell-style="{ background: '#eee' }"
          />
          <el-button type="primary" style="width:100%;" @click="$refs.assetsDialog.openDialog()">
            添加资产
          </el-button>
        </el-form-item>
      </div>
      <div slot="cycle" class="cycle">
        <el-form-item label="维修周期" required>
          <el-input-number :min="1" controls-position="right" v-model="formData.cycle.num"></el-input-number>
          <el-select placeholder="请选择" style="width:100px !important" v-model="formData.cycle.option">
            <el-option
              v-for="item in cycleOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </div>
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary">
          保存
        </el-button>
      </div>
    </WForm>
    <assetsDialog ref="assetsDialog"></assetsDialog>
  </PageLayout>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {maintenPlan,maintenColums,cycleOptions,maintenRules} from './config'
import assetsDialog from './components/assets.vue';
export default {
  components:{
    WForm,
    WTable,
    PageLayout,
    assetsDialog
  },
  data() {
    return {
      formData:{
        cycle:{
          num:0,
          option:''
        },
      },
      tableData:[],
      cycleOptions:cycleOptions
    }
  },
  computed:{
    maintenPlan() {
      return maintenPlan()
    },
    maintenColums(){
      return maintenColums()
    },
    maintenRules(){
      return maintenRules()
    }
  },
  methods: {
  },
}
</script>

<style>
.el-pagination{
  display: none;
}
.el-dialog{
  width: 80%;
}
</style>