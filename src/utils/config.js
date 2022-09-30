/**
 * 将枚举值数组转换成key-value形式
 * @param {*} arr
 * @param {*} format 要处理的键值对{label:'name', value:'value'}
 * @returns obj
 */
export const arrToObj = function(arr, format = {
  key: 'value',
  label: 'label'
}) {
  return arr.reduce(function(acc, cur, i) {
    const curkey = cur[format.key]
    acc[curkey] = cur[format.label];
    return acc;
  }, {})
}


export const isOrNot = [{
  label: '可用',
  value: 1
},{
  label: '禁用',
  value: 0
}]

export const yesOrNot = [{
  label: '是',
  value: 1
},{
  label: '否',
  value: 0
}]

export const normalOrForbidden = [{
  label: '正常',
  value: 1
},{
  label: '禁用',
  value: 0
}]

// 用户状态
export const userStatus = [{
  label: '正常',
  value: 'NORMAL'
},{
  label: '停用',
  value: 'STOP'
},{
  label: '禁用',
  value: 'BAN'
}]
export const userStatusObj = arrToObj(userStatus)

//车站段所
export const locationList = [
  {
    label: '车',
    value: 0
  },
  {
    label: '站',
    value: 1
  },
  {
    label: '段',
    value: 2
  },
  {
    label: '所',
    value: 3
  },
]

//故障工单-故障分类
export const malfunctionOptions = [
  {
    label: 'A',
    value:0,
  },
  {
    label: 'B',
    value:1,
  },
  {
    label: 'C',
    value:2,
  },
  {
    label: 'D',
    value:3,
  },
]

//编制检修计划-维修周期
export const cycleOptions =[
  {
    label: '日',
    value:0,
  },
  {
    label: '周',
    value:1,
  },
  {
    label: '月',
    value:2,
  },
  {
    label: '季',
    value:3,
  },
  {
    label: '年',
    value:3,
  },
]

//工单状态
export const statusOptions =[
  {
    label: '草稿',
    value:0,
  },
  {
    label: '归口调度',
    value:1,
  },
  {
    label: '协同调度',
    value:2,
  },
  {
    label: '班组',
    value:3,
  },
  {
    label: '归口调度确认',
    value:4,
  },
  {
    label: '已关闭',
    value:5,
  },
]

//归口调度
export const dispatchOptions =[
  {
    label: '车辆保障部检修调度',
    value:0,
  },
  {
    label: '维保公司生产调度',
    value:1,
  },
  {
    label: '系统保障总部生产调度',
    value:2,
  },
  {
    label: '架大修中心生产调度',
    value:3,
  },
  {
    label: '客一车站设备部生产调度',
    value:4,
  }
]

//故障现象
export const appearanceOptions =[
  {
    label: '人员伤害',
    value:0,
  },
  {
    label: '乘客服务',
    value:1,
  },
  {
    label: '行车安全',
    value:2,
  },
  {
    label: '其他',
    value:3,
  }
]

//故障分类
export const riskTypeOptions =[
  {
    label: 'A类',
    value:0,
  },
  {
    label: 'B类',
    value:1,
  },
  {
    label: 'C类',
    value:2,
  },
  {
    label: 'D类',
    value:3,
  }
]

//线路
export const lineOptions =[
  {
    label: '一号线',
    value:0,
  },
  {
    label: '二号线',
    value:1,
  },
  {
    label: '三号线',
    value:2,
  },
  {
    label: '五号线',
    value:3,
  }
]
