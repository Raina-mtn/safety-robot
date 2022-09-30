<template>
  <el-dialog 
    class="assets"
    :before-close="closeDialog"
    :visible.sync="isShow"
    title="区域" 
    center
  >
    <div class="assets_left">
      <div class="assets-tree__header">
        请选择区域
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
    <WTable
      ref="mtable" 
      :table-data="tableData" 
      :columns="areaColums" 
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
import { WTable } from '@common-ui/w-form';
import {areaColums} from './config'
export default {
  name:'AreaDialog',
  components:{
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
      tableData:[],
      total: 0,
      currentNode:[],
      current:''

    }
  },
  computed:{
    areaColums(){
      return areaColums()
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