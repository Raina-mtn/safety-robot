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
    redirect: '/monitor',
    children: []
  }
];

export const asyncRoutes = [
  {
    path: '/monitor',
    name: 'Monitor',
    code: 'Monitor',
    component: () => import('@/views/person/start/index.vue'),
    meta: { title: '启动流程', icon: 'icon-shouye-shouye' }
  },
  {
    path: '/task',
    code: 'Task',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '个人工作台', icon: 'icon-shouye-shouye' },
    children: [
      {
        code: 'Manager',
        path: '/manager',
        component: () => import('@/views/basicData/doubleDefense/index'),
        meta: { title: '双重预防' }
      },
      {
        code: 'Audit',
        name: 'Audit',
        path: '/audit',
        component: () => import('@/views/person/start/maintenPlan.vue'),
        meta: { title: '编制检修计划' },
        // props(route) {
        //   const { id = '' } = route.params;
        //   return {
        //     id: id === ':id' ? ' ' : id
        //   };
        // }
      },
      {
        code: 'Import',
        path: '/import',
        component: () => import('@/views/person/start/maintenPlan.vue'),
        hidden: true,
        meta: { title: '编制检修计划'}
      }
    ]
  },
  {
    path: '/data-center',
    code: 'DataCenter',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '数据中心', icon: 'icon-shouye-shouye' },
    children: [
      {
        code: 'Stat',
        path: '/stat',
        component: () => import('@/views/person/start/incidentReporting.vue'),
        meta: { title: '事件提报' }
      },
      {
        code: 'History',
        path: '/history',
        component: () => import('@/views/person/start/areaRisk.vue'),
        meta: { title: '变更风险区域清单' }
      }
    ]
  },
  {
    path: '/indicator',
    code: 'Indicator',
    component: () => import('@/views/person/start/operationRisk.vue'),
    meta: { title: '变更风险作业清单', icon: 'icon-shouye-shouye' }
  },
  {
    path: '/permission',
    code: 'Permission',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '待办事项', icon: 'icon-shouye-shouye' },
    children: [
      {
        code: 'Role',
        path: '/role',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '非故障修工单' }
      },
      {
        code: 'User',
        path: '/user',
        component: () => import('@/views/person/start/faultReport.vue'),
        meta: { title: '生成故障报告' }
      },
      {
        code: 'Org',
        path: '/org',
        component: () => import('@/views/person/pending/index.vue'),
        meta: { title: '待办事项' }
      },
      {
        code: 'Log',
        path: '/log',
        component: () => import('@/views/form/riskForm.vue'),
        meta: { title: '故障工单' }
      }
    ]
  },
  {
    path: '/system',
    code: 'System',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '系统管理', icon: 'icon-shouye-shouye' },
    children: [
      {
        code: 'Model',
        path: '/model',
        component: () => import('@/views/mainten/maintenPlan.vue'),
        meta: { title: '检修计划' }
      },
      {
        code: 'Robot',
        path: '/robot',
        component: () => import('@/views/safety/yearPlan.vue'),
        meta: { title: '年度检查计划' }
      }
    ]
  }
];
