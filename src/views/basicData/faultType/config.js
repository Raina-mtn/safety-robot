//故障类型-表单
export const typeFormColums =(that)=> {
  return [
    {
      label: '类型描述',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
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
      label: '资产前九位',
      prop: 'assets',
    }, 
    {
      label: '故障类型',
      prop: 'typeDescribe',
    }, 
    {
      label: '标准工时（h）',
      prop: 'workTime',
    }, 
    {
      label: '紧急程度',
      prop: 'degree',
    }
  ]
}

//处理方式-表单
export const modeFormColums =(that)=> {
  return [
    {
      label: '处理方式',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//处理方式-表格
export const modeColums = (that)=>{
  return [
    {
      label: '资产前九位',
      prop: 'assets',
      width:300
    }, 
    {
      label: '类型描述',
      prop: 'typeDescribe'
    }
  ]
}