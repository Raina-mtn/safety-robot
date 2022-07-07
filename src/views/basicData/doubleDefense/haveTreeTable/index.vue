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
      v-if="isShow"
      label-width="90px"
      :form-data="formData"
      :columns="noInputFormColums"
      size="mini"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary" v-if="addShow">导入</el-button>
      <el-button type="primary" v-if="addShow">导出</el-button>
      <el-button type="primary">新增</el-button>
      <el-button type="primary" v-if="addShow">删除</el-button>
      <el-button type="primary" v-if="addShow">修改责任人</el-button>
    </div>
    </WForm>
    <WForm
    v-else
      label-width="90px"
      :form-data="formData"
      :columns="inputFormColums"
      size="mini"
      selection
      :selectable="()=>true"
      @inputEnter="getList"
    >
    <div slot="btns">
      <el-button type="primary">提交</el-button>
    </div>
    </WForm>
    <WTable
    ref="mtable" 
    :table-data="tableData" 
    :columns="tableColums" 
    :page="formData" 
    :total="total" 
    :size="'mini'" 
    :header-cell-style="{background:'#eee'}"
    @pageChange="getList" 
  />
    </div>
  </div>
</template>

<script>
import { WForm,WTable } from '@common-ui/w-form';
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
  },
  data() {
    return {
      formData:{},
      tableData:[],
      total:0,
      isShow:true,
      addShow:true,
      treeProps:{
        label:'name',
        children: 'subList'
      },
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
      currentNode:[],
      current:''
    }
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  computed:{
    noInputFormColums(){
      return noInputFormColums()
    },

    inputFormColums(){
      return inputFormColums()
    },

    tableColums(){
      switch (this.activeName) {
        case 'area':
          return areaColums()
        case 'responsible':
          this.isShow = false
        case 'project':
          return projectColums()
        case 'supervise':
          this.addShow = false
          return superviseColums()
      }
    }
  },
  methods: {
    onClickNode(item,e){
      this.currentNode = []
      this.getCurrentNode(item,e)
    },

    getCurrentNode(item,e){
      this.currentNode.unshift(e.data.name);
      if(e.parent.data.name === undefined){
        return this.currentNode
      }else{
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