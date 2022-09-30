//表单
export const noInputFormColums =(that)=> {
  return [
    {
      prop:'btns1',
      span:4
    }
  ]
}
export const inputFormColums1 =(that)=> {
  return [
    {
      label: '区域名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      label: '车站名称',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 8
    },
    {
      prop:'btns2',
      span:4
    }
  ]
}
export const inputFormColums2 =(that)=> {
  return [
    {
      label: '责任部门',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span: 8
    },
    {
      prop:'btns2',
      span:4
    }
  ]
}

//风险/事故类型-表格
export const typeColums = (that)=>{
  return [
    {
      label: '代码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//风险等级-表格
export const gradeColums = (that)=>{
  return [
    {
      label: '代码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '分数区间上',
      prop: 'gradeUp',
    }, 
    {
      label: '分数区间下',
      prop: 'gradeDown',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//等级频次配置-表格
export const frequencyColums = (that)=>{
  return [
    {
      label: '风险等级',
      prop: 'level',
    }, 
    {
      label: '频次',
      prop: 'frequency',
      width:800
    }, 
    {
      label: '单位',
      prop: 'unit',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//事件影响-表格
export const eventColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//隐患等级-表格
export const levelColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '备注',
      prop: 'remark',
      width:800
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//隐患等级-人员配置-表格
export const staffColums = (that)=>{
  return [
    {
      label: '隐患等级',
      prop: 'level',
    }, 
    {
      label: '岗位',
      prop: 'department',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//隐患类型-表格
export const hazardColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//检查级别-表格
export const checkColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//事故发生的可能性L-表格
export const lColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '分数',
      prop: 'grade',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//暴露于危险环境的频繁程度E-表格
export const eColums = (that)=>{
  return [
    {
      label: '编码',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '分数',
      prop: 'grade',
    }, 
    {
      label: '状态',
      prop: 'status',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//发生事故的后果严重程度C-表格
export const cColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '编码',
      prop: 'realName',
    }, 
    {
      label: '名称',
      prop: 'realName',
    }, 
    {
      label: '分数',
      prop: 'realName',
    }, 
    {
      label: '状态',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//一二级风险区域-车站-表格
export const stationColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '车站',
      prop: 'realName',
    }, 
    {
      label: '风险区域',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}

//部门负责人配置-表格
export const departmentColums = (that)=>{
  return [
    {
      label: '序号',
      prop: 'realName',
    }, 
    {
      label: '责任部门',
      prop: 'realName',
    }, 
    {
      label: '部门负责人',
      prop: 'realName',
    }, 
    {
      label: '操作',
      render(h,{row}) {
        return[
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}