//故障工单
export const troubleTicket =(that)=> {
  return [
    {
      prop: 'troubleTicket',
      span:24
    }, 
    {
      label: '故障发现人',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span:8
    },
    {
      label: '发现人电话',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '故障报告人',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '报告人部门',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '线路',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '车/站/段/所',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '归口调度',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '影响类型',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '是否停用',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '故障分类',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '故障现象',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      disabled:true,
      span:16,
    },
    {
      label: '备注',
      prop: 'lineId',
      el: 'input',
      clearable: true,
      disabled:true,
      span:8,
    },
    {
      label: '故障提报时间',
      prop: 'lineId',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      prop: 'riskPicture',
      span: 6,
    },
  ]
}

//故障工单-调度处理
export const riskDispatch =(that)=> {
  return [
    {
      prop: 'riskDispatch',
      span:24
    }, 
    {
      label: '专业类型',
      prop: 'roleId',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '故障类别',
      prop: 'roleId',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '要求修复时间',
      prop: 'roleId',
      el: 'date-picker',
      clearable: true,
      span: 8
    },
    {
      label: '故障处理班组',
      prop: 'roleId',
      el: 'select',
      placeholder: '请输入关键字',
      clearable: true,
      span: 8
    },
    {
      label: '班组负责人',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '联系方式',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '派单时间',
      prop: 'roleId',
      el: 'date-picker',
      clearable: true,
      span: 8
    },
    {
      label: '备注',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label:'配合处理班组',
      prop:'riskDispatchGroup',
      span:24
    },
    {
      label: '配合处理调度',
      prop: 'roleId',
      el: 'select',
      multiple:true,
      placeholder: '请输入关键字',
      clearable: true,
      span: 8
    },
  ]
}

//故障工单-配合处理班组
export const riskDispatchColums = [
  {
    label: '协同处理班组',
    prop: 'handel',
    type:'input'
  }, 
  {
    label: '协同班组负责人',
    prop: 'person',
    type:'input'
  }, 
  {
    label: '联系方式',
    prop: 'number',
    type:'input'
  }
]

//故障工单-班组处理
export const riskGroup =(that)=> {
  return [
    {
      prop: 'riskGroup',
      span:24
    }, 
    {
      label: '班组确认人',
      prop: 'roleId',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8
    },
    {
      label: '要求修复时间',
      prop: 'roleId',
      el: 'date-picker',
      disabled:true,
      type:"datetime",
      clearable: true,
      span: 8
    },
    {
      label:'资产',
      prop: 'riskGroupAssets',
      required:true,
      span:8
    }, 
    {
      label:'区域',
      prop: 'riskGroupArea',
      span:8
    }, 
    {
      label: '供应商',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '故障原因初判',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '故障原因类型',
      prop: 'roleId',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '部件更换情况',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label:'故障类型及处理方式',
      prop:'riskGroupType',
      span:24
    },
    {
      label:'处理进展',
      prop:'riskGroupProgress',
      span:24
    },
    {
      label:'备品备件消耗',
      prop:'riskGroupConsume',
      span:24
    },
    {
      label: '工班完成时间',
      prop: 'roleId',
      el: 'date-picker',
      type:"datetime",
      clearable: true,
      span: 8
    },
    {
      label: '备注',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label:'班组处理照片',
      prop:'riskGroupPicture',
      span:8
    }
  ]
}

//故障工单-班组处理-故障类型
export const riskGroupType = [
  {
    label: '故障类型',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '处理方式',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '标准工时(h)',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '资产',
    prop: 'realName',
    type:'input'
  }, 
]

//故障工单-班组处理-处理进展
export const riskGroupProgress = [
  {
    label: '进展情况',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '报告人',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '报告时间',
    prop: 'realName',
    type:'input'
  }
]

//故障工单-班组处理-备品备件消耗
export const riskGroupConsum = [
  {
    label: '物资编码',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '物资名称',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '单位',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '单价',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '数量',
    prop: 'realName',
    type:'input'
  }, 
]

