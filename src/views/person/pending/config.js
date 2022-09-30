//故障工单-表单
export const riskFormColums =(that)=> {
  return [
    {
      label: '线路',
      prop: 'line',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    }, 
    {
      label: '车站',
      prop: 'station',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '单据号',
      prop: 'id',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '状态',
      prop: 'status',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '报告时间',
      prop: 'roleId',
      el: 'reportTime',
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

//事件工单-表单
export const eventFormColums =(that)=> {
  return [
    {
      label: '线路',
      prop: 'line',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    }, 
    {
      label: '车站',
      prop: 'station',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '状态',
      prop: 'status',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '报告时间',
      prop: 'reportTime',
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

//检修工单-表单
export const checkFormColums =(that)=> {
  return [
    {
      label: '检修计划编码',
      prop: 'id',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '检修名称',
      prop: 'name',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '专业',
      prop: 'major',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '资产名称',
      prop: 'assetsName',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '位置',
      prop: 'location',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//临时性工单-表单
export const temporaryFormColums =(that)=> {
  return [
    {
      label: '线路',
      prop: 'line',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    }, 
    {
      label: '单据号',
      prop: 'id',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '状态',
      prop: 'status',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '申请时间',
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

//普查整改工单-表单
export const surveyFormColums =(that)=> {
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
      label: '申请时间',
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

//故障延期申请-表单
export const extensionFormColums =(that)=> {
  return [
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
      label: '申请时间',
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

//故障报告-表单
export const reportFormColums =(that)=> {
  return [
    {
      label: '线路',
      prop: 'roleId',
      el: 'select',
      placeholder: '请选择',
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
      label: '申请时间',
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
      label: '单据号',
      prop: 'id',
    }, 
    {
      label: '故障现象',
      prop: 'apperance',
    }, 
    {
      label: '发现人',
      prop: 'discoverUser',
    }, 
    {
      label: '故障分类',
      prop: 'riskType',
    }, 
    {
      label: '报告时间',
      prop: 'reportTime',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => { that.$router.push({name:'PendingTask',params:{type:'risk'}})}}>处理</el-link>
        ]
      }
    }, 
  ]
}

//事件工单-表格
export const eventColums = (that)=>{
  return [
    {
      label: '单据号',
      prop: 'id',
    }, 
    {
      label: '事件概述',
      prop: 'overview',
    }, 
    {
      label: '发现人',
      prop: 'discoverUser',
    }, 
    {
      label: '可能造成的影响',
      prop: 'influence',
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
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'event'}})}}>处理</el-link>
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
      label: '接收时间',
      prop: 'realName',
    }, 
    {
      label: '提报人',
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
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'operation'}})}}>处理</el-link>
          
        ]
      }
    }, 
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
      label: '接收时间',
      prop: 'realName',
    }, 
    {
      label: '提报人',
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
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'area'}})}}>处理</el-link>
        ]
      }
    }, 
  ]
}

//检修工单-表格
export const checkColums = (that)=>{
  return [
    {
      label: '工单号',
      prop: 'formId',
    }, 
    {
      label: '检修计划编码',
      prop: 'id',
    }, 
    {
      label: '检修名称',
      prop: 'name',
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
      label: '维修班组',
      prop: 'group',
    },
    {
      label: '计划检修时间',
      prop: 'planTime',
    },
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'check'}})}}>处理</el-link>
        ]
      }
    }, 
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
      prop: 'describe',
    }, 
    {
      label: '创建人',
      prop: 'createUser',
    }, 
    {
      label: '创建时间',
      prop: 'createTime',
    }, 
    {
      label: '状态',
      prop: 'status',
    },
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'temporary'}})}}>处理</el-link>
        ]
      }
    }, 
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
      prop: 'describe',
    }, 
    {
      label: '创建人',
      prop: 'createUser',
    }, 
    {
      label: '创建时间',
      prop: 'createTime',
    }, 
    {
      label: '状态',
      prop: 'status',
    },
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'survey'}})}}>处理</el-link>
        ]
      }
    }, 
  ]
}

//延期申请-表格
export const extensionColums = (that)=>{
  return [
    {
      label: '故障单号',
      prop: 'id',
    }, 
    {
      label: '延期单据号',
      prop: 'extensionId',
    }, 
    {
      label: '延期原因',
      prop: 'reason',
    }, 
    {
      label: '延期日期',
      prop: 'extensionTime',
    }, 
    {
      label: '申请人',
      prop: 'applicant',
    },
    {
      label: '状态',
      prop: 'status',
    },
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'PendingTask',params:{type:'extension'}})}}>处理</el-link>
        ]
      }
    }, 
  ]
}