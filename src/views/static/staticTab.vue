<template>
  <div class="warpper">
    <div class="wrapper_top">
      <div v-for="item in infoList" :key="item.label" class="info">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import {infoList} from './config' 
export default {
  props:{
    activeName:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      infoList,
    }
  },
}
</script>

<style lang="scss" scoped>
.wrapper{
  .wrapper_top{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    .info{
      width:20%;
      height:200px;
      // background: url("~@/assets/numberbg.png");
      background: red;
      // background-size: 100% 100%;
    }
  }
}
</style>