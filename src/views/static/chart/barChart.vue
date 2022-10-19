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
import {barItemRender2} from '../config'
echarts.use([
  LineChart,
  GridComponent,
  CanvasRenderer,
  BarChart,
  PieChart,
  LegendComponent,
  TooltipComponent,
]);
let dataX= ['正常', '轻微', '预警', '严重', '危及', '未识别']
// let dataY1 =[400, 500, 300, 300, 300, 400, 400, 400, 300]
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
          trigger: 'item'
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
            textStyle: {
              color: '#fff',
            },
          },
        },

        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
              },
            },
            axisLine: {
              lineStyle: {
                fontSize:12,
                color: 'rgba(66, 192, 255, .3)',
              },
            },
          },
        ],
        series: [
          { z: 1,
            type: "bar",
            barWidth: 15,
            borderRadius: 5,
            data:[
              barItemRender2({startColor:'#70CE4B', endColor:'#4DC31F',value: 10}),
              barItemRender2({ startColor:'#4CAAF9', endColor:'#0B84EA',value: 12}),
              barItemRender2({startColor:'#F5A100', endColor:'#FFBB34',value:5}),
              barItemRender2({startColor:'#EB0101', endColor:'#b60606',value:2}),
              barItemRender2({startColor:'#A90404', endColor:'#610a0a',value:1}),
              barItemRender2({startColor:'#A476F2', endColor:'#5d1dcb',value:1}),]
          
          }
          // {
          //   type: 'bar',
          //   barWidth: '12px',
          //   itemStyle: {
          //     normal: {
          //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //         {
          //           offset: 0,
          //           color: '#29acff',
          //         },
          //         {
          //           offset: 1,
          //           color: '#4bdfff',
          //         },
          //       ]),
          //       barBorderRadius: 6,
          //     },
          //   },
          //   data: 3,
          // }
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