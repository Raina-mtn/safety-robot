//年度检查计划-更多筛选
export const safetyDialog =(that)=> {
  return [
    {
      label: '标题',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label: '检查级别',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 16
    },
    {
      label: '责任部室',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入部门名称',
      clearable: true,
      span: 16
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 16
    },
    {
      prop:'btns',
      span:16
    }
  ]
}