//资产-表单
export const assetsFormColums =(that)=> {
  return [
    {
      label: '线路',
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


//资产-表格
export const assetsColums = (that)=>{
  return [
    {
      label: '资产编码',
      prop: 'id',
    }, 
    {
      label: '资产名称',
      prop: 'name',
    },
    {
      label: '位置',
      prop: 'location',
    },
    {
      label: '状态',
      prop: 'status',
    },
  ]
}