//评价
export const evaluateForm =()=> {
  return [
    {
      prop:'evaluateDivider',
      span:24
    },
    {
      label: '评价',
      prop: 'evaluate',
      required:true,
      span: 24,
    },
    {
      label: '故障修复评价',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      required:true,
      clearable: true,
      span: 24,
    },
    {
      label: '评价人',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      span: 24,
    },
    {
      label: '评价时间',
      prop: 'titleLike',
      el: 'date-picker',
      required:true,
      clearable: true,
      span: 24,
    },
  ]
}


//事件提报
export const eventColums =(that)=> {
  return [
    {
      prop: 'eventColums',
      span:24
    }, 
    {
      label: '事件发现人',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8
    },
    {
      label: '发现人电话',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '事件报告人',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '报告人部门',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '车/站/段/所',
      prop: 'titleLike',
      el: 'select',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '事件概述',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      disabled:true,
      span: 16,
    },
    {
      label: '可能的影响',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '事件创建时间',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      required:true,
      disabled:true,
      span: 8,
    },
    {
      label: '事件提报时间',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '资产',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label: '区域',
      prop: 'titleLike',
      el: 'input',
      clearable: true,
      disabled:true,
      span: 8,
    },
    {
      label:'图片',
      prop: 'eventPicture',
      span: 6,
    },
  ]
}

//事件提报-调度处理
export const eventDispatch =(that)=> {
  return [
    {
      prop: 'eventDispatch',
      span:24
    }, 
    {
      label: '责任部门',
      prop: 'eventDepartment',
      span: 24
    },
    {
      label: '截止时间',
      prop: 'roleId',
      el: 'date-picker',
      clearable: true,
      span: 8
    },
    {
      label: '调度响应时间',
      prop: 'roleId',
      el: 'date-picker',
      placeholder:'自动生成',
      disabled:true,
      clearable: true,
      span: 8
    },
  ]
}

//事件提报-调度处理
export const departmentColums = [
  {
    label: '部门',
    prop: 'handle',
    type:'input'
  }, 
  {
    label: '责任人员工号',
    prop: 'person',
    type:'input'
  }, 
  {
    label: '责任人姓名',
    prop: 'number',
    type:'input'
  }
]

//事件提报-责任部门处理
export const eventdepartment =(that)=> {
  return [
    {
      prop: 'eventdepartment',
      span:24
    }, 
    {
      label: '调查进展',
      prop: 'eventProgress',
      span: 24
    },
    {
      label: '发送时间',
      prop: 'roleId',
      el: 'date-picker',
      type:"datetime",
      clearable: true,
      span: 8
    },
    {
      label:'事件分析报告/影像资料',
      prop: 'eventUpload',
      span:8
    }, 
  ]
}

//事件提报-责任部门处理-调查进展
export const progressColums = [
  {
    label: '进展情况',
    prop: 'realName',
    type:'input',
    width:'500px'
  }, 
  {
    label: '填报人',
    prop: 'realName',
    type:'input'
  }
]

//变更作业风险-详情
export const operationDetails =(that)=> {
  return [
    {
      label: '风险事故类型',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: '第一类风险源',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '风险因素',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '管控措施',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label:'作业岗位',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: 'L',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: 'E',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: 'C',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: 'D',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '风险等级',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '管控岗位',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    }
  ]
}

