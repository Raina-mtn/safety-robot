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
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '作业编号',
      prop: 'realName',
    }, 
    {
      label: '作业项目',
      prop: 'realName',
    }, 
    {
      label: '所属专业',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    },
    {
      label: '操作',
      render(h,{row}) {
        <i class="el-icon-delete"></i>
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
    {
      prop:'btns',
      span:16
    }
  ]
}