//故障工单-表单
export const allFormColums =(that)=> {
  return [
    {
      label: '资产编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    }, 
    {
      label: '设备名称',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//故障工单-表格
export const allColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
      fixed:true
    }, 
    {
      label: '资产编码',
      prop: 'realName',
      fixed:true
    }, 
    {
      label: '设备种类',
      prop: 'realName',
    }, 
    {
      label: '设备名称',
      prop: 'realName',
    }, 
    {
      label: '型号',
      prop: 'realName',
    }, 
    {
      label: '制造单位名称',
      prop: 'realName',
    }, 
    {
      label: '出场编号',
      prop: 'realName',
    }, 
    {
      label: '名义速度',
      prop: 'realName',
    }, 
    {
      label: '设备注册代码',
      prop: 'realName',
    }, 
    {
      label: '内部编号',
      prop: 'realName',
    }, 
    {
      label: '使用证编号',
      prop: 'realName',
    }, 
    {
      label: '使用部门',
      prop: 'realName',
    }, 
    {
      label: '管理部门',
      prop: 'realName',
    }, 
    {
      label: '设备使用地点',
      prop: 'realName',
    }, 
    {
      label: '安全责任人',
      prop: 'realName',
    }, 
    {
      label: '投入使用日期',
      prop: 'realName',
    }
  ]
}

//更多筛选-表单
export const moreFormColums =(that)=> {
  return [
    {
      label: '设备种类',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择入',
      clearable: true,
      span: 4
    }, 
    {
      label: '设备使用地点',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '出场编号',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '使用证编号',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '设备注册代码',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '内部编号',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '安全责任人',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}
