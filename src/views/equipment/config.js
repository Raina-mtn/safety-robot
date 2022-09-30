//特种设备-表单
export const allFormColums =(that)=> {
  return [
    {
      label: '资产编码',
      prop: 'userNameLike',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    }, 
    {
      label: '设备名称',
      prop: 'roleId',
      el: 'input',
      placeholder: '请输入',
      clearable: true,
      span: 4
    },
    {
      prop:'btns',
      span:16
    }
  ]
}

//特种设备-表格
export const allColums = [
  {
    label: '资产编码',
    prop: 'id',
    fixed:true
  }, 
  {
    label:'设备基本信息',
    subList:[
      {
        label: '设备种类',
        prop: 'equipmentKind',
      }, 
      {
        label: '设备名称',
        prop: 'equipmentName',
      }, 
      {
        label: '型号',
        prop: 'version',
      }, 
      {
        label: '制造单位名称',
        prop: 'unitName',
      }, 
      {
        label: '出场编号',
        prop: 'num',
      }, 
      {
        label: '名义速度',
        prop: 'speed',
      }, 
      {
        label: '设备注册代码',
        prop: 'registrationCode',
      }, 
      {
        label: '内部编号',
        prop: 'internalNum',
      }, 
      {
        label: '使用证编号',
        prop: 'cardNum',
      }, 
      {
        label: '使用部门',
        prop: 'department',
      }, 
      {
        label: '管理部门',
        prop: 'managementDep',
      }, 
      {
        label: '设备使用地点',
        prop: 'equipmentLocation',
      }, 
      {
        label: '安全责任人',
        prop: 'safetyUser',
      }, 
      {
        label: '投入使用日期',
        prop: 'useTime',
      },
      {
        label: '设备状态',
        prop: 'equipmentType',
      },
      {
        label: '名义速度（额定速度）m/s',
        prop: 'titularSpeed',
      },
      {
        label: '提升高度m',
        prop: 'heightM',
      },
      {
        label: '额定起重量t',
        prop: 'weightT',
      },
      {
        label: '车牌号',
        prop: 'licensePlateNum',
      },
      {
        label: '材质',
        prop: 'texture',
      },
      {
        label: '设计压力Mpa',
        prop: 'pressureMp',
      },
      {
        label: '设计温度℃(壳程/管程）',
        prop: 'temperature',
      },
      {
        label: '介质(壳程/管程）',
        prop: 'neurogen',
      },
    ]
  },
  {
    label:'检验信息',
    subList:[
      {
        label: '检验单位',
        prop: 'checkUnit'
      }, 
      {
        label: '检验结论',
        prop: 'checkConclusion'
      }, 
      {
        label: '本次检验日期',
        prop: 'checkTime',
      }, 
      {
        label: '下次检验日期',
        prop: 'nextCheckTime',
      }, 
    ]
  },
  {
    label:'维保信息',
    subList:[
      {
        label: '维保单位',
        prop: 'maintenanceUnit'
      }, 
      {
        label: '本次维保日期',
        prop: 'maintenanceTime'
      }, 
      {
        label: '下次维保日期',
        prop: 'nextMaintenanceTime',
      }
    ]
  },
  {
    label:'限速器校验信息',
    subList:[
      {
        label: '校验单位',
        prop: 'checkoutUnit'
      }, 
      {
        label: '本次校验信息',
        prop: 'checkoutInfo'
      }, 
      {
        label: '下次校验信息',
        prop: 'nextCheckoutInfo',
      }
    ]
  },
  {
    label:'设备状态',
    subList:[
      {
        label: '超期未检验',
        prop: 'check',
      }, 
      {
        label: '超期未维保',
        prop: 'maintenance',
      }, 
      {
        label: '超期未月检',
        prop: 'monthly',
      }, 
    ]
  }
]

//更多筛选-表单
export const moreFormColums =(that)=> {
  return [
    {
      label: '设备种类',
      prop: 'userNameLike',
      el: 'select',
      placeholder: '请选择',
      clearable: true,
      span:8
    }, 
    {
      label: '设备使用地点',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span:8
    },
    {
      label: '出场编号',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span:8
    },
    {
      label: '使用证编号',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span:8
    },
    {
      label: '设备注册代码',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span:8
    },
    {
      label: '设备使用地点',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span:8
    },
    {
      label: '设备使用地点',
      prop: 'roleId',
      el: 'input',
      type:'textarea',
      placeholder: '请输入',
      clearable: true,
      span:8
    },
  ]
}
