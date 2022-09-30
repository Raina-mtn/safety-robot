import {isOrNot} from '@/utils/config'

//风险/事故类型-新增
export const typeFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//风险等级-新增
export const gradeFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '分数区间上',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '分数区间下',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//等级频次配置-新增
export const frequencyFormColums =()=> {
  return [
    {
      label: '风险等级',
      prop: 'userNameLike',
      el: 'select',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '频次',
      prop: 'userNameLike',
      el: 'input-number',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 6
    },
    {
      label: '单位',
      prop: 'userNameLike',
      el: 'select',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 14
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//事件影响-新增
export const eventFormColums =(that,event)=> {
  return [
    {
      label: '编码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//隐患等级-新增
export const levelFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '备注',
      prop: 'userNameLike',
      el: 'input',
      type:'textarea',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//隐患等级-人员配置-新增
export const staffFormColums =()=> {
  return [
    {
      label: '隐患等级',
      prop: 'userNameLike',
      el: 'select',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '岗位名称 ',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    }
  ]
}

//隐患类型-新增
export const hazardFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//检查级别-新增
export const checkFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//事故发生的可能性L-新增
export const lFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '分数',
      prop: 'userNameLike',
      el: 'input-number',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//暴露于危险环境的频繁程度E-新增
export const eFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '分数',
      prop: 'userNameLike',
      el: 'input-number',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//发生事故的后果严重程度C-新增
export const cFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '分数',
      prop: 'userNameLike',
      el: 'input-number',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//风险区域-新增
export const areaFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '责任人',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入员工号',
      clearable: true,
      span: 20
    },
    {
      label: '业务板块',
      prop: 'userNameLike',
      el: 'select',
      required:true,
      placeholder: '请选择',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}

//作业项目-新增
export const projectFormColums =(that,event)=> {
  return [
    {
      label: '代码',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      disabled:event === 'edit',
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '名称',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '责任人',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入员工号',
      clearable: true,
      span: 20
    },
    {
      label: '作业岗位',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '作业时段',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
    {
      label: '业务板块',
      prop: 'userNameLike',
      el: 'select',
      required:true,
      placeholder: '请选择',
      clearable: true,
      span: 20
    },
  ]
}

//一二级风险区域-车站-新增
export const stationColums =()=> {
  return [
    {
      label: '车站',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入关键词',
      clearable: true,
      span: 20
    },
    {
      label: '风险区域',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入关键词',
      clearable: true,
      span: 20
    }
  ]
}

//部门负责人配置-新增
export const departmentColums =()=> {
  return [
    {
      label: '部门',
      prop: 'userNameLike',
      el: 'select',
      required:true,
      placeholder: '请选择',
      clearable: true,
      span: 20
    },
    {
      label: '责任人',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入员工号',
      clearable: true,
      span: 20
    }
  ]
}

//轨行区监督人维护-新增
export const superviseColums =()=> {
  return [
    {
      label: '区域',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入',
      clearable: true,
      span: 20
    },
    {
      label: '监督人',
      prop: 'userNameLike',
      el: 'input',
      required:true,
      placeholder: '请输入员工号',
      clearable: true,
      span: 20
    },
    {
      label: '状态',
      prop: 'userNameLike',
      el: 'radio',
      dataList:isOrNot,
      required:true,
      clearable: true,
      span: 20
    },
  ]
}