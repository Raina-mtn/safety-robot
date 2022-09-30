<template>
  <PageLayout class="app-container">
    <div class="areaRisk_left">
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

    <div class="areaRisk_right">
      <span v-if="current">当前选择：{{current}}</span>
      <div class="btns">
        <el-button type="primary" size="mini" @click="$refs.addArea.openDialog('add')">新增</el-button>
        <el-button type="info" size="mini" @click="$refs.addArea.openDialog('delete')">删除</el-button>
      </div>
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="riskColums" 
      :page="formData" 
      :total="total" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      :selection="true"
      :selectable="()=>true"
      @pageChange="getList" 
    />
    </div>
    <addArea ref="addArea"></addArea>
  </PageLayout>
</template>

<script>
import { WTable } from '@common-ui/w-form';
import PageLayout from '@/components/page-layout/index.vue'
import addArea from './addArea.vue';
import {riskColums} from './config'
export default {
  components:{
    WTable,
    PageLayout,
    addArea
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
            },
            {
              name: '三级 1-1-2'
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
          reason:'测试',
          type:'测试',
          riskSource:'测试',
          riskElement:'测试',
          measure:'测试',
          responsible:'测试',
          l:'测试',
          e:'测试',
          c:'测试',
          d:'测试',
          level:'测试',
          department:'测试',
        }
      ],
      total: 1,
      riskColums:riskColums(this),
      currentNode:[],
      current:''

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
.areaRisk_left{
  width: 250px;
  overflow: hidden;
  float: left;
  border: 1px solid #f2f2f2;
}
.areaRisk_right{
  width: calc(100% - 255px);
  float: right;
  .btns{
    margin: 5px;
  }
}

</style>