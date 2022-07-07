//年度检查计划-表单
export const safetyFormColums =(that)=> {
  return [
    {
      label: '检查编号',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '开展月份',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '计划负责人',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:24
    }
  ]
}

//年度检查计划-表格
export const safetyColums = (that)=>{
  return [
    {
      label: '检查编号',
      prop: 'realName',
    }, 
    {
      label: '开展月份',
      prop: 'realName',
    }, 
    {
      label: '检查级别',
      prop: 'realName',
    }, 
    {
      label: '安全检查标题',
      prop: 'realName',
    }, 
    {
      label: '责任部室',
      prop: 'realName',
    }, 
    {
      label: '检查计划负责人',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '发送时间',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render:(h,{row}) => {
        return(
          <el-button>编辑</el-button>
        )
      }
    }, 
  ]
}
