//故障修复延期申请-表格
export const faultColums =(that)=> {
  return [
    // {
    //   label: '序号',
    //   prop: 'id'
    // }, 
    {
      label: '故障单号',
      prop: 'id'
    },
    {
      label: '描述',
      prop: 'describe'
    },
    {
      label: '报告人部门',
      prop: 'reportDep'
    },
    {
      label: '报告人',
      prop: 'reportUser'
    },
    {
      label: '报告时间',
      prop: 'reportTime'
    },
    {
      label: '状态',
      prop: 'status'
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
//故障修复延期申请-表单
export const faultFormColums =(that)=> {
  return [
    {
      label: '故障单号',
      prop: 'id',
      el: 'input',
      clearable: true,
      span: 8
    }, 
    {
      prop:'btns',
      span:4
    }
  ]
}

//检修工单延期申请-表格
export const checkColums =(that)=> {
  return [
    // {
    //   label: '序号',
    //   prop: 'realName'
    // }, 
    {
      label: '单据号',
      prop: 'id'
    },
    {
      label: '描述',
      prop: 'describe'
    },
    {
      label: '线路',
      prop: 'line'
    },
    {
      label: '类型',
      prop: 'type'
    },
    {
      label: '状态',
      prop: 'status'
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

//临时性工单延期申请-表格
export const temporaryColums =(that)=> {
  return [
    // {
    //   label: '序号',
    //   prop: 'realName'
    // }, 
    {
      label: '单据号',
      prop: 'id'
    },
    {
      label: '描述',
      prop: 'describe'
    },
    {
      label: '线路',
      prop: 'line'
    },
    {
      label: '类型',
      prop: 'type'
    },
    {
      label: '状态',
      prop: 'status'
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

//普查整改工单延期申请-表格
export const surveyColums =(that)=> {
  return [
    // {
    //   label: '序号',
    //   prop: 'realName'
    // }, 
    {
      label: '单据号',
      prop: 'id'
    },
    {
      label: '描述',
      prop: 'describe'
    },
    {
      label: '线路',
      prop: 'line'
    },
    {
      label: '类型',
      prop: 'type'
    },
    {
      label: '状态',
      prop: 'status'
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

//检修、临时性、普查整改延期申请-表单
export const otherFormColums =(that)=> {
  return [
    {
      label: '单据号',
      prop: 'id',
      el: 'input',
      clearable: true,
      span: 8
    }, 
    {
      prop:'btns',
      span:4
    }
  ]
}

//申请延期对话框
export const extensionForm =(that)=> {
  return [
    {
      label: '延期日期',
      prop: 'extensionTime',
      el: 'date-picker',
      clearable: true,
      span: 16
    }, 
    {
      label: '延期原因',
      prop: 'reason',
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