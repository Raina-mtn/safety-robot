//故障明细表-表单
export const faultFormColums =(that)=> {
  return [
    {
      label: '报告人部门',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '所属中心',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '线路名称',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '车站名称',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '故障类型',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '故障单状态',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '处理工班',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '开始时间',
      prop: 'userNameLike',
      el: 'date-picker',
      clearable: true,
      span: 4
    },
    {
      label: '结束时间',
      prop: 'userNameLike',
      el: 'date-picker',
      clearable: true,
      span: 4
    },
    {
      label: '故障摘要',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '一级资产',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '二级资产',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '三级资产',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '四级资产',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//故障明细表-表格
export const faultColums = (that)=>{
  return [
    {
      label: '故障单号',
      prop: 'id',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '线路',
      prop: 'line',
    }, 
    {
      label: '故障提报时间',
      prop: 'reportTime',
    }, 
    {
      label: '车/站/段/所',
      prop: 'station',
    }, 
    {
      label: '故障现象',
      prop: 'riskAppearance',
    }, 
    {
      label: '是否停用',
      prop: 'disable',
    }, 
    {
      label: '故障处理班组',
      prop: 'group',
    }, 
    {
      label: '处理进展',
      prop: 'schedule',
      width:500
    }, 
    {
      label: '专业类型',
      prop: 'type',
    }, 
    {
      label: '故障分类',
      prop: 'classify',
    }, 
    {
      label: '故障类别',
      prop: 'riskType',
    }, 
    {
      label: '调度响应时间',
      prop: 'responseTime',
    }, 
    {
      label: '要求修复时间',
      prop: 'repairTime',
    }, 
    {
      label: '归口调度',
      prop: 'dispatch',
    }, 
    {
      label: '报告人部门',
      prop: 'reportDep',
    }, 
    {
      label: '故障发现人',
      prop: 'discoverUser',
    }, 
    {
      label: '发现人电话',
      prop: 'discoverNum',
    }, 
    {
      label: '故障报告人',
      prop: 'reportUser',
    }, 
    {
      label: '影响类型',
      prop: 'affectType',
    }, 
    {
      label: '班组确认人',
      prop: 'affirmUser',
    }, 
    {
      label: '班组确认时间',
      prop: 'affirmTime',
    }, 
    {
      label: '处理班组编号',
      prop: 'groupNum',
    }, 
    {
      label: '资产编码',
      prop: 'assetsId',
    }, 
    {
      label: '资产名称',
      prop: 'assetsName',
    }, 
    {
      label: '位置',
      prop: 'location',
    }, 
    {
      label: '故障原因预判',
      prop: 'reson',
    }, 
    {
      label: '故障类型',
      prop: 'riskGenre',
    }, 
    {
      label: '处理方式',
      prop: 'mode',
    }, 
    {
      label: '标准工时',
      prop: 'workTime',
    }, 
    {
      label: '要求修复时间',
      prop: 'realName',
    }, 
    {
      label: '临时修复措施',
      prop: 'temporaryMeasure',
    }, 
    {
      label: '临时修复时间',
      prop: 'temporaryTime',
    }, 
    {
      label: '临时修复前故障分类',
      prop: 'temporaryType',
    }, 
    {
      label: '一级资产',
      prop: 'oneAssets',
    }, 
    {
      label: '二级资产',
      prop: 'twoAssets',
    }, 
    {
      label: '三级资产',
      prop: 'threeAssets',
    }, 
    {
      label: '四级资产',
      prop: 'fourAssets',
    }, 
    {
      label: '故障超时修复等级',
      prop: 'overtimeLevel',
    }, 
    {
      label: '供应商名称',
      prop: 'supplierName',
    }, 
    {
      label: '部件更换情况',
      prop: 'partsStatus',
    }, 
    {
      label: '备品备件',
      prop: 'spareParts',
    }, 
    {
      label: '工班完成时间',
      prop: 'finishTime',
    }, 
    {
      label: '故障修复确认时间',
      prop: 'affirmTime',
    }, 
    {
      label: '确认人',
      prop: 'affirmUser',
    }, 
    {
      label: '修复评价',
      prop: 'evaluate',
    }, 
    {
      label: '评价等级',
      prop: 'evaluateLevel',
    }, 
    {
      label: '评价人员工号',
      prop: 'evaluateNum',
    }, 
    {
      label: '评价人姓名',
      prop: 'evaluateName',
    }, 
    {
      label: '评价时间',
      prop: 'evaluateTime',
    }, 
    {
      label: '故障单关闭时间',
      prop: 'closeTime',
    }, 
    {
      label: '故障提报备注',
      prop: 'reportRemark',
    }, 
    {
      label: '调度备注',
      prop: 'dispatchRemark',
    }, 
    {
      label: '班组处理备注',
      prop: 'groupRemark',
    }, 
    {
      label: '故障定性名称',
      prop: 'riskStableName',
    }, 
  ]
}

//区域风险-表单
export const areaFormColums =(that)=> {
  return [
    {
      label: '一级区域',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '二级区域',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '三级区域',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '四级区域',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '五级区域',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '风险等级',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '责任部室',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//区域风险-表格
export const areaColums = (that)=>{
  return [
    {
      label: '区域（一级）',
      prop: 'realName',
    }, 
    {
      label: '区域（二级）',
      prop: 'realName',
    }, 
    {
      label: '区域（三级）',
      prop: 'realName',
    }, 
    {
      label: '区域（四级）',
      prop: 'realName',
    }, 
    {
      label: '区域（五级）',
      prop: 'realName',
    }, 
    {
      label: '区域编码',
      prop: 'realName',
    }, 
    {
      label: '责任部室',
      prop: 'realName',
    }, 
    {
      label: '责任岗位',
      prop: 'realName',
    }, 
    {
      label: '责任人',
      prop: 'realName',
    }, 
    {
      label: '风险（事故）类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName',
    }, 
    {
      label: '风险因素',
      prop: 'realName',
    }, 
    {
      label: '管控措施',
      prop: 'realName',
    }, 
    {
      label: 'L',
      prop: 'realName',
    }, 
    {
      label: 'E',
      prop: 'realName',
    }, 
    {
      label: 'C',
      prop: 'realName',
    }, 
    {
      label: 'D',
      prop: 'realName',
    }, 
    {
      label: '风险等级',
      prop: 'realName',
    }, 
    {
      label: '隐患排查岗位名称',
      prop: 'realName',
    }, 
    {
      label: '风险责任人',
      prop: 'realName',
    }, 
    {
      label: '管控岗',
      prop: 'realName',
    }, 
    {
      label: '业务板块',
      prop: 'realName',
    }, 
  ]
}

//作业风险-表单
export const operationFormColums =(that)=> {
  return [
    {
      label: '类别',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '部门',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '专业',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '作业项目',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '责任人',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '风险等级',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '作业岗位',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//作业风险-表格
export const operationColums = (that)=>{
  return [
    {
      label: '类别（一级）',
      prop: 'realName',
    }, 
    {
      label: '部门（二级）',
      prop: 'realName',
    }, 
    {
      label: '专业（三级）',
      prop: 'realName',
    }, 
    {
      label: '作业项目（四级）',
      prop: 'realName',
    }, 
    {
      label: '作业编号',
      prop: 'realName',
    }, 
    {
      label: '责任部室',
      prop: 'realName',
    }, 
    {
      label: '责任岗位',
      prop: 'realName',
    }, 
    {
      label: '责任人',
      prop: 'realName',
    }, 
    {
      label: '区域',
      prop: 'realName',
    }, 
    {
      label: '作业时段',
      prop: 'realName',
    }, 
    {
      label: '风险（事故）类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName',
    }, 
    {
      label: '风险因素',
      prop: 'realName',
    }, 
    {
      label: '管控措施',
      prop: 'realName',
    }, 
    {
      label: 'L',
      prop: 'realName',
    }, 
    {
      label: 'E',
      prop: 'realName',
    }, 
    {
      label: 'C',
      prop: 'realName',
    }, 
    {
      label: 'D',
      prop: 'realName',
    }, 
    {
      label: '风险等级',
      prop: 'realName',
    }, 
    {
      label: '作业岗位',
      prop: 'realName',
    }, 
    {
      label: '风险责任人',
      prop: 'realName',
    }, 
    {
      label: '管控岗',
      prop: 'realName',
    }, 
    {
      label: '业务板块',
      prop: 'realName',
    }, 
  ]
}

//变更区域风险清单-表单
export const areaChangeFormColums =(that)=> {
  return [
    {
      label: '区域名称',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '提报人',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '审核状态',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '风险等级',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '变更类型',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//变更区域风险清单-表格
export const areaChange = (that)=>{
  return [
    {
      label: '变更类型',
      prop: 'realName',
    }, 
    {
      label: '变更原因',
      prop: 'realName',
    }, 
    {
      label: '提报人',
      prop: 'realName',
    }, 
    {
      label: '提报时间',
      prop: 'realName',
    }, 
    {
      label: '审批状态',
      prop: 'realName',
    }, 
    {
      label: '数据类型',
      prop: 'realName',
    }, 
    {
      label: '区域编码',
      prop: 'realName',
    }, 
    {
      label: '区域名称',
      prop: 'realName',
    }, 
    {
      label: '风险类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName',
    }, 
    {
      label: '风险因素',
      prop: 'realName',
    }, 
    {
      label: '管控措施',
      prop: 'realName',
    }, 
    {
      label: 'L',
      prop: 'realName',
    }, 
    {
      label: 'E',
      prop: 'realName',
    }, 
    {
      label: 'C',
      prop: 'realName',
    }, 
    {
      label: 'D',
      prop: 'realName',
    }, 
    {
      label: '风险等级',
      prop: 'realName',
    }, 
    {
      label: '隐患排查岗位名称',
      prop: 'realName',
    }, 
    {
      label: '风险责任人',
      prop: 'realName',
    }
  ]
}

//变更作业风险清单-表单
export const operationChangeFormColums =(that)=> {
  return [
    {
      label: '提报人',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      label: '审核状态',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '风险等级',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '变更类型',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '作业项目',
      prop: 'userNameLike',
      el: 'input',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//变更作业风险清单-表格
export const operationChange = (that)=>{
  return [
    {
      label: '变更类型',
      prop: 'realName',
    }, 
    {
      label: '变更原因',
      prop: 'realName',
    }, 
    {
      label: '提报人',
      prop: 'realName',
    }, 
    {
      label: '提报时间',
      prop: 'realName',
    }, 
    {
      label: '审批状态',
      prop: 'realName',
    }, 
    {
      label: '数据类型',
      prop: 'realName',
    }, 
    {
      label: '作业编码',
      prop: 'realName',
    }, 
    {
      label: '作业项目',
      prop: 'realName',
    }, 
    {
      label: '风险类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName',
    }, 
    {
      label: '风险因素',
      prop: 'realName',
    }, 
    {
      label: '管控措施',
      prop: 'realName',
    }, 
    {
      label: 'L',
      prop: 'realName',
    }, 
    {
      label: 'E',
      prop: 'realName',
    }, 
    {
      label: 'C',
      prop: 'realName',
    }, 
    {
      label: 'D',
      prop: 'realName',
    }, 
    {
      label: '风险等级',
      prop: 'realName',
    }, 
    {
      label: '作业岗位',
      prop: 'realName',
    }
  ]
}

// //隐患工单-表单
// export const dangerFormColums =(that)=> {
//   return [
//     {
//       label: '隐患等级',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '隐患类型',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '隐患类型子项',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '检查级别',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '隐患描述',
//       prop: 'userNameLike',
//       el: 'input',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '提报人',
//       prop: 'userNameLike',
//       el: 'input',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '提报部门',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '提报时间起',
//       prop: 'userNameLike',
//       el: 'date-picker',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '提报时间止',
//       prop: 'userNameLike',
//       el: 'date-picker',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '区域归属部门',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '状态',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       label: '整改部门',
//       prop: 'userNameLike',
//       el: 'select',
//       clearable: true,
//       span: 4
//     },
//     {
//       prop:'btns',
//       span:16
//     }
//   ]
// }

// //隐患工单-表格
// export const dangerColums = (that)=>{
//   return [
//     {
//       label: '隐患工单号',
//       prop: 'id',
//     }, 
//     {
//       label: '工单状态',
//       prop: 'status',
//     }, 
//     {
//       label: '隐患描述',
//       prop: 'describe',
//       width:300
//     }, 
//     {
//       label: '区域编码',
//       prop: 'areaId',
//     }, 
//     {
//       label: '区域名称',
//       prop: 'areaName',
//       width:200
//     }, 
//     {
//       label: '区域归属部门',
//       prop: 'areaDep',
//     }, 
//     {
//       label: '区域责任人工号',
//       prop: 'areaUserNum',
//     }, 
//     {
//       label: '区域责任人姓名',
//       prop: 'areaUserName',
//     }, 
//     {
//       label: '隐患类型',
//       prop: 'type',
//     }, 
//     {
//       label: '类型描述',
//       prop: 'typeDescribe',
//     }, 
//     {
//       label: '隐患等级',
//       prop: 'riskLevel',
//     }, 
//     {
//       label: '检查级别',
//       prop: 'checkLevel',
//     }, 
//     {
//       label: '报告人工号',
//       prop: 'reportNum',
//     }, 
//     {
//       label: '报告人姓名',
//       prop: 'reportName',
//     }, 
//     {
//       label: '报告人部门代码',
//       prop: 'reportDepNum',
//     }, 
//     {
//       label: '报告人部门名称',
//       prop: 'reportDepName',
//     }, 
//     {
//       label: '提报时间',
//       prop: 'reportTime',
//     }, 
//     {
//       label: '是否为隐患',
//       prop: 'whetherRisk',
//     }, 
//     {
//       label: '确认时间',
//       prop: 'affirmTime',
//     }, 
//     {
//       label: '整改期限',
//       prop: 'rectifyDeadline',
//     }, 
//     {
//       label: '整改进展',
//       prop: 'schedule',
//       width:500
//     }, 
//     {
//       label: '最后更新时间',
//       prop: 'finishUpdateTime',
//     }, 
//     {
//       label: '备注',
//       prop: 'remark',
//     }, 
//     {
//       label: '隐患确认是否超期',
//       prop: 'whetherRiskExceed',
//     }, 
//     {
//       label: '是否超过7天未填写',
//       prop: 'whetherMoreSeven',
//     }, 
//     {
//       label: '工单是否超期',
//       prop: 'whetherFormExceed',
//     }, 
//     {
//       label: '责任群组人员',
//       prop: 'groupUser',
//     }, 
//     {
//       label: '整改部门',
//       prop: 'rectifyDep',
//     },
//   ]
// }

export const dangerTableData = [
  {
    id:'20',
    status:'已关闭',
    describe:'开站前未对电扶梯静态检查和动态扶梯功能的检查，开站前电扶梯静动态检查作业标准无。',
    areaId:'0400150301002',
    areaName:'4号线车站/景芳站/站厅/A出入口楼扶梯区/上行扶梯',
    areaDep:'客运一公司/客运部',
    areaUserNum:'C00000',
    areaUserName:'张三',
    type:'设备设施',
    typeDescribe:'车辆设备',
    riskLevel:'一般隐患',
    checkLevel:'运营公司级',
    reportNum:'C00000',
    reportName:'张三',
    reportDepNum:'130805',
    reportDepName:'安全部/安全部安全监察室',
    reportTime:'2019-06-05 11:21:43',
    whetherRisk:'是',
    affirmTime:'2019-06-11 11:29:19.836',
    rectifyDeadline:'2019-06-11 00:00:00',
    schedule:'1.开梯之前检查保养记录和合格证是否齐全。2.车站检查电扶梯速度和配件是否齐全，包括梳齿板，扶手带，梯级。3.开梯之前做好防护工作。',
    finishUpdateTime:'2019-06-13 13:35:19',
    remark:'',
    whetherRiskExceed:'超期',
    whetherMoreSeven:'超期',
    whetherFormExceed:'超期',
    groupUser:'张三',
    rectifyDep:'客运一公司/客运部'
  }
]

export const faultTableData = [
  {
    id:'GZ20220804348',
    status:'班组',
    line:'3号线',
    areaId:'0400150301002',
    reportTime:'2022-8-4 11:27:07',
    station:'高教路',
    riskAppearance:'高教路设备区B端活塞风道门故障无法关上',
    disable:'否',
    group:'3号线房建工班',
    schedule:'2022-8-04 15:30到达车控室请点，15:35到达现场进行查看，经检查分析故障原因为门体卡顿严重发生形变，已联系整改，共用时20分钟。15:50车控室销点，人员工具清，故障跟进中。',
    type:'房屋建筑',
    classify:'D',
    riskType:'生产类',
    responseTime:'2022-8-4 11:28:46',
    repairTime:'2022-9-3 11:28:46',
    dispatch:'客二车站设备部生产调度',
    reportDep:'高教路站',
    discoverUser:'张三',
    discoverNum:'111111',
    reportUser:'张三',
    affectType:'其他',
    affirmUser:'张三',
    affirmTime:'2022-8-4 11:30:47',
    groupNum:'1334050311',
    temporaryTime:'2022-8-4 19:00:58',
    temporaryType:'C',
    evaluateLevel:'0'
  }
]

