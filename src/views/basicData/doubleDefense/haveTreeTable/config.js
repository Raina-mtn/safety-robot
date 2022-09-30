//表单
export const noInputFormColums =(that)=> {
  return [
    {
      prop:'btns1',
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
      placeholder: '请输入员工号',
      clearable: true,
      span: 8
    },
    {
      label: '新责任人',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入员工号',
      clearable: true,
      span: 8
    },
    {
      prop:'btns2',
      span:8
    }
  ]
}

//风险区域-表格
export const areaColums = (that)=>{
  return [
    {
      label: '编号',
      prop: 'id',
    }, 
    {
      label: '名称',
      prop: 'name',
    }, 
    {
      label: '责任人',
      prop: 'responsible',
    }, 
    {
      label: '责任部门',
      prop: 'responsibleDep',
    }, 
    {
      label: '责任岗位',
      prop: 'responsibleSta',
    }, 
    {
      label: '业务板块',
      prop: 'part',
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
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
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
        return[
          <el-link type="primary" underline={false} onClick={() => {that.$refs.addDialog.openDialog(that.activeName,'edit')}}><i class="el-icon-edit"></i></el-link>,
          <el-divider direction="vertical"></el-divider>,
          <el-link type="primary" underline={false} onClick={() => {}}><i class="el-icon-delete"></i></el-link>,
        ]
      },
    }
  ]
}