//检修计划-表单
export const maintenFormColums =()=> {
  return [
    {
      label: '计划编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    },
    {
      label: '检修名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    },
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//检修计划-表格
export const maintenColums = (that)=>{
  return [
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
      label: '检修周期',
      prop: 'cycle',
    }, 
    {
      label: '开始时间',
      prop: 'startTime',
    }, 
    {
      label: '操作',
      render:(h,{row}) => {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.editDialog.openDialog()}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      }
    }, 
  ]
}

//检修计划-表单
export const editColums =()=> {
  return [
    {
      label: '检修计划编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '检修名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '维修定额',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请选择',
      clearable: true,
      span: 20
    },
    {
      label: '检修周期',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请选择',
      clearable: true,
      span: 20
    },
    {
      label: '开始时间',
      prop: 'userNameLike',
      el: 'date-picker',
      placeholder: '请选择',
      clearable: true,
      span: 20
    }
  ]
}