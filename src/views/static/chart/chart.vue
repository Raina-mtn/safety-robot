<!--
 * @Date: 2022-09-09 10:09:21
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2022-09-16 14:24:50
 * @FilePath: \explosive-robot\src\views\statis\statistic\tab1\chart.vue
-->
<template>
  <div style="height: calc(100% - 3rem)">
    <div
      ref="charts"
      style="
        width: 100%;
        height: 100%;
        position: relative;

        border: 1px solid #0d3380;

        background: rgba(8, 34, 117, 0.3);
      "
    />
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
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.charts);
      this.chart.setOption(this.option);
      this.chart.on("click", (params) => this.$emit("pointSelect", params));
    },
  },
};
</script>