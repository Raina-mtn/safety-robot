<!--
 * @Date: 2022-09-09 10:09:21
 * @LastEditors: zhusisheng zhusisheng@shenhaoinfo.com
 * @LastEditTime: 2022-09-16 14:24:50
 * @FilePath: \explosive-robot\src\views\statis\statistic\tab1\chart.vue
-->
<template>
  <div style="height: calc(100% - 2rem)">
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

let dataX= ['2022-10-12', '2022-10-13', '2022-10-14', '2022-10-15', '2022-10-16', '2022-10-17', '2022-10-18', '2022-10-19']
let dataY =[98, 38, 48, 35, 92, 28, 93, 85]
export default {
  data() {
    return {
      chart: null,
      option: {
        backgroundColor: '#0D2753',
        grid: {
          top: '10%',
          bottom: '5%',
          left: '5%',
          right: '5%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: dataX,
          axisLine: {
            lineStyle: {
              color: 'rgba(66, 192, 255, .3)',
            },
          },
        
          axisLabel: {
            rotate: -45,
            textStyle: {
              color: '#33FFFF',
            },
          },
        },

        yAxis: [
          {
            type: 'value',
            nameTextStyle: {
              color: '#d2d2d2',
            },
            max:'100',
            min:'0',
            scale: true,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: 'rgba(66, 192, 255, .3)',
              },
            },
            splitLine: {
              show: false,
            },
          },
        ],
        series: [
          {
            name: '故障数',
            type: 'line',
            smooth: false, //平滑曲线显示

            symbol: 'circle', //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
              normal: {
                color: '#ffa43a',
                borderColor: 'rgba(255, 234, 0, 0.5)', //圆点透明 边框
                borderWidth: 5,
              },
            },
            lineStyle: {
              color: '#ffa43a',
            },

            data: dataY,
          },
        ],
      }
    };
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