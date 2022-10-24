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
    redirect: '/static',
    // children: []
  }
];

export const asyncRoutes = [
  {
    path: '/static',
    code: 'Static',
    component: () => import('@/views/static/index.vue'),
    meta: { title: '统计分析', icon: 'icon-shouye-shouye' },
  },
  {
    path: '/robotInfo',
    code: 'RobotInfo',
    component: () => import('@/views/robot/index.vue'),
    meta: { title: '机器人信息', icon: 'icon-shouye-shouye' },
  },
  {
    path: '/station',
    code: 'Station',
    component: () => import('@/views/station/index.vue'),
    meta: { title: '场站配置', icon: 'icon-shouye-shouye' },
  },
];


