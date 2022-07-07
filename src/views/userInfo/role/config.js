//权限配置、角色配置-表单
export const permissionFormColums =(that)=> {
  return [
    {
      prop:'btns',
      span:4
    }
  ]
}

//权限--角色配置-表单
export const perRoleFormColums =(that)=> {
  return [
    {
      label: '角色',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      prop:'btns',
      span:8
    }
  ]
}

//角色人员--配置-表单
export const rolePersonFormColums =(that)=> {
  return [
    {
      label: '人员',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      prop:'btns',
      span:8
    }
  ]
}

//权限配置-表格
export const permissionColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '权限ID',
      prop: 'realName',
    }, 
    {
      label: '权限名称',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-edit"></i></el-link>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>
        ]
      }
    }, 
  ]
}

//角色配置-表格
export const roleColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '角色编码',
      prop: 'realName',
    }, 
    {
      label: '角色名称',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-edit"></i></el-link>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>
        ]
      }
    }, 
  ]
}

//权限--角色-表格
export const perRoleColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '权限代码',
      prop: 'realName',
    }, 
    {
      label: '权限名称',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-edit"></i></el-link>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>
        ]
      }
    }, 
  ]
}

//角色人员--配置-表格
export const rolePersonlColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '角色代码',
      prop: 'realName',
    }, 
    {
      label: '角色名称',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render: (h, { row }) => {
        return [
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-edit"></i></el-link>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>
        ]
      }
    }, 
  ]
}


//权限配置-新增
export const permission =(that)=> {
  return [
    {
      label: '权限ID',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      label: '权限名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      prop:'btns',
      span:24
    }
  ]
}

//角色配置-新增
export const role =(that)=> {
  return [
    {
      label: '角色编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      label: '角色名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      prop:'btns',
      span:24
    }
  ]
}

//权限--角色-新增
export const perRole =(that)=> {
  return [
    {
      label: '角色',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24
    }, 
    {
      label: '权限',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请输入关键词',
      clearable: true,
      span: 24
    }, 
    {
      prop:'btns',
      span:24
    }
  ]
}

//权限--角色-新增
export const rolePerson =(that)=> {
  return [
    {
      label: '人员',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      label: '角色',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请输入关键词',
      clearable: true,
      span: 24
    }, 
    {
      prop:'btns',
      span:24
    }
  ]
}