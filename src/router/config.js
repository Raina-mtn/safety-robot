import Layout from '@/components/layout/index.vue';

// 路由白名单
export const whiteList = ['/login', '/home'];

// 默认路由
export const constantRoutes = [
  // {
  //   path: '/login',
  //   component: () => import('@/views/login/index.vue')
  // },
  // {
  //   path: '/404',
  //   component: () => import('@/views/404.vue')
  // },
  {
    path: '/',
    component: Layout,
    name: 'index',
    redirect: '/person',
    children: []
  }
];

export const asyncRoutes = [
  {
    path: '/person',
    name: 'Person',
    code: 'Person',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '个人工作台', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/start',
        code: 'Start',
        name: 'Start',
        component: () => import('@/views/person/start/index.vue'),
        meta: { title: '启动流程' },
      },
      {
        path: '/risk',
        code: 'Risk',
        name: 'Risk',
        component: () => import('@/views/person/start/riskTicket/index.vue'),
        meta: { title: '故障修工单'},
        hidden:true
      },
      {
        path: '/plan',
        code: 'Plan',
        name: 'Plan',
        component: () => import('@/views/person/start/maintenPlan/index.vue'),
        meta: { title: '检修计划' },
        hidden:true
      },
      {
        path: '/event',
        code: 'Event',
        name: 'Event',
        component: () => import('@/views/person/start/eventReport/index.vue'),
        meta: { title: '事件提报' },
        hidden:true
      },
      {
        path: '/area',
        code: 'Area',
        name: 'Area',
        component: () => import('@/views/person/start/areaRisk/index.vue'),
        meta: { title: '变更区域风险清单' },
        hidden:true
      },
      {
        path: '/operation',
        code: 'Operation',
        name: 'Operation',
        component: () => import('@/views/person/start/operationRisk/index.vue'),
        meta: { title: '变更作业风险清单' },
        hidden:true
      },
      {
        path: '/other',
        code: 'Other',
        name: 'Other',
        component: () => import('@/views/person/start/noFault/index.vue'),
        meta: { title: '非故障工单' },
        hidden:true,
        props(route) {
          const { type = '' } = route.params;
          return {
            type: type === ':type' ? '' : type
          };
        }
      },
      {
        path: '/extension',
        code: 'Extension',
        name: 'Extension',
        component: () => import('@/views/person/start/extensionRequest/index.vue'),
        meta: { title: '故障修复延期申请' },
        hidden:true
      },
      {
        path: '/report',
        code: 'Report',
        name: 'Report',
        component: () => import('@/views/person/start/faultReport/index.vue'),
        meta: { title: '生成故障报告' },
        hidden:true
      },
      {
        path: '/pending',
        code: 'Pending',
        name: 'Pending',
        component: () => import('@/views/person/pending/index.vue'),
        meta: { title: '待办事项' },
      },
      {
        path: '/pendingTask',
        code: 'PendingTask',
        name: 'PendingTask',
        component: () => import('@/views/person/pending/components/index.vue'),
        meta: { activeMenu:'/pending'},
        hidden:true,
        props(route) {
          const { type = '' } = route.params;
          return {
            type: type === ':type' ? '' : type
          };
        }
      },
      {
        path: '/done',
        code: 'Done',
        name: 'Done',
        component: () => import('@/views/person/done/index.vue'),
        meta: { title: '已办事项' },
      },
      {
        path: '/doneTask',
        code: 'DoneTask',
        name: 'DoneTask',
        component: () => import('@/views/person/done/components/index.vue'),
        meta: { activeMenu:'/pending'},
        hidden:true,
        props(route) {
          const { type = '' } = route.params;
          return {
            type: type === ':type' ? '' : type
          };
        }
      },
    ]
  },
  {
    path: '/form',
    code: 'Form',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '工单查询', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/riskForm',
        name: 'RiskForm',
        code: 'RiskForm',
        component: () => import('@/views/form/index.vue'),
        meta: { title: '故障工单' },
        props(route) {
          return {
            type: 'risk'
          };
        }
      },
      {
        path: '/checkForm',
        name: 'CheckForm',
        code: 'CheckForm',
        component: () => import('@/views/form/index.vue'),
        meta: { title: '检修工单' },
        props(route) {
          return {
            type: 'check'
          };
        }
      },
      {
        path: '/temporaryForm',
        name: 'TemporaryForm',
        code: 'TemporaryForm',
        component: () => import('@/views/form/index.vue'),
        meta: { title: '临时性工单' },
        props(route) {
          return {
            type: 'temporary'
          };
        }
      },
      {
        path: '/surveyForm',
        name: 'SurveyForm',
        code: 'SurveyForm',
        component: () => import('@/views/form/index.vue'),
        meta: { title: '普查整改工单' },
        props(route) {
          return {
            type: 'survey'
          };
        }
      },
      {
        path: '/eventForm',
        name: 'EventForm',
        code: 'EventForm',
        component: () => import('@/views/form/index.vue'),
        meta: { title: '事件工单' },
        props(route) {
          return {
            type: 'event'
          };
        }
      },
      // {
      //   path: '/faultForm',
      //   name: 'FaultForm',
      //   code: 'FaultForm',
      //   component: () => import('@/views/form/index.vue'),
      //   meta: { title: '隐患工单' },
      //   props(route) {
      //     return {
      //       type: 'fault'
      //     };
      //   }
      // },
    ]
  },
  {
    path: "/maintenPlan",
    code: "MaintenPlan",
    component: () => import("@/views/mainten/index.vue"),
    meta: { title: "检修计划查询", icon: "icon-shouye-shouye" },
  },
  {
    path: '/safety',
    code: 'Safety',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '安全检查计划', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/year',
        code: 'year',
        component: () => import('@/views/safety/yearPlan/index.vue'),
        meta: { title: '年度检查计划' }
      },
      {
        path: '/noyear',
        code: 'Noyear',
        component: () => import('@/views/safety/noYearPlan/index.vue'),
        meta: { title: '非年度检查计划' }
      },
    ]
  },
  {
    path: '/dataAnalyse',
    code: 'DataAnalyse',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '数据分析', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/faultDetails',
        code: 'FaultDetails',
        component: () => import('@/views/dataAnalyse/index.vue'),
        meta: { title: '故障明细表' },
        props(route) {
          return {
            type: 'fault'
          };
        }
      },
      {
        path: '/areaDetails',
        code: 'AreaDetails',
        component: () => import('@/views/dataAnalyse/index.vue'),
        meta: { title: '区域风险' },
        props(route) {
          return {
            type: 'area'
          };
        }
      },
      {
        path: '/operationDetails',
        code: 'OperationDetails',
        component: () => import('@/views/dataAnalyse/index.vue'),
        meta: { title: '作业风险' },
        props(route) {
          return {
            type: 'area'
          };
        }
      },
      {
        path: '/areaChange',
        code: 'AreaChange',
        component: () => import('@/views/dataAnalyse/index.vue'),
        meta: { title: '区域风险变更清单' },
        props(route) {
          return {
            type: 'areaChange'
          };
        }
      },
      {
        path: '/operationChange',
        code: 'OperationChange',
        component: () => import('@/views/dataAnalyse/index.vue'),
        meta: { title: '作业风险变更清单' },
        props(route) {
          return {
            type: 'operationChange'
          };
        }
      },
      // {
      //   path: '/dangerDetails',
      //   code: 'DangerDetails',
      //   component: () => import('@/views/dataAnalyse/dangerDetails.vue'),
      //   meta: { title: '隐患工单明细表' }
      // },
    ]
  },
  {
    path: '/manual',
    code: 'Manual',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '隐患排查治理', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/manualArea',
        code: 'ManualArea',
        component: () => import('@/views/manual/index.vue'),
        meta: { title: '隐患排查手册' }
      },
      // {
      //   path: '/manualOperation',
      //   code: 'ManualOperation',
      //   component: () => import('@/views/manual/operation.vue'),
      //   meta: { title: '作业' }
      // },
      {
        path: "/handle",
        code: "Handle",
        component: () => import("@/views/dataHandle/index.vue"),
        meta: { title: "安全隐患排查"},
      },
    ]
  },
  {
    path: "/equipment",
    code: "Equipment",
    component: () => import("@/views/equipment/index.vue"),
    meta: { title: "特种设备", icon: "icon-shouye-shouye" },
  },
  {
    path: '/basic',
    code: 'Basic',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '基础数据', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/assets',
        code: 'Assets',
        component: () => import('@/views/basicData/assets/index.vue'),
        meta: { title: '资产' }
      },
      {
        path: '/faultType',
        code: 'FaultType',
        component: () => import('@/views/basicData/faultType/index.vue'),
        meta: { title: '故障类型' }
      },
      // {
      //   path: '/safetyPlan',
      //   code: 'SafetyPlan',
      //   component: () => import('@/views/basicData/safetyPlan/index.vue'),
      //   meta: { title: '安全计划' }
      // },
      {
        path: '/maintenQuota',
        code: 'MaintenQuota',
        component: () => import('@/views/basicData/maintenQuota/index.vue'),
        meta: { title: '维修定额' }
      },
      {
        path: '/doubleDefense',
        code: 'DoubleDefense',
        component: () => import('@/views/basicData/doubleDefense/index.vue'),
        meta: { title: '双重预防' }
      },
    ]
  },
  {
    path: '/user',
    code: 'User',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '用户信息', icon: 'icon-shouye-shouye' },
    children: [
      {
        path: '/personnel',
        code: 'Personnel',
        component: () => import('@/views/userInfo/personnel/index.vue'),
        meta: { title: '用户管理' }
      },
      {
        path: '/role',
        code: 'Role',
        component: () => import('@/views/userInfo/role/index.vue'),
        meta: { title: '角色管理' }
      }
    ]
  },
];
