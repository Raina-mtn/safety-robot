<template>
  <div>
    <el-button type="primary" @click="addRow" :disabled="addDisabled">新增</el-button>
    <el-table 
      :data="tableData" 
      :size="'mini'" 
      :header-cell-style="{background:'#eee'}"
      >
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column 
        v-for="item in columns"
        :key="item.prop"
        :prop="item.prop" 
        :label="item.label" 
        :width="item.width"
        align="center">
        <template slot-scope="scope">
          <!-- input -->
          <div class="input_com" v-if="item.type === 'input'">
            <el-input v-if="scope.row.edit" v-model="scope.row[item.prop]" :placeholder="item.label"></el-input>
            <span v-else>{{scope.row[item.prop]}}</span>
          </div>
          
          <!-- select -->
          <div class="select_com" v-if="item.type === 'select'">
            <el-select v-if="scope.row.edit" v-model="scope.row[item.prop]" placeholder="请选择">
              <el-option v-for="i in item.options" :key="i.value" :label="i.label " :value="i.value"></el-option>
            </el-select>
            <div v-else v-for="i in item.options" :key="i.value">
              <span v-if="i.value === scope.row[item.prop]">{{i.label}}</span>
            </div>
          </div>

          <!-- date -->
          <div class="date_com" v-if="item.type === 'date'">
            <el-date-picker v-if="scope.row.edit" v-model="scope.row[item.prop]" :placeholder="item.label" :format="item.format" :type="item.dateType"></el-date-picker>
            <span v-else>{{scope.row[item.prop]}}</span>
          </div>

        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="scope.row.edit" type="text" size="medium" @click="confirmAdd(scope.row)">
            <i class="el-icon-check" aria-hidden="true"></i>
          </el-button>
          <div v-else>
            <el-button type="text" size="medium" @click="editData(scope.row)">
              <i class="el-icon-edit" aria-hidden="true"></i>
            </el-button>
            <el-button type="text" size="medium" @click="deleteData(scope.row,scope.$index)">
              <i class="el-icon-delete" aria-hidden="true"></i>
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'groupTable',
  data() {
    return {
      // tableData:[],
      addDisabled:false,
    }
  },
  props:{
    columns:{
      type:Array,
      default:[]
    },
    tableData:{
      type:Array,
      default:[]
    }
  },
  methods:{
    addRow(){
      this.tableData.push({edit: true});
      this.addDisabled = true;
    },


    //确认添加
    confirmAdd(row) {
      if(Object.keys(row).length-1 !== this.columns.length){
        this.$message.error('输入不能为空！');
      }else{
        row.edit = false;
        this.addDisabled = false;
      }
    },

    //修改
    editData(row) {
      row.edit = true;
    },
    
    //删除
    deleteData(row, index) {
      this.tableData.splice(index, 1);
    },
  }
}
</script>

<style>

</style>