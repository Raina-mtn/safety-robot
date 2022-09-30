//待办、已办 故障工单
export const riskPersonData = [
  {
    id:'GZ20220805312',
    apperance:'公共通信设备室空调制冷效果较差 ',
    discoverUser:'张三',
    riskType:'C',
    reportTime:'2022-08-12 12:23:43',
    status:'工班'
  }
]
//待办、已办 事件工单
export const eventPersonData = [
  {
    id:'SJ20220805312',
    overview:'音乐学院站下行155站台门无法打开 ',
    discoverUser:'蔡红爱',
    influence:'',
    line:'6号线',
    station:'音乐学院',
    reportTime:'2022-08-12 12:23:43',
    status:'OCC调度'
  }
]
//待办、已办 变更作业风险
export const operationPersonData = [
  {
    type:'测试',
    reason:'测试',
    time:'测试',
    reportUser:'测试',
    status:'测试',
  }
]
//待办、已办 变更区域风险
export const areaPersonData = [
  {
    type:'测试',
    reason:'测试',
    time:'测试',
    reportUser:'测试',
    status:'测试',
  }
]
//待办、已办 检修工单
export const checkPersonData = [
  {
    formId:'JX20220805312',
    id:'100004896-JJ-006',
    describe:'测试',
    createUser:'测试',
    createTime:'测试',
    status:'测试',
    name:'接触网全面检 ',
    quota:'',
    major:'',
    assetsId:'1233254',
    assetsName:'柔性接触悬挂设备',
    line:'6号线',
    group:'1号线接触网综合工班'
  }
]
//待办、已办 临时性工单
export const temporaryPersonData = [
  {
    id:'LS20220805312',
    describe:'七堡停车场牵混所102六氟化硫气压低',
    createUser:'张三',
    createTime:'2022-08-05 11:23:55',
    status:'草稿'
  }
]
//待办、已办 普查整改
export const surveyPersonData = [
  {
    id:'PCZG20220805312',
    describe:'公共通信设备室墙面插孔检查',
    createUser:'张三',
    createTime:'2022-08-05 11:23:55',
    status:'草稿'
  }
]
//待办、已办 延期申请
export const extensionPersonData = [
  {
    id:'YQ20220805312',
    extensionId:'21435644w',
    reason:'测试',
    extensionTime:'2022-08-05 11:23:55',
    applicant:'张三',
    status:'草稿'
  }
]
//待办、已办 故障报告
export const reportPersonData = [
  {
    reportId:'GZBG20220805312',
    riskId:'21435644w',
    createTime:'2022-08-05 11:23:55'
  }
]

//工单查询 故障工单
export const riskFormData = [
  {
    id:'GZ20220805312',
    apperance:'公共通信设备室空调制冷效果较差 ',
    discoverDep:'1号线通信',
    discoverUser:'张三',
    reportTime:'2022-08-12 12:23:43',
    status:'工班'
  }
]
//工单查询 检修工单
export const checkFormData = [
  {
    id:'JX20220805312',
    planId:'100004896-JJ-006 ',
    checkName:'接触网全面检',
    line:'1号线',
    group:'1号线接触网综合工班',
  }
]
//工单查询 临时性工单
export const temporaryFormData = [
  {
    id:'LS20220805312',
    apperance:'七堡停车场牵混所102六氟化硫气压低',
    line:'4号线',
    type:'临时工单',
    status:'草稿',
  }
]
//工单查询 普查整改工单
export const surveyFormData = [
  {
    id:'PCZG20220805312',
    apperance:'公共通信设备室墙面插孔检查',
    type:'普查整改工单',
    status:'草稿',
  }
]
//工单查询 事件工单
export const eventFormData = [
  {
    id:'SJ20220805312',
    apperance:'音乐学院站下行155站台门无法打开',
    reportDep:'音乐学院站',
    reportUser:'蔡红爱',
    line:'6号线',
    station:'音乐学院',
    reportTime:'2022-08-06 06:40:15',
    status:'OCC调度',
  }
]
//工单查询 隐患工单
export const faultFormData = [
  {
    id:'YH20220805312',
    apperance:'3号线屏留风井所有门禁网格，开荒至今仍然不能使用',
    type:'设备设施',
    level:'一般隐患',
    checkLevel:'个人',
    reportUser:'张三',
    reportDep:'屏峰站',
    areaDep:'屏峰站',
    reportTime:'2022-08-05 11:05:27',
    status:'待确认草稿',
  }
]

