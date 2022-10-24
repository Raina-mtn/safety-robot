const station = [{
  label:'A场站',
  value:'a'
},{
  label:'B场站',
  value:'b'
},{
  label:'C场站',
  value:'c'
},{
  label:'D场站',
  value:'d'
}]
export const formColums = ()=>{
  return [{
    label: '场站',
    prop: 'userNameLike',
    el: 'select',
    placeholder: '请选择',
    clearable: true,
    span: 4,
    filterable:true,
    options:station
  },{
    prop: 'btns',
    span: 4,
  },]
}