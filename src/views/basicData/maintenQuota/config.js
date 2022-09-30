//维修定额列表-表单
export const maintenFormColums =(that)=> {
  return [
    {
      label: '作业项目',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:16
    }
  ]
}


//维修定额列表-表格
export const maintenColums = (that)=>{
  return [
    {
      label: '作业编号',
      prop: 'id',
    }, 
    {
      label: '作业项目',
      prop: 'project',
    }, 
    {
      label: '所属专业',
      prop: 'major',
    }, 
    {
      label: '状态',
      prop: 'status',
    },
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    },
  ]
}

//维修定额列表-新增
export const dialogFormColums =(that)=> {
  return [
    {
      label: '作业编号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label: '作业项目',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label: '所属专业',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 16
    },
    {
      prop:'radio',
      span:16
    },
  ]
}