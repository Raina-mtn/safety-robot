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
let data = [{
  'name': '班组',
  'value': 62
}, {
  'name': '调度',
  'value': 29
}, {
  'name': '完成',
  'value': 28
}]

let color = ['#00C3FF', '#563AD2', '#DE8536', '#ED5450']
export default {
  data() {
    return {
      chart: null,
      option: {
        backgroundColor: '#0D2753',
        color:color,
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            data:data,
            center: ['50%','50%'],
            radius: ['40%','60%'],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'outside',
                  color: color.map(item=>{
                    return item
                  }),
                  padding: [0, -100, 0, -100],
                  fontSize: 13,
                  formatter: function(params) {
                    if (params.name !== '') {
                      return '{percent|'  + params.name +' ' +params.percent + '%' +'}\n{cir'+params.dataIndex +'|●}\n{name|' + params.value + ' 件' + '}';
                    } else {
                      return '';
                    }
                            
                  },
                  rich: {
                    name: {
                      color: "#fff",
                      fontSize: 16,
                      align: 'center'
                    },
                    percent: {
                      fontFamily: 'DIN',
                      fontWeight: 500,
                      fontSize: 14,
                      color: '#fff',
                      align: 'center'
                    },
                    cir0: {
                      fontSize: 15,
                      opacity: 1,
                      color: 'rgba(69, 188, 238, 1)',
                      padding:[0, 92, 0, 92]
                    },
                    cir1: {
                      fontSize: 15,
                      opacity: 1,
                      color: 'rgba(120, 100, 239, 1)',
                      padding:[0, 92, 0, 92]
                    },
                    cir2: {
                      fontSize: 15,
                      opacity: 1,
                      color: 'rgba(255, 107, 100, 1)',
                      padding:[0, 92, 0, 92]
                    },
                    cir3: {
                      fontSize: 15,
                      opacity: 1,
                      color: 'rgba(255, 173, 77, 1)',
                      padding:[0, 92, 0, 92]
                    }
                  }
                },
                labelLine: {
                  length:27,
                  length2: 30,
                  show: true,
                  color: '#00ffff'
                }
              }
            },
            name: '',
            hoverAnimation: false,
          }
        ]
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