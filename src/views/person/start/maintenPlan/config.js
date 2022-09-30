
//编制检修计划
export const maintenPlan =(that)=> {
  return [
    {
      label: '检修计划编码',
      prop: 'id',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 12
    },
    {
      label: '检修名称',
      prop: 'name',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 12,
    },
    {
      label:'资产',      
      prop: 'assets',
      required:true,
      span: 20
    },
    {
      label: '维修定额',
      prop: 'quota',
      required:true,
      span: 20,
    },
    {
      label:'维修周期',
      prop: 'cycle',
      required:true,
      span: 8,
    },
    {
      label: '开始日期',
      prop: 'startTime',
      el: 'date-picker',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'btns',
      span: 20,
    }
  ]
}
//编制检修计划-资产
export const maintenColums = (that)=>{
  return [
    {
      label: '资产编码',
      prop: 'id',
    },
    {
      label: '资产名称',
      prop: 'name',
    },
    {
      label: '位置',
      prop: 'location',
    },
    {
      label: '维修班组',
      prop: 'group',
    },
    {
      label: '操作',
      render(h,row) {
        return (
          <el-link type="primary" underline={false} onClick={() => {that.assetsTableData.splice(row.$index, 1)}}><i class="el-icon-delete"></i></el-link>
        )
      },
    },
  ]
}
//编制检修计划-维修定额
export const quotaColums = (that)=>{
  return [
    {
      label: '作业编号',
      prop: 'id',
    },
    {
      label: '作业项目',
      prop: 'project',
    },
    {
      label: '所属专业',
      prop: 'major',
    },
    {
      label: '状态',
      prop: 'status',
    },
    {
      label: '操作',
      render(h,row) {
        return (
          <el-link type="primary" underline={false} onClick={() => {that.quotaTableData.splice(row.$index, 1)}}><i class="el-icon-delete"></i></el-link>
        )
      },
    },
  ]
}
//编制检修计划-校验规则
export const maintenRules =(that)=>{
  return {
    titleLike: [{ required: true, message: "请输入" }],
  }
}

//编制检修计划-维修定额
export const quotaDialogColums = (that)=>{
  return [
    {
      label: '作业编号',
      prop: 'id',
    },
    {
      label: '作业项目',
      prop: 'project',
    },
    {
      label: '所属专业',
      prop: 'major',
    },
    {
      label: '状态',
      prop: 'status',
    }
  ]
}