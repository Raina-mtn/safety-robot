//变更风险区域-新增-表单
export const riskAdd =(that)=> {
  return [
    {
      label: '变更原因',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      required:true,
      span:24
    },
    {
      prop:'divider',
      span:24
    },
    {
      label: '风险事故类型',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '第一类风险源',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '风险因素',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '管控措施',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'tags',
      span: 8,
    },
    {
      label: '风险责任人',
      prop: 'titleLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'L',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'E',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'C',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'D',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '风险等级',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '管控岗位',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'btns',
      span: 8,
    },
  ]
}

//变更风险区域-删除表单
export const riskDelete =(that)=> {
  return [
    {
      label: '变更原因',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      required:true,
      span:24
    }
  ]
}

//变更风险区域-新增-表格
export const riskAddColums =(that)=> {
  return [
    {
      label: '风险（事故）类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName'
    }, 
    {
      label: '风险因素',
      prop: 'realName'
    },
    {
      label: '管控措施',
      prop: 'realName'
    },
    {
      label: 'L',
      prop: 'realName'
    },
    {
      label: 'E',
      prop: 'realName'
    },
    {
      label: 'C',
      prop: 'realName'
    },
    {
      label: 'D',
      prop: 'realName'
    },
    {
      label: '风险等级',
      prop: 'realName'
    }
  ]
}

//变更风险作业-新增-表单
export const operationRiskAdd =(that)=> {
  return [
    {
      label: '变更原因',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      required:true,
      span:24
    },
    {
      prop:'divider',
      span:24
    },
    {
      label: '风险事故类型',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '第一类风险源',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '风险因素',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '管控措施',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'tags',
      span: 8,
    },
    {
      label: 'L',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'E',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'C',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'D',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '风险等级',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '管控岗位',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'btns',
      span: 8,
    },
  ]
}

//变更风险作业-删除表单
export const operationRiskDelete =(that)=> {
  return [
    {
      label: '变更原因',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      clearable: true,
      required:true,
      span:24
    }
  ]
}

//变更风险作业-新增-表格
export const operationRiskColums =(that)=> {
  return [
    {
      label: '风险（事故）类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName'
    }, 
    {
      label: '风险因素',
      prop: 'realName'
    },
    {
      label: '作业岗位',
      prop: 'realName'
    },
    {
      label: '管控措施',
      prop: 'realName'
    },
    {
      label: 'L',
      prop: 'realName'
    },
    {
      label: 'E',
      prop: 'realName'
    },
    {
      label: 'C',
      prop: 'realName'
    },
    {
      label: 'D',
      prop: 'realName'
    },
    {
      label: '风险等级',
      prop: 'realName'
    }
  ]
}

//编制检修计划-资产-表格
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

//编制检修计划-资产-表单
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

//编制检修计划-区域-表格
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

//故障修复延期申请-申请延期对话框
export const extensionForm =(that)=> {
  return [
    {
      label: '延期日期',
      prop: 'userNameLike',
      el: 'date-picker',
      clearable: true,
      span: 16
    }, 
    {
      label: '延期原因',
      prop: 'roleId',
      el:'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//生成故障报告-更多筛选对话框
export const moreFiltersColums =(that)=> {
  return [
    {
      label: '故障摘要',
      prop: 'userNameLike',
      el: 'input',
      type:'textarea',
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
      prop: 'roleId',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '故障报告人',
      prop: 'roleId',
      el:'input',
      placeholder: '请输入关键词',
      clearable: true,
      span: 8
    },
    {
      label: '报告人部门',
      prop: 'roleId',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '生产调度',
      prop: 'roleId',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '处理班组',
      prop: 'roleId',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:20
    }
  ]
}




//编制检修计划
export const maintenPlan =(that)=> {
  return [
    {
      label: '检修计划编码',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8
    },
    {
      label: '检修名称',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 20,
    },
    {
      prop: 'assets',
      span: 20,
    },
    {
      label: '维修定额',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'cycle',
      span: 8,
    },
    {
      label: '开始日期',
      prop: 'titleLike',
      el: 'date-picker',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'btns',
      span: 8,
    }
  ]
}
//编制检修计划-资产
export const maintenColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'title',
    },
    {
      label: '资产编码',
      prop: 'title',
    },
    {
      label: '资产名称',
      prop: 'title',
    },
    {
      label: '位置',
      prop: 'title',
    },
    {
      label: '维修班组',
      prop: 'title',
    },
    {
      label: '操作',
      render(h,{row}) {
        return (
          <el-button type='text'>删除</el-button>
        )
      },
    },
  ]
}
//编制检修计划-维修周期
export const cycleOptions =[
  {
    label: '日',
    value:0,
  },
  {
    label: '周',
    value:1,
  },
  {
    label: '月',
    value:2,
  },
  {
    label: '季',
    value:3,
  },
  {
    label: '年',
    value:3,
  },
]
//编制检修计划-校验规则
export const maintenRules =(that)=>{
  return {
    titleLike: [{ required: true, message: "请输入" }],
  }
}