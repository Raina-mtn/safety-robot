<template>
  <PageLayout class="app-container">
    <div class="pending-tabs">
      <el-tabs v-model="activeName" class="tabs-box" type="card">
        <el-tab-pane name="type" label="风险/事故类型" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="grade" label="风险等级" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="frequency" label="等级频次配置" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="event" label="事件影响" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="level" label="隐患等级" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="staff" label="隐患等级-人员配置" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="hazard" label="隐患类型" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="check" label="检查级别" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="l" label="事故发生的可能性L" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="e" label="暴露于危险环境的频繁程度E" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="c" label="发生事故的后果严重程度C" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="area" label="风险区域" lazy>
          <HaveTree :activeName="activeName"></HaveTree>
        </el-tab-pane>
        <el-tab-pane name="responsible" label="风险责任人维护" lazy>
          <HaveTree :activeName="activeName"></HaveTree>
        </el-tab-pane>
        <el-tab-pane name="project" label="作业项目" lazy>
          <HaveTree :activeName="activeName"></HaveTree>
        </el-tab-pane>
        <el-tab-pane name="station" label="一二级风险区域-车站" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="department" label="部门负责人配置" lazy>
          <NoTree :activeName="activeName"></NoTree>
        </el-tab-pane>
        <el-tab-pane name="supervise" label="轨行区监督人维护" lazy>
          <HaveTree :activeName="activeName"></HaveTree>
        </el-tab-pane>
      </el-tabs>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/page-layout/index.vue'
import NoTree from './noTreeTable/index.vue'
import HaveTree from './haveTreeTable/index.vue'
export default {
  components:{
    PageLayout,
    NoTree,
    HaveTree,
  },
  data() {
    return {
      activeName:'type'
    }
  },
}
</script>

<style>

</style>