//检修计划
export const maintenData = [
  {
    id:'100009525_YJ',
    name:'风机及控制箱/柜',
    quota:'16号线通风空调系统风机及控制箱/柜月检',
    cycle:'1月',
    startTime:'2022-10-27'
  }
]

//年度检查计划
export const safetyYearData = [
  {
    id:'001',
    startMonth:'2021-12',
    level:'总部/生产公司级',
    title:'测试',
    department:'系统保障总部研发管理部',
    responsible:'张三',
    status:'未执行',
    sendTime:'2021-12-27 09:52:31'
  }
]
//非年度检查计划
export const safetyNoYearData = [
  {
    id:'001',
    startMonth:'2021-12',
    level:'总部/生产公司级',
    title:'测试',
    department:'系统保障总部研发管理部',
    responsible:'张三',
    status:'未执行',
    sendTime:'2021-12-27 09:52:31'
  }
]

//特种设备
export const equipmentData = [
  {
    id:'100000',
    equipmentKind:'垂直电梯',
    equipmentName:'电梯',
    num:'FFFF2111',
    unitName:'奥的斯机电电梯有限公司',
    cardNum:'梯11浙AJ5023(19)',
    registrationCode:'30000',
    internalNum:'6#',
    version:'TKJ1350/1.75',
    department:'xx公司/xx部门/xx中心/xx工班',
    managementDep:'xx公司/xx部门/xx中心/xx工班',
    safetyUser:'张三',
    useTime:'2012-04-30',
    equipmentType:'在用',
    titularSpeed:'1.75.0m/s',
    checkUnit:'杭州市江干区市场监督管理局',
    checkConclusion:'合格',
    checkTime:'2022-04-24',
    nextCheckTime:'2023-07-25',
    maintenanceUnit:'奥的斯机电电梯有限公司',
    maintenanceTime:'2022-07-30',
    nextMaintenanceTime:'2022-08-13',
    checkoutUnit:'奥的斯机电电梯有限公司'

  }
]

//基础数据 资产
export const assetsBasicData = [
  {
    id:'ZC244124001',
    name:'屏蔽门构架',
    location:'风险区域/16号线/青山湖站台/站台门安全隔离区/上行站台门',
    status:'1'
  }
]
//基础数据 资产 树
export const assetsBasicTreeData = [
  {
    name: '屏蔽门系统',
    subList: [
      {
        name: '门体',
        subList: [
          {
            name: '屏蔽门构架'
          },
          {
            name: '端门'
          },
          {
            name: '应急门'
          },
          {
            name: '固定门'
          },
          {
            name: '滑动门'
          },
          {
            name: '司机门'
          },
        ]
      },
      {
        name: '控制设备'
      },
  ]
  }
]
//基础数据 故障类型
export const typeBasicData = [
  {
    assets:'100000103',
    typeDescribe:'隧道渗漏水',
    workTime:'240',
    degree:'1'
  }
]
//基础数据 处理方式
export const modeBasicData = [
  {
    assets:'100000103',
    typeDescribe:'注浆堵漏',
  }
]
//基础数据 维修定额列表
export const maintenBasicData = [
  {
    id:'1000000',
    project:'2号线段场通风空调系统大系统风机月检',
    status:'启用'
  }
]

