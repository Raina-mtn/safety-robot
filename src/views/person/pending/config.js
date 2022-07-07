//故障工单-表单
export const riskFormColums =(that)=> {
  return [
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    }, 
    {
      label: '车站',
      prop: 'roleId',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '单据号',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '状态',
      prop: 'roleId',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '报告时间',
      prop: 'roleId',
      el: 'date-picker',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//故障工单-表格
export const riskColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '单据号',
      prop: 'realName',
    }, 
    {
      label: '故障现象',
      prop: 'realName',
    }, 
    {
      label: '发现人',
      prop: 'realName',
    }, 
    {
      label: '紧急程度',
      prop: 'realName',
    }, 
    {
      label: '重要程度',
      prop: 'realName',
    }, 
    {
      label: '报告时间',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-button type="text" onClick={() => { }}></el-button>
        ]
      }
    }, 
  ]
}

//其他工单-表格
export const otherColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '单据号',
      prop: 'realName',
    }, 
    {
      label: '信息描述',
      prop: 'realName',
    }, 
    {
      label: '创建人',
      prop: 'realName',
    }, 
    {
      label: '创建时间',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }
  ]
}

//事件工单-表格
export const eventColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '事件概述',
      prop: 'realName',
    }, 
    {
      label: '发现人',
      prop: 'realName',
    }, 
    {
      label: '可能造成的影响',
      prop: 'realName',
    }, 
    {
      label: '线路',
      prop: 'realName',
    }, 
    {
      label: '车站',
      prop: 'realName',
    },
    {
      label: '报告时间',
      prop: 'realName',
    },
    {
      label: '状态',
      prop: 'realName',
    },
  ]
}

//延期申请-表格
export const extensionColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '故障单号',
      prop: 'realName',
    }, 
    {
      label: '延期单据号',
      prop: 'realName',
    }, 
    {
      label: '延期原因',
      prop: 'realName',
    }, 
    {
      label: '延期日期',
      prop: 'realName',
    }, 
    {
      label: '申请人',
      prop: 'realName',
    },
    {
      label: '状态',
      prop: 'realName',
    },
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-button type="text" onClick={() => { }}></el-button>
        ]
      }
    },
  ]
}

//变更作业风险-表格
export const operationColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '变更类型',
      prop: 'realName',
    }, 
    {
      label: '变更原因',
      prop: 'realName',
    }, 
    {
      label: '接受时间',
      prop: 'realName',
    }, 
    {
      label: '提报人',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }
  ]
}

//变更区域风险-表格
export const areaColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '变更类型',
      prop: 'realName',
    }, 
    {
      label: '变更原因',
      prop: 'realName',
    }, 
    {
      label: '接受时间',
      prop: 'realName',
    }, 
    {
      label: '提报人',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }
  ]
}