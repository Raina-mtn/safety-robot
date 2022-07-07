//故障明细表-表单
export const falutFormColums =(that)=> {
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

//检修计划-表格
export const falutColums = (that)=>{
  return [
    {
      label: '故障单号',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '线路',
      prop: 'realName',
    }, 
    {
      label: '故障提报时间',
      prop: 'realName',
    }, 
    {
      label: '车/站/段/所',
      prop: 'realName',
    }, 
    {
      label: '故障现象',
      prop: 'realName',
    }, 
    {
      label: '是否停用',
      prop: 'realName',
    }, 
    {
      label: '故障处理班组',
      prop: 'realName',
    }, 
    {
      label: '处理进展',
      prop: 'realName',
    }, 
    {
      label: '专业类型',
      prop: 'realName',
    }, 
    {
      label: '故障分类',
      prop: 'realName',
    }, 
    {
      label: '故障类别',
      prop: 'realName',
    }, 
    {
      label: '调度响应时间',
      prop: 'realName',
    }, 
    {
      label: '要求修复时间',
      prop: 'realName',
    }, 
  ]
}

//故障明细表-表单
export const dangerFormColums =(that)=> {
  return [
    {
      label: '隐患等级',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '隐患类型',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '隐患类型子项',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '检查级别',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '隐患描述',
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
      label: '提报部门',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '提报时间起',
      prop: 'userNameLike',
      el: 'date-picker',
      clearable: true,
      span: 4
    },
    {
      label: '提报时间止',
      prop: 'userNameLike',
      el: 'date-picker',
      clearable: true,
      span: 4
    },
    {
      label: '区域归属部门',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 4
    },
    {
      label: '整改部门',
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

//检修计划-表格
export const dangerColums = (that)=>{
  return [
    {
      label: '隐患工单号',
      prop: 'realName',
    }, 
    {
      label: '工单状态',
      prop: 'realName',
    }, 
    {
      label: '隐患描述',
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
      label: '区域归属部门',
      prop: 'realName',
    }, 
    {
      label: '区域责任人工号',
      prop: 'realName',
    }, 
    {
      label: '区域责任人姓名',
      prop: 'realName',
    }, 
    {
      label: '隐患类型',
      prop: 'realName',
    }, 
    {
      label: '类型描述',
      prop: 'realName',
    }, 
    {
      label: '隐患等级',
      prop: 'realName',
    }, 
    {
      label: '故障类别',
      prop: 'realName',
    }, 
    {
      label: '检查级别',
      prop: 'realName',
    }, 
    {
      label: '报告人工号',
      prop: 'realName',
    }, 
    {
      label: '报告人姓名',
      prop: 'realName',
    }, 
    {
      label: '报告人部门代码',
      prop: 'realName',
    }, 
  ]
}