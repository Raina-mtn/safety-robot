//角色管理-表单
export const formColumns =(that)=> {
  return [
    {
      label: '角色编码',
      prop: 'code',
      el: 'input',
      placeholder: '请输入角色编码',
      clearable: true,
      span: 6
    }, 
    {
      label: '角色名称',
      prop: 'nameLike',
      el: 'input',
      placeholder: '请输入角色名称',
      clearable: true,
      span: 6
    }, 
    {
      prop: 'btns'
    }
  ]
}

//角色管理-表格
export const roleColums = (that)=>{
  return[
    {
      label: 'id',
      prop: 'id'
    },
    {
      label: '角色名称',
      prop: 'name'
    },
    {
      label: '角色编码',
      prop: 'code'
    },
    {
      label: '创建时间',
      prop: 'createTime'
    },
    {
      label: '操作',
      render: (h, { row }) => {
        return [
            <el-link type="primary" underline={false} onClick={() => {that.$refs.roleDialog.openDialog('edit')}}><i class="el-icon-edit"></i></el-link>,
            <el-divider direction="vertical" />,
            <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      }
    }
  ]
}

//新增角色-表单
export const addFormColumns =(that)=> {
  return [
    {
      label: '角色编码',
      prop: 'code',
      el: 'input',
      placeholder: '请输入角色编码',
      clearable: true,
      rules: {
        required: true, message: '请输入角色编码'
      },
      span: 22
    }, 
    {
      label: '角色名称',
      prop: 'name',
      el: 'input',
      placeholder: '请输入角色名称',
      clearable: true,
      rules: {
        required: true, message: '请输入角色名称'
      },
      span: 22
    }
  ]
}