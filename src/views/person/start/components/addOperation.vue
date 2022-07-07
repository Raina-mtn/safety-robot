<template>
  <el-dialog 
    v-if="isShow"
    class="assets"
    :before-close="closeDialog"
    :visible.sync="isShow"
    :title="title" 
    center
  >
    <WForm
      v-if="formShow"
      label-width="90px"
      :form-data="formData"
      :columns="operationRiskAdd"
      size="mini"
      :rules="maintenRules"
      @inputEnter="getList"
    >
      <div slot="divider">
        <el-divider content-position="left">{{dividerShowF}}</el-divider>
      </div>
      <div slot="tags">
        <el-form-item label="作业岗位">
          <el-tag
            :key="tag"
            v-for="tag in formData.dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新增岗位</el-button>
        </el-form-item>
      </div>
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary">
          保存
        </el-button>
      </div>
    </WForm>
    <WForm
      v-else
      label-width="90px"
      :form-data="formData"
      :columns="operationRiskDelete"
      size="mini"
      :rules="maintenRules"
      @inputEnter="getList"
    >
    </WForm>
    <el-divider content-position="left" class="dividerShowS">{{dividerShowS}}</el-divider>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="operationRiskColums" 
      :page="formData" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      :selection="true"
      :selectable="()=>true"
      @pageChange="getList" 
    />
    
    <div slot="footer" class="assets_footer">
      <el-button icon="el-icon-circle-close" @click="closeDialog">
        取 消
      </el-button>
      <el-button icon="el-icon-circle-check" type="primary" @click="submit">
        提 交
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import {operationRiskAdd,operationRiskDelete,operationRiskColums} from './config';
import { WForm,WTable } from '@common-ui/w-form';
export default {
  name:'AddArea',
  components:{
    WForm,
    WTable
  },
  data() {
    return {
      isShow:false,
      formData:{
        dynamicTags:[]
      },
      tableData:[],
      title:'',
      formShow:Boolean,
      dividerShowF:'',
      dividerShowS:'',
      inputVisible:false,
      inputValue: '',
    }
  },
  computed:{
    operationRiskAdd(){
      return operationRiskAdd()
    },
    operationRiskDelete(){
      return operationRiskDelete()
    },
    operationRiskColums(){
      return operationRiskColums()
    }
  },
  methods: {
    //打开
    openDialog(e) {
      this.isShow = true;
      switch (e){
        case 'add' :{
          this.title = '新增';
          this.formShow = true;
          this.dividerShowF = '新增信息';
          this.dividerShowS = '新增风险清单';
          break;
        }
        case 'delete' :{
          this.title = '删除';
          this.formShow = false;
          this.dividerShowS = '删除风险清单';
          break;
        }
        case 'edit' :{
          this.title = '编辑';
          this.formShow = true;
          this.dividerShowF = '编辑信息';
          this.dividerShowS = '原风险清单';
          break;
        }
      }
    },

    // 关闭
    closeDialog() {
      this.isShow = false;
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.formData.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }

  },
}
</script>

<style lang="scss" scoped>
.dividerShowS{
  margin-top: 50px;
}
</style>