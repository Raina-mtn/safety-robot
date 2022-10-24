<template>
  <div class="pageLayout-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card" @tab-click="handleClick">
        <el-tab-pane name="power" label="供电" lazy />
        <el-tab-pane name="vehicle" label="车辆" lazy />
        <el-tab-pane name="civil" label="土建" lazy />
        <el-tab-pane name="official" label="公务" lazy />
      </el-tabs>
      <slot name="header" />
    </div>
    <slot name="content" />
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  &>div{
    padding:0 20px 10px 20px;
    position: relative;
  }
}
</style>
