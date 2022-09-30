
<template>
  <el-dialog 
    :before-close="closeDialog"
    :visible.sync="isShow"
    :title="title" 
    center
  >
    <WForm
      label-width="110px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
      >
    </WForm>
    <div slot="footer" class="btn-grops">
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
import { WForm } from '@common-ui/w-form';
import AddTable from '@/components/addTable/index.vue'
import {
  typeFormColums,
  gradeFormColums,
  frequencyFormColums,
  eventFormColums,
  levelFormColums,
  staffFormColums,
  hazardFormColums,
  checkFormColums,
  lFormColums,
  eFormColums,
  cFormColums,
  areaFormColums,
  projectFormColums,
  stationColums,
  departmentColums,
  superviseColums
  } from './config'
export default {
  components:{
    WForm,
    AddTable
  },
  data() {
    return {
      isShow:false,
      formData:{},
      type:'',
      event:'',
      title:''
    };
  },
  computed:{
    formColums(){
      switch (this.type) {
        case 'type':
          return typeFormColums(this,this.event)
        case 'grade':
          return gradeFormColums(this,this.event)
        case 'frequency':
          return frequencyFormColums(this,this.event)
        case 'event':
          return eventFormColums(this,this.event)
        case 'level':
          return levelFormColums(this,this.event)
        case 'staff':
          return staffFormColums(this,this.event)
        case 'hazard':
          return hazardFormColums(this,this.event)
        case 'check':
          return checkFormColums(this,this.event)
        case 'l':
          return lFormColums(this,this.event)
        case 'e':
          return eFormColums(this,this.event)
        case 'c':
          return cFormColums(this,this.event)
        case 'area':
          return areaFormColums(this,this.event)
        case 'responsible':
          return []
        case 'project':
          return projectFormColums(this,this.event)
        case 'station':
          return stationColums(this,this.event)
        case 'department':
          return departmentColums(this,this.event)
        case 'supervise':
          return superviseColums(this,this.event)
      }
    }
  },
  methods: {
    //打开
    openDialog(type,event) {
      this.type = type
      this.event = event
      this.title = this.event === 'add' ?'新增' : '编辑'
      this.isShow = true;
    },

    // 关闭
    closeDialog() {
      this.formData = {},
      this.type = '',
      this.event = '',
      this.title = ''
      this.isShow = false;
    },

  },
}
</script>
<style lang="scss" scoped>

</style>