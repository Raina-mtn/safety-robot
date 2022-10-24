import {apiGetlineListMock} from '@/api/interface'
export const infoList = [{
  label:'机器人数',
  value:0
}]
export const formColums = [{
  label: '线路:',
  prop: 'roleId',
  el: 'wSelect',
  placeholder: '请选择',
  clearable: true,
  span: 10,
  getList:apiGetlineListMock,
  'value-key':{
    label: 'label', 
    value: 'value'
  },
  multiple: true
},{
  label: '起止时间:',
  prop: 'date',
  placeholder: '请选择',
  clearable: true,
  span: 10,
},{
  prop:'btn',
  span: 4
}]

export const  tableColumns = [{
  label: '线路名',
  prop: 'name'
},{
  label: '区域',
  prop: 'lineName'
},{
  label: '机器人',
  prop: 'robotNum'
},{
  label: '故障类型',
  prop: 'defectNum'
},{
  label: '提报时间',
  prop: 'ce'
},{
  label: '完成时间',
  prop: 'ce2'
}]