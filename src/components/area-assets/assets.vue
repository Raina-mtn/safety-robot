<template>
  <el-dialog 
    class="assets"
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="资产" 
    center
  >
    <div class="assets_left">
      <div class="assets-tree __header">
        请选择资产
      </div>
      <el-tree
        ref="tree"
        :data="orgTree"
        :props="treeProps"
        :check-on-click-node="true"
        :highlight-current="true"
        :node-key="'id'"
        :default-expand-all="true"
        @node-click="onClickNode"
      />
    </div>

    <div class="assets_right">
      <span v-if="current">当前选择：{{current}}</span>
      <WForm
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
    </WForm>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="assetsColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      :selection="true"
      :selectable="()=>true"
      @pageChange="getList" 
    />
    </div>

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
import { assetsColums,assetsFormColums } from './config';
export default {
  name:'AssetsDialog',
  components:{
    WForm,
    WTable
  },
  data() {
    return {
      isShow:false,
      orgTree:[
        {
          name: '一级 1',
          subList: [{
            name: '二级 1-1',
            subList: [{
              name: '三级 1-1-1'
            }]
          }]
        }
      ],
      treeProps:{
        label:'name',
        children: 'subList'
      },
      formData:{},
      tableData:[
        {
          realName:'1'
        }
      ],
      total: 1,
      currentNode:[],
      current:'',
      assetsColums:assetsColums(),
      assetsFormColums:assetsFormColums()
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