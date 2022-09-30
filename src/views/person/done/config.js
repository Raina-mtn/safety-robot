//故障工单-表单
export const riskFormColums =()=> {
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
      label: '紧急程度',
      prop: 'realName',
    }, 
    {
      label: '重要程度',
      prop: 'realName',
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
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'DoneTask',params:{type:'risk'}})}}>详情</el-link>
        ]
      }
    }, 
  ]
}


//其他工单-表格
export const otherColums = (that)=>{
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
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'DoneTask',params:{type:'other'}})}}>详情</el-link>
        ]
      }
    }, 
  ]
}

//其他工单-详情-处理进展
export const otherDetailsSchedule = ()=>{
  return [ 
    {
      label: '进展情况',
      prop: 'realName'
    }
  ]
}

//其他工单-详情-资产
export const otherDetailsAsset = ()=>{
  return [
    {
      label: '资产编码',
      prop: 'realName'
    },
    {
      label: '资产名称',
      prop: 'realName'
    },
    {
      label: '位置',
      prop: 'realName'
    },
    {
      label: '资产状态',
      prop: 'realName'
    }
  ]
}

//其他工单-详情-物资消耗
export const otherDetailsMaterials = ()=>{
  return [
    {
      label: '物资编码',
      prop: 'realName'
    },
    {
      label: '物资名称',
      prop: 'realName'
    },
    {
      label: '单位',
      prop: 'realName'
    },
    {
      label: '单价',
      prop: 'realName'
    },
    {
      label: '消耗数量',
      prop: 'realName'
    },
    {
      label: '备注',
      prop: 'realName'
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
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'DoneTask',params:{type:'event'}})}}>详情</el-link>
        ]
      }
    }, 
  ]
}

//事件工单-资产
export const eventDetailsAssets =()=> {
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

//事件工单-区域
export const eventDetailsArea =()=> {
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
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'DoneTask',params:{type:'extension'}})}}>详情</el-link>
        ]
      }
    }, 
  ]
}

//变更作业风险-表格
export const operationColums = (that)=>{
  return [
    {
      label: '变更类型',
      prop: 'type',
    }, 
    {
      label: '变更原因',
      prop: 'reason',
    }, 
    {
      label: '接受时间',
      prop: 'time',
    }, 
    {
      label: '提报人',
      prop: 'reportUser',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'DoneTask',params:{type:'operation'}})}}>详情</el-link>
        ]
      }
    }, 
  ]
}

//变更区域风险-表格
export const areaColums = (that)=>{
  return [
    {
      label: '变更类型',
      prop: 'type',
    }, 
    {
      label: '变更原因',
      prop: 'reason',
    }, 
    {
      label: '接受时间',
      prop: 'time',
    }, 
    {
      label: '提报人',
      prop: 'reportUser',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$router.push({name:'DoneTask',params:{type:'area'}})}}>详情</el-link>
        ]
      }
    }, 
  ]
}