//故障工单-表单
export const riskDialogColums =(that)=> {
  return [
    {
      label: '故障摘要',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '报告时间',
      prop: 'daterange',
      span: 16
    },
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '车/站/段/所',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 16
    },
    {
      label: '专业类型',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '故障报告人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入关键词',
      clearable: true,
      span: 8
    },
    {
      label: '报告人部门',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '生产调度',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '处理班组',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:16
    }
  ]
}