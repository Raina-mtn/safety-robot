//故障明细表-表单
export const dataFormColums =(that)=> {
  return [
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'select',
      placeholder:'请选择',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//检修计划-表格
export const dataColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '区域',
      prop: 'realName',
    }, 
    {
      label: '区域责任人',
      prop: 'realName',
    }, 
    {
      label: '责任部门',
      prop: 'realName',
    }, 
    {
      label: '风险（事故）类型',
      prop: 'realName',
    }, 
    {
      label: '第一类风险源',
      prop: 'realName',
    }, 
    {
      label: '风险因素',
      prop: 'realName',
    }, 
    {
      label: '管理措施',
      prop: 'realName',
    }, 
    {
      label: '隐患排查岗位',
      prop: 'realName',
    }, 
    {
      label: '风险责任人',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render:(h,{row}) => {
        return(
          <el-link
            type="primary"
            underline={false}
            onClick={() => {
              
            }}
          >
            隐患排查岗位
          </el-link>
        )
      }
    }
  ]
}
