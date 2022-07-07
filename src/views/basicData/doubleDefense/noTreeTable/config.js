//表单
export const noInputFormColums =(that)=> {
  return [
    {
      prop:'btns',
      span:4
    }
  ]
}
export const inputFormColums =(that)=> {
  return [
    {
      label: '区域名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '车站名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//风险/事故类型-表格
export const typeColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '代码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//风险等级-表格
export const gradeColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '代码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '分数区间上',
      prop: 'realName',
    }, 
    {
      label: '分数区间下',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//等级频次配置-表格
export const frequencyColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '风险等级',
      prop: 'realName',
    }, 
    {
      label: '频次',
      prop: 'realName',
    }, 
    {
      label: '单位',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//事件影响-表格
export const eventColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//隐患等级-表格
export const levelColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '备注',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//隐患等级-人员配置-表格
export const staffColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '隐患等级',
      prop: 'realName',
    }, 
    {
      label: '岗位',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//隐患类型-表格
export const hazardColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//检查级别-表格
export const checkColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//事故发生的可能性L-表格
export const lColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '分数',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//暴露于危险环境的频繁程度E-表格
export const eColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '分数',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//发生事故的后果严重程度C-表格
export const cColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '分数',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//一二级风险区域-车站-表格
export const stationColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '车站',
      prop: 'realName',
    }, 
    {
      label: '风险区域',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//部门负责人配置-表格
export const departmentColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '责任部门',
      prop: 'realName',
    }, 
    {
      label: '部门负责人',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return(
          <i class="el-icon-delete"></i>
        )
      },
    }
  ]
}