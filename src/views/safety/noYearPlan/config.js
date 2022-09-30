//非年度检查计划-表单
export const safetyFormColums =(that)=> {
  return [
    {
      label: '检查编号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      label: '开展月份',
      prop: 'userNameLike',
      el: 'date-picker',
      type:'month',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      label: '计划负责人',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:12
    }
  ]
}

//非年度检查计划-表格
export const safetyColums = (that)=>{
  return [
    {
      label: '检查编号',
      prop: 'id',
    }, 
    {
      label: '开展月份',
      prop: 'startMonth',
    }, 
    {
      label: '检查级别',
      prop: 'level',
    }, 
    {
      label: '安全检查标题',
      prop: 'title',
    }, 
    {
      label: '责任部室',
      prop: 'department',
    }, 
    {
      label: '检查计划负责人',
      prop: 'responsible',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '发送时间',
      prop: 'sendTime',
    }, 
    {
      label: '操作',
      render:(h,{row}) => {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.editDialog.openDialog()}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => { }}><i class="el-icon-delete"></i></el-link>
        ]
      }
    }, 
  ]
}

//非年度检查计划-更多筛选
export const safetyDialog =(that)=> {
  return [
    {
      label: '标题',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label: '检查级别',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 16
    },
    {
      label: '责任部室',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入部门名称',
      clearable: true,
      span: 16
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 16
    }
  ]
}

//非年度检查计划-编辑
export const editSafetyDialog =(that)=> {
  return [
    {
      label: '开展月份',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
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
      label: '安全检查标题',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '责任部室',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '检查计划负责人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
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
      label: '发送时间',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      disabled:true,
      span: 8,
    }, 
  ]
}

//非年度检查计划-新增
export const addSafetyDialog =(that)=> {
  return [
    {
      prop:'divider1',
      span:24
    },
    {
      label: '检查编号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      disabled:true,
      span: 8
    },
    {
      label: '检查计划类别',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '非年度检查计划',
      clearable: true,
      disabled:true,
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
      label: '计划开展月份',
      prop: 'userNameLike',
      el: 'date-picker',
      type:'month',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '安全检查标题',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '责任部室',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '检查计划责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8,
    }, 
    {
      label: '备注',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8,
    }, 
    {
      prop:'divider2',
      span:24
    },
    {
      label: '检查时间',
      prop: 'daterange',
      span: 8
    },
    {
      label: '检查内容',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      prop:'addcheck',
      span:24
    }
  ]
}

//非年度检查计划-表格
export const addCheckColums = [
  {
    label: '检查组',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '状态',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '任务完成时间',
    prop: 'realName',
    type:'date',
    format:'yyyy-MM-dd HH:mm:ss',
    width:200
  }, 
  {
    label: '任务发送时间',
    prop: 'realName',
    type:'date',
    width:200
  }, 
  {
    label: '检查一级区域',
    prop: 'realName',
    type:'select',
    width:200
  }, 
  {
    label: '检查具体区域',
    prop: 'realName',
    type:'input',
    width:200
  }, 
  {
    label: '检查人',
    prop: 'realName',
    type:'input'
  }, 
  {
    label: '联络人',
    prop: 'realName',
    type:'input'
  }, 
]
