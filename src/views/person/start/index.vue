<template>
  <PageLayout class="app-container">
    <div class="left">
      <a class="icon-wrapper" v-for="item in left" :key="item.title" @click="startShow=false;$router.push({name:item.path,params:item.params})">
        <i :class="`icon ${item.icon}`"></i>
        {{item.title}}
      </a>
    </div>
    <el-divider direction="vertical"></el-divider>
    <div class="right">
      <a class="icon-wrapper" v-for="item in right" :key="item.title" @click="$router.push({name:item.path,params:item.params})">
        <i :class="`icon ${item.icon}`"></i>
        {{item.title}}
      </a>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import {left,right} from './config';
export default {
  components:{
    PageLayout
  },
  data() {
    return {
      left:left,
      right:right
    }
  },
}
</script>

<style lang="scss" scoped>
.icon{
  font-size:90px;
}

.app-container{
  .left{
    width:50%;
    float: left;
    .icon-wrapper{
      width:100px;
      float: left;
      margin: 50px;
    }
  }
  .el-divider--vertical{
    display:inline-block;
    width:1px;
    height:500px;
    margin:10px;
  }   
  .right{
    width: 40%;
    float: right;
    .icon-wrapper{
      width:100px;
      float: left;
      margin: 50px;
    }
  }
}
</style>