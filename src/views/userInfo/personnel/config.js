//基础信息配置-表单
export const basicFormColums =(that)=> {
  return [
    {
      label: '组名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      prop:'btns',
      span:4
    }
  ]
}

//对应关系配置-表单
export const correspondenceFormColums =(that)=> {
  return [
    {
      label: '父组代码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      prop:'btns',
      span:4
    }
  ]
}

//对应人员配置-表单
export const personnelFormColums =(that)=> {
  return [
    {
      label: '组代码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      prop:'btns',
      span:4
    }
  ]
}

//基础信息配置-表格
export const basicColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '组代码',
      prop: 'realName',
    }, 
    {
      label: '组名称',
      prop: 'realName',
    }, 
    {
      label: '组类型',
      prop: 'realName',
    }, 
    {
      label: '组织负责人',
      prop: 'realName',
    }, 
    {
      label: '线路',
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

//对应关系配置-表格
export const correspondenceColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '父组代码',
      prop: 'realName',
    }, 
    {
      label: '父组名称',
      prop: 'realName',
    }, 
    {
      label: '子组代码',
      prop: 'realName',
    }, 
    {
      label: '子组名称',
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

//对应人员配置-表格
export const personnelColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '组代码',
      prop: 'realName',
    }, 
    {
      label: '组名称',
      prop: 'realName',
    }, 
    {
      label: '组内人员',
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

//基础信息配置-新增
export const basics =(that)=> {
  return [
    {
      label: '组代码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      label: '组名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 24
    }, 
    {
      label: '组类型',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24
    }, 
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24
    }, 
    {
      label: '组负责人',
      prop: 'userNameLike',
      el: 'input',
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

//对应关系配置-新增
export const correspondence =(that)=> {
  return [
    {
      label: '父组代码',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24
    }, 
    {
      label: '子组代码',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24
    }, 
    {
      prop:'btns',
      span:24
    }
  ]
}

//对应人员配置-新增
export const personnel =(that)=> {
  return [
    {
      label: '组代码',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 24
    }, 
    {
      label: '组内人员',
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