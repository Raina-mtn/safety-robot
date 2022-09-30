import {locationList,lineOptions} from '@/utils/config'
//事件提报
export const incidentColums =(that)=> {
  return [
    {
      label: '事件发现人',
      prop: 'dicoverUser',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8
    },
    {
      label: '发现人电话',
      prop: 'dicoverNum',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '事件报告人',
      prop: 'reportUser',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '报告人部门',
      prop: 'reportDepartment',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '线路',
      prop: 'line',
      el: 'select',
      options:lineOptions,
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '车/站/段/所',
      prop: 'location',
      el: 'select',
      options:locationList,
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '事件概述',
      prop: 'Overview',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      required:true,
      span: 16,
    },
    {
      label: '可能的影响',
      prop: 'possibly',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      required:true,
      span: 8,
    },
    {
      label: '事件创建时间',
      prop: 'creatTime',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      required:true,
      disabled:true,
      span: 8,
    },
    {
      label: '事件提报时间',
      prop: 'reportTime',
      el: 'input',
      placeholder: '自动生成',
      clearable: true,
      required:true,
      disabled:true,
      span: 8,
    },
    {
      label:'资产',
      prop: 'assets',
      span: 20,
    },
    {
      label:'区域',
      prop: 'area',
      span: 20,
    },
    {
      label:'上传图片',
      prop: 'picture',
      span: 24,
    },
    {
      prop: 'btns',
      span: 24,
    },
  ]
}

//事件提报-资产
export const assetsColums = (that)=>{
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
          <el-link type="primary" underline={false} onClick={() => {that.tableData.splice(row.$index, 1)}}><i class="el-icon-delete"></i></el-link>
        )
      },
    },
  ]
}

//事件提报-区域
export const areaColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name'
    }, 
    {
      label: '责任人',
      prop: 'responsible'
    },
    {
      label: '责任部门',
      prop: 'responsibleDep'
    },
    {
      label: '责任岗位',
      prop: 'responsibleStation'
    },
    {
      label: '状态',
      prop: 'status'
    },
    {
      label: '操作',
      render(h,row) {
        return (
          <el-link type="primary" underline={false} onClick={() => {that.tableData.splice(row.$index, 1)}}><i class="el-icon-delete"></i></el-link>
        )
      },
    },
  ]
}