//双重预防 风险/事故类型
export const typeDoubleData = [
  {
    id:'1',
    name:'物体打击',
    status:'可用'
  },
  {
    id:'2',
    name:'车辆伤害',
    status:'可用'
  },
  {
    id:'3',
    name:'机械伤害',
    status:'可用'
  },
  {
    id:'4',
    name:'起重伤害',
    status:'可用'
  },
]
//双重预防 风险等级
export const gradeDoubleData = [
  {
    id:'1',
    name:'重大风险(I级)',
    gradeUp:'99999',
    gradeDown:'320',
    status:'可用'
  },
  {
    id:'2',
    name:'较大风险(II级)',
    gradeUp:'320',
    gradeDown:'160',
    status:'可用'
  },
  {
    id:'3',
    name:'一般风险(II级)',
    gradeUp:'160',
    gradeDown:'70',
    status:'可用'
  },
  {
    id:'4',
    name:'较小风险(IV级) ',
    gradeUp:'70',
    gradeDown:'20',
    status:'可用'
  },
  {
    id:'5',
    name:'稍有风险(V级)',
    gradeUp:'20',
    gradeDown:'0',
    status:'可用'
  },
]
//双重预防 等级频次配置
export const frequencyDoubleData = [
  {
    level:'1',
    frequency:'重大风险(I级) ，风险导致事故的后果或影响特别重大，需采取特别严格的管控和应急措施，发生事故时按应急预案处置',
    unit:'月',
    status:'可用'
  },
  {
    level:'1',
    frequency:'较大风险(1级) ，风险导致事故的后果或影响重大，需严格管控，制定相应的应急预案	',
    unit:'季',
    status:'可用'
  },
  {
    level:'6',
    frequency:'一般风险(II级),风险导致事故的后果或影响较大,需加大管控力度,制定应急防范措施',
    unit:'月',
    status:'可用'
  },
  {
    level:'1',
    frequency:'较小风险(IV级)， 通过管 控确保维持安全状态',
    unit:'季',
    status:'可用'
  },

]
//双重预防 事件影响
export const eventDoubleData = [
  {
    id:'1',
    name:'列车安全',
    status:'禁用'
  },
  {
    id:'2',
    name:'乘客服务',
    status:'可用'
  },
  {
    id:'3',
    name:'行车安全',
    status:'可用'
  },
  {
    id:'4',
    name:'乘客安全',
    status:'可用'
  },
]
//双重预防 隐患等级
export const levelDoubleData = [
  {
    id:'1',
    name:'一般隐患',
    remark:'是指除重大隐患、较大隐患外，其他可能影响运营安全的隐患，一般具有危害或治理难度较小，能够快速消除等特点。运营公司一般及以下风险管控措施的弱化、失效和缺失。',
    status:'可用'
  },
  {
    id:'2',
    name:'较大隐患',
    remark:'是指除重大隐患外，可能直接导致分公司《安全生产事故调查管理办法》中规定的险性事故、事件、事苗发生的隐患或需由集团公司、运营公司安委会协调解决的事故隐患。运营公司重大或较大风险管控措施的弱化、失效和缺失。 1个月内在同一总部或生产公司发现3处及以上相同的，且影响行车、消防或可能导致人员伤害的一般隐患，升级为较大隐患处理。',
    status:'可用'
  },
  {
    id:'3',
    name:'重大隐患 ',
    remark:'重大隐患是指可能直接导致安全生产事故或列车脱轨、列车冲突、列车撞击、列车挤岔、火灾、桥隧结构坍塌、车站和轨行区淹水倒灌、大面积停电、客流踩踏等运营险性事件发生的隐患，一般具有危害和治理难度大、易造成全线/区段停运或封闭车站、关键设施设备长时间停止运行、需要较长时间治理方能排除、本单位自身难以排除等特点。',
    status:'可用'
  },

]
//双重预防 隐患等级-人员配置
export const staffDoubleData = [
  {
    level:'一般级',
    department:'列车安全',
  },

]
//双重预防 隐患类型
export const hazardDoubleData = [
  {
    id:'1',
    name:'消防安全',
    status:'可用',
  },
  {
    id:'2',
    name:'治安反恐',
    status:'可用',
  },
  {
    id:'3',
    name:'职业健康管理',
    status:'可用',
  },
  {
    id:'4',
    name:'安全宣教',
    status:'可用',
  },
]
//双重预防 检查级别
export const checkDoubleData = [
  {
    id:'1',
    name:'上级单位',
    status:'可用',
  },
  {
    id:'2',
    name:'运营公司级',
    status:'可用',
  },
  {
    id:'3',
    name:'总部/生产公司级',
    status:'可用',
  },
  {
    id:'4',
    name:'中心级',
    status:'可用',
  },
  {
    id:'5',
    name:'班组级',
    status:'可用',
  },
  {
    id:'6',
    name:'个人',
    status:'可用',
  },
  {
    id:'7',
    name:'部门级',
    status:'可用',
  },
]
//双重预防 事故发生的可能性L
export const lDoubleData = [
  {
    id:'1',
    name:'完全可以预料(10分)',
    grade:'10',
    status:'可用',
  },
  {
    id:'2',
    name:'相当可能(6分)',
    grade:'6',
    status:'可用',
  },
  {
    id:'3',
    name:'可能，但不经常(3分)',
    grade:'3',
    status:'可用',
  },
  {
    id:'4',
    name:'可能性小，完全意外(1分) ',
    grade:'1',
    status:'可用',
  },
  {
    id:'5',
    name:'很不可能，可以设想(0.5分)',
    grade:'0.5',
    status:'可用',
  },
  {
    id:'6',
    name:'极不可能(0.2分)',
    grade:'0.2',
    status:'可用',
  },
  {
    id:'7',
    name:'实际不可能(0.1分)',
    grade:'0.1',
    status:'可用',
  },
]
//双重预防 暴露于危险环境的频繁程度E
export const eDoubleData = [
  {
    id:'1',
    name:'连续暴露(10分)',
    grade:'10',
    status:'可用',
  },
  {
    id:'2',
    name:'每天工作时间内暴露(6分) ',
    grade:'6',
    status:'可用',
  },
  {
    id:'3',
    name:'每周一次或偶然暴露(3分)',
    grade:'3',
    status:'可用',
  },
  {
    id:'4',
    name:'每月一次暴露(2分) ',
    grade:'2',
    status:'可用',
  },
  {
    id:'5',
    name:'每年几次暴露(1分)',
    grade:'1',
    status:'可用',
  },
  {
    id:'6',
    name:'非常罕见暴露(0.5分)',
    grade:'0.5',
    status:'可用',
  }
]
//双重预防 风险区域
export const areaDoubleData = [
  {
    id:'0200001010114',
    name:'卫生间',
    responsible:'张三',
    responsibleDep:'乘务-中心',
    responsibleSta:'安全管理工程师',
    part:'运行环境',
    status:'可用',
  }
]
//双重预防 风险区域 树
export const areaDoubleTreeData = [
  {
    name: '风险区域',
    subList: [
      {
        name: '七堡控制中心',
        subList: [
          {
            name: '站台',
            subList: [
              {
                name: 'A端设备区',
                subList: [
                  {
                    name: '卫生间'
                  },
                  {
                    name: '强电间'
                  },
                  {
                    name: '气瓶室'
                  },
                  {
                    name: '排热风室'
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: '2号线蜀山车辆段'
      },
  ]
  }
]

//数据处理 
export const handleData = [
  {
    area:'七堡控制中心',
    responsible:'张三',
    department:'总调室',
    type:'治安事件',
    source:'不法分子',
    element:'不法分子实施偷盗行为',
    meausre:'进出确保更衣室门锁闭；',
    station:'调度总部安全管理工程师',
    riskResponsible:'',
  }
]

//用户信息  调度中心
export const dispatchUserData = [
  {
    id:'001',
    name:'张三',
    dispatch:'测试',
    status:'NORMAL'
  }
]
//用户信息  班组
export const groupUserData = [
  {
    id:'001',
    name:'张三',
    dispatch:'测试',
    group:'测试',
    status:'NORMAL'
  }
]
