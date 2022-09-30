
<template>
  <PageHeader content="处理">
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
      >
      <!-- 故障工单 -->
      <div slot="troubleTicket">
        <el-divider content-position="left">故障工单</el-divider>
      </div>

      <!-- 事件工单 -->
      <div slot="eventColums">
        <el-divider content-position="left">事件工单</el-divider>
      </div>
      <div slot="eventPicture">
        <el-image 
          style="width: 100px; height: 100px"
          :src="url" 
          :preview-src-list="srcList">
        </el-image>
      </div>

      <!-- 其他工单 -->
      <div slot="otherDetails">
        <el-divider content-position="left">基础信息</el-divider>
      </div>
    </WForm>
    <!-- 调度处理 -->
    <WForm
      label-width="110px"
      :form-data="dispatchData"
      :columns="dispatchColums"
      size="mini"
      >
      <!-- 故障工单 -->
      <div slot="riskDispatch">
        <el-divider content-position="left">调度处理信息</el-divider>
      </div>
      <div slot="riskDispatchGroup">
        <AddTable ref="addTable" :columns="riskDispatchColums"></AddTable>
      </div>

      <!-- 事件工单 -->
      <div slot="eventDispatch">
        <el-divider content-position="left">调度处理信息</el-divider>
      </div>
      <div slot="eventDepartment">
        <AddTable ref="addTable" :columns="departmentColums"></AddTable>
      </div>

      <!-- 其他工单 -->
      <div slot="otherDetails2">
        <el-divider content-position="left">责任归属</el-divider>
      </div>
    </WForm>
    <!-- 班组处理 -->
    <WForm
      v-if="devSahow"
      label-width="110px"
      :form-data="groupData"
      :columns="groupColums"
      size="mini"
      >
      <!-- 故障工单 -->
      <div slot="riskGroup">
        <el-divider content-position="left">班组处理</el-divider>
      </div>
      <div slot="riskGroupAssets" @click="$refs.assetsDialog.openDialog()">
        <el-input placeholder="请选择"></el-input>
    </div>
    <div slot="riskGroupArea" @click="$refs.areaDialog.openDialog()">
      <el-input placeholder="请选择"></el-input>
    </div>
      <div slot="riskGroupType">
        <AddTable ref="addTable" :columns="riskGroupType"></AddTable>
      </div>
      <div slot="riskGroupProgress">
        <AddTable ref="addTable" :columns="riskGroupProgress"></AddTable>
      </div>
      <div slot="riskGroupConsume">
        <AddTable ref="addTable" :columns="riskGroupConsum"></AddTable>
      </div>
      <div slot="riskGroupPicture">
        <el-upload
        action=""
        list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>

      <!-- 事件工单 -->
      <div slot="eventdepartment">
        <el-divider content-position="left">责任部门处理</el-divider>
      </div>
      <div slot="eventProgress">
        <AddTable ref="addTable" :columns="progressColums"></AddTable>
      </div>
      <div slot="eventUpload">
        <el-upload
          ref="upload"
          class="upload"
          :action="''"
          :name="'file'"
          :limit="1"
          :show-file-list="false"
          :file-list="fileList"
          :on-success="success"
          :on-error="error">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>

      <!-- 其他工单 -->
      <div slot="otherDetails3">
        <el-divider content-position="left">作业详细信息</el-divider>
      </div>
      <div slot="OtherSchedule">
        <AddTable ref="addTable" :columns="otherDetailsSchedule" :tableData="otherScheduleData"></AddTable>
      </div>
      <div slot="otherAssets">
        <AddTable ref="addTable" :columns="otherDetailsAsset"></AddTable>
      </div>
      <div slot="otherCosume">
        <AddTable ref="addTable" :columns="otherDetailsMaterials"></AddTable>
      </div>
    </WForm>
    <!-- 评价 -->
    <WForm
      v-if="evaluateShow"
      label-width="110px"
      :form-data="evaluateData"
      :columns="evaluateForm"
      size="mini"
      >
      <div slot="evaluateDivider">
        <el-divider content-position="left">评价</el-divider>
      </div>
      <div slot="evaluate">
        <el-rate v-model="evaluateData.evaluate"></el-rate>
      </div>
    </WForm>
    <div class="btns">
      <el-button icon="el-icon-circle-close" @click="$router.back(-1)">
        驳 回
      </el-button>
      <el-button v-if="saveBtn" icon="el-icon-circle-plus-outline" type="primary">
        暂 存
      </el-button>
      <el-button icon="el-icon-circle-check" type="primary">
        下一步
      </el-button>
    </div>
  </PageHeader>
</template>
<script>
import {
  troubleTicket,
  riskDispatch,
  riskGroup,
  riskDispatchColums,
  riskGroupType,
  riskGroupProgress,
  riskGroupConsum,
  evaluateForm,
  eventColums,
  eventDispatch,
  departmentColums,
  eventdepartment,
  progressColums,
  operationDetails,
  areaDetails,
  extensionDetails,
  otherColums,
  otherDispatch,
  otherGroup,
  otherDetailsSchedule,
  otherDetailsAsset,
  otherDetailsMaterials
  } from './config'
import { WForm,WTable } from '@common-ui/w-form';
import PageHeader from '@/components/page-header/index.vue'
import AddTable from '@/components/addTable/index.vue'
export default {
  name:'RiskDialog',
  components:{
    WForm,
    WTable,
    PageHeader,
    AddTable
  },
  data() {
    return {
      saveBtn:true,
      devShow:true,
      evaluateShow:true,
      formData:{},
      dispatchData:{},
      groupData:{},
      evaluateData:{},
      groupShow:true,
      riskDispatchColums,
      riskGroupType,
      riskGroupProgress,
      riskGroupConsum,
      departmentColums,
      progressColums,
      otherDetailsSchedule,
      otherDetailsAsset,
      otherDetailsMaterials,
      otherScheduleData:[]
    };
  },
  props:{
    type:{
      type:String,
      default:''
    }
  },
  computed:{
    formColums(){
      switch(this.type){
        case 'risk':
          return troubleTicket()
        case 'event':
          return eventColums()
        case 'operation':
          this.saveBtn = false;
          return operationDetails()
        case 'area':
          this.saveBtn = false;
          return areaDetails()
        case 'extension':
          this.saveBtn = false;
          return extensionDetails()
        case 'check':
          return otherColums()
        case 'temporary':
          return otherColums()
        case 'survey':
          return otherColums()
      }
    },

    dispatchColums(){
      switch(this.type){
        case 'risk':
          return riskDispatch()
        case 'event':
          return eventDispatch()
        case 'check':
          return otherDispatch()
        case 'temporary':
          return otherDispatch()
        case 'survey':
          return otherDispatch()
      }
    },

    groupColums(){
      switch(this.type){
        case 'risk':
          return riskGroup()
        case 'event':
          return eventdepartment()
        case 'check':
          return otherGroup()
        case 'temporary':
          return otherGroup()
        case 'survey':
          return otherGroup()
      }
    },

    evaluateForm(){
      switch(this.type){
        case 'risk':
          return evaluateForm()
        default :
          return []
      }
    }

  },
  methods: {
    submit(){
    },

    //上传成功
    success(){
      this.$message.success('上传成功！')
      this.$refs.upload.clearFiles();
    },
    
    //上传失败
    error(){
      this.$message.error('上传失败！')
    },
  },
}
</script>
<style lang="scss" scoped>
.btns{
  width: 500px;
  margin: 0 auto;
}
</style>