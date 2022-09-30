//数据处理-表单
export const dataFormColums =()=> {
  return [
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'select',
      placeholder:'请选择',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//数据处理-表格
export const dataColums = (that)=>{
  return [
    {
      label: '区域',
      prop: 'area',
    }, 
    {
      label: '区域责任人',
      prop: 'responsible',
    }, 
    {
      label: '责任部门',
      prop: 'department',
    }, 
    {
      label: '风险（事故）类型',
      prop: 'type',
    }, 
    {
      label: '第一类风险源',
      prop: 'source',
    }, 
    {
      label: '风险因素',
      prop: 'element',
    }, 
    {
      label: '管理措施',
      prop: 'meausre',
    }, 
    {
      label: '隐患排查岗位',
      prop: 'station',
    }, 
    {
      label: '风险责任人',
      prop: 'riskResponsible',
    }, 
    {
      label: '操作',
      render:(h,{row}) => {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.stationDialog.openDialog() }}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      }
    }
  ]
}

//数据处理-更多筛选
export const dataMoreColums =()=> {
  return [
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24  
    },
    {
      label: '责任部门',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 12
    },
    {
      label: '区域责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号/姓名',
      clearable: true,
      span: 12
    },
    {
      label: '风险事故类型',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 12
    },
    {
      label: '第一类风险源',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 12
    },
    {
      label: '风险因素',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 12
    },
    {
      label: '管控措施',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 12
    },
    {
      label: '有无隐患排查岗位',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 12
    },
    {
      label: '有无风险责任人',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 12
    }
  ]
}

//数据处理-批量修改
export const editColums =()=> {
  return [
    {
      label: '隐患岗位',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入关键词',
      clearable: true,
      span: 16
    },
    {
      label: '风险责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号',
      clearable: true,
      span: 16
    }
  ]
}

//数据处理-批量修改
export const stationColums =()=> {
  return [
    {
      label: '隐患岗位',
      prop: 'tags',
      span: 16
    },
    {
      label: '风险责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号',
      clearable: true,
      span: 16
    }
  ]
}
