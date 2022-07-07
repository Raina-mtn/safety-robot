//表单
export const noInputFormColums =(that)=> {
  return [
    {
      prop:'btns',
      span:16
    }
  ]
}
export const inputFormColums =(that)=> {
  return [
    {
      label: '原责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      label: '新责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 16
    },
    {
      prop:'btns',
      span:4
    }
  ]
}

//风险区域-表格
export const areaColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编号',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '责任人',
      prop: 'realName',
    }, 
    {
      label: '责任部门',
      prop: 'realName',
    }, 
    {
      label: '责任岗位',
      prop: 'realName',
    }, 
    {
      label: '业务板块',
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
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//作业项目-表格
export const projectColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编号',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '责任人',
      prop: 'realName',
    }, 
    {
      label: '责任部门',
      prop: 'realName',
    }, 
    {
      label: '责任岗位',
      prop: 'realName',
    }, 
    {
      label: '业务板块',
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
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}

//轨行区监督人维护-表格
export const superviseColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '监督人工号',
      prop: 'realName',
    }, 
    {
      label: '监督人姓名',
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
          <i class="el-icon-edit"></i>
        )
      },
    }
  ]
}