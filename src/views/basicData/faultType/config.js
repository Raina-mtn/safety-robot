//故障类型-表单
export const typeFormColums =(that)=> {
  return [
    {
      label: '类型描述',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//故障类型-表格
export const typeColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '资产前九位',
      prop: 'realName',
    }, 
    {
      label: '类型描述',
      prop: 'realName',
    }, 
    {
      label: '标准工时（h）',
      prop: 'realName',
    }, 
    {
      label: '紧急程度',
      prop: 'realName',
    }
  ]
}