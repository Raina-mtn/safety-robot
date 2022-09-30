<template>
  <el-dialog 
    class="assets"
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="维修定额" 
    center
  >
      <!-- <WForm
        label-width="110px"
        :form-data="formData"
        :columns="assetsFormColums"
        size="mini"
      >
      <div slot="btns" class="btns">
        <el-button type="primary" class="btnPrimary">
          查询
        </el-button>
      </div>
    </WForm> -->
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="quotaDialogColums" 
      :page="formData" 
      :total="total" 
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
        确 定
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import { quotaDialogColums} from './config';
export default {
  name:'AssetsDialog',
  components:{
    WForm,
    WTable
  },
  data() {
    return {
      isShow:false,
      formData:{},
      tableData:[
        {
          realName:'1'
        }
      ],
      total: 1,
      quotaDialogColums:quotaDialogColums()
    }
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

    onClickNode(item,e){
      this.currentNode = []
      this.getCurrentNode(item,e)
    },

    getCurrentNode(item,e){
      this.currentNode.unshift(e.data.name);
      if(e.parent.data.name !== undefined){
        this.getCurrentNode(e.parent,e.parent)
      }
      this.getCurrent()
    },

    getCurrent(){
      this.current = ''
      this.currentNode.forEach((item,index) => {
        if(index === this.currentNode.length-1){
          this.current += item
        }else{
          this.current += `${item}>`
        }
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.assets{
  .el-dialog{
    width: 80% !important;
  }
  .assets_left{
    width: 250px;
    overflow: hidden;
    float: left;
    border: 1px solid #f2f2f2;
    .assets-tree__header{
      line-height: 32px;
      background: #eee;
      font-size:14px;
      text-indent: 10px;
    }
  }
  .assets_right{
    width: calc(100% - 255px);
    float: right;
  }
  .assets_footer{
    clear: both;
  }
}
</style>