<template>
  <div class="warpper">
    <div class="left">
      <el-tree
      ref="tree"
      :data="orgTree"
      :props="treeProps"
      :check-on-click-node="true"
      :highlight-current="true"
      :default-expand-all="true"
      :node-key="'id'"
      :current-node-key="orgTree[0] && orgTree[0].id"
      @node-click="onClickNode"
    />
    </div>
    <div class="right">
      <span>当前选择：{{current}}</span>
      <WForm
      :form-data="formData"
      :columns="formColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns1">
      <el-button type="primary" v-if="addShow">导入</el-button>
      <el-button type="primary" v-if="addShow">导出</el-button>
      <el-button type="primary" @click="$refs.addDialog.openDialog(activeName,'add')">新增</el-button>
      <el-button type="primary" v-if="addShow">删除</el-button>
      <!-- <el-button type="primary" v-if="addShow">修改责任人</el-button> -->
    </div>
    <div slot="btns2">
      <el-button type="primary">提交</el-button>
    </div>
    </WForm>
    <WTable
      ref="mtable" 
      v-if="tableShow"
      :table-data="tableData" 
      :columns="tableColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :selection="true"
      :selectable="()=>true"
      :header-cell-style="{background:'#eee'}"
      @pageChange="getList" 
    />
    </div>
    <AddDialog ref="addDialog"></AddDialog>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
import AddDialog from '../addDialog.vue'
import {areaDoubleTreeData,areaDoubleData} from '@/utils/data'
import {
  noInputFormColums,
  inputFormColums,
  areaColums,
  projectColums,
  superviseColums,
} from './config'
export default {
  components:{
    WForm,
    WTable,
    AddDialog
  },
  data() {
    return {
      formData:{},
      tableData:areaDoubleData,
      total:1,
      addShow:true,
      treeProps:{
        label:'name',
        children: 'subList'
      },
      orgTree:areaDoubleTreeData,
      currentNode:[],
      current:'',
      tableShow:true
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    formColums(){
      switch (this.activeName) {
        case 'responsible':
          return inputFormColums()
        default:
          return noInputFormColums()
      }
    },

    tableColums(){
      this.tableShow = true;
      switch (this.activeName) {
        case 'area':
          return areaColums(this)
        case 'responsible':
          this.tableShow = false;
        case 'project':
          return projectColums(this)
        case 'supervise':
          this.addShow = false;
          return superviseColums(this)
      }
      this.addShow = true;
    }
  },
  methods: {
    onClickNode(item,e){
      this.currentNode = []
      this.getCurrentNode(item,e)
    },

    getCurrentNode(item,e){
      this.currentNode.unshift(e.data.name);
      console.log('this.currentNode :>> ', this.currentNode);
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
  .warpper{
    .left{
      width: 250px;
      overflow: hidden;
      float: left;
      border: 1px solid #f2f2f2;
    }
    .right{
      width: calc(100% - 255px);
      float: right;
    }
  }
</style>