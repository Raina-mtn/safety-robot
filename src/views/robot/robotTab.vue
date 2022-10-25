<template>
  <div class="warpper">
    <WForm
      label-width="90px"
      :form-data="formData"
      :columns="formColums"
      size="mini"
    >
      <div slot="btns">
        <el-button type="primary">
          查询
        </el-button>
      </div>
    </WForm>
    <div class="robotList">
      <robotItem v-for="item in robotInfoList" :key="item.title" class="robotItem" :robot="item" />
    </div>
  </div>
</template>

<script>
import { WForm } from '@common-ui/w-form';
import {formColums} from './config'
import robotItem from './component/RobotItem'
export default {
  components:{
    WForm,
    robotItem
  },
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      formData:{},
      formColums:formColums(),
    }
  },
  computed:{
    robotInfoList(){
      switch(this.activeName){
        case 'power':
          return [{
            title:'防爆机器人',
            profile:'',
            systemUrl:'http://172.16.190.171:10001/#/'
            
          },{
            title:'线路巡检机器人',
            profile:'',
            systemUrl:'http://172.19.3.23:8020/'
            
          }]
        case 'vehicle':
          return [{
            title:'360机器人',
            profile:'',
            systemUrl:'http://172.19.3.23:8022/'
          }]
        default: return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>