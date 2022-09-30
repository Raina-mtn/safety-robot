//作业-表单
export const operationFormColums =()=> {
  return [
    {
      label: '公司',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 6
    },
    {
      label: '岗位',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 6
    },
    {
      label: '作业',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:6
    }
  ]
}

//作业-表格
export const  operationColums = ()=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '排查对象',
      prop: 'realName',
    }, 
    {
      label: '排查内容',
      prop: 'realName',
    }
  ]
}

//区域-表单
export const areaFormColums =()=> {
  return [
    {
      label: '公司',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 6
    },
    {
      label: '岗位',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 6
    },
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'select',
      clearable: true,
      span: 6
    },
    {
      prop:'btns',
      span:6
    }
  ]
}

//区域-表格
export const  areaColums = ()=>{
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
      label: '排查对象',
      prop: 'realName',
    }, 
    {
      label: '排查内容',
      prop: 'realName',
    }
  ]
}
