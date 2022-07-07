<template>
  <PageLayout class="app-container">
    <div class="operationRisk_left">
      <el-tree
        ref="tree"
        :data="orgTree"
        :props="treeProps"
        :check-on-click-node="true"
        :highlight-current="true"
        :node-key="'id'"
        @node-click="onClickNode"
      />
    </div>

    <div class="operationRisk_right">
      <div class="btns">
        <el-button type="primary" size="mini" @click="$refs.addOperation.openDialog('add')">新增</el-button>
        <el-button type="info" size="mini" @click="$refs.addOperation.openDialog('delete')">删除</el-button>
      </div>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="operationColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      :selection="true"
      :selectable="()=>true"
      @pageChange="getList" 
    />
    </div>
    <addOperation ref="addOperation"></addOperation>
  </PageLayout>
</template>

<script>
import { WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import addOperation from './components/addOperation.vue';
import {operationColums} from './config'
export default {
  components:{
    WTable,
    PageLayout,
    addOperation
  },
  data() {
    return {
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
      tableData:[
        {
          realName:'1111'
        }
      ],
      total: 0,
    }
  },
  computed:{
    operationColums(){
      return operationColums(this)
    }
  },
  methods: {
    onClickNode(node){
      
    }
  },
}
</script>

<style lang="scss" scoped>
.operationRisk_left{
  width: 250px;
  overflow: hidden;
  float: left;
  border: 1px solid #f2f2f2;
}
.operationRisk_right{
  width: calc(100% - 255px);
  float: right;
  .btns{
    margin: 5px;
  }
}
.operation_footer{
  clear: both;
}
</style>