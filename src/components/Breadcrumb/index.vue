<template>
<div class="wrapper">
    <el-breadcrumb 
        class="breadcrumb" 
        separator-class="el-icon-arrow-right"
        >
        <el-breadcrumb-item
          :to="{path: item.path}"
          v-for="(item, index) in breadList"
          :key="index"
      >
        {{item.meta.title}}
      </el-breadcrumb-item>
    </el-breadcrumb>
</div>
</template>

<script>
export default {
  name:'BreadSidebar',
  data() {
    return {
      breadList:[]
    }
  },
  watch: {
    // 监听路由的变化
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    // 面包屑点击事件
    breadcrumbClick (item) {
      this.$router.push({
        path: item.path
      })
    },
    // 面包屑数据处理
    getBreadcrumb() {
      if (Object.keys(this.$route.matched).length > 1) {
        this.$route.matched.shift()
        this.breadList = this.$route.matched
      } else {
        this.breadList = []
      }
    }
  },
}
</script>

<style>
</style>