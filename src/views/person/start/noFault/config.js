//非故障修工单
export const noFalut =(that)=> {
  return [
    {
      prop:'divider1',
      span:24
    },
    {
      label: '工单号',
      prop: 'id',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      disabled:true,
      span: 8
    },
    {
      label:'工单类型',
      prop: 'type',
      span: 8,
    },
    {
      label: '状态',
      prop: 'status',
      el: 'select',
      placeholder: '草拟',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'line',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '创建人',
      prop: 'createUser',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '联系方式',
      prop: 'num',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '信息描述',
      prop: 'info',
      el: 'input',
      type: 'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 16,
    },
    {
      label: '创建时间',
      prop: 'createTime',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      disabled:true,
      span: 8,
    },
    // {
    //   prop:'divider2',
    //   span:24
    // },
    // {
    //   label: '维修定额',
    //   prop: 'quota',
    //   el: 'input',
    //   placeholder: '请输入关键词',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '作业安全',
    //   prop: 'safety',
    //   el: 'input',
    //   placeholder: '请输入关键词',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '计划开始时间',
    //   prop: 'planStartTime',
    //   el: 'date-picker',
    //   placeholder: '请选择日期时间',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '请点时间',
    //   prop: 'startTime',
    //   el: 'date-picker',
    //   placeholder: '请选择日期时间',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '计划完成时间',
    //   prop: 'planFinishTime',
    //   el: 'date-picker',
    //   placeholder: '请选择日期时间',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '销点时间',
    //   prop: 'finishTime',
    //   el: 'date-picker',
    //   placeholder: '请选择日期时间',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '检修计划',
    //   prop: 'plan',
    //   el: 'select',
    //   placeholder: '请选择',
    //   clearable: true,
    //   span: 8,
    // },
    // {
    //   label: '实际作业工时（小时）',
    //   prop: 'workTime',
    //   el: 'input-number',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label:'处理进展',
    //   prop: 'schedule',
    //   span: 24,
    // },
    // {
    //   prop:'divider3',
    //   span:24
    // },
    // {
    //   label: '调度/工程师',
    //   prop: 'engineer',
    //   el: 'select',
    //   placeholder: '请选择',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '所属专业',
    //   prop: 'major',
    //   el: 'select',
    //   placeholder: '请选择',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '所属部门',
    //   prop: 'department',
    //   el: 'select',
    //   placeholder: '请选择',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '所属班组',
    //   prop: 'group',
    //   el: 'select',
    //   placeholder: '请选择',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   label: '负责人',
    //   prop: 'responsible',
    //   el: 'input',
    //   placeholder: '请输入',
    //   clearable: true,
    //   required:true,
    //   span: 8,
    // },
    // {
    //   prop:'divider4',
    //   span:24
    // },
    // {
    //   prop:'divider5',
    //   span:24
    // },
    {
      prop: 'btns',
      span: 12,
    },
  ]
}

//非故障修工单-处理进展
export const scheduleColums = [ 
  {
    label: '进展情况',
    prop: 'schedule',
    type:'input',
  }
]

//非故障修工单-资产
export const assetColums =[
  {
    label: '资产编码',
    prop: 'id',
    type:'input'
  },
  {
    label: '资产名称',
    prop: 'name',
    type:'input'
  },
  {
    label: '位置',
    prop: 'location',
    type:'input'
  },
  {
    label: '资产状态',
    prop: 'status',
    type:'select',
  }
]

//非故障修工单-物资消耗
export const materialsColums = [
  {
    label: '物资编码',
    prop: 'id',
    type:'input'
  },
  {
    label: '物资名称',
    prop: 'name',
    type:'input'
  },
  {
    label: '单位',
    prop: 'unit',
    type:'input'
  },
  {
    label: '单价',
    prop: 'price',
    type:'input'
  },
  {
    label: '消耗数量',
    prop: 'amount',
    type:'input'
  },
  {
    label: '备注',
    prop: 'remark',
    type:'input'
  },
]
