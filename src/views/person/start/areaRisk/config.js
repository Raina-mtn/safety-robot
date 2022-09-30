//变更区域风险清单
export const riskColums =(that)=> {
  return [
    {
      label: '风险（事故）类型',
      prop: 'type',
    }, 
    {
      label: '第一类风险源',
      prop: 'riskSource'
    }, 
    {
      label: '风险因素',
      prop: 'riskElement'
    },
    {
      label: '管控措施',
      prop: 'measure'
    },
    {
      label: '管控岗',
      prop: 'measureDep'
    },
    {
      label: 'L',
      prop: 'l'
    },
    {
      label: 'E',
      prop: 'e'
    },
    {
      label: 'C',
      prop: 'c'
    },
    {
      label: 'D',
      prop: 'd'
    },
    {
      label: '风险等级',
      prop: 'level'
    },
    {
      label: '操作',
      render: (h,{row}) => {
        return (
          <el-link type="primary" underline={false} onClick={() => { that.$refs.addArea.openDialog('edit',row.id) }}><i class="el-icon-edit"></i></el-link>
        )
      }
    },
  ]
}

//变更风险区域-新增-表单
export const riskAdd =(that)=> {
  return [
    {
      label: '变更原因',
      prop: 'reason',
      el: 'input',
      type:'textarea',
      clearable: true,
      required:true,
      span:24
    },
    {
      prop:'divider',
      span:24
    },
    {
      label: '风险事故类型',
      prop: 'type',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '第一类风险源',
      prop: 'riskSource',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '风险因素',
      prop: 'riskElement',
      el: 'input',
      placeholder: '',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '管控措施',
      prop: 'measure',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label:'隐患排查岗位',
      prop: 'tags',
      span: 8,
    },
    {
      label: '风险责任人',
      prop: 'responsible',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'L',
      prop: 'l',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'E',
      prop: 'e',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'C',
      prop: 'c',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: 'D',
      prop: 'd',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '风险等级',
      prop: 'level',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '管控岗位',
      prop: 'department',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      prop: 'btns',
      span: 8,
    },
  ]
}

//变更风险区域-删除表单
export const riskDelete =(that)=> {
  return [
    {
      label: '变更原因',
      prop: 'reson',
      el: 'input',
      type:'textarea',
      clearable: true,
      required:true,
      span:24
    }
  ]
}

//变更风险区域-新增-表格
export const riskAddColums =(that)=> {
  return [
    {
      label: '风险（事故）类型',
      prop: 'type',
    }, 
    {
      label: '第一类风险源',
      prop: 'riskSource'
    }, 
    {
      label: '风险因素',
      prop: 'riskElement'
    },
    {
      label: '管控措施',
      prop: 'measure'
    },
    {
      label: 'L',
      prop: 'l'
    },
    {
      label: 'E',
      prop: 'e'
    },
    {
      label: 'C',
      prop: 'c'
    },
    {
      label: 'D',
      prop: 'd'
    },
    {
      label: '风险等级',
      prop: 'level'
    }
  ]
}