
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="隐患排查岗位" 
    center
  >
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="stationColums"
      size="mini"
      >
      <div slot="tags">
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
      </div>
    </WForm>
    <div slot="footer" class="btn-grops">
      <el-button icon="el-icon-circle-close" @click="closeDialog">
        取 消
      </el-button>
      <el-button icon="el-icon-circle-check" type="primary" @click="submit">
        查 询
      </el-button>
    </div>
  </el-dialog>
</template>
<script>
import {stationColums} from './config'
import { WForm } from '@common-ui/w-form';
export default {
  name:'MoreFilters',
  components:{
    WForm
  },
  data() {
    return {
      isShow:false,
      formData:{
        dynamicTags:[]
      },
      inputVisible:false,
      inputValue:'',
      stationColums:stationColums()
    };
  },
  methods: {
    //打开
    openDialog() {
      this.isShow = true;
    },

    // 关闭
    closeDialog() {
      this.isShow = false;
    },

    handleClose(tag) {
      this.formData.dynamicTags.splice(this.formData.dynamicTags.indexOf(tag), 1);
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


</style>