export const left = [
  {
    title:'创建故障工单',
    icon:'el-icon-tickets',
    path:'audit'
  },
  {
    title:'编制检修计划',
    icon:'el-icon-edit',
    path:'import'
  },
  {
    title:'事件提报',
    icon:'el-icon-upload2',
    path:'stat'
  },
  {
    title:'变更区域风险清单',
    icon:'el-icon-news',
    path:'history'
  },
  {
    title:'变更作业风险清单',
    icon:'el-icon-postcard',
    path:'Indicator'
  },
  {
    title:'创建检修工单',
    icon:'el-icon-notebook-1'
  }
]

export const right = [
  {
    title:'创建临时性工单',
    icon:'el-icon-notebook-2'
  },
  { 
    title:'创建普查整改工单',
    icon:'el-icon-zoom-in'
  },
  {
    title:'故障修复延期申请',
    icon:'el-icon-pie-chart',
    path:'manager'
  },
  {
    title:'生成故障报告',
    icon:'el-icon-document',
    path:'user'
  }
]

//故障工单-故障分类
export const malfunctionOptions = [
  {
    label: 'A',
    value:0,
  },
  {
    label: 'B',
    value:1,
  },
  {
    label: 'C',
    value:2,
  },
  {
    label: 'D',
    value:3,
  },
]
//故障工单
export const troubleTicket =(that)=> {
  return [
    {
      label: '故障发现人',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8
    },
    {
      label: '发现人电话',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '故障报告人',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '报告人部门',
      prop: 'titleLike',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '车/站/段/所',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '归口调度',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '影响类型',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '是否停用',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '故障分类',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      options: malfunctionOptions,
      span: 8,
    },
    {
      label: '故障现象',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '',
      clearable: true,
      required:true,
      span: 16,
    },
    {
      label: '备注',
      prop: 'lineId',
      el: 'input',
      placeholder: '',
      clearable: true,
      span: 8,
    },
    {
      label: '故障提报时间',
      prop: 'lineId',
      el: 'input',
      placeholder: '自动生成',
      disabled:true,
      clearable: true,
      span: 8,
    },
    {
      prop: 'picture',
      span: 6,
    },
    {
      prop: 'btns',
      span: 8,
    }
  ]
}
//故障工单-校验规则
export const troubleRules =(that)=>{
  return {
    titleLike: [{ required: true, message: "请输入" }],
  }
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

//事件提报
export const incident =(that)=> {
  return [
    {
      label: '事件发现人',
      prop: 'titleLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8
    },
    {
      label: '发现人电话',
      prop: 'titleLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '事件报告人',
      prop: 'titleLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '报告人部门',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '车/站/段/所',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '事件概述',
      prop: 'titleLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 20,
    },
    {
      label: '可能的影响',
      prop: 'titleLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '事件创建事件',
      prop: 'titleLike',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      required:true,
      disabled:true,
      span: 8,
    },
    {
      label: '事件提报时间',
      prop: 'titleLike',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      required:true,
      disabled:true,
      span: 8,
    },
    {
      prop: 'assets',
      span: 20,
    },
    {
      prop: 'area',
      span: 20,
    },
    {
      prop: 'picture',
      span: 6,
    },
    {
      prop: 'btns',
      span: 12,
    },
  ]
}

//变更区域风险清单
export const riskColums =(that)=> {
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
      label: '管控岗',
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
    },
    {
      label: '操作',
      render: (h,{row}) => {
        return (
          <el-button type="text" onClick={() => { that.$refs.addArea.openDialog('edit',row.id) }}>编辑</el-button>
        )
      }
    },
  ]
}

//变更作业风险清单
export const operationColums =(that)=> {
  return [
    {
      label: '风险因素',
      prop: 'realName',
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
      label: '管控岗',
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
    },
    {
      label: '操作',
      render: (h,{row}) => {
        return (
          <el-button type="text" onClick={() => { that.$refs.addOperation.openDialog('edit',row.id) }}>编辑</el-button>
        )
      }
    },
  ]
}

//故障修复延期申请-表格
export const extensionColums =(that)=> {
  return [
    {
      label: '序号',
      prop: 'realName'
    }, 
    {
      label: '故障单号',
      prop: 'realName'
    },
    {
      label: '描述',
      prop: 'realName'
    },
    {
      label: '报告人部门',
      prop: 'realName'
    },
    {
      label: '报告人',
      prop: 'realName'
    },
    {
      label: '报告时间',
      prop: 'realName'
    },
    {
      label: '状态',
      prop: 'realName'
    },
    {
      label: '操作',
      render: (h,{row}) => {
        return (
          <el-button type="text" onClick={() => { that.$refs.extensionDialog.openDialog() }}>申请延期</el-button>
        )
      }
    },
  ]
}

//生成故障报告-表格
export const reportColums =(that)=> {
  return [
    {
      label: '序号',
      prop: 'realName'
    }, 
    {
      label: '故障单号',
      prop: 'realName'
    },
    {
      label: '描述',
      prop: 'realName'
    },
    {
      label: '报告人部门',
      prop: 'realName'
    },
    {
      label: '报告人',
      prop: 'realName'
    },
    {
      label: '报告时间',
      prop: 'realName'
    },
    {
      label: '状态',
      prop: 'realName'
    },
    {
      label: '操作',
      render: (h,{row}) => {
        return (
          <el-button type="text" onClick={() => { }}>生成故障报告</el-button>
        )
      }
    },
  ]
}