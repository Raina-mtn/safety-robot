<template>
  <div class="pageLayout-container">
    <div>
      <div class="pending-tabs">
        <el-tabs v-model="activeName" class="tabs-box" @tab-click="handleClick">
          <el-tab-pane name="power" label="供电eeeee" lazy />
          <el-tab-pane name="vehicle" label="车辆" lazy />
          <el-tab-pane name="civil" label="土建" lazy />
          <el-tab-pane name="official" label="公务" lazy />
        </el-tabs>
        <slot name="header" />
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLayout',
  data() {
    return {
      activeName: 'power'
    }
  },
  methods:{
    handleClick(tab){
      this.activeName = tab.name
      this.$emit('tabChange')
    }
  }
}
</script>

<style scoped lang="scss">
.pageLayout-container {
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  height: calc(100% - 20px);
  &>div{
    padding:0 20px 10px 20px;
    position: relative;
    background: #fff;
    height: 100%;
    box-sizing: border-box;
  }
  ::v-deep{
    .el-tabs__item{
      padding: 0 20px !important;
    }
  }
}
</style>
