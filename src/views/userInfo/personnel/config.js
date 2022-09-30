import {normalOrForbidden,userStatus,userStatusObj} from '@/utils/config'

//调度中心-用户信息-表单
export const formColums =(that)=> {
  return [
    {
      label: '工号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      label: '姓名',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 6
    }, 
    {
      label: '角色',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 6
    }, 
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      options:normalOrForbidden,
      clearable: true,
      span: 6
    }, 
    {
      prop:'btns',
      span:4
    }
  ]
}

//调度中心-用户信息-表格
export const colums = (that)=>{
    return [
      {
        label: '工号',
        prop: 'id',
      }, 
      {
        label: '姓名',
        prop: 'name',
      }, 
      {
        label: '角色',
        prop: 'role',
      }, 
      {
        label: '状态',
        render(h,{ row }) {
          return [
            <span style={row.status === userStatus[0].value ? "color:#36BE01" : "color:red"}>{userStatusObj[row.status]}</span>
          ]
        },
      },
      {
        label: '操作',
        render: (h, { row }) => {
          return [
            <el-link type="primary" underline={false} onClick={() => {that.handleForbidden(row);}}>{row.status === userStatus[0].value ? "禁用" : "启用"}</el-link>,
            <el-divider direction="vertical" />,
            <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog('edit')}}><i class="el-icon-edit"></i></el-link>
          ]
        }
      }, 
    ]
}


//调度中心-用户信息-新增
export const addFormColums =(that)=> {
  return [
    {
      label: '工号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入工号',
      clearable: true,
      span: 20
    }, 
    {
      label: '姓名',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入姓名',
      clearable: true,
      span: 20
    }, 
    {
      label: '联系方式',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入手机号',
      clearable: true,
      span: 20
    }, 
    {
      label: '密码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入密码',
      showPassword:true,
      clearable: true,
      span: 20
    },
    {
      label: '角色',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 20
    }, 
  ]
}
