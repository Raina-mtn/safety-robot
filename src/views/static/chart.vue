<template>
  <div ref="content" style="height: calc(100% - 3rem);position:relative">
    <div
      ref="charts"
      style="
        width: 100%;
        height: 100%;
        position: relative;
      "
    />
    <i class="el-icon-full-screen" title="全屏" @click="fullScreen" />
    <el-dialog :visible.sync="isFullScreen" width="80%">
      <div ref="chartFull" class="fullScreen" />
    </el-dialog>
  </div>
</template>
<script>
/** echarts*/
import * as echarts from "echarts/core";
import { LineChart, BarChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  LineChart,
  GridComponent,
  CanvasRenderer,
  BarChart,
  PieChart,
  LegendComponent,
  TooltipComponent,
]);
export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chart: null,
      isFullScreen: false
    };
  },
  watch: {
    option: {
      handler(val) {
        this.chart && this.chart.setOption(val);
      },
      deep: true,
    },
    "$store.state.fontSize"() {
      this.chart && this.chart.resize();
    },
  },
  mounted() {
    this.initChart();
    let self = this
    window.proxy.addEventListener('resize', function(){
      self.chart.resize()
    })
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.charts);
      this.chart.setOption(this.option);
    },
    fullScreen(){
      this.isFullScreen = true
      setTimeout(()=>{
        const chart = echarts.init(this.$refs.chartFull);
        chart.setOption(this.option);

      })
    }
  },
};
</script>
<style lang="scss" scoped>
.el-icon-full-screen{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.fullScreen{
  width: 100%;
  height: 60vh;
}
</style>