//变更区域风险-详情
export const areaDetails =(that)=> {
  return [
    {
      label: '风险事故类型',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: '第一类风险源',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '风险因素',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '管控措施',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label:'隐患排查岗位',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '风险责任人',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: 'L',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: 'E',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: 'C',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: 'D',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '风险等级',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '管控岗位',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
  ]
}

//延期申请-故障修复-详情
export const extensionDetails =(that)=> {
  return [
    {
      label: '序号',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    }, 
    {
      label: '故障单号',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    },
    {
      label: '描述',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    },
    {
      label: '报告人部门',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    },
    {
      label: '报告人',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    },
    {
      label: '报告时间',
      prop: 'realName',
      el: 'date-picker',
      disabled:true,
      span: 8
    },
    {
      label: '状态',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    },
    {
      label: '延期时间',
      prop: 'realName',
      el: 'date-picker',
      disabled:true,
      span: 8
    },
    {
      label: '延期原因',
      prop: 'realName',
      el: 'input',
      disabled:true,
      span: 8
    }
  ]
}

//其他工单-详情
export const otherColums =()=> {
  return [
    {
      prop:'otherDetails',
      span:24
    },
    {
      label: '工单号',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8
    },
    {
      label:'工单类型',
      prop: 'type',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '状态',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'titleLike',
      el: 'select',
      disabled:true,
      span: 8,
    },
    {
      label: '创建人',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '联系方式',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    },
    {
      label: '信息描述',
      prop: 'titleLike',
      el: 'input',
      type: 'textarea',
      disabled:true,
      span: 16,
    },
    {
      label: '创建时间',
      prop: 'titleLike',
      el: 'input',
      disabled:true,
      span: 8,
    }
  ]
}

//其他工单-调度
export const otherDispatch =()=> {
  return [
    {
      prop:'otherDetails2',
      span:24
    },
    {
      label: '调度/工程师',
      prop: 'titleLike',
      el: 'select',
      span: 8,
    },
    {
      label: '所属专业',
      prop: 'titleLike',
      el: 'select',
      span: 8,
    },
    {
      label: '所属部门',
      prop: 'titleLike',
      el: 'select',
      span: 8,
    },
    {
      label: '所属班组',
      prop: 'titleLike',
      el: 'select',
      span: 8,
    },
    {
      label: '负责人',
      prop: 'titleLike',
      el: 'input',
      span: 8,
    },
  ]
}

//其他工单-班组
export const otherGroup =()=> {
  return [
    {
      prop:'otherDetails3',
      span:24
    },
    {
      label: '维修定额',
      prop: 'titleLike',
      el: 'input',
      span: 8,
    },
    {
      label: '作业安全',
      prop: 'titleLike',
      el: 'input',
      span: 8,
    },
    {
      label: '计划开始时间',
      prop: 'titleLike',
      el: 'date-picker',
      span: 8,
    },
    {
      label: '请点时间',
      prop: 'titleLike',
      el: 'date-picker',
      span: 8,
    },
    {
      label: '计划完成时间',
      prop: 'titleLike',
      el: 'date-picker',
      span: 8,
    },
    {
      label: '销点时间',
      prop: 'titleLike',
      el: 'date-picker',
      span: 8,
    },
    {
      label: '检修计划',
      prop: 'titleLike',
      el: 'select',
      span: 8,
    },
    {
      label: '实际作业工时（小时）',
      prop: 'titleLike',
      el: 'input',
      span: 8,
    },
    {
      label:'处理进展',
      prop: 'OtherSchedule',
      span: 24,
    },
    {
      label:'资产',
      prop:'otherAssets',
      span:24
    },
    {
      label:'物资消耗',
      prop:'otherCosume',
      span:24
    }
  ]
}

//其他工单-详情-处理进展
export const otherDetailsSchedule = [ 
  {
    label: '进展情况',
    prop: 'realName',
    type:'input'
  }
]

//其他工单-详情-资产
export const otherDetailsAsset = [
  {
    label: '资产编码',
    prop: 'realName',
    type:'input'
  },
  {
    label: '资产名称',
    prop: 'realName',
    type:'input'
  },
  {
    label: '位置',
    prop: 'realName',
    type:'input'
  },
  {
    label: '资产状态',
    prop: 'realName',
    type:'select'
  }
]

//其他工单-详情-物资消耗
export const otherDetailsMaterials = [
  {
    label: '物资编码',
    prop: 'realName',
    type:'input'
  },
  {
    label: '物资名称',
    prop: 'realName',
    type:'input'
  },
  {
    label: '单位',
    prop: 'realName',
    type:'select'
  },
  {
    label: '单价',
    prop: 'realName',
    type:'input'
  },
  {
    label: '消耗数量',
    prop: 'realName',
    type:'input'
  },
  {
    label: '备注',
    prop: 'realName',
    type:'input'
  },
]