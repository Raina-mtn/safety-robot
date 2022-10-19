
var colorList = ['#DF3AB9', '#18C79C', '#8555F9', '#F09228'];
var data = [
  {
    name: '持续加固（加固改造）',
    value: 41,
    number: 502.4,
  },
  {
    name: '新建',
    value: 92,
    number: 302.1,
  },
  {
    name: '改建',
    value: 20,
    number: 502.9,
  },
  {
    name: '扩建',
    value: 2,
    number: 666.0,
  },
];
var newData = [];
// 加阴影效果
for (var i = 0; i < data.length; i++) {
  newData.push({
    value: data[i].value,
    name: data[i].name,
    itemStyle: {
      normal: {
        // borderWidth: 0,
        shadowBlur: 15,
        // borderRadius: 1,
        // borderColor: colorList[i],
        shadowColor: colorList[i],
      },
    },
  });
}
export const pieOption = {
  title: {
    text: '建设性质',
    left: '24%',
    top: 'center',
    // x: 'left',
    // y: 'center',
    textStyle: {
      fontSize: 24,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    right: '15%',
    top: 'center',
    //  itemGap: 40,
    selectedMode: true,
    icon: 'pin',
    // shadowBlur:20,
    // shadowColor:"#000",
    textStyle: {
      rich: {
        a: {
          color: '#666666',
          fontSize: 14,
          fontWeight: 500,
          width: 30,
          padding: [0, 0, 25, 2],
        },
        b0: {
          // color: colorList[0],
          color: '#666666',
          fontSize: 14,
          fontWeight: 500,
          height: 20,
          padding: [0, 30, 8, 4],
        },
        b1: {
          // color:  colorList[1],
          fontSize: 20,
          padding: [0, 30, 0, 40],
        },
        b2: {
          // color:  colorList[2],
          fontSize: 20,
          padding: [0, 30, 0, 40],
        },
        b3: {
          // color:  colorList[3],
          fontSize: 20,
          padding: [0, 30, 0, 40],
        },
      },
    },
    formatter: function (name) {
      var target;
      var number;
      for (var i = 0, l = data.length; i < l; i++) {
        if (data[i].name == name) {
          target = data[i].value;
          number = data[i].number;
        }
      }
      return `{a| ${name}\n}{b0| ${target}个   (${number}亿元)}`;
    },
  },
  series: [
    {
      type: 'pie',
      center: ['30%', '50%'],
      radius: ['50%', '70%'],
      clockwise: true,
      avoidLabelOverlap: true,
      hoverOffset: 2,
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return params.name + '：' + params.value + '个<br>占比：' + params.percent.toFixed(1) + '%';
        },
        backgroundColor: '#f3f3f3',
        textStyle: {
          color: '#666666',
          fontSize: 14,
          fontWeight: 500,
        },
        padding: [10, 20],
        extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
      },
      emphasis: {
        itemStyle: {
          borderColor: '#f3f3f3',
          borderWidth: 5,
        },
      },
      //启用鼠标放上去放大效果，这个挺好的
      itemStyle: {
        normal: {
          color: function (params) {
            return colorList[params.dataIndex];
          },
          // shadowBlur: 20,
          // shadowColor: function (params) {
          //     return colorListShadow[params.dataIndex];
          // },
        },
      },
      label: {
        show: false,
        position: 'outside',
        formatter: '{a|{b}：{d}%}\n{hr|}',
        rich: {
          hr: {
            backgroundColor: 't',
            borderRadius: 1,
            width: 1,
            height: 1,
            padding: [1, 1, 0, -4],
          },
          a: {
            padding: [-15, 7, -10, 7],
          },
        },
      },
      labelLine: {
        normal: {
          length: 10,
          length2: 15,
          lineStyle: {
            width: 1,
          },
        },
      },
      data: newData,
    },
  ],
};