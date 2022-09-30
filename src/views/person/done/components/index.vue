
<template>
  <PageHeader content="详情">
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
          disabled
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
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="riskDispatchColums"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
      </div>

      <!-- 事件工单 -->
      <div slot="eventDispatch">
        <el-divider content-position="left">调度处理信息</el-divider>
      </div>
      <div slot="eventDepartment">
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="departmentColums"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
      </div>

      <!-- 其他工单 -->
      <div slot="otherDetails2">
        <el-divider content-position="left">责任归属</el-divider>
      </div>
    </WForm>
    <!-- 班组处理 -->
    <WForm
      v-if="devShow"
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
        <el-input placeholder="请选择" disabled></el-input>
    </div>
    <div slot="riskGroupArea" @click="$refs.areaDialog.openDialog()">
      <el-input placeholder="请选择" disabled></el-input>
    </div>
      <div slot="riskGroupType">
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="riskGroupType"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
      </div>
      <div slot="riskGroupProgress">
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="riskGroupProgress"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
      </div>
      <div slot="riskGroupConsume">
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="riskGroupConsum"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
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
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="progressColums"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
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
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="otherDetailsSchedule"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
      </div>
      <div slot="otherAssets">
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="otherDetailsAsset"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
      </div>
      <div slot="otherCosume">
        <WTable
          ref="mtable" 
          :table-data="tableData" 
          :columns="otherDetailsMaterials"
          :showPage="false"
          show-num
          :total="total" 
          :size="'mini'" 
          :header-cell-style="{background:'#eee'}"
        />
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
        <el-rate v-model="evaluateData.evaluate" disabled></el-rate>
      </div>
    </WForm>
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
      riskDispatchColums:riskDispatchColums(),
      riskGroupType:riskGroupType(),
      riskGroupProgress:riskGroupProgress(),
      riskGroupConsum:riskGroupConsum(),
      departmentColums:departmentColums(),
      progressColums:progressColums(),
      otherDetailsSchedule:otherDetailsSchedule(),
      otherDetailsAsset:otherDetailsAsset(),
      otherDetailsMaterials:otherDetailsMaterials()
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
        case 'other':
          return otherColums()
      }
    },

    dispatchColums(){
      switch(this.type){
        case 'risk':
          return riskDispatch()
        case 'event':
          return eventDispatch()
        case 'other':
          return otherDispatch()
        // case 'check':
        //   return otherDispatch()
        // case 'temporary':
        //   return otherDispatch()
        // case 'survey':
        //   return otherDispatch()
      }
    },

    groupColums(){
      switch(this.type){
        case 'risk':
          return riskGroup()
        case 'event':
          return eventdepartment()
        case 'other':
          return otherGroup()
        // case 'check':
        //   return otherGroup()
        // case 'temporary':
        //   return otherGroup()
        // case 'survey':
        //   return otherGroup()
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