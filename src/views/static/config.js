export const infoList = [{
  label:'机器人数',
  value:0
}]
// echart组件
const linearColor = (startColor,endColor)=>({
  type: 'linear',
  x: 0,
  y: 0,
  x2: 0,
  y2: 1,
  colorStops: [{
    offset: 0, color: startColor // 0% 处的颜色
  }, {
    offset: 1, color: endColor // 100% 处的颜色
  }],
})
export const barItemRender = ({name, startColor, endColor,data})=>({
  name,
  type: 'bar',
  barWidth:12,
  data,
  itemStyle: {
    color: linearColor(startColor, endColor),
    borderRadius:[8, 8, 0, 0]
  },
})
export const barItemRender2 = ({startColor, endColor,value})=>({
  value,
  itemStyle: {
    normal: {
      color: linearColor(startColor, endColor)
    }
  }
})
const legendRender = (option={})=>({legend:{
  itemWidth:12,
  itemHeight:12,
  icon:'rect',
  textStyle:{
    height:20,
    color: '#fff'
  },
  ...option
}})
const grid = {grid:{
  right:20,
  bottom:70
}}
const tooltip ={
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
}
// chart配置
export const barOption =({xAxisData, seriesData})=> {
  return {...grid,
    ...legendRender(),
    ...tooltip,
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: xAxisData,
        axisLabel: {
          rotate: 30
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      barItemRender({name:seriesData[0].label, startColor:'#70CE4B', endColor:'#4DC31F',data: seriesData[0].data}),
      barItemRender({name:seriesData[1].label, startColor:'#4CAAF9', endColor:'#0B84EA',data: seriesData[1].data}),
      barItemRender({name:seriesData[2].label, startColor:'#CCCCCC', endColor:'#999999',data: seriesData[2].data}),
    ]}
}
// 饼图
export const pieOption = (data)=>  {
  return {
    tooltip: {
      trigger: 'item'
    },
    color:['#70CE4B','#CEC64B','#F5A100','#EB0101','#A90404','#A476F2'],
    ...legendRender({orient:'vertical', left:20, bottom:30, data:['正常','轻微','预警','严重','危及','未识别']}),
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        data,
        label: {
          formatter: '{b}:{d}%'
        }
      },
      {
        name: 'inset',
        type: 'pie',
        radius: ['36%', '38%'],
        emptyCircleStyle:{
          color:linearColor('#A476F2', '#4CAAF9'),
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 10
        } 
      },
      {
        name: 'outset',
        type: 'pie',
        radius: ['38%', '82%'],
        emptyCircleStyle:{
          color:'#fff',
          shadowColor: 'rgba(245, 161, 0, 0.3)',
          shadowBlur: 10
        } 
      }
    ]
  }}
// 线图
const lineItemRender = ({name,data,lineColor,areaColor})=>({
  name,
  type: 'line',
  data,
  smooth: true, // 平滑曲线
  showSymbol: false,
  itemStyle:{color: lineColor},
  lineStyle: { width: 3, color: lineColor },
  areaStyle: { color: linearColor(areaColor, '#fff') },
})
export const lineOption = ({axisData, seriesData})=> {
  return {...grid,
    ...legendRender(),
    ...tooltip,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: axisData,
      axisLine: { lineStyle: { color: '#2C77E3' } },
      axisTick: { length: 3 },
      axisLabel: { color: '#fff',
        rotate: 30
      },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false, lineStyle: { color: '#ccc' } },
      axisLabel: { color: '#fff' },
      splitLine: { show: false },
    },
    series: [
      lineItemRender({name:seriesData[0].label,  data: seriesData[0].data, lineColor:'#70CE4B',areaColor:'rgba(112, 206, 75, 0.2)'}),
    ],
  }}