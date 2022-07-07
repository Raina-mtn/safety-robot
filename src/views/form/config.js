//故障工单-表单
export const riskFormColums =(that)=> {
  return [
    {
      label: '单据号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//故障工单-表格
export const riskColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '单据号',
      prop: 'realName',
    }, 
    {
      label: '故障现象',
      prop: 'realName',
    }, 
    {
      label: '报告人部门',
      prop: 'realName',
    }, 
    {
      label: '报告人',
      prop: 'realName',
    }, 
    {
      label: '报告时间',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
  ]
}