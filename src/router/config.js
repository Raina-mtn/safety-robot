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
    component: () => import('@/views/default/index.vue'),
    meta: { title: '实时监控', icon: 'icon-shouye-shouye' }
  },
  {
    path: '/task',
    code: 'Task',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '任务中心', icon: 'icon-shouye-shouye' },
    children: [
      {
        code: 'Manager',
        path: '/manager',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '任务管理' }
      },
      {
        code: 'Audit',
        name: 'Audit',
        path: '/audit',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '结果审核' },
        props(route) {
          const { id = '' } = route.params;
          return {
            id: id === ':id' ? ' ' : id
          };
        }
      },
      {
        code: 'Import',
        path: '/import',
        component: () => import('@/views/default/index.vue'),
        hidden: true,
        meta: { activeMenu: '/manager' }
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
        component: () => import('@/views/default/index.vue'),
        meta: { title: '汇总统计' }
      },
      {
        code: 'History',
        path: '/history',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '历史回看' }
      }
    ]
  },
  {
    path: '/indicator',
    code: 'Indicator',
    component: () => import('@/views/default/index.vue'),
    meta: { title: '指标管理', icon: 'icon-shouye-shouye' }
  },
  {
    path: '/permission',
    code: 'Permission',
    component: () => import('@/components/PageLayout.vue'),
    meta: { title: '权限管理', icon: 'icon-shouye-shouye' },
    children: [
      {
        code: 'Role',
        path: '/role',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '角色管理' }
      },
      {
        code: 'User',
        path: '/user',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '用户管理' }
      },
      {
        code: 'Org',
        path: '/org',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '组织管理' }
      },
      {
        code: 'Log',
        path: '/log',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '日志管理' }
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
        component: () => import('@/views/default/index.vue'),
        meta: { title: '型号管理' }
      },
      {
        code: 'Robot',
        path: '/robot',
        component: () => import('@/views/default/index.vue'),
        meta: { title: '机器人管理' }
      }
    ]
  }
];
