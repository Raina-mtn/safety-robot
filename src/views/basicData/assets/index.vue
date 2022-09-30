<template>
  <PageLayout class="assets">
    <div class="assets_left">
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
  </PageLayout>
</template>

<script>
import { WTable,WForm } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import {assetsFormColums,assetsColums} from './config'
import {assetsBasicData,assetsBasicTreeData} from '@/utils/data'
export default {
  components:{
    WTable,
    WForm,
    PageLayout
  },
  data() {
    return {
      // orgTree:[],
      orgTree:assetsBasicTreeData,
      treeProps:{
        label:'name',
        children: 'subList'
      },
      formData:{},
      tableData:assetsBasicData,
      // tableData:[],
      total: 1,
      currentNode:[],
      current:'',
      assetsFormColums:assetsFormColums(),
      assetsColums:assetsColums()
    }
  },
  methods: {
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
    width: 400px;
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
    width: calc(100% - 405px);
    float: right;
  }
  .assets_footer{
    clear: both;
  }
}
</style>