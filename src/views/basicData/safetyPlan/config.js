//安全计划-表单
export const safetyFormColums =(that)=> {
  return [
    {
      label: '安全计划描述',
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


//安全计划-表格
export const safetyColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '安全计划',
      prop: 'realName',
    }, 
    {
      label: '描述',
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
          <el-link type="primary" underline={false} onClick={() => {that.tableData.splice(row.$index, 1)}}><i class="el-icon-delete"></i></el-link>
        )
      },
    }
  ]
}

//安全计划-新增
export const dialogFormColums =(that)=> {
  return [
    {
      label: '安全计划',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label: '描述',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      prop:'radio',
      span:16
    }
  ]
}