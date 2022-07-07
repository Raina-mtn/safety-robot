//检修计划-表单
export const maintenFormColums =(that)=> {
  return [
    {
      label: '计划编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//检修计划-表格
export const maintenColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '机修计划编码',
      prop: 'realName',
    }, 
    {
      label: '检修名称',
      prop: 'realName',
    }, 
    {
      label: '维修定额',
      prop: 'realName',
    }, 
    {
      label: '检修周期',
      prop: 'realName',
    }, 
    {
      label: '开始时间',
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

//检修计划-更多筛选
export const maintenDialog =(that)=> {
  return [
    {
      label: '检修名称',
      prop: 'userNameLike',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 24
    },
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 12
    },
    {
      label: '线路',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 12
    },
    {
      prop:'btns',
      span:16
    }
  ]
}