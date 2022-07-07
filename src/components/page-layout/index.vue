<template>
  <div class="pageLayout-container">
    <div>
      <div class="title-area">
        <Breadcrumb></Breadcrumb>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb/index.vue'
export default {
  name: 'PageLayout',
  components:{
    Breadcrumb
  }
}
</script>

<style scoped lang="scss">
.pageLayout-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  &>div{
    padding:0 20px 10px 20px;
    background-color: #fff;
  }
  .title-area {
    width: 100%;
    border-bottom: 1px solid #d4d4d4;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left:14px;
    margin-bottom: 20px;
    box-sizing: border-box;
    span{
      color: #E99A13;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
