<template>
  <PageLayout class="app-container">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="maintenPlan"
      size="mini"
      :rules="maintenRules"
      @inputEnter="getList"
    >
      <div slot="assets" class="assets">
        <WTable
          ref="wtable"
          show-num
          :showPage="false"
          :table-data="assetsTableData"
          :total="assetsTotal" 
          :columns="maintenColums"
          :size="'mini'"
          :header-cell-style="{ background: '#eee' }"
        />
        <el-button type="primary" style="width:100%;" @click="$refs.assetsDialog.openDialog()">
          添加资产
        </el-button>
      </div>
      <div slot="quota">
        <WTable
          ref="wtable"
          show-num
          :showPage="false"
          :table-data="quotaTableData"
          :total="quotaTotal" 
          :columns="quotaColums"
          :size="'mini'"
          :header-cell-style="{ background: '#eee' }"
        />
        <el-button type="primary" style="width:100%;" @click="$refs.quotaDialog.openDialog()">
          添加维修定额
        </el-button>
      </div>
      <div slot="cycle" class="cycle">
        <el-input-number :min="1" controls-position="right" v-model="formData.cycle.num"></el-input-number>
        <el-select placeholder="请选择" style="width:100px !important" v-model="formData.cycle.option">
          <el-option
            v-for="item in cycleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary" @click="$router.back(-1)">
          返 回
        </el-button>
        <el-button type="primary" class="btnPrimary" @click="submit">
          保 存
        </el-button>
      </div>
    </WForm>
    <AssetsDialog ref="assetsDialog"></AssetsDialog>
    <QuotaDialog ref="quotaDialog"></QuotaDialog>
  </PageLayout>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {maintenPlan,maintenColums,maintenRules,quotaColums} from './config'
import AssetsDialog from '@/components/area-assets/assets.vue';
import QuotaDialog from './quotaDialog.vue';
import {cycleOptions} from '@/utils/config'
export default {
  components:{
    WForm,
    WTable,
    PageLayout,
    AssetsDialog,
    QuotaDialog
  },
  data() {
    return {
      formData:{
        cycle:{
          num:0,
          option:''
        },
      },
      assetsTableData:[],
      quotaTableData:[],
      assetsTotal:3,
      quotaTotal:2,
      cycleOptions:cycleOptions,
      maintenPlan:maintenPlan(),
      maintenColums:maintenColums(this),
      maintenRules:maintenRules(),
      quotaColums:quotaColums(this)
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
  },
}
</script>

<style lang="scss" scoped>
.assets{
  ::v-deep .el-dialog{
    width: 80% !important;
  }
}
</style>