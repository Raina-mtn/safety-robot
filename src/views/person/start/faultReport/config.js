//生成故障报告-表格
export const reportColums =(that)=> {
  return [
    // {
    //   label: '序号',
    //   prop: 'realName'
    // }, 
    {
      label: '故障单号',
      prop: 'id'
    },
    {
      label: '描述',
      prop: 'describe'
    },
    {
      label: '报告人部门',
      prop: 'reportDep'
    },
    {
      label: '报告人',
      prop: 'reportUser'
    },
    {
      label: '报告时间',
      prop: 'reportTime'
    },
    {
      label: '状态',
      prop: 'status'
    },
    {
      label: '操作',
      render: (h,{row}) => {
        return (
          <el-button type="text" onClick={() => {that.$confirm(`确认生成故障报告`,{type: 'warning'})}}>生成故障报告</el-button>
        )
      }
    },
  ]
}

//生成故障报告-更多筛选对话框
export const moreFiltersColums =(that)=> {
  return [
    {
      label: '故障摘要',
      prop: 'riskAbstract',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span: 24
    },
    {
      label: '报告时间',
      prop: 'reporttime',
      span: 24
    }, 
    {
      label: '线路',
      prop: 'line',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '故障报告人',
      prop: 'reportUser',
      el:'input',
      placeholder: '请输入关键词',
      clearable: true,
      span: 8
    },
    {
      label: '报告人部门',
      prop: 'reportDep',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '生产调度',
      prop: 'dispatch',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      label: '处理班组',
      prop: 'group',
      el:'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    }
  ]
}