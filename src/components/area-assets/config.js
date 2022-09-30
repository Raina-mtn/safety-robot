//资产-表格
export const assetsColums =(that)=> {
  return [
    {
      label: '资产编码',
      prop: 'id',
    }, 
    {
      label: '资产名称',
      prop: 'userName'
    }, 
    {
      label: '位置',
      prop: 'realName'
    },
    {
      label: '维修班组',
      prop: 'realName'
    },
  ]
}

//资产-表单
export const assetsFormColums =(that)=> {
  return [
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 10
    }, 
    {
      label: '位置',
      prop: 'roleId',
      el:'input',
      placeholder: '请输入',
      clearable: true,
      span: 10
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//区域-表格
export const areaColums =(that)=> {
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'userName'
    }, 
    {
      label: '责任人',
      prop: 'realName'
    },
    {
      label: '责任部门',
      prop: 'realName'
    },
    {
      label: '责任岗位',
      prop: 'realName'
    },
    {
      label: '状态',
      prop: 'realName'
    },
  ]
}