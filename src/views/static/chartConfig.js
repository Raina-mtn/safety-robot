const colorList = ['#70CE4B','#CEC64B','#F5A100','#EB0101','#A90404','#A476F2']
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
const barItemRender = ({name, startColor, endColor,data})=>({
  name,
  type: 'bar',
  barWidth:12,
  data,
  itemStyle: {
    color: linearColor(startColor, endColor),
    borderRadius:[8, 8, 0, 0]
  },
})
const legendRender = (option={})=>({legend:{
  itemWidth:12,
  itemHeight:12,
  icon:'rect',
  textStyle:{
    height:20,
    color: '#555'
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
// 数据处理
export const formatSeriesData = (configData, seriesData)=>{
  let arr = []
  configData.forEach(s => {
    const {label,value} = s
    const curValueArr = seriesData.map(v=>{
      if(!v[value])  v[value] = 0
      return v[value]
    })
    arr.push({
      label,
      data: curValueArr
    })
  });
  return arr
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
  // const arr  = defectGrade.map(v=>{
  //   if(!data[v.value]) return {value:0, name: v.label};
  //   return  {value:data[v.value], name: v.label}
  // }) 
  return {
    tooltip: {
      trigger: 'item'
    },
    color:['#00C3FF', '#563AD2', '#DE8536', '#ED5450'],
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
              color:['#00C3FF', '#563AD2', '#DE8536', '#ED5450'],
              padding: [0, -100, 0, -100],
              fontSize: 13,
              formatter: function(params) {
                if (params.name !== '') {
                  return '{cir'+ params.dataIndex+'|'  + params.name +' ' +params.percent + '%' +'}\n{cir'+params.dataIndex +'|●}\n{name|' + params.value + ' 件' + '}';
                } else {
                  return '';
                }
                        
              },
              rich: {
                name: {
                  fontSize: 16,
                  align: 'center'
                },
                cir0: {
                  fontSize: 15,
                  opacity: 1,
                  color: '#00C3FF',
                  padding:[0, 92, 0, 92]
                },
                cir1: {
                  fontSize: 15,
                  opacity: 1,
                  color: '#563AD2',
                  padding:[0, 92, 0, 92]
                },
                cir2: {
                  fontSize: 15,
                  opacity: 1,
                  color: '#DE8536',
                  padding:[0, 92, 0, 92]
                },
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
  }}
// 横向柱形图
export const stackBarRender = ({name,data})=>({
  name,
  type: 'bar',
  barWidth:14,
  label: {
    show: true,
    color: '#fff'
  },
  showBackground: true,
  backgroundStyle: {
    color: '#E8EDF7',
    barBorderRadius: [0, 30, 30, 0],
  },
  data
})
// '正常','轻微','预警','严重','十分严重','未识别'
export const horizontalBarOption= ({axisData, seriesData})=> {
  // const arr = formatSeriesData(defectGrade, seriesData)
  return {
    grid:{
      bottom:18,
      top:20
    },
    ...legendRender(),
    ...tooltip,
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: axisData,
      hideOverlap: false,
      axisLabel:{
        interval:0
      }
    },
    series: [
      {
        name: "",
        type: "bar",
        barWidth: 12,
        data: seriesData.map((v,i)=>({
          value:v,
          itemStyle:{
            barBorderRadius: [0, 20, 20, 0],
            color: colorList[i] //TODO：随着线路增加颜色数组不够
          }
        })),
      },
      {
        name: "",
        type: "bar",
        barWidth: 12,
        barGap: "-100%",
        z: 0,
        itemStyle: {
          barBorderRadius: [0, 20, 20, 0],
          color: "#E8EDF7",
        },
        data: seriesData.map(v=>100),
      },
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
  // const arr = formatSeriesData(defectGrade, seriesData)
  return {...grid,
    ...legendRender(),
    ...tooltip,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: axisData,
      axisLine: { lineStyle: { color: '#2C77E3' } },
      axisTick: { length: 3 },
      axisLabel: { color: '#555',
        rotate: 30
      },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false, lineStyle: { color: '#ccc' } },
      axisLabel: { color: '#555' },
      splitLine: { show: false },
    },
    series: [
      lineItemRender({name:seriesData[0].label,  data: seriesData[0].data, lineColor:'#70CE4B',areaColor:'rgba(112, 206, 75, 0.2)'}),
      lineItemRender({ name:seriesData[1].label,  data:seriesData[1].data, lineColor:'#CEC64B',areaColor:'rgba(206, 198, 75, 0.1)'}),
      // lineItemRender({name:seriesData[2].label,  data: seriesData[2].data, lineColor:'#F5A100',areaColor:'rgba(245, 161, 0, 0.1)'}),
      // lineItemRender({name:seriesData[3].label,  data: seriesData[3].data , lineColor:'#EB0101',areaColor:'rgba(235, 1, 1, 0.1)'}),
      // lineItemRender({name:seriesData[4].label,  data: seriesData[4].data, lineColor:'#A90404',areaColor:'rgba(169, 4, 4, 0.1)'}),
      // lineItemRender({name:seriesData[5].label,  data: seriesData[5].data, lineColor:'#A476F2',areaColor:'rgba(164, 118, 242, 0.1)'})
    ],
  }}