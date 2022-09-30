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
      label: '单据号',
      prop: 'id',
    }, 
    {
      label: '故障现象',
      prop: 'apperance',
    }, 
    {
      label: '报告人部门',
      prop: 'discoverDep',
    }, 
    {
      label: '报告人',
      prop: 'discoverUser',
    }, 
    {
      label: '报告时间',
      prop: 'reportTime',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
  ]
}

//故障工单-更多筛选
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
      span: 8
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
  ]
}

//检修工单-表单
export const checkFormColums =(that)=> {
  return [
    {
      label: '工单号',
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

//检修工单-表格
export const checkColums = (that)=>{
  return [
    {
      label: '工单号',
      prop: 'id',
    }, 
    {
      label: '检修计划编码',
      prop: 'planId',
    }, 
    {
      label: '检修名称',
      prop: 'checkName',
    }, 
    {
      label: '维修定额',
      prop: 'quota',
    }, 
    {
      label: '所属专业',
      prop: 'major',
    }, 
    {
      label: '资产名称',
      prop: 'assetsName',
    }, 
    {
      label: '线路',
      prop: 'line',
    }, 
    {
      label: '维修班组',
      prop: 'group',
    }, 
    {
      label: '关单时间',
      prop: 'closeTime',
    }, 
  ]
}

//检修工单-更多筛选
export const checkDialogColums =(that)=> {
  return [
    {
      label: '检修计划编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '检修名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '所属专业',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '资产名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '位置',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
  ]
}

//临时性工单-表单
export const temporaryFormColums =(that)=> {
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

//临时性工单-表格
export const temporaryColums = (that)=>{
  return [
    {
      label: '单据号',
      prop: 'id',
    }, 
    {
      label: '信息描述',
      prop: 'apperance',
    }, 
    {
      label: '线路',
      prop: 'line',
    }, 
    {
      label: '类型',
      prop: 'type',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
  ]
}

//临时性工单-更多筛选
export const temporaryDialogColums =(that)=> {
  return [
    {
      label: '描述',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
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
      label: '计划开始时间',
      prop: 'daterange',
      span: 8
    },
    {
      label: '计划结束时间',
      prop: 'daterange',
      span: 8
    },
  ]
}

//普查整改工单-表单
export const surveyFormColums =(that)=> {
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

//普查整改工单-表格
export const surveyColums = (that)=>{
  return [
    {
      label: '单据号',
      prop: 'id',
    }, 
    {
      label: '信息描述',
      prop: 'apperance',
    }, 
    {
      label: '线路',
      prop: 'line',
    }, 
    {
      label: '类型',
      prop: 'type',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
  ]
}

//普查整改工单-更多筛选
export const surveyDialogColums =(that)=> {
  return [
    {
      label: '描述',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
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
      label: '计划开始时间',
      prop: 'daterange',
      span: 8
    },
    {
      label: '计划结束时间',
      prop: 'daterange',
      span: 8
    },
  ]
}

//事件工单-表单
export const eventFormColums =(that)=> {
  return [
    {
      label: '工单号',
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

//事件工单-表格
export const eventColums = (that)=>{
  return [
    {
      label: '工单号',
      prop: 'id',
    }, 
    {
      label: '事件概述现象',
      prop: 'apperance',
    }, 
    {
      label: '报告人部门',
      prop: 'reportDep',
    }, 
    {
      label: '报告人',
      prop: 'reportUser',
    }, 
    {
      label: '线路',
      prop: 'line',
    }, 
    {
      label: '车站',
      prop: 'station',
    }, 
    {
      label: '报告时间',
      prop: 'reportTime',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
  ]
}

//事件工单-更多筛选
export const eventDialogColums =(that)=> {
  return [
    {
      label: '事件概述',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '报告时间',
      prop: 'daterange',
      span: 8
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
      span: 8
    },
    {
      label: '报告人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号',
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
      label: '可能造成影响',
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
  ]
}

//故障报告查询-表单
export const reportFormColums =(that)=> {
  return [
    {
      label: '故障单号',
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

//故障报告查询-表格
export const reportColums = (that)=>{
  return [
    {
      label: '报告单号',
      prop: 'id',
    }, 
    {
      label: '故障单号',
      prop: 'riskID',
    }, 
    {
      label: '创建时间',
      prop: 'createTime',
    }, 
    {
      label: '创建热',
      prop: 'createUser',
    }
  ]
}

//故障报告查询-更多筛选
export const reportDialogColums =(that)=> {
  return [
    {
      label: '报告单号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '故障单号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '报告单号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
  ]
}

//隐患工单-表单
export const faultFormColums =(that)=> {
  return [
    {
      label: '工单号',
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

//隐患工单-表格
export const faultColums = (that)=>{
  return [
    {
      label: '工单号',
      prop: 'id',
    }, 
    {
      label: '隐患现象',
      prop: 'apperance',
    }, 
    {
      label: '隐患类型',
      prop: 'type',
    }, 
    {
      label: '隐患等级',
      prop: 'level',
    }, 
    {
      label: '检查级别',
      prop: 'checkLevel',
    }, 
    {
      label: '报告人',
      prop: 'reportUser',
    }, 
    {
      label: '报告人部门',
      prop: 'reportDep',
    }, 
    {
      label: '区域归属部门',
      prop: 'areaDep',
    }, 
    {
      label: '报告时间',
      prop: 'reportTime',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
  ]
}

//隐患工单-更多筛选
export const faultDialogColums =(that)=> {
  return [
    {
      label: '是否为隐患',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '隐患现象',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '隐患类型',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '隐患等级',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号',
      clearable: true,
      span: 8
    },
    {
      label: '责任群组人员',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号',
      clearable: true,
      span: 8
    },
    {
      label: '报告时间',
      prop: 'daterange',
      span: 8
    },
    {
      label: '检查级别',
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
      label: '区域归属部门',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '整改部门',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
  ]
}