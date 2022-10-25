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
const robotList = [{
  label:'防爆机器人',
  value:'a'
},{
  label:'线路巡检机器人',
  value:'b'
},{
  label:'360机器人',
  value:'c'
}]
export const formColums = [{
  label: '场站',
  prop: 'station',
  el: 'select',
  placeholder: '请选择',
  clearable: true,
  span: 4,
  filterable:true,
  options:station
},{
  label: '机器人',
  prop: 'robot',
  el: 'select',
  placeholder: '请选择',
  clearable: true,
  span: 4,
  options:robotList
},{
  label: 'IP',
  prop: 'ip',
  el: 'input',
  placeholder: '请输入',
  clearable: true,
  span: 4,
},{
  prop: 'btns',
  span: 4,
}]
export const  tableColums = (that)=>{
  return [
    {
      label: '站点',
      prop: 'station',
    }, 
    {
      label: '机器人',
      prop: 'robot',
    }, 
    {
      label: 'IP',
      prop: 'ip',
    },
    {
      label: '操作',
      render(h,{row}) {
        return [
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog('edit',row)}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    },
  ]
} 
export const dialogColums = [{
  label: '场站',
  prop: 'station',
  el: 'select',
  placeholder: '请选择',
  clearable: true,
  span: 20,
  filterable:true,
  options:station
},{
  label: '机器人',
  prop: 'robot',
  el: 'select',
  placeholder: '请选择',
  clearable: true,
  span: 20,
  options:robotList
},{
  label: 'IP',
  prop: 'ip',
  el: 'input',
  placeholder: '请输入',
  clearable: true,
  span: 20,